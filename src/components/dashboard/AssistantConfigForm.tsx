
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bot, Phone, MessageSquare, Settings, Volume2, Mic, Play, Brain, Sparkles } from "lucide-react";

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
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);
  const [behaviorPrompt, setBehaviorPrompt] = useState("");

  const handleGenerateWithAI = () => {
    console.log("Generating AI prompt with behavior:", behaviorPrompt);
    // Here you would implement the actual AI generation logic
    setIsGenerateDialogOpen(false);
    setBehaviorPrompt("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Assistants
        </Button>
        <div>
          <h2 className="text-2xl font-bold">Configure Assistant</h2>
          <p className="text-muted-foreground">Editing: {assistant.name}</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="voice">Voice & Speech</TabsTrigger>
          <TabsTrigger value="prompt">System Prompt</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Basic Information
              </CardTitle>
              <CardDescription>Configure basic assistant settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Assistant Name</Label>
                  <Input id="name" defaultValue={assistant.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue={assistant.status.toLowerCase()}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe what this assistant does..." />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="analytics" />
                <Label htmlFor="analytics">Enable detailed analytics</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Phone Configuration
              </CardTitle>
              <CardDescription>Configure phone numbers and calling behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a phone number" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">+1 (555) 123-4567</SelectItem>
                    <SelectItem value="2">+1 (555) 987-6543</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="max-duration">Max Call Duration (min)</Label>
                  <Input id="max-duration" type="number" defaultValue="30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="est">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern (EST)</SelectItem>
                      <SelectItem value="pst">Pacific (PST)</SelectItem>
                      <SelectItem value="cst">Central (CST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voice" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Voice Settings
              </CardTitle>
              <CardDescription>Configure voice characteristics and speech patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="voice">Voice Model</Label>
                  <Select defaultValue="sarah">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sarah">Sarah (Female, Professional)</SelectItem>
                      <SelectItem value="mike">Mike (Male, Friendly)</SelectItem>
                      <SelectItem value="emma">Emma (Female, Conversational)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="speed">Speech Speed</Label>
                  <Select defaultValue="normal">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="slow">Slow</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="fast">Fast</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en-us">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en-us">English (US)</SelectItem>
                    <SelectItem value="en-gb">English (UK)</SelectItem>
                    <SelectItem value="es-es">Spanish</SelectItem>
                    <SelectItem value="fr-fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="interruption" />
                <Label htmlFor="interruption">Allow interruptions</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mic className="h-5 w-5" />
                Voice Testing
              </CardTitle>
              <CardDescription>Test your voice configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Play className="h-4 w-4 mr-2" />
                  Test Voice
                </Button>
                <Button variant="outline">Record Sample</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prompt" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                System Prompt
              </CardTitle>
              <CardDescription>Define how your assistant behaves and responds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="system-prompt">System Prompt</Label>
                  <Dialog open={isGenerateDialogOpen} onOpenChange={setIsGenerateDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Brain className="h-4 w-4 mr-2" />
                        Generate with AI
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-purple-500" />
                          Generate AI System Prompt
                        </DialogTitle>
                        <DialogDescription>
                          Describe how you want your AI assistant to behave and we'll generate an optimized system prompt for you.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="behavior-prompt">How do you want your model to behave?</Label>
                          <Textarea 
                            id="behavior-prompt"
                            value={behaviorPrompt}
                            onChange={(e) => setBehaviorPrompt(e.target.value)}
                            placeholder="Example: I want my assistant to be friendly and professional when handling sales calls. It should ask qualifying questions, handle objections with empathy, and focus on booking appointments. The assistant should sound natural and conversational..."
                            className="min-h-[120px]"
                          />
                        </div>
                        
                        <div className="flex justify-end gap-3 pt-4 border-t">
                          <Button 
                            variant="outline" 
                            onClick={() => setIsGenerateDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button 
                            onClick={handleGenerateWithAI}
                            disabled={!behaviorPrompt.trim()}
                            className="bg-purple-600 hover:bg-purple-700"
                          >
                            <Sparkles className="h-4 w-4 mr-2" />
                            Generate Prompt
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <Textarea 
                  id="system-prompt" 
                  className="min-h-[200px]" 
                  defaultValue="You are a professional sales assistant for [Company]. Your goal is to qualify leads and book appointments. Be conversational, helpful, and focused on understanding the customer's needs. Handle objections with empathy and provide clear value propositions..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="greeting">Greeting Message</Label>
                <Textarea id="greeting" placeholder="Hi there! Thanks for calling [Company]. How can I help you today?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fallback">Fallback Response</Label>
                <Textarea id="fallback" placeholder="I'm sorry, I didn't understand that. Could you please rephrase your question?" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt Templates</CardTitle>
              <CardDescription>Quick templates to get you started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm">Sales Assistant</Button>
                <Button variant="outline" size="sm">Support Agent</Button>
                <Button variant="outline" size="sm">Scheduler</Button>
                <Button variant="outline" size="sm">Lead Qualifier</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Advanced Configuration
              </CardTitle>
              <CardDescription>Fine-tune advanced assistant behaviors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="response-time">Max Response Time (ms)</Label>
                  <Input id="response-time" type="number" defaultValue="2000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confidence">Confidence Threshold</Label>
                  <Input id="confidence" type="number" step="0.1" min="0" max="1" defaultValue="0.8" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook">Webhook URL</Label>
                <Input id="webhook" placeholder="https://yourapi.com/webhook" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="logging" defaultChecked />
                  <Label htmlFor="logging">Enable detailed logging</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="sentiment" />
                  <Label htmlFor="sentiment">Sentiment analysis</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="transfer" />
                  <Label htmlFor="transfer">Allow call transfers</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integration Settings</CardTitle>
              <CardDescription>Connect with external services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="crm">CRM Integration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select CRM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salesforce">Salesforce</SelectItem>
                    <SelectItem value="hubspot">HubSpot</SelectItem>
                    <SelectItem value="pipedrive">Pipedrive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="calendar">Calendar Integration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Calendar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google Calendar</SelectItem>
                    <SelectItem value="outlook">Outlook</SelectItem>
                    <SelectItem value="calendly">Calendly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline">
          Test Assistant
        </Button>
        <div className="flex gap-2">
          <Button variant="outline">Save Draft</Button>
          <Button className="bg-teal-600 hover:bg-teal-700">
            Deploy Assistant
          </Button>
        </div>
      </div>
    </div>
  );
}
