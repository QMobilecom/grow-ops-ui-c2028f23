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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Phone, Plus, Edit, Trash2, Settings, Upload, ExternalLink, CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export function PhoneNumbersSection() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false);
  const [callMode, setCallMode] = useState("single");
  const [singlePhoneNumber, setSinglePhoneNumber] = useState("");
  const [csvFile, setCsvFile] = useState(null);
  const [scheduleDate, setScheduleDate] = useState<Date>();
  const [scheduleStartTime, setScheduleStartTime] = useState("");
  const [scheduleEndTime, setScheduleEndTime] = useState("");

  const phoneNumbers = [
    { id: 1, number: "+1 (555) 123-4567", status: "Active", assistant: "Customer Support" },
    { id: 2, number: "+1 (555) 987-6543", status: "Inactive", assistant: "Sales Bot" },
  ];

  const handleSingleCall = () => {
    if (!singlePhoneNumber.trim()) {
      alert("Please enter a phone number");
      return;
    }
    console.log("Making single call to:", singlePhoneNumber);
    alert(`Initiating call to ${singlePhoneNumber}`);
  };

  const handleCsvUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      setCsvFile(file);
      console.log("CSV file uploaded:", file.name);
    } else {
      alert("Please upload a valid CSV file");
    }
  };

  const handleBulkCall = () => {
    if (!csvFile) {
      alert("Please upload a CSV file first");
      return;
    }
    console.log("Starting bulk calls with file:", csvFile.name);
    alert(`Starting bulk calls with ${csvFile.name}`);
  };

  const handleScheduleCall = () => {
    if (!scheduleDate || !scheduleStartTime || !scheduleEndTime) {
      alert("Please select date, start time, and end time for scheduling");
      return;
    }
    if (scheduleStartTime >= scheduleEndTime) {
      alert("End time must be after start time");
      return;
    }
    console.log("Scheduling call for:", scheduleDate, "from", scheduleStartTime, "to", scheduleEndTime);
    alert(`Call scheduled for ${format(scheduleDate, "PPP")} from ${scheduleStartTime} to ${scheduleEndTime}`);
    setIsScheduleDialogOpen(false);
  };

  return (
    <div className="flex h-full gap-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 rounded-xl">
      {/* Left Sidebar */}
      <div className="w-80 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800">Phone Numbers</h3>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
                <Plus className="h-4 w-4 mr-2" />
                Create Phone Number
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl bg-slate-900 text-white border-slate-700 p-0 overflow-hidden">
              <DialogHeader className="px-8 py-6 border-b border-slate-700">
                <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  Create Phone Number
                </DialogTitle>
                <p className="text-slate-400 mt-2">Choose a phone number option and configure your settings</p>
              </DialogHeader>
              
              <div className="px-8 py-6">
                <Tabs defaultValue="free-nova" className="w-full">
                  <TabsList className="grid w-full grid-cols-6 bg-slate-800/50 p-1 rounded-lg border border-slate-700">
                    <TabsTrigger 
                      value="free-nova" 
                      className="text-xs font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
                    >
                      Free Nova Number
                    </TabsTrigger>
                    <TabsTrigger 
                      value="free-sip" 
                      className="text-xs font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
                    >
                      Free Nova SIP
                    </TabsTrigger>
                    <TabsTrigger 
                      value="import-twilio" 
                      className="text-xs font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
                    >
                      Import Twilio
                    </TabsTrigger>
                    <TabsTrigger 
                      value="import-vonage" 
                      className="text-xs font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
                    >
                      Import Vonage
                    </TabsTrigger>
                    <TabsTrigger 
                      value="import-telnyx" 
                      className="text-xs font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
                    >
                      Import Telnyx
                    </TabsTrigger>
                    <TabsTrigger 
                      value="byo-sip" 
                      className="text-xs font-medium text-teal-400 data-[state=active]:bg-teal-600 data-[state=active]:text-white transition-all"
                    >
                      BYO SIP Trunk
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="free-nova" className="space-y-6 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-white font-medium">Phone Number</Label>
                        <div className="relative">
                          <Input 
                            value="+14155551234"
                            className="bg-slate-800/50 border-slate-600 text-white h-12 pl-4 pr-10 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            readOnly
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-white font-medium">Label</Label>
                        <Input 
                          placeholder="e.g., Customer Support Line"
                          className="bg-slate-800/50 border-slate-600 text-white h-12 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white font-medium">SIP Trunk Credential</Label>
                      <Select>
                        <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white h-12 rounded-lg focus:border-blue-500 transition-all">
                          <SelectValue placeholder="Select a SIP trunk credential" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem value="credential1">Primary Credential</SelectItem>
                          <SelectItem value="credential2">Backup Credential</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id="e164" 
                          className="border-slate-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 mt-1" 
                        />
                        <div className="space-y-1">
                          <Label htmlFor="e164" className="text-white font-medium cursor-pointer">
                            Allow non-E164 phone numbers
                          </Label>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            Check this box to disable E164 format validation and use custom phone number formats. This allows more flexibility in number formatting.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                      <div className="flex items-center gap-3">
                        <ExternalLink className="h-5 w-5 text-blue-400" />
                        <a 
                          href="#" 
                          className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
                        >
                          Read more about SIP trunking in the documentation
                        </a>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="px-8 py-6 bg-slate-800/30 border-t border-slate-700 flex justify-between items-center">
                <Button 
                  variant="outline" 
                  onClick={() => setIsCreateDialogOpen(false)}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white h-11 px-6 rounded-lg transition-all"
                >
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white h-11 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all">
                  <Phone className="h-4 w-4 mr-2" />
                  Import SIP Phone Number
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg">
          <CardHeader className="pb-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-base text-slate-800">
              <Phone className="h-4 w-4 text-blue-600" />
              Active Numbers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {phoneNumbers.map((phone) => (
              <div 
                key={phone.id} 
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedNumber?.id === phone.id 
                    ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md' 
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
                onClick={() => setSelectedNumber(phone)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm text-slate-900">{phone.number}</p>
                    <p className="text-xs text-slate-600 mt-1">{phone.assistant}</p>
                  </div>
                  <Badge 
                    variant={phone.status === "Active" ? "default" : "secondary"} 
                    className={`text-xs ${
                      phone.status === "Active" 
                        ? "bg-green-100 text-green-800 border-green-200" 
                        : "bg-orange-100 text-orange-800 border-orange-200"
                    }`}
                  >
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
            <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 shadow-lg">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{selectedNumber.number}</h2>
                <p className="text-slate-600 mt-1">This Twilio number was purchased through Nova.</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-300 hover:bg-slate-50">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-red-300 text-red-600 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 shadow-lg">
              <Label className="text-sm font-medium text-slate-700">Phone Number Name</Label>
              <Input className="mt-2 border-slate-300 focus:border-blue-500" placeholder="Enter phone number name" />
            </div>

            {/* Inbound Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg border-b border-green-100">
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-green-600" />
                  </div>
                  Inbound Settings
                </CardTitle>
                <CardDescription className="text-green-700">
                  You can assign an assistant to the phone number so that whenever someone calls this phone number, the assistant will automatically be assigned to the call.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <Label className="text-slate-700 font-medium">Inbound Phone Number</Label>
                  <div className="flex items-center mt-2">
                    <Input value={selectedNumber.number} readOnly className="bg-slate-50 border-slate-300" />
                    <div className="ml-3 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-slate-700 font-medium">Assistant</Label>
                  <Select>
                    <SelectTrigger className="mt-2 border-slate-300 focus:border-green-500">
                      <SelectValue placeholder={selectedNumber.assistant} />
                    </SelectTrigger>
                    <SelectContent className="border-slate-200">
                      <SelectItem value="customer-support">Customer Support</SelectItem>
                      <SelectItem value="sales-bot">Sales Bot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-slate-700 font-medium">Fallback Destination</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Set a fallback destination for inbound calls when the assistant is not available.
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
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg border-b border-blue-100">
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-blue-600" />
                  </div>
                  Outbound Settings
                </CardTitle>
                <CardDescription className="text-blue-700">
                  You can assign an outbound phone number and set up a fallback for when the assistant is not available.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <Label className="text-slate-700 font-medium mb-3 block">Call Mode</Label>
                  <RadioGroup value={callMode} onValueChange={setCallMode} className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="single" id="single" />
                      <Label htmlFor="single" className="text-sm font-medium text-slate-700 cursor-pointer">
                        Call One Number
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bulk" id="bulk" />
                      <Label htmlFor="bulk" className="text-sm font-medium text-slate-700 cursor-pointer">
                        Call Many Numbers (Upload CSV)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {callMode === "single" && (
                  <div>
                    <Label className="text-slate-700 font-medium">Outbound Phone Number</Label>
                    <div className="flex mt-2">
                      <Select>
                        <SelectTrigger className="w-20">
                          <SelectValue defaultValue="US" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="US">🇺🇸</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input 
                        placeholder="Enter a phone number" 
                        className="ml-2" 
                        value={singlePhoneNumber}
                        onChange={(e) => setSinglePhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {callMode === "bulk" && (
                  <div>
                    <Label className="text-slate-700 font-medium">Upload CSV File</Label>
                    <div className="mt-2">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-slate-500" />
                            <p className="mb-2 text-sm text-slate-500">
                              <span className="font-semibold">Click to upload</span> your CSV file
                            </p>
                            <p className="text-xs text-slate-500">CSV files only</p>
                          </div>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept=".csv"
                            onChange={handleCsvUpload}
                          />
                        </label>
                      </div>
                      {csvFile && (
                        <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-sm text-green-800">
                            ✓ {csvFile.name} uploaded successfully
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <Label className="text-slate-700 font-medium">Assistant</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select Assistant..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer-support">Customer Support</SelectItem>
                      <SelectItem value="sales-bot">Sales Bot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3 pt-4">
                  {callMode === "single" ? (
                    <Button 
                      className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg"
                      onClick={handleSingleCall}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Make a Call
                    </Button>
                  ) : (
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
                      onClick={handleBulkCall}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Start Bulk Calls
                    </Button>
                  )}
                  
                  {/* Schedule Call Dialog */}
                  <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-slate-300 hover:bg-slate-50">
                        <Settings className="h-4 w-4 mr-2" />
                        Schedule Call
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md bg-white border-slate-200">
                      <DialogHeader>
                        <DialogTitle className="text-slate-900 flex items-center gap-2">
                          <CalendarIcon className="h-5 w-5 text-blue-600" />
                          Schedule Call
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6 py-4">
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-medium">Select Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !scheduleDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {scheduleDate ? format(scheduleDate, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={scheduleDate}
                                onSelect={setScheduleDate}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-slate-700 font-medium">Call Time Frame</Label>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="text-sm text-slate-600">Start Time</Label>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-slate-500" />
                                <Input
                                  type="time"
                                  value={scheduleStartTime}
                                  onChange={(e) => setScheduleStartTime(e.target.value)}
                                  className="border-slate-300 focus:border-blue-500"
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label className="text-sm text-slate-600">End Time</Label>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-slate-500" />
                                <Input
                                  type="time"
                                  value={scheduleEndTime}
                                  onChange={(e) => setScheduleEndTime(e.target.value)}
                                  className="border-slate-300 focus:border-blue-500"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-xs text-slate-500 bg-blue-50 p-3 rounded-lg border border-blue-200">
                            <p className="font-medium text-blue-800 mb-1">Time Frame Info</p>
                            <p>Calls will be made between the selected start and end times on the chosen date.</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button 
                          variant="outline" 
                          onClick={() => setIsScheduleDialogOpen(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button 
                          onClick={handleScheduleCall}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Schedule Call
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="flex items-center justify-center h-96 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-slate-400" />
              </div>
              <p className="text-slate-600 font-medium">Select a phone number to view and edit its settings</p>
              <p className="text-slate-500 text-sm mt-1">Choose from the list on the left to get started</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
