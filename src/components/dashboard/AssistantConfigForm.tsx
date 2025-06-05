
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Bot, Settings, Mic, FileText, BarChart3, Zap, Wrench, Plus, Calendar, Phone, MessageSquare, Code } from "lucide-react";

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

const availableTools = [
  {
    id: "calendar",
    name: "Google Calendar Check",
    description: "Check availability on Google Calendar",
    icon: Calendar,
    enabled: false
  },
  {
    id: "transfer",
    name: "Transfer Call",
    description: "Transfer calls to other agents",
    icon: Phone,
    enabled: false
  },
  {
    id: "sms",
    name: "Send SMS",
    description: "Send text messages to customers",
    icon: MessageSquare,
    enabled: false
  },
  {
    id: "api",
    name: "API Request",
    description: "Make requests to external APIs",
    icon: Code,
    enabled: false
  }
];

export function AssistantConfigForm({ assistant, onBack }: AssistantConfigFormProps) {
  const [assistantName, setAssistantName] = useState(assistant.name);
  const [tools, setTools] = useState(availableTools);

  const toggleTool = (toolId: string) => {
    setTools(tools.map(tool => 
      tool.id === toolId ? { ...tool, enabled: !tool.enabled } : tool
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Assistants
        </Button>
        <div>
          <h2 className="text-2xl font-bold">Configure Assistant</h2>
          <p className="text-muted-foreground">Customize your AI assistant settings</p>
        </div>
      </div>

      <Tabs defaultValue="model" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="model" className="flex items-center gap-2">
            <Bot className="h-4 w-4" />
            Model
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
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            Tools
          </TabsTrigger>
        </TabsList>

        <TabsContent value="model" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Model Configuration</CardTitle>
              <CardDescription>Configure the behavior of the assistant</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Provider</Label>
                  <Select defaultValue="openai">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="openai">OpenAI</SelectItem>
                      <SelectItem value="anthropic">Anthropic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Model</Label>
                  <Select defaultValue="gpt-4">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-4">GPT-4o Mini Cluster</SelectItem>
                      <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>First Message</Label>
                <Input placeholder="Hi, this is Rachel from Nogoody Payment Services—quick one, is now a good time?" />
              </div>
              
              <div className="space-y-2">
                <Label>System Prompt</Label>
                <Textarea 
                  rows={8} 
                  placeholder="Enter your system prompt here..."
                  className="font-mono text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voice" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Voice Configuration</CardTitle>
              <CardDescription>Configure voice settings for your assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Voice configuration options will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transcriber" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Transcriber Settings</CardTitle>
              <CardDescription>Configure speech-to-text settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Transcriber settings will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analysis Configuration</CardTitle>
              <CardDescription>Configure call analysis and monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Analysis configuration will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>Advanced configuration options</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Advanced settings will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Tools Configuration
              </CardTitle>
              <CardDescription>
                Configure tools that your assistant can use during calls. Tools enable your assistant to perform actions like checking calendars, transferring calls, or making API requests.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Available Tools</h4>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Custom Tool
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {tools.map((tool) => (
                    <div key={tool.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          tool.enabled ? "bg-teal-100" : "bg-gray-100"
                        }`}>
                          <tool.icon className={`h-4 w-4 ${
                            tool.enabled ? "text-teal-600" : "text-gray-400"
                          }`} />
                        </div>
                        <div>
                          <h4 className="font-medium">{tool.name}</h4>
                          <p className="text-sm text-muted-foreground">{tool.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant={tool.enabled ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleTool(tool.id)}
                          className={tool.enabled ? "bg-teal-600 hover:bg-teal-700" : ""}
                        >
                          {tool.enabled ? "Enabled" : "Enable"}
                        </Button>
                        {tool.enabled && (
                          <Button variant="outline" size="sm">
                            Configure
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Tool Integration</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Tools are integrated into your assistant's conversation flow. When enabled, your assistant will have access to these capabilities during calls and can use them based on the conversation context.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onBack}>
          Cancel
        </Button>
        <Button className="bg-teal-600 hover:bg-teal-700">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
