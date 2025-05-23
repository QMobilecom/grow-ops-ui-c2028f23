
import { Bell, Search, Menu } from "lucide-react";
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
      analytics: "Analytics & Insights",
      finance: "Financial Dashboard",
      team: "Team Management",
      projects: "Project Portfolio"
    };
    return titles[section as keyof typeof titles] || "Dashboard";
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
            Monitor and manage your startup operations
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
