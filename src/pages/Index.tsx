
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNavbar } from "@/components/TopNavbar";
import { OverviewSection } from "@/components/dashboard/OverviewSection";
import { AnalyticsSection } from "@/components/dashboard/AnalyticsSection";
import { FinanceSection } from "@/components/dashboard/FinanceSection";
import { TeamSection } from "@/components/dashboard/TeamSection";
import { ProjectsSection } from "@/components/dashboard/ProjectsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "analytics":
        return <AnalyticsSection />;
      case "finance":
        return <FinanceSection />;
      case "team":
        return <TeamSection />;
      case "projects":
        return <ProjectsSection />;
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
        <div className="flex-1 flex flex-col">
          <TopNavbar activeSection={activeSection} />
          <main className="flex-1 p-6 overflow-auto">
            {renderActiveSection()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
