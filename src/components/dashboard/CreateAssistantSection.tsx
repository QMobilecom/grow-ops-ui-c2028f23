
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Plus } from "lucide-react";

export function CreateAssistantSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Create AI Assistant</h2>
          <p className="text-muted-foreground">Configure your new AI voice agent</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Quick Setup
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Assistant Configuration
            </CardTitle>
            <CardDescription>
              Set up your AI assistant's personality and capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="assistant-name">Assistant Name</Label>
                <Input 
                  id="assistant-name" 
                  placeholder="e.g., Customer Support Bot"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="voice-type">Voice Type</Label>
                <Input 
                  id="voice-type" 
                  placeholder="e.g., Professional Female"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="system-prompt">System Prompt</Label>
              <Textarea 
                id="system-prompt"
                placeholder="Define your assistant's personality, role, and how it should respond..."
                className="min-h-32"
              />
            </div>
            
            <div className="flex gap-2">
              <Button>Save Configuration</Button>
              <Button variant="outline">Test Assistant</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
