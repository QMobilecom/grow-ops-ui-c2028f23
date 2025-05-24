
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Plus, Edit, Trash2, Settings, Upload } from "lucide-react";

export function PhoneNumbersSection() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const phoneNumbers = [
    { id: 1, number: "+1 (555) 123-4567", status: "Active", assistant: "Customer Support" },
    { id: 2, number: "+1 (555) 987-6543", status: "Inactive", assistant: "Sales Bot" },
  ];

  return (
    <div className="flex h-full gap-6">
      {/* Left Sidebar */}
      <div className="w-80 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Phone Numbers</h3>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-slate-800 hover:bg-slate-700">
                <Plus className="h-4 w-4 mr-2" />
                Create Phone Number
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-slate-900 text-white border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-xl text-white">Create Phone Number</DialogTitle>
              </DialogHeader>
              
              <Tabs defaultValue="free-nova" className="w-full">
                <TabsList className="grid w-full grid-cols-6 bg-slate-800">
                  <TabsTrigger value="free-nova" className="text-xs">Free Nova Number</TabsTrigger>
                  <TabsTrigger value="free-sip" className="text-xs">Free Nova SIP</TabsTrigger>
                  <TabsTrigger value="import-twilio" className="text-xs">Import Twilio</TabsTrigger>
                  <TabsTrigger value="import-vonage" className="text-xs">Import Vonage</TabsTrigger>
                  <TabsTrigger value="import-telnyx" className="text-xs">Import Telnyx</TabsTrigger>
                  <TabsTrigger value="byo-sip" className="text-xs text-teal-400">BYO SIP Trunk Number</TabsTrigger>
                </TabsList>
                
                <TabsContent value="free-nova" className="space-y-4 mt-6">
                  <div>
                    <Label className="text-white">Phone Number</Label>
                    <Input 
                      value="+14155551234"
                      className="bg-slate-800 border-slate-600 text-white mt-2"
                      readOnly
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="e164" className="border-slate-600" />
                    <Label htmlFor="e164" className="text-slate-300 text-sm">
                      Allow non-E164 phone numbers
                    </Label>
                  </div>
                  <p className="text-xs text-slate-400">
                    Check this box to disable E164 format validation and use custom phone number formats
                  </p>
                  
                  <div>
                    <Label className="text-white">SIP Trunk Credential</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white mt-2">
                        <SelectValue placeholder="Select a SIP trunk credential" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="credential1">Credential 1</SelectItem>
                        <SelectItem value="credential2">Credential 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-white">Label</Label>
                    <Input 
                      placeholder="Label for Phone Number"
                      className="bg-slate-800 border-slate-600 text-white mt-2"
                    />
                  </div>
                  
                  <div className="text-center">
                    <a href="#" className="text-blue-400 text-sm hover:underline">
                      Read more about SIP trunking in the documentation
                    </a>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setIsCreateDialogOpen(false)}
                      className="border-slate-600 text-slate-300 hover:bg-slate-800"
                    >
                      Cancel
                    </Button>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                      Import SIP Phone Number
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="bg-white">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Phone className="h-4 w-4" />
              Active Numbers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {phoneNumbers.map((phone) => (
              <div 
                key={phone.id} 
                className={`p-3 border rounded-lg cursor-pointer transition-colors hover:bg-slate-50 ${
                  selectedNumber?.id === phone.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200'
                }`}
                onClick={() => setSelectedNumber(phone)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{phone.number}</p>
                    <p className="text-xs text-muted-foreground">{phone.assistant}</p>
                  </div>
                  <Badge variant={phone.status === "Active" ? "default" : "secondary"} className="text-xs">
                    {phone.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        {selectedNumber ? (
          <>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selectedNumber.number}</h2>
                <p className="text-muted-foreground">This Twilio number was purchased through Nova.</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium">Phone Number Name</Label>
              <Input className="mt-1" placeholder="Enter phone number name" />
            </div>

            {/* Inbound Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Inbound Settings</CardTitle>
                <CardDescription>
                  You can assign an assistant to the phone number so that whenever someone calls this phone number, the assistant will automatically be assigned to the call.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Inbound Phone Number</Label>
                  <div className="flex items-center mt-1">
                    <Input value={selectedNumber.number} readOnly className="bg-slate-50" />
                    <div className="ml-2 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Assistant</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder={selectedNumber.assistant} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer-support">Customer Support</SelectItem>
                      <SelectItem value="sales-bot">Sales Bot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Squad</Label>
                  <div className="mt-1 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs">!</div>
                    <span className="text-sm text-yellow-800">No squads available. Create a squad to enable this feature.</span>
                  </div>
                </div>

                <div>
                  <Label>Workflow</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select Workflow..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="workflow1">Workflow 1</SelectItem>
                      <SelectItem value="workflow2">Workflow 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Fallback Destination</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Set a fallback destination for inbound calls when the assistant or squad is not available.
                  </p>
                  <div className="flex">
                    <Select>
                      <SelectTrigger className="w-20">
                        <SelectValue defaultValue="US" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">🇺🇸</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Enter a phone number" className="ml-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Outbound Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Outbound Settings</CardTitle>
                <CardDescription>
                  You can assign an outbound phone number, set up a fallback and set up a squad to be called if the assistant is not available.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Call One Number</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full border border-slate-300"></div>
                    <span className="text-sm">Call Many Numbers (Upload CSV)</span>
                  </div>
                </div>

                <div>
                  <Label>Outbound Phone Number</Label>
                  <div className="flex mt-1">
                    <Select>
                      <SelectTrigger className="w-20">
                        <SelectValue defaultValue="US" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">🇺🇸</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Enter a phone number" className="ml-2" />
                  </div>
                </div>

                <div>
                  <Label>Assistant</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select Assistant..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer-support">Customer Support</SelectItem>
                      <SelectItem value="sales-bot">Sales Bot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Squad</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    If the assistant is not available, the call can be routed to the specified squad.
                  </p>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs">!</div>
                    <span className="text-sm text-yellow-800">No squads available. Create a squad to enable this feature.</span>
                  </div>
                </div>

                <div>
                  <Label>Workflow</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Route to the specified workflow.
                  </p>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Workflow..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="workflow1">Workflow 1</SelectItem>
                      <SelectItem value="workflow2">Workflow 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Make a Call
                  </Button>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="flex items-center justify-center h-96 text-muted-foreground">
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Select a phone number to view and edit its settings</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
