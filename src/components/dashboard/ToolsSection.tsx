
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Wrench, 
  Plus, 
  Calendar, 
  Phone, 
  MessageSquare, 
  FileText, 
  Database, 
  Settings,
  Edit,
  Trash2,
  Search
} from "lucide-react";

interface Tool {
  id: string;
  name: string;
  type: string;
  description: string;
  category: string;
  status: string;
}

const mockTools: Tool[] = [
  {
    id: "1",
    name: "google_calendar_check_availability_tool",
    type: "Google Calendar",
    description: "Automatically checks the specified Google Calendar for availability",
    category: "Calendar Integration",
    status: "Active"
  },
  {
    id: "2",
    name: "transfer_call_tool",
    type: "Transfer Call",
    description: "Transfers calls to specified phone numbers or departments",
    category: "Call Management",
    status: "Active"
  },
  {
    id: "3",
    name: "CheckCalendarAvailability",
    type: "Function",
    description: "Automatically checks the specified calendar for availability",
    category: "Predefined Functions",
    status: "Active"
  },
  {
    id: "4",
    name: "CustomerStatus",
    type: "Query",
    description: "The CustomerStatus tool allows you to check customer status",
    category: "Customer Management",
    status: "Draft"
  },
  {
    id: "5",
    name: "CustomerNotes",
    type: "API Request",
    description: "After each outbound call, take notes about customer",
    category: "Customer Management",
    status: "Active"
  }
];

const toolTypes = [
  { value: "function", label: "Function", icon: Settings },
  { value: "google-calendar", label: "Google Calendar", icon: Calendar },
  { value: "transfer-call", label: "Transfer Call", icon: Phone },
  { value: "send-text", label: "Send Text", icon: MessageSquare },
  { value: "query", label: "Query", icon: Database },
  { value: "api-request", label: "API Request", icon: FileText }
];

export function ToolsSection() {
  const [tools, setTools] = useState<Tool[]>(mockTools);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [toolName, setToolName] = useState("");
  const [toolDescription, setToolDescription] = useState("");
  const [toolType, setToolType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateTool = () => {
    if (toolName && toolDescription && toolType) {
      const newTool: Tool = {
        id: Date.now().toString(),
        name: toolName,
        type: toolTypes.find(t => t.value === toolType)?.label || toolType,
        description: toolDescription,
        category: "Custom Functions",
        status: "Draft"
      };
      setTools([...tools, newTool]);
      setIsCreateDialogOpen(false);
      setToolName("");
      setToolDescription("");
      setToolType("");
    }
  };

  const getToolIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "google calendar":
        return Calendar;
      case "transfer call":
        return Phone;
      case "send text":
        return MessageSquare;
      case "api request":
        return FileText;
      case "query":
        return Database;
      default:
        return Settings;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Tools</h2>
          <p className="text-muted-foreground">Manage your AI assistant tools and functions</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Tool
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Create New Tool
              </DialogTitle>
              <DialogDescription>
                Create a new tool to enhance your AI assistant's capabilities
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="tool-name">Tool Name</Label>
                <Input 
                  id="tool-name"
                  value={toolName}
                  onChange={(e) => setToolName(e.target.value)}
                  placeholder="e.g., google_calendar_check_availability_tool"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tool-type">Tool Type</Label>
                <Select value={toolType} onValueChange={setToolType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a tool type" />
                  </SelectTrigger>
                  <SelectContent>
                    {toolTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2">
                          <type.icon className="h-4 w-4" />
                          {type.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tool-description">Description</Label>
                <Textarea 
                  id="tool-description"
                  value={toolDescription}
                  onChange={(e) => setToolDescription(e.target.value)}
                  placeholder="Describe the tool in a few sentences"
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setIsCreateDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleCreateTool}
                  disabled={!toolName || !toolDescription || !toolType}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Create Tool
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Tool Library
              </CardTitle>
              <CardDescription>
                Manage and configure your tools ({tools.length} total)
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-64"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredTools.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Wrench className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No tools found</p>
              <p className="text-sm">Try adjusting your search or create a new tool</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTools.map((tool) => {
                const IconComponent = getToolIcon(tool.type);
                return (
                  <div key={tool.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium truncate">{tool.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {tool.type}
                          </Badge>
                          <Badge className={`text-xs ${getStatusColor(tool.status)}`}>
                            {tool.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{tool.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Category: {tool.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tool Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tools</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tools.filter(t => t.status === "Active").length}</div>
            <p className="text-xs text-muted-foreground">Ready to use</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Draft Tools</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tools.filter(t => t.status === "Draft").length}</div>
            <p className="text-xs text-muted-foreground">In development</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tools</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tools.length}</div>
            <p className="text-xs text-muted-foreground">All tools</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
