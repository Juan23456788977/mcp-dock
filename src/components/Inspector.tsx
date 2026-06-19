"use client";
import { Wrench, Database, MessageSquareText, Play, Code2 } from "lucide-react";
import { useState } from "react";
import { useMCPStore } from "@/store/useMCPStore";

export function Inspector() {
  const [activeTab, setActiveTab] = useState("tools");
  const { servers, activeServerId } = useMCPStore();

  const activeServer = servers.find(s => s.id === activeServerId);

  return (
    <main className="glass-panel flex-1 flex flex-col relative overflow-hidden">
      {/* Header Tabs */}
      <header className="border-b border-white/10 p-4 flex gap-6 bg-white/[0.01]">
        <button 
          onClick={() => setActiveTab("tools")}
          className={\`flex items-center gap-2 font-medium transition-colors \${activeTab === "tools" ? "text-primary" : "text-foreground/50 hover:text-foreground/80"}\`}
        >
          <Wrench size={18} /> Tools
        </button>
        <button 
          onClick={() => setActiveTab("resources")}
          className={\`flex items-center gap-2 font-medium transition-colors \${activeTab === "resources" ? "text-primary" : "text-foreground/50 hover:text-foreground/80"}\`}
        >
          <Database size={18} /> Resources
        </button>
        <button 
          onClick={() => setActiveTab("prompts")}
          className={\`flex items-center gap-2 font-medium transition-colors \${activeTab === "prompts" ? "text-primary" : "text-foreground/50 hover:text-foreground/80"}\`}
        >
          <MessageSquareText size={18} /> Prompts
        </button>
      </header>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        
        {!activeServer ? (
          <div className="flex-1 flex items-center justify-center text-foreground/40 text-sm">
            Selecciona un servidor en el sidebar para inspeccionar.
          </div>
        ) : activeTab === "tools" ? (
          <>
            {activeServer.tools.length === 0 ? (
              <div className="text-sm text-foreground/50">Cargando herramientas o el servidor no expone ninguna...</div>
            ) : (
              activeServer.tools.map((tool, idx) => (
                <div key={idx} className="glass-panel-interactive p-4 border-l-4 border-l-primary flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        <Code2 size={18} className="text-primary"/>
                        {tool.name}
                      </h3>
                      <p className="text-sm text-foreground/70 mt-1">{tool.description}</p>
                    </div>
                    <button className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                      <Play size={14} /> Run Tool
                    </button>
                  </div>
                  
                  <div className="bg-[#0a0a0a] rounded-md p-3 border border-white/5 font-mono text-xs overflow-x-auto text-green-400">
                    <pre>
                      {JSON.stringify(tool.inputSchema, null, 2)}
                    </pre>
                  </div>
                </div>
              ))
            )}
          </>
        ) : (
          <div className="text-sm text-foreground/50">
            Vista para {activeTab} aún no implementada en la demo.
          </div>
        )}

      </div>
    </main>
  );
}
