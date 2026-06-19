import { create } from 'zustand';

export interface Tool {
  name: string;
  description: string;
  inputSchema: any;
}

export interface MCPServer {
  id: string;
  name: string;
  status: 'connected' | 'disconnected' | 'connecting';
  tools: Tool[];
}

interface MCPState {
  servers: MCPServer[];
  activeServerId: string | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  connectServer: (id: string, name: string, command: string, args: string[]) => Promise<void>;
  fetchTools: (serverId: string) => Promise<void>;
  setActiveServer: (id: string) => void;
}

export const useMCPStore = create<MCPState>((set, get) => ({
  servers: [],
  activeServerId: null,
  isLoading: false,
  error: null,

  setActiveServer: (id) => set({ activeServerId: id }),

  connectServer: async (id, name, command, args) => {
    set({ isLoading: true, error: null });
    try {
      // Registrar servidor en estado connecting
      set((state) => ({
        servers: [...state.servers, { id, name, status: 'connecting', tools: [] }],
        activeServerId: id
      }));

      // Llamada HTTP al Proxy
      const res = await fetch('http://localhost:4000/api/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serverId: id, command, args })
      });

      if (!res.ok) throw new Error("Fallo al conectar con el servidor MCP");

      // Actualizar estado a conectado
      set((state) => ({
        servers: state.servers.map(s => s.id === id ? { ...s, status: 'connected' } : s),
        isLoading: false
      }));

      // Inmediatamente obtener sus herramientas
      await get().fetchTools(id);

    } catch (error: any) {
      set((state) => ({
        servers: state.servers.map(s => s.id === id ? { ...s, status: 'disconnected' } : s),
        error: error.message,
        isLoading: false
      }));
    }
  },

  fetchTools: async (serverId) => {
    try {
      const res = await fetch(`http://localhost:4000/api/tools/${serverId}`, {
        method: 'POST'
      });
      if (!res.ok) throw new Error("Fallo al obtener herramientas");
      
      const data = await res.json();
      const tools = data.tools || [];

      set((state) => ({
        servers: state.servers.map(s => s.id === serverId ? { ...s, tools } : s)
      }));
    } catch (error: any) {
      console.error(error);
    }
  }
}));
