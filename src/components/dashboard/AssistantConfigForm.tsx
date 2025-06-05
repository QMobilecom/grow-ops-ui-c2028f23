import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Bot, Settings, Mic, FileText, BarChart3, Zap, Wrench, Plus, Calendar, Phone, MessageSquare, Code, Volume2, Languages, Gauge, Shield } from "lucide-react";

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
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Voice Configuration
              </CardTitle>
              <CardDescription>Configure voice settings for your assistant</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Voice Provider</Label>
                  <Select defaultValue="openai">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="openai">OpenAI</SelectItem>
                      <SelectItem value="elevenlabs">ElevenLabs</SelectItem>
                      <SelectItem value="deepgram">Deepgram</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Voice Model</Label>
                  <Select defaultValue="alloy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alloy">Alloy</SelectItem>
                      <SelectItem value="echo">Echo</SelectItem>
                      <SelectItem value="fable">Fable</SelectItem>
                      <SelectItem value="onyx">Onyx</SelectItem>
                      <SelectItem value="nova">Nova</SelectItem>
                      <SelectItem value="shimmer">Shimmer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Speed</Label>
                  <Slider defaultValue={[1]} max={2} min={0.25} step={0.05} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0.25x</span>
                    <span>1x</span>
                    <span>2x</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Stability</Label>
                  <Slider defaultValue={[0.5]} max={1} min={0} step={0.1} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>More Variable</span>
                    <span>More Stable</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Similarity Boost</Label>
                  <Slider defaultValue={[0.8]} max={1} min={0} step={0.1} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Low</span>
                    <span>High</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="optimize-streaming" />
                <Label htmlFor="optimize-streaming">Optimize for streaming latency</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transcriber" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5" />
                Transcriber Settings
              </CardTitle>
              <CardDescription>Configure speech-to-text settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Provider</Label>
                  <Select defaultValue="deepgram">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deepgram">Deepgram</SelectItem>
                      <SelectItem value="openai">OpenAI Whisper</SelectItem>
                      <SelectItem value="assembly">AssemblyAI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Model</Label>
                  <Select defaultValue="nova-2">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nova-2">Nova-2</SelectItem>
                      <SelectItem value="enhanced">Enhanced</SelectItem>
                      <SelectItem value="base">Base</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="it">Italian</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="smart-format" defaultChecked />
                  <Label htmlFor="smart-format">Smart formatting</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="profanity-filter" />
                  <Label htmlFor="profanity-filter">Profanity filter</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="punctuation" defaultChecked />
                  <Label htmlFor="punctuation">Auto punctuation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="diarization" />
                  <Label htmlFor="diarization">Speaker diarization</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Keywords</Label>
                <Textarea 
                  placeholder="Enter keywords to improve recognition accuracy (comma-separated)"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="h-5 w-5" />
                Analysis Configuration
              </CardTitle>
              <CardDescription>Configure call analysis and monitoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="sentiment-analysis" defaultChecked />
                  <Label htmlFor="sentiment-analysis">Sentiment analysis</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="intent-detection" defaultChecked />
                  <Label htmlFor="intent-detection">Intent detection</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="keyword-spotting" />
                  <Label htmlFor="keyword-spotting">Keyword spotting</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="compliance-monitoring" />
                  <Label htmlFor="compliance-monitoring">Compliance monitoring</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Success Criteria</Label>
                <Textarea 
                  placeholder="Define what constitutes a successful call..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Custom Metrics</Label>
                <div className="space-y-2">
                  <Input placeholder="Metric name (e.g., Product Interest)" />
                  <Textarea placeholder="Metric description and detection criteria..." rows={2} />
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Metric
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Analysis Summary</Label>
                <Select defaultValue="detailed">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brief">Brief summary</SelectItem>
                    <SelectItem value="detailed">Detailed analysis</SelectItem>
                    <SelectItem value="custom">Custom format</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Advanced Settings
              </CardTitle>
              <CardDescription>Advanced configuration options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Max Call Duration (minutes)</Label>
                  <Input type="number" defaultValue="30" min="1" max="120" />
                </div>
                <div className="space-y-2">
                  <Label>Silence Timeout (seconds)</Label>
                  <Input type="number" defaultValue="10" min="3" max="60" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Temperature</Label>
                <Slider defaultValue={[0.7]} max={2} min={0} step={0.1} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>More Focused</span>
                  <span>More Creative</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="interruption-sensitivity" defaultChecked />
                  <Label htmlFor="interruption-sensitivity">Interruption sensitivity</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="background-sound-enabled" />
                  <Label htmlFor="background-sound-enabled">Background sound enabled</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="voicemail-detection" defaultChecked />
                  <Label htmlFor="voicemail-detection">Voicemail detection</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="end-call-on-goodbye" defaultChecked />
                  <Label htmlFor="end-call-on-goodbye">End call on goodbye</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Custom Headers</Label>
                <Textarea 
                  placeholder="Add custom headers for webhook requests (JSON format)"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Webhook URL</Label>
                <Input placeholder="https://your-webhook-url.com/endpoint" />
              </div>

              <div className="space-y-2">
                <Label>End Call Message</Label>
                <Textarea 
                  placeholder="Thank you for calling. Have a great day!"
                  rows={2}
                />
              </div>
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
