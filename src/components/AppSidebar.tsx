
import { useState } from "react";
import { 
  LayoutDashboard, 
  Bot, 
  Phone, 
  FileText,
  Key,
  Settings
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

const menuItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    id: "overview",
  },
  {
    title: "Create Assistant",
    icon: Bot,
    id: "create-assistant",
  },
  {
    title: "Phone Numbers",
    icon: Phone,
    id: "phone-numbers",
  },
  {
    title: "Files",
    icon: FileText,
    id: "files",
  },
  {
    title: "External API Keys",
    icon: Key,
    id: "api-keys",
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
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground mb-3">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
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
