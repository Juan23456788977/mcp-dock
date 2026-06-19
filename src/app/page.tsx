import { Sidebar } from "@/components/Sidebar";
import { Inspector } from "@/components/Inspector";
import { AgentChat } from "@/components/AgentChat";

export default function Home() {
  return (
    <div className="flex h-screen w-full overflow-hidden p-4 gap-4">
      <Sidebar />
      <div className="flex flex-1 gap-4 overflow-hidden">
        <Inspector />
        <AgentChat />
      </div>
    </div>
  );
}
