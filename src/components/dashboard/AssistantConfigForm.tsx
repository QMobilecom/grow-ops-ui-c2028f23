
import { useState } from "react";
import { ArrowLeft, Bot, Save, Play, Trash2, Plus, Settings, Mic, FileText, BarChart3, Wrench, Search, Edit, Calendar, Phone, MessageSquare, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Assistant {
  id: string;
  name: string;
  template: string;
  status: string;
}

interface AssistantConfigFormProps {
  assistant: Assistant;
  onBack: () => void;
}

interface Tool {
  id: string;
  name: string;
  type: string;
  description: string;
  category: string;
  status: string;
  assigned?: boolean;
}

const mockTools: Tool[] = [
  {
    id: "1",
    name: "google_calendar_check_availability_tool",
    type: "Google Calendar",
    description: "Automatically checks the specified Google Calendar for availability",
    category: "Calendar Integration",
    status: "Active",
    assigned: true
  },
  {
    id: "2",
    name: "transfer_call_tool",
    type: "Transfer Call",
    description: "Transfers calls to specified phone numbers or departments",
    category: "Call Management",
    status: "Active",
    assigned: false
  },
  {
    id: "3",
    name: "CheckCalendarAvailability",
    type: "Function",
    description: "Automatically checks the specified calendar for availability",
    category: "Predefined Functions",
    status: "Active",
    assigned: true
  },
  {
    id: "4",
    name: "CustomerStatus",
    type: "Query",
    description: "The CustomerStatus tool allows you to check customer status",
    category: "Customer Management",
    status: "Draft",
    assigned: false
  },
  {
    id: "5",
    name: "CustomerNotes",
    type: "API Request",
    description: "After each outbound call, take notes about customer",
    category: "Customer Management",
    status: "Active",
    assigned: false
  }
];

const toolTypes = [
  { value: "function", label: "Function", icon: Settings },
  { value: "google-calendar", label: "Google Calendar", icon: Calendar },
  { value: "transfer-call", label: "Transfer Call", icon: Phone },
  { value: "send-text", label: "Send Text", icon: MessageSquare },
  { value: "query", label: "Query", icon: Database },
  { value: "api-request", label: "API Request", icon: FileText }
];

export function AssistantConfigForm({ assistant, onBack }: AssistantConfigFormProps) {
  const [activeTab, setActiveTab] = useState("general");
  const [assistantName, setAssistantName] = useState(assistant.name);
  const [tools, setTools] = useState<Tool[]>(mockTools);
  const [isCreateToolOpen, setIsCreateToolOpen] = useState(false);
  const [toolName, setToolName] = useState("");
  const [toolDescription, setToolDescription] = useState("");
  const [toolType, setToolType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateTool = () => {
    if (toolName && toolDescription && toolType) {
      const newTool: Tool = {
        id: Date.now().toString(),
        name: toolName,
        type: toolTypes.find(t => t.value === toolType)?.label || toolType,
        description: toolDescription,
        category: "Custom Functions",
        status: "Draft",
        assigned: false
      };
      setTools([...tools, newTool]);
      setIsCreateToolOpen(false);
      setToolName("");
      setToolDescription("");
      setToolType("");
    }
  };

  const toggleToolAssignment = (toolId: string) => {
    setTools(tools.map(tool => 
      tool.id === toolId 
        ? { ...tool, assigned: !tool.assigned }
        : tool
    ));
  };

  const getToolIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "google calendar":
        return Calendar;
      case "transfer call":
        return Phone;
      case "send text":
        return MessageSquare;
      case "api request":
        return FileText;
      case "query":
        return Database;
      default:
        return Settings;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const assignedTools = tools.filter(tool => tool.assigned);
  const availableTools = tools.filter(tool => !tool.assigned);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Assistants
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Bot className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{assistantName}</h2>
            <p className="text-muted-foreground">Configure your AI assistant</p>
          </div>
        </div>
        <div className="flex gap-2 ml-auto">
          <Button variant="outline">
            <Play className="h-4 w-4 mr-2" />
            Test
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b px-6 pt-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="general" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  General
                </TabsTrigger>
                <TabsTrigger value="tools" className="flex items-center gap-2">
                  <Wrench className="h-4 w-4" />
                  Tools
                </TabsTrigger>
                <TabsTrigger value="voice" className="flex items-center gap-2">
                  <Mic className="h-4 w-4" />
                  Voice
                </TabsTrigger>
                <TabsTrigger value="transcriber" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Transcriber
                </TabsTrigger>
                <TabsTrigger value="analysis" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Analysis
                </TabsTrigger>
                <TabsTrigger value="advanced" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Advanced
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6">
              <TabsContent value="general" className="space-y-6 mt-0">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Assistant Name</Label>
                    <Input 
                      id="name"
                      value={assistantName}
                      onChange={(e) => setAssistantName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="first-message">First Message</Label>
                    <Textarea 
                      id="first-message"
                      placeholder="Hello! How can I help you today?"
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="system-prompt">System Prompt</Label>
                    <Textarea 
                      id="system-prompt"
                      placeholder="You are a helpful AI assistant..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="model">Model</Label>
                      <Select defaultValue="gpt-4">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gpt-4">GPT-4</SelectItem>
                          <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                          <SelectItem value="claude-3">Claude 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="temperature">Temperature</Label>
                      <Input 
                        id="temperature"
                        type="number"
                        min="0"
                        max="2"
                        step="0.1"
                        defaultValue="0.7"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tools" className="space-y-6 mt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Tools</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage tools and functions available to this assistant
                    </p>
                  </div>
                  <Dialog open={isCreateToolOpen} onOpenChange={setIsCreateToolOpen}>
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
                          Create a new tool to enhance your AI assistant's capabilities
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="tool-name">Tool Name</Label>
                          <Input 
                            id="tool-name"
                            value={toolName}
                            onChange={(e) => setToolName(e.target.value)}
                            placeholder="e.g., google_calendar_check_availability_tool"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="tool-type">Tool Type</Label>
                          <Select value={toolType} onValueChange={setToolType}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a tool type" />
                            </SelectTrigger>
                            <SelectContent>
                              {toolTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  <div className="flex items-center gap-2">
                                    <type.icon className="h-4 w-4" />
                                    {type.label}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="tool-description">Description</Label>
                          <Textarea 
                            id="tool-description"
                            value={toolDescription}
                            onChange={(e) => setToolDescription(e.target.value)}
                            placeholder="Describe the tool in a few sentences"
                            className="min-h-[100px]"
                          />
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                          <Button 
                            variant="outline" 
                            onClick={() => setIsCreateToolOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button 
                            onClick={handleCreateTool}
                            disabled={!toolName || !toolDescription || !toolType}
                            className="bg-teal-600 hover:bg-teal-700"
                          >
                            Create Tool
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <Separator />

                {/* Search and Tool Library */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Wrench className="h-5 w-5" />
                          Tool Library
                        </CardTitle>
                        <CardDescription>
                          Manage and configure your tools ({tools.length} total)
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                          <Input
                            placeholder="Search tools..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-9 w-64"
                          />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {filteredTools.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Wrench className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No tools found</p>
                        <p className="text-sm">Try adjusting your search or create a new tool</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {filteredTools.map((tool) => {
                          const IconComponent = getToolIcon(tool.type);
                          return (
                            <div key={tool.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-4 flex-1">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                  <IconComponent className="h-5 w-5 text-blue-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-medium truncate">{tool.name}</h4>
                                    <Badge variant="outline" className="text-xs">
                                      {tool.type}
                                    </Badge>
                                    <Badge className={`text-xs ${getStatusColor(tool.status)}`}>
                                      {tool.status}
                                    </Badge>
                                    {tool.assigned && (
                                      <Badge className="bg-teal-100 text-teal-800 text-xs">
                                        Assigned
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground line-clamp-2">{tool.description}</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Category: {tool.category}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => toggleToolAssignment(tool.id)}
                                >
                                  {tool.assigned ? "Remove" : "Assign"}
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </Button>
                                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Tool Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Assigned Tools</CardTitle>
                      <Wrench className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{assignedTools.length}</div>
                      <p className="text-xs text-muted-foreground">Currently in use</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Available Tools</CardTitle>
                      <Settings className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{availableTools.length}</div>
                      <p className="text-xs text-muted-foreground">Ready to assign</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Tools</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{tools.length}</div>
                      <p className="text-xs text-muted-foreground">All tools</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="voice" className="space-y-6 mt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="voice-provider">Voice Provider</Label>
                      <Select defaultValue="elevenlabs">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="elevenlabs">ElevenLabs</SelectItem>
                          <SelectItem value="openai">OpenAI</SelectItem>
                          <SelectItem value="azure">Azure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="voice-id">Voice</Label>
                      <Select defaultValue="rachel">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rachel">Rachel</SelectItem>
                          <SelectItem value="josh">Josh</SelectItem>
                          <SelectItem value="aria">Aria</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="stability">Stability</Label>
                      <Input 
                        id="stability"
                        type="number"
                        min="0"
                        max="1"
                        step="0.1"
                        defaultValue="0.5"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="similarity">Similarity Boost</Label>
                      <Input 
                        id="similarity"
                        type="number"
                        min="0"
                        max="1"
                        step="0.1"
                        defaultValue="0.75"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="style">Style</Label>
                      <Input 
                        id="style"
                        type="number"
                        min="0"
                        max="1"
                        step="0.1"
                        defaultValue="0"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="transcriber" className="space-y-6 mt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="transcriber-provider">Transcriber Provider</Label>
                      <Select defaultValue="deepgram">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="deepgram">Deepgram</SelectItem>
                          <SelectItem value="whisper">Whisper</SelectItem>
                          <SelectItem value="google">Google</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Smart Format</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically format transcribed text
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Profanity Filter</Label>
                        <p className="text-sm text-muted-foreground">
                          Filter out inappropriate language
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analysis" className="space-y-6 mt-0">
                <div className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Call Summary</Label>
                        <p className="text-sm text-muted-foreground">
                          Generate automatic call summaries
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Sentiment Analysis</Label>
                        <p className="text-sm text-muted-foreground">
                          Analyze customer sentiment during calls
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Success Rate Tracking</Label>
                        <p className="text-sm text-muted-foreground">
                          Track conversation success metrics
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Custom Metrics</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable custom performance tracking
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="analysis-prompt">Analysis Prompt</Label>
                    <Textarea 
                      id="analysis-prompt"
                      placeholder="Analyze this conversation for key insights..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-6 mt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="max-duration">Max Call Duration (minutes)</Label>
                      <Input 
                        id="max-duration"
                        type="number"
                        min="1"
                        max="60"
                        defaultValue="30"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="silence-timeout">Silence Timeout (seconds)</Label>
                      <Input 
                        id="silence-timeout"
                        type="number"
                        min="1"
                        max="30"
                        defaultValue="10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="interruption-threshold">Interruption Sensitivity</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="response-delay">Response Delay (ms)</Label>
                      <Input 
                        id="response-delay"
                        type="number"
                        min="0"
                        max="2000"
                        step="100"
                        defaultValue="800"
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>End Call Phrase Detection</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically end calls when goodbye phrases are detected
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Background Noise Suppression</Label>
                        <p className="text-sm text-muted-foreground">
                          Reduce background noise during calls
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Debug Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable detailed logging for troubleshooting
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
