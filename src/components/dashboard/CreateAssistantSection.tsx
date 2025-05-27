import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Bot, Plus, Heart, User, Calendar, MessageSquare, Star, TrendingUp, Award, Lightbulb } from "lucide-react";
import { AssistantConfigForm } from "./AssistantConfigForm";

interface Assistant {
  id: string;
  name: string;
  template: string;
  status: string;
}

const templates = [
  {
    id: "blank",
    title: "Blank Template",
    description: "This blank slate template with minimal configurations. It's a starting point for creating your custom assistant.",
    icon: Plus,
    category: "basic"
  },
  {
    id: "sales",
    title: "SalesAI",
    description: "A comprehensive template for resolving product issues, answering questions, and ensuring satisfying customer experiences with technical knowledge and empathy.",
    icon: Heart,
    category: "quickstart"
  },
  {
    id: "support",
    title: "Customer Support",
    description: "A consultative template designed to identify qualified prospects, understand business challenges, and connect them with appropriate sales representatives.",
    icon: User,
    category: "quickstart"
  },
  {
    id: "scheduler",
    title: "Appointment Scheduler",
    description: "A specialized template for efficiently booking, confirming, rescheduling, or canceling appointments while providing clear service information.",
    icon: Calendar,
    category: "quickstart"
  },
  {
    id: "feedback",
    title: "Feedback Gatherer",
    description: "A methodical template for gathering accurate and complete information from customers while ensuring data quality and regulatory compliance.",
    icon: MessageSquare,
    category: "quickstart"
  },
  {
    id: "forwarder",
    title: "Forwarder Specialist",
    description: "A specialized template for call forwarding and routing services with advanced telephony management capabilities.",
    icon: Star,
    category: "quickstart"
  }
];

export function CreateAssistantSection() {
  const [assistants, setAssistants] = useState<Assistant[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [assistantName, setAssistantName] = useState("New Assistant");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [editingAssistant, setEditingAssistant] = useState<Assistant | null>(null);

  const handleCreateAssistant = () => {
    if (selectedTemplate && assistantName) {
      const template = templates.find(t => t.id === selectedTemplate);
      const newAssistant: Assistant = {
        id: Date.now().toString(),
        name: assistantName,
        template: template?.title || "Custom",
        status: "Draft"
      };
      setAssistants([...assistants, newAssistant]);
      setIsCreateDialogOpen(false);
      setAssistantName("New Assistant");
      setSelectedTemplate(null);
    }
  };

  const handleEditAssistant = (assistant: Assistant) => {
    setEditingAssistant(assistant);
  };

  const handleBackFromEdit = () => {
    setEditingAssistant(null);
  };

  // If editing an assistant, show the config form
  if (editingAssistant) {
    return <AssistantConfigForm assistant={editingAssistant} onBack={handleBackFromEdit} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Assistants</h2>
          <p className="text-muted-foreground">Manage your AI voice assistants</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Assistant
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gray-900 text-white border-gray-700">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-white">
                <Bot className="h-5 w-5" />
                Create Assistant
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                Choose a template to get you started, or you can create your own template and use it to create a new assistant.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="assistant-name" className="text-white">
                  Assistant Name <span className="text-teal-400 text-sm">(This can be adjusted at any time after creation)</span>
                </Label>
                <Input 
                  id="assistant-name"
                  value={assistantName}
                  onChange={(e) => setAssistantName(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Choose a template</h3>
                <p className="text-gray-400 text-sm">
                  Here's a few templates to get you started, or you can create your own template and use it to create a new assistant.
                </p>
                
                {/* Blank Template */}
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedTemplate === "blank" 
                      ? "border-teal-500 bg-gray-800" 
                      : "border-gray-600 bg-gray-800"
                  }`}
                  onClick={() => setSelectedTemplate("blank")}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center mt-1">
                      <Plus className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">Blank Template</h4>
                      <p className="text-sm text-gray-400 mt-1">
                        This blank slate template with minimal configurations. It's a starting point for creating your custom assistant.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quickstart Templates */}
                <div className="space-y-3">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    QUICKSTART
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {templates.slice(1).map((template) => (
                      <div
                        key={template.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          selectedTemplate === template.id
                            ? "border-teal-500 bg-gray-800"
                            : "border-gray-600 bg-gray-800 hover:border-gray-500"
                        }`}
                        onClick={() => setSelectedTemplate(template.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center flex-shrink-0">
                            <template.icon className="h-4 w-4 text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-white">{template.title}</h4>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-3">
                              {template.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-700">
                <Button 
                  variant="outline" 
                  onClick={() => setIsCreateDialogOpen(false)}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Close
                </Button>
                <Button 
                  onClick={handleCreateAssistant}
                  disabled={!selectedTemplate}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Create Assistant
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Assistants List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            Your Assistants
          </CardTitle>
          <CardDescription>
            Manage and configure your AI voice assistants
          </CardDescription>
        </CardHeader>
        <CardContent>
          {assistants.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No assistants created yet</p>
              <p className="text-sm">Click "Create Assistant" to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {assistants.map((assistant) => (
                <div key={assistant.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Bot className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{assistant.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Template: {assistant.template} • Status: {assistant.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleEditAssistant(assistant)}
                    >
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Test
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Metrics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">First Call Resolution</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lead Quality Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.4/10</div>
            <p className="text-xs text-muted-foreground">+0.3 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Assistants</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assistants.length}</div>
            <p className="text-xs text-muted-foreground">Total created</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Suggestions</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">AI improvements</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
