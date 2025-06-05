
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wrench, Plus, Calendar, Phone, FileText, Search, MessageSquare, Code, Trash2, Edit } from "lucide-react";

interface Tool {
  id: string;
  name: string;
  description: string;
  type: string;
  icon: any;
}

const toolTypes = [
  {
    id: "function",
    name: "Function",
    icon: Code,
    description: "Custom function tool"
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    icon: Calendar,
    description: "Google Calendar integration"
  },
  {
    id: "transfer-call",
    name: "Transfer Call",
    icon: Phone,
    description: "Call transfer functionality"
  },
  {
    id: "send-text",
    name: "Send Text",
    icon: MessageSquare,
    description: "SMS sending capability"
  },
  {
    id: "query",
    name: "Query",
    icon: Search,
    description: "Database query tool"
  },
  {
    id: "api-request",
    name: "API Request",
    icon: Code,
    description: "External API integration"
  }
];

export function ToolsSection() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [toolName, setToolName] = useState("");
  const [toolDescription, setToolDescription] = useState("");
  const [selectedToolType, setSelectedToolType] = useState<string>("");

  const handleCreateTool = () => {
    if (!toolName || !toolDescription || !selectedToolType) {
      alert("Please fill in all fields");
      return;
    }

    const toolType = toolTypes.find(type => type.id === selectedToolType);
    const newTool: Tool = {
      id: Date.now().toString(),
      name: toolName,
      description: toolDescription,
      type: toolType?.name || "Custom",
      icon: toolType?.icon || Code
    };

    setTools([...tools, newTool]);
    setIsCreateDialogOpen(false);
    setToolName("");
    setToolDescription("");
    setSelectedToolType("");
  };

  const handleDeleteTool = (toolId: string) => {
    setTools(tools.filter(tool => tool.id !== toolId));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Tools</h2>
          <p className="text-muted-foreground">
            Tools enable voicebots to perform actions during calls. Add tools from the Tools Library to connect with Make.com or GHL workflows, or create custom tools with your backend.
          </p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Tool
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Create New Tool
              </DialogTitle>
              <DialogDescription>
                Create a custom tool or select from predefined options to enhance your assistant's capabilities.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="tool-name">Tool Name</Label>
                <Input 
                  id="tool-name"
                  value={toolName}
                  onChange={(e) => setToolName(e.target.value)}
                  placeholder="Enter tool name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tool-description">Description</Label>
                <Textarea 
                  id="tool-description"
                  value={toolDescription}
                  onChange={(e) => setToolDescription(e.target.value)}
                  placeholder="Describe the tool in a few sentences"
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">0/1000</p>
              </div>

              <div className="space-y-4">
                <Label>Select Tool Type</Label>
                <div className="grid grid-cols-2 gap-3">
                  {toolTypes.map((toolType) => (
                    <div
                      key={toolType.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedToolType === toolType.id
                          ? "border-teal-500 bg-teal-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedToolType(toolType.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded flex items-center justify-center ${
                          selectedToolType === toolType.id ? "bg-teal-500" : "bg-gray-100"
                        }`}>
                          <toolType.icon className={`h-4 w-4 ${
                            selectedToolType === toolType.id ? "text-white" : "text-gray-600"
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{toolType.name}</h4>
                          <p className="text-xs text-gray-500">{toolType.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => setIsCreateDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleCreateTool}
                  disabled={!toolName || !toolDescription || !selectedToolType}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Create Tool
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tools List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Your Tools
          </CardTitle>
          <CardDescription>
            Manage and configure your assistant tools
          </CardDescription>
        </CardHeader>
        <CardContent>
          {tools.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Wrench className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No tools created yet</p>
              <p className="text-sm">Click "Create Tool" to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {tools.map((tool) => (
                <div key={tool.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <tool.icon className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{tool.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Type: {tool.type} • {tool.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDeleteTool(tool.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tool Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Predefined Functions</CardTitle>
            <CardDescription>Pre-built functions for common use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              We've pre-built functions for common use cases. You can enable them and configure them below.
            </p>
            <Button variant="outline" className="w-full">
              View Functions
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Custom Functions</CardTitle>
            <CardDescription>Define your custom functions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Define your custom functions here to enhance your assistant's capabilities. You can use your own code or tools like Pipedream or Make for the setup.
            </p>
            <Button variant="outline" className="w-full">
              Add Function
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Integrations</CardTitle>
            <CardDescription>Connect with external services</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Connect your assistant with popular services and platforms to extend functionality.
            </p>
            <Button variant="outline" className="w-full">
              Browse Integrations
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
