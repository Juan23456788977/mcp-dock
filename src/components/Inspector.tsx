"use client";
import { Wrench, Database, MessageSquareText, Play, Code2 } from "lucide-react";
import { useState } from "react";

export function Inspector() {
  const [activeTab, setActiveTab] = useState("tools");

  return (
    <main className="glass-panel flex-1 flex flex-col relative overflow-hidden">
      {/* Header Tabs */}
      <header className="border-b border-white/10 p-4 flex gap-6 bg-white/[0.01]">
        <button 
          onClick={() => setActiveTab("tools")}
          className={`flex items-center gap-2 font-medium transition-colors ${activeTab === "tools" ? "text-primary" : "text-foreground/50 hover:text-foreground/80"}`}
        >
          <Wrench size={18} /> Tools
        </button>
        <button 
          onClick={() => setActiveTab("resources")}
          className={`flex items-center gap-2 font-medium transition-colors ${activeTab === "resources" ? "text-primary" : "text-foreground/50 hover:text-foreground/80"}`}
        >
          <Database size={18} /> Resources
        </button>
        <button 
          onClick={() => setActiveTab("prompts")}
          className={`flex items-center gap-2 font-medium transition-colors ${activeTab === "prompts" ? "text-primary" : "text-foreground/50 hover:text-foreground/80"}`}
        >
          <MessageSquareText size={18} /> Prompts
        </button>
      </header>

      {/* Content Area (Mock Tools View) */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {/* Mock Tool Card */}
        <div className="glass-panel-interactive p-4 border-l-4 border-l-primary flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Code2 size={18} className="text-primary"/>
                search_repositories
              </h3>
              <p className="text-sm text-foreground/70 mt-1">Search for repositories on GitHub using a query.</p>
            </div>
            <button className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
              <Play size={14} /> Run Tool
            </button>
          </div>
          
          <div className="bg-[#0a0a0a] rounded-md p-3 border border-white/5 font-mono text-xs overflow-x-auto text-green-400">
            <pre>
{`{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The search query (e.g., 'user:Juan23456788977')"
    }
  },
  "required": ["query"]
}`}
            </pre>
          </div>
        </div>

        {/* Another Tool Card */}
        <div className="glass-panel-interactive p-4 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Code2 size={18} className="text-foreground/50"/>
                get_file_contents
              </h3>
              <p className="text-sm text-foreground/70 mt-1">Get the contents of a file in a repository.</p>
            </div>
            <button className="bg-white/5 text-foreground hover:bg-white/10 px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
              <Play size={14} /> Run Tool
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
