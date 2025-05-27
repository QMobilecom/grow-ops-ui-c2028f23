
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Download, MapPin, Target, Users, Sparkles, Clock, CheckCircle } from "lucide-react";

interface GeneratedLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  score: number;
  location: string;
}

const mockLeads: GeneratedLead[] = [
  { id: "1", name: "Sarah Johnson", email: "sarah.j@techcorp.com", phone: "+1 (555) 123-4567", company: "TechCorp Solutions", industry: "Technology", score: 92, location: "San Francisco, CA" },
  { id: "2", name: "Michael Chen", email: "m.chen@innovate.io", phone: "+1 (555) 987-6543", company: "Innovate Industries", industry: "Manufacturing", score: 88, location: "Los Angeles, CA" },
  { id: "3", name: "Emily Rodriguez", email: "e.rodriguez@healthplus.com", phone: "+1 (555) 456-7890", company: "HealthPlus Medical", industry: "Healthcare", score: 95, location: "San Diego, CA" },
  { id: "4", name: "David Thompson", email: "d.thompson@financegroup.net", phone: "+1 (555) 321-0987", company: "Finance Group LLC", industry: "Finance", score: 79, location: "Sacramento, CA" },
];

export function LeadGenerationAISection() {
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [targetDescription, setTargetDescription] = useState("");
  const [leadCount, setLeadCount] = useState("50");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLeads, setGeneratedLeads] = useState<GeneratedLead[]>([]);
  const [progress, setProgress] = useState(0);

  const handleGenerateLeads = async () => {
    setIsGenerating(true);
    setProgress(0);
    
    // Simulate AI lead generation with progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setGeneratedLeads(mockLeads);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleDownloadCSV = () => {
    const csvHeaders = "Name,Email,Phone,Company,Industry,Score,Location\n";
    const csvData = generatedLeads.map(lead => 
      `${lead.name},${lead.email},${lead.phone},${lead.company},${lead.industry},${lead.score},${lead.location}`
    ).join("\n");
    
    const csvContent = csvHeaders + csvData;
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ai-generated-leads-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-800 border-green-200";
    if (score >= 80) return "bg-blue-100 text-blue-800 border-blue-200";
    if (score >= 70) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  return (
    <div className="space-y-6 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 p-6 rounded-lg min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Lead Generation AI
          </h2>
          <p className="text-gray-600 mt-2">Generate high-quality leads using AI technology</p>
        </div>
        <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100">
          <Brain className="h-8 w-8 text-purple-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Card */}
        <div className="lg:col-span-2">
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Target className="h-5 w-5" />
                Lead Generation Configuration
              </CardTitle>
              <CardDescription>Configure your AI lead generation parameters</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                    Target Location
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="location"
                      placeholder="e.g., San Francisco, CA"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 border-purple-200 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
                    Industry Focus
                  </Label>
                  <Input
                    id="industry"
                    placeholder="e.g., Technology, Healthcare"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="border-purple-200 focus:border-purple-400"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="leadCount" className="text-sm font-medium text-gray-700">
                  Number of Leads
                </Label>
                <Input
                  id="leadCount"
                  type="number"
                  placeholder="50"
                  value={leadCount}
                  onChange={(e) => setLeadCount(e.target.value)}
                  className="border-purple-200 focus:border-purple-400"
                  min="1"
                  max="1000"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                  Target Customer Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your ideal customer profile, company size, pain points, etc."
                  value={targetDescription}
                  onChange={(e) => setTargetDescription(e.target.value)}
                  className="border-purple-200 focus:border-purple-400 min-h-[100px]"
                />
              </div>

              {isGenerating && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-600 animate-spin" />
                    <span className="text-sm font-medium">AI is generating leads...</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              )}

              <Button
                onClick={handleGenerateLeads}
                disabled={isGenerating || !location || !industry}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3"
              >
                {isGenerating ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Generating Leads...
                  </>
                ) : (
                  <>
                    <Brain className="h-4 w-4 mr-2" />
                    Generate AI Leads
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats Card */}
        <div className="space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Users className="h-5 w-5" />
                Generation Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Generated</span>
                  <span className="font-semibold text-lg">{generatedLeads.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avg. Quality Score</span>
                  <span className="font-semibold text-lg">
                    {generatedLeads.length > 0 
                      ? Math.round(generatedLeads.reduce((sum, lead) => sum + lead.score, 0) / generatedLeads.length)
                      : 0}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">High Quality (90+)</span>
                  <span className="font-semibold text-lg text-green-600">
                    {generatedLeads.filter(lead => lead.score >= 90).length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {generatedLeads.length > 0 && (
            <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="h-5 w-5" />
                  Ready to Download
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Button
                  onClick={handleDownloadCSV}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CSV
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Generated Leads Table */}
      {generatedLeads.length > 0 && (
        <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Users className="h-5 w-5" />
              Generated Leads
            </CardTitle>
            <CardDescription>AI-generated leads ready for your outreach</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Company</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Industry</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Contact</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Score</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {generatedLeads.map((lead) => (
                    <tr key={lead.id} className="border-b border-gray-100 hover:bg-purple-25">
                      <td className="py-4 px-4 font-medium">{lead.name}</td>
                      <td className="py-4 px-4">{lead.company}</td>
                      <td className="py-4 px-4">
                        <Badge variant="outline" className="border-blue-200 text-blue-700">
                          {lead.industry}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm">
                          <div>{lead.email}</div>
                          <div className="text-gray-500">{lead.phone}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getScoreColor(lead.score)}>
                          {lead.score}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{lead.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
