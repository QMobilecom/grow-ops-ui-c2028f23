import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Play, Bot, Settings, MessageSquare, Phone, Users, BarChart3, Lightbulb, Mic } from "lucide-react";

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

export function AssistantConfigForm({ assistant, onBack }: AssistantConfigFormProps) {
  const [assistantName, setAssistantName] = useState(assistant.name);
  const [systemPrompt, setSystemPrompt] = useState("You are a helpful AI assistant...");
  const [voice, setVoice] = useState("alloy");
  const [language, setLanguage] = useState("en");
  const [responseTime, setResponseTime] = useState("normal");
  const [maxTokens, setMaxTokens] = useState("150");
  const [temperature, setTemperature] = useState("0.7");

  const handleSave = () => {
    console.log("Saving assistant configuration...");
  };

  const handleTest = () => {
    console.log("Testing assistant...");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Assistants
          </Button>
          <div>
            <h2 className="text-2xl font-bold">{assistant.name}</h2>
            <p className="text-muted-foreground">Configure your AI assistant</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleTest}>
            <Play className="h-4 w-4 mr-2" />
            Test Assistant
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="prompt">System Prompt</TabsTrigger>
          <TabsTrigger value="voice">Voice & Speech</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="integration">Integration</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                General Settings
              </CardTitle>
              <CardDescription>
                Basic configuration for your AI assistant
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="assistant-name">Assistant Name</Label>
                  <Input
                    id="assistant-name"
                    value={assistantName}
                    onChange={(e) => setAssistantName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template">Template</Label>
                  <Input
                    id="template"
                    value={assistant.template}
                    disabled
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what this assistant does..."
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prompt">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                System Prompt
              </CardTitle>
              <CardDescription>
                Define how your AI assistant should behave and respond
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="system-prompt">System Prompt</Label>
                <Textarea
                  id="system-prompt"
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  rows={10}
                  placeholder="Enter your system prompt here..."
                />
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {systemPrompt.length} characters
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Prompt Guidelines</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Do</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Be specific about the assistant's role</li>
                      <li>• Define clear boundaries</li>
                      <li>• Include examples of good responses</li>
                      <li>• Specify the tone and personality</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-red-600 mb-2">Don't</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Make prompts too vague</li>
                      <li>• Include contradictory instructions</li>
                      <li>• Forget about edge cases</li>
                      <li>• Use overly complex language</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voice">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mic className="h-5 w-5" />
                Voice & Speech Configuration
              </CardTitle>
              <CardDescription>
                Customize the voice and speech settings for your AI assistant
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="voice">Voice</Label>
                  <Select value={voice} onValueChange={setVoice}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a voice" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alloy">Alloy</SelectItem>
                      <SelectItem value="echo">Echo</SelectItem>
                      <SelectItem value="fable">Fable</SelectItem>
                      <SelectItem value="onyx">Onyx</SelectItem>
                      <SelectItem value="nova">Nova</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a language" />
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="response-time">Response Time</Label>
                  <Select value={responseTime} onValueChange={setResponseTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select response time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fast">Fast</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="slow">Slow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-tokens">Max Tokens</Label>
                  <Input
                    id="max-tokens"
                    type="number"
                    value={maxTokens}
                    onChange={(e) => setMaxTokens(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="temperature">Temperature</Label>
                <Input
                  id="temperature"
                  type="number"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-x-2">
                  <Badge variant="secondary">Voice: {voice}</Badge>
                  <Badge variant="secondary">Language: {language}</Badge>
                </div>
                <Button variant="outline">
                  <Play className="h-4 w-4 mr-2" />
                  Test Voice
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Behavior Configuration
              </CardTitle>
              <CardDescription>
                Adjust the behavior and personality of your AI assistant
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Enable Conversational Mode</Label>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Allows the assistant to engage in more natural and free-flowing conversations.
                  </p>
                  <Switch id="conversational-mode" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Enable Sentiment Analysis</Label>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Analyzes the sentiment of user input to provide more appropriate responses.
                  </p>
                  <Switch id="sentiment-analysis" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Enable Knowledge Base</Label>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Allows the assistant to access and utilize a knowledge base for more accurate information.
                  </p>
                  <Switch id="knowledge-base" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="personality">Personality Traits</Label>
                <Textarea
                  id="personality"
                  placeholder="Describe the desired personality traits for the assistant..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tone">Tone of Voice</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integration">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Integration Settings
              </CardTitle>
              <CardDescription>
                Configure integrations with other services and platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="crm">CRM Integration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a CRM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salesforce">Salesforce</SelectItem>
                    <SelectItem value="hubspot">HubSpot</SelectItem>
                    <SelectItem value="zoho">Zoho CRM</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone-system">Phone System Integration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a phone system" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="twilio">Twilio</SelectItem>
                    <SelectItem value="plivo">Plivo</SelectItem>
                    <SelectItem value="vonage">Vonage</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-provider">Email Provider Integration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an email provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gmail">Gmail</SelectItem>
                    <SelectItem value="outlook">Outlook</SelectItem>
                    <SelectItem value="sendgrid">SendGrid</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input
                  id="webhook-url"
                  placeholder="Enter the webhook URL for real-time updates..."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Analytics & Monitoring
              </CardTitle>
              <CardDescription>
                Track the performance and usage of your AI assistant
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Total Calls Handled</Label>
                  <div className="text-2xl font-bold">1,256</div>
                  <p className="text-sm text-muted-foreground">From last month</p>
                </div>
                <div className="space-y-2">
                  <Label>Average Call Duration</Label>
                  <div className="text-2xl font-bold">3m 22s</div>
                  <p className="text-sm text-muted-foreground">From last month</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Customer Satisfaction Score</Label>
                  <div className="text-2xl font-bold">4.5/5</div>
                  <p className="text-sm text-muted-foreground">Based on user feedback</p>
                </div>
                <div className="space-y-2">
                  <Label>First Call Resolution Rate</Label>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-sm text-muted-foreground">Resolved on the first call</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Top Intent Categories</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge>Appointment Booking</Badge>
                  <Badge>Product Inquiry</Badge>
                  <Badge>Technical Support</Badge>
                  <Badge>Billing Question</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Performance Trends</Label>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Track performance trends over time with detailed charts and graphs.
                  </p>
                  <Button variant="outline">View Full Report</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
