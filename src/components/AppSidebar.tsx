
import { useState } from "react";
import { 
  LayoutDashboard, 
  Bot, 
  Phone, 
  FileText,
  Settings,
  PhoneCall,
  CreditCard,
  BarChart3,
  Shield,
  Activity,
  TrendingUp,
  MessageSquare,
  Eye,
  Users,
  GraduationCap,
  Database,
  Brain
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuGroups = [
  {
    label: "Dashboard",
    items: [
      {
        title: "Overview",
        icon: LayoutDashboard,
        id: "overview",
      },
    ]
  },
  {
    label: "Assistant Management",
    items: [
      {
        title: "Create Assistant",
        icon: Bot,
        id: "create-assistant",
      },
      {
        title: "Assistant Health",
        icon: MessageSquare,
        id: "system-prompts",
      },
      {
        title: "Live Assistant Trainer",
        icon: GraduationCap,
        id: "live-assistant-trainer",
      },
    ]
  },
  {
    label: "Call Management",
    items: [
      {
        title: "Phone Numbers",
        icon: Phone,
        id: "phone-numbers",
      },
      {
        title: "Call Logs",
        icon: PhoneCall,
        id: "call-logs",
      },
      {
        title: "Live Monitoring",
        icon: Eye,
        id: "live-monitoring",
      },
    ]
  },
  {
    label: "Lead Operations",
    items: [
      {
        title: "Lead Flow",
        icon: TrendingUp,
        id: "lead-flow",
      },
      {
        title: "Lead Handling",
        icon: Users,
        id: "lead-handling",
      },
      {
        title: "Lead Generation AI",
        icon: Brain,
        id: "lead-generation-ai",
      },
      {
        title: "CRM Integration",
        icon: Database,
        id: "crm-integration",
      },
    ]
  },
  {
    label: "Analytics & Monitoring",
    items: [
      {
        title: "Analytics",
        icon: BarChart3,
        id: "analytics",
      },
      {
        title: "System Monitoring",
        icon: Activity,
        id: "system-monitoring",
      },
      {
        title: "Compliance",
        icon: Shield,
        id: "compliance",
      },
    ]
  },
  {
    label: "Settings",
    items: [
      {
        title: "Files",
        icon: FileText,
        id: "files",
      },
      {
        title: "Billing",
        icon: CreditCard,
        id: "billing",
      },
    ]
  },
];

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  return (
    <Sidebar className="border-r bg-gradient-to-b from-slate-50 to-slate-100">
      <SidebarHeader className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <div>
            <h2 className="font-semibold text-lg">AI Voice Agents</h2>
            <p className="text-xs text-muted-foreground">Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-2">
        {menuGroups.map((group) => (
          <SidebarGroup key={group.label} className="mb-2">
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground mb-2 px-2">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton 
                      asChild
                      className={`w-full justify-start rounded-lg transition-all hover:bg-white hover:shadow-sm ${
                        activeSection === item.id 
                          ? 'bg-white shadow-sm border border-slate-200 text-blue-600' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <button onClick={() => onSectionChange(item.id)}>
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium">{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-blue-100 text-blue-600">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
          <Settings className="h-4 w-4 text-slate-400" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
