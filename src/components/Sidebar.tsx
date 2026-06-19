"use client";
import { Plug, Server, Box, Terminal, Settings } from "lucide-react";

export function Sidebar() {
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
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">Connected Servers</h2>
          <button className="text-primary hover:text-primary/80 transition-colors">
            <Plug size={16} />
          </button>
        </div>

        {/* Mock Server Item */}
        <div className="glass-panel-interactive p-3 flex items-center gap-3 cursor-pointer border-primary/30 bg-primary/5">
          <div className="relative">
            <Server size={18} className="text-primary" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#050505]"></div>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">github-mcp-server</p>
            <p className="text-xs text-foreground/50 truncate">stdio</p>
          </div>
        </div>

        <div className="glass-panel-interactive p-3 flex items-center gap-3 cursor-pointer opacity-70">
          <div className="relative">
            <Server size={18} />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-gray-500 rounded-full border-2 border-[#050505]"></div>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">postgres-mcp</p>
            <p className="text-xs text-foreground/50 truncate">Disconnected</p>
          </div>
        </div>
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
