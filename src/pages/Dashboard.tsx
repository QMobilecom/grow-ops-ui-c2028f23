
import { useState } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNavbar } from "@/components/TopNavbar";
import { OverviewSection } from "@/components/dashboard/OverviewSection";
import { CreateAssistantSection } from "@/components/dashboard/CreateAssistantSection";
import { PhoneNumbersSection } from "@/components/dashboard/PhoneNumbersSection";
import { FilesSection } from "@/components/dashboard/FilesSection";
import { ApiKeysSection } from "@/components/dashboard/ApiKeysSection";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "create-assistant":
        return <CreateAssistantSection />;
      case "phone-numbers":
        return <PhoneNumbersSection />;
      case "files":
        return <FilesSection />;
      case "api-keys":
        return <ApiKeysSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <AppSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <SidebarInset className="flex-1">
          <TopNavbar activeSection={activeSection} />
          <main className="flex-1 p-6">
            {renderActiveSection()}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
