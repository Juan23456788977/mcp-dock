import express from 'express';
import cors from 'cors';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({ origin: '*' })); // Permitir a la web (Vercel) hablar con localhost
app.use(express.json());

const PORT = process.env.PROXY_PORT || 4000;

// Almacén de clientes MCP activos
const mcpClients = new Map<string, Client>();

app.post('/api/connect', async (req, res) => {
  const { serverId, command, args, env } = req.body;

  if (!serverId || !command) {
    return res.status(400).json({ error: "Faltan parámetros 'serverId' y 'command'" });
  }

  try {
    const transport = new StdioClientTransport({
      command,
      args: args || [],
      env: { ...process.env, ...env },
    });

    const client = new Client(
      { name: "mcp-dock-client", version: "1.0.0" },
      { capabilities: { prompts: {}, resources: {}, tools: {} } }
    );

    await client.connect(transport);
    mcpClients.set(serverId, client);

    console.log(`[Proxy] Conectado al servidor MCP: ${serverId}`);
    res.json({ success: true, message: `Conectado a ${serverId}` });
  } catch (error: any) {
    console.error(`[Proxy] Error conectando a ${serverId}:`, error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/tools/:serverId', async (req, res) => {
  const client = mcpClients.get(req.params.serverId);
  if (!client) return res.status(404).json({ error: "Servidor no encontrado o desconectado" });

  try {
    const tools = await client.listTools();
    res.json(tools);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/tools/call/:serverId', async (req, res) => {
  const client = mcpClients.get(req.params.serverId);
  if (!client) return res.status(404).json({ error: "Servidor no encontrado o desconectado" });

  const { toolName, toolArguments } = req.body;
  try {
    const result = await client.callTool({ name: toolName, arguments: toolArguments });
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`[MCP-Dock Proxy] Servidor escuchando en http://localhost:${PORT}`);
});
