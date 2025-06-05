
import { useState } from "react";
import { ArrowLeft, Bot, Save, Play, Trash2, Plus, Settings, Mic, FileText, BarChart3, Wrench } from "lucide-react";
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
  assigned: boolean;
}

const mockTools: Tool[] = [
  {
    id: "1",
    name: "Schedule Appointment",
    type: "Google Calendar",
    description: "Books appointments in Google Calendar",
    category: "Predefined Functions",
    assigned: true
  },
  {
    id: "2",
    name: "Send Follow-up SMS",
    type: "Send Text",
    description: "Sends automated follow-up text messages",
    category: "Custom Functions",
    assigned: false
  },
  {
    id: "3",
    name: "Lead Qualification",
    type: "Function",
    description: "Qualifies leads based on predefined criteria",
    category: "Predefined Functions",
    assigned: true
  },
  {
    id: "4",
    name: "CRM Sync",
    type: "API Request",
    description: "Syncs data with CRM system",
    category: "Integrations",
    assigned: false
  }
];

export function AssistantConfigForm({ assistant, onBack }: AssistantConfigFormProps) {
  const [activeTab, setActiveTab] = useState("general");
  const [assistantName, setAssistantName] = useState(assistant.name);
  const [tools, setTools] = useState<Tool[]>(mockTools);
  const [isCreateToolOpen, setIsCreateToolOpen] = useState(false);

  const toggleToolAssignment = (toolId: string) => {
    setTools(tools.map(tool => 
      tool.id === toolId 
        ? { ...tool, assigned: !tool.assigned }
        : tool
    ));
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
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Tool
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Tool to Assistant</DialogTitle>
                        <DialogDescription>
                          Select tools to add to this assistant's capabilities
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-3">
                          {availableTools.map((tool) => (
                            <div key={tool.id} className="flex items-center justify-between p-3 border rounded-lg">
                              <div className="flex-1">
                                <h4 className="font-medium">{tool.name}</h4>
                                <p className="text-sm text-muted-foreground">{tool.description}</p>
                                <Badge variant="secondary" className="mt-1 text-xs">
                                  {tool.type}
                                </Badge>
                              </div>
                              <Button 
                                size="sm" 
                                onClick={() => {
                                  toggleToolAssignment(tool.id);
                                  setIsCreateToolOpen(false);
                                }}
                              >
                                Add
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Assigned Tools ({assignedTools.length})</h4>
                    {assignedTools.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Wrench className="h-8 w-8 mx-auto mb-2 opacity-50" />
                        <p>No tools assigned yet</p>
                        <p className="text-sm">Add tools to enhance your assistant's capabilities</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {assignedTools.map((tool) => (
                          <div key={tool.id} className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-medium">{tool.name}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {tool.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{tool.description}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Category: {tool.category}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                Configure
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => toggleToolAssignment(tool.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
