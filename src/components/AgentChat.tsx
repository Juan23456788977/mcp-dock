"use client";
import { Send, Bot, Sparkles, User } from "lucide-react";

export function AgentChat() {
  return (
    <aside className="w-96 h-full glass-panel flex flex-col relative">
      {/* Header */}
      <header className="p-4 border-b border-white/10 bg-primary/5 flex items-center gap-2">
        <Sparkles size={20} className="text-primary" />
        <h2 className="font-bold">Agentic Playground</h2>
      </header>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        
        {/* User Message */}
        <div className="flex gap-3 items-end justify-end">
          <div className="bg-primary/20 text-foreground px-4 py-2 rounded-2xl rounded-br-sm text-sm max-w-[80%] border border-primary/30 shadow-md">
            Can you check my public repositories?
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
            <User size={16} />
          </div>
        </div>

        {/* Tool Call Trace */}
        <div className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30 self-start mt-1">
            <WrenchIcon size={12} />
          </div>
          <div className="flex-1">
            <div className="text-xs text-foreground/50 mb-1 font-mono">Agent called tool:</div>
            <div className="bg-[#0a0a0a] rounded-lg p-3 border border-orange-500/20 font-mono text-xs overflow-x-auto text-orange-300/80 shadow-inner">
              <span className="text-orange-400 font-bold">search_repositories</span>
              {`({ "query": "user:Juan23456788977" })`}
            </div>
          </div>
        </div>

        {/* Agent Response */}
        <div className="flex gap-3 items-start">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
            <Bot size={18} className="text-white" />
          </div>
          <div className="glass-panel px-4 py-3 rounded-2xl rounded-tl-sm text-sm border-white/10 shadow-md">
            I found 7 repositories on your profile, including <strong>PasantConnect</strong> and <strong>Portafolio</strong>.
          </div>
        </div>

      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10 bg-white/[0.02]">
        <div className="relative flex items-center">
          <input 
            type="text" 
            placeholder="Ask the agent to use MCP tools..." 
            className="w-full bg-black/40 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors shadow-inner"
          />
          <button className="absolute right-2 p-2 bg-primary hover:bg-primary/80 text-white rounded-full transition-colors shadow-lg">
            <Send size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}

function WrenchIcon({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
