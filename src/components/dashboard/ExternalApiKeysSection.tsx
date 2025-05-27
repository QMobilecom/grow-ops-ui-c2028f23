
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, Calendar, Eye, EyeOff } from "lucide-react";

export function ExternalApiKeysSection() {
  const [googleClientId, setGoogleClientId] = useState("");
  const [googleClientSecret, setGoogleClientSecret] = useState("");
  const [outlookClientId, setOutlookClientId] = useState("");
  const [outlookClientSecret, setOutlookClientSecret] = useState("");
  const [calendarApiKey, setCalendarApiKey] = useState("");
  
  const [showGoogleSecret, setShowGoogleSecret] = useState(false);
  const [showOutlookSecret, setShowOutlookSecret] = useState(false);
  const [showCalendarKey, setShowCalendarKey] = useState(false);

  const handleSave = () => {
    console.log("Saving API keys...");
    // Here you would implement the actual save logic
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">External API Keys</h1>
        <p className="text-muted-foreground">
          Configure API credentials for external services like Google, Outlook, and calendar integrations.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Google API Credentials */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 text-sm font-bold">G</span>
              </div>
              Google API
            </CardTitle>
            <CardDescription>
              Configure Google API credentials for Calendar integration, Gmail access, and other Google services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Client ID</Label>
                <Input 
                  type="text"
                  placeholder="Your Google Client ID"
                  value={googleClientId}
                  onChange={(e) => setGoogleClientId(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Client Secret</Label>
                <div className="relative">
                  <Input 
                    type={showGoogleSecret ? "text" : "password"}
                    placeholder="Your Google Client Secret"
                    value={googleClientSecret}
                    onChange={(e) => setGoogleClientSecret(e.target.value)}
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowGoogleSecret(!showGoogleSecret)}
                  >
                    {showGoogleSecret ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-sm">Google Services</span>
              </div>
              <span className="text-xs text-gray-500">Not Connected</span>
            </div>
          </CardContent>
        </Card>

        {/* Outlook API Credentials */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">O</span>
              </div>
              Microsoft Outlook API
            </CardTitle>
            <CardDescription>
              Configure Outlook API credentials for Calendar integration, email access, and Microsoft 365 services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Application (Client) ID</Label>
                <Input 
                  type="text"
                  placeholder="Your Outlook Application ID"
                  value={outlookClientId}
                  onChange={(e) => setOutlookClientId(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Client Secret</Label>
                <div className="relative">
                  <Input 
                    type={showOutlookSecret ? "text" : "password"}
                    placeholder="Your Outlook Client Secret"
                    value={outlookClientSecret}
                    onChange={(e) => setOutlookClientSecret(e.target.value)}
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowOutlookSecret(!showOutlookSecret)}
                  >
                    {showOutlookSecret ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-sm">Microsoft Outlook</span>
              </div>
              <span className="text-xs text-gray-500">Not Connected</span>
            </div>
          </CardContent>
        </Card>

        {/* Calendar API */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              Calendar API
            </CardTitle>
            <CardDescription>
              General calendar API key for scheduling and appointment management.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>API Key</Label>
              <div className="relative">
                <Input 
                  type={showCalendarKey ? "text" : "password"}
                  placeholder="Your Calendar API Key"
                  value={calendarApiKey}
                  onChange={(e) => setCalendarApiKey(e.target.value)}
                  className="pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowCalendarKey(!showCalendarKey)}
                >
                  {showCalendarKey ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-sm">Calendar Services</span>
              </div>
              <span className="text-xs text-gray-500">Not Connected</span>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3">
          <Button variant="outline">
            Test Connections
          </Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            Save API Keys
          </Button>
        </div>
      </div>
    </div>
  );
}
