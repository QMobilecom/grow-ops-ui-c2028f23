
import { useState } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNavbar } from "@/components/TopNavbar";
import { OverviewSection } from "@/components/dashboard/OverviewSection";
import { CreateAssistantSection } from "@/components/dashboard/CreateAssistantSection";
import { ToolsSection } from "@/components/dashboard/ToolsSection";
import { VoiceAgentSection } from "@/components/dashboard/VoiceAgentSection";
import { PhoneNumbersSection } from "@/components/dashboard/PhoneNumbersSection";
import { CallLogsSection } from "@/components/dashboard/CallLogsSection";
import { FilesSection } from "@/components/dashboard/FilesSection";
import { BillingSection } from "@/components/dashboard/BillingSection";
import { AnalyticsSection } from "@/components/dashboard/AnalyticsSection";
import { ComplianceSection } from "@/components/dashboard/ComplianceSection";
import { SystemMonitoringSection } from "@/components/dashboard/SystemMonitoringSection";
import { LeadFlowSection } from "@/components/dashboard/LeadFlowSection";
import { LeadHandlingSection } from "@/components/dashboard/LeadHandlingSection";
import { LeadGenerationAISection } from "@/components/dashboard/LeadGenerationAISection";
import { SystemPromptsSection } from "@/components/dashboard/SystemPromptsSection";
import { LiveMonitoringSection } from "@/components/dashboard/LiveMonitoringSection";
import { LiveAssistantTrainerSection } from "@/components/dashboard/LiveAssistantTrainerSection";
import { CrmIntegrationSection } from "@/components/dashboard/CrmIntegrationSection";
import { ExternalApiKeysSection } from "@/components/dashboard/ExternalApiKeysSection";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "create-assistant":
        return <CreateAssistantSection />;
      case "tools":
        return <ToolsSection />;
      case "voice-agent":
        return <VoiceAgentSection />;
      case "phone-numbers":
        return <PhoneNumbersSection />;
      case "call-logs":
        return <CallLogsSection />;
      case "files":
        return <FilesSection />;
      case "external-api-keys":
        return <ExternalApiKeysSection />;
      case "billing":
        return <BillingSection />;
      case "analytics":
        return <AnalyticsSection />;
      case "compliance":
        return <ComplianceSection />;
      case "system-monitoring":
        return <SystemMonitoringSection />;
      case "lead-flow":
        return <LeadFlowSection />;
      case "lead-handling":
        return <LeadHandlingSection />;
      case "lead-generation-ai":
        return <LeadGenerationAISection />;
      case "system-prompts":
        return <SystemPromptsSection />;
      case "live-monitoring":
        return <LiveMonitoringSection />;
      case "live-assistant-trainer":
        return <LiveAssistantTrainerSection />;
      case "crm-integration":
        return <CrmIntegrationSection />;
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
