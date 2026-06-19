"use client";
import { Plug, Server, Box, Terminal, Settings, Loader2 } from "lucide-react";
import { useMCPStore } from "@/store/useMCPStore";

export function Sidebar() {
  const { servers, activeServerId, setActiveServer, connectServer, isLoading } = useMCPStore();

  const handleConnect = () => {
    // Para la demo, conectamos al servidor de GitHub
    connectServer(
      "github-mcp", 
      "github-mcp-server", 
      "npx", 
      ["-y", "@modelcontextprotocol/server-github"]
    );
  };

  return (
    <aside className="w-72 h-full flex flex-col gap-4">
      {/* Brand */}
      <div className="glass-panel p-4 flex items-center gap-3">
        <div className="bg-primary/20 p-2 rounded-lg text-primary">
          <Box size={24} />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-tight">MCP-Dock</h1>
          <p className="text-xs text-foreground/50">Testbench & Playground</p>
        </div>
      </div>

      {/* Servers List */}
      <div className="glass-panel flex-1 p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">Connected Servers</h2>
          <button 
            onClick={handleConnect}
            disabled={isLoading}
            className="text-primary hover:text-primary/80 transition-colors bg-primary/10 p-1.5 rounded-md"
            title="Connect local GitHub MCP"
          >
            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Plug size={16} />}
          </button>
        </div>

        {servers.length === 0 && (
          <div className="text-center text-xs text-foreground/40 mt-4">
            No servers connected.<br/>Click the plug icon to start.
          </div>
        )}

        {servers.map((server) => (
          <div 
            key={server.id}
            onClick={() => setActiveServer(server.id)}
            className={\`glass-panel-interactive p-3 flex items-center gap-3 cursor-pointer \${activeServerId === server.id ? 'border-primary/50 bg-primary/10' : 'opacity-80'}\`}
          >
            <div className="relative">
              <Server size={18} className={server.status === 'connected' ? 'text-primary' : 'text-foreground/50'} />
              <div className={\`absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-[#050505] \${server.status === 'connected' ? 'bg-green-500' : server.status === 'connecting' ? 'bg-yellow-500 animate-pulse' : 'bg-red-500'}\`}></div>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">{server.name}</p>
              <p className="text-xs text-foreground/50 truncate capitalize">{server.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="glass-panel p-2 flex justify-around">
        <button className="p-2 hover:bg-white/5 rounded-lg text-foreground/70 hover:text-foreground transition-colors">
          <Terminal size={20} />
        </button>
        <button className="p-2 hover:bg-white/5 rounded-lg text-foreground/70 hover:text-foreground transition-colors">
          <Settings size={20} />
        </button>
      </div>
    </aside>
  );
}
