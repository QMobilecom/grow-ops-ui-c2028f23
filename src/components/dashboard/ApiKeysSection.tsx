
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Key, Plus, Eye, EyeOff, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export function ApiKeysSection() {
  const [showKeys, setShowKeys] = useState<{[key: string]: boolean}>({});
  
  const apiKeys = [
    { id: 1, name: "OpenAI API", service: "OpenAI", status: "Active", lastUsed: "2 hours ago" },
    { id: 2, name: "Twilio API", service: "Twilio", status: "Active", lastUsed: "1 day ago" },
    { id: 3, name: "Google Cloud", service: "Google", status: "Inactive", lastUsed: "1 week ago" },
  ];

  const toggleKeyVisibility = (keyId: string) => {
    setShowKeys(prev => ({ ...prev, [keyId]: !prev[keyId] }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">External API Keys</h2>
          <p className="text-muted-foreground">Securely store and manage API keys for external services</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add API Key
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Add New API Key
            </CardTitle>
            <CardDescription>
              Add a new external API key for your AI assistant to use
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="key-name">Key Name</Label>
                <Input 
                  id="key-name" 
                  placeholder="e.g., OpenAI Production Key"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Input 
                  id="service" 
                  placeholder="e.g., OpenAI, Twilio, etc."
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <Input 
                id="api-key"
                type="password"
                placeholder="Enter your API key..."
              />
            </div>
            
            <Button>Save API Key</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Stored API Keys</CardTitle>
            <CardDescription>
              Your securely stored external API keys
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {apiKeys.map((apiKey) => (
                <div key={apiKey.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <Key className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-medium">{apiKey.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {apiKey.service} • Last used {apiKey.lastUsed}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={apiKey.status === "Active" ? "default" : "secondary"}>
                      {apiKey.status}
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toggleKeyVisibility(apiKey.id.toString())}
                    >
                      {showKeys[apiKey.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
