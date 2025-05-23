
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface TopNavbarProps {
  activeSection: string;
}

export function TopNavbar({ activeSection }: TopNavbarProps) {
  const getSectionTitle = (section: string) => {
    const titles = {
      overview: "Dashboard Overview",
      "create-assistant": "Create AI Assistant",
      "phone-numbers": "Phone Numbers",
      "call-logs": "Call Logs",
      files: "Knowledge Base Files",
      "api-keys": "External API Keys",
      billing: "Billing & Cost Management"
    };
    return titles[section as keyof typeof titles] || "Dashboard";
  };

  const getSectionDescription = (section: string) => {
    const descriptions = {
      overview: "Monitor and analyze your AI voice agents performance with comprehensive analytics",
      "create-assistant": "Configure and deploy new AI voice assistants with custom prompts",
      "phone-numbers": "Manage phone numbers for your voice agents and track availability",
      "call-logs": "View detailed call logs, transcripts, and performance metrics",
      files: "Upload and manage knowledge base files for your AI agents",
      "api-keys": "Store and manage external API keys securely for integrations",
      billing: "Track costs, API usage, and manage your billing preferences"
    };
    return descriptions[section as keyof typeof descriptions] || "Manage your AI voice agents";
  };

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="lg:hidden" />
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            {getSectionTitle(activeSection)}
          </h1>
          <p className="text-sm text-muted-foreground">
            {getSectionDescription(activeSection)}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search..." 
            className="pl-10 w-64 bg-slate-50 border-slate-200"
          />
        </div>
        
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500">
            3
          </Badge>
        </Button>
      </div>
    </header>
  );
}
