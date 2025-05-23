
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Mic, History, Lightbulb, Play, Pause } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const promptHistory = [
  { id: 1, version: "v2.3", date: "2024-01-15", performance: 94, status: "Active" },
  { id: 2, version: "v2.2", date: "2024-01-10", performance: 89, status: "Archived" },
  { id: 3, version: "v2.1", date: "2024-01-05", performance: 85, status: "Archived" },
  { id: 4, version: "v2.0", date: "2024-01-01", performance: 82, status: "Archived" },
];

const performanceData = [
  { version: "v2.0", successRate: 82, avgDuration: 4.2, satisfaction: 7.8 },
  { version: "v2.1", successRate: 85, avgDuration: 4.0, satisfaction: 8.1 },
  { version: "v2.2", successRate: 89, avgDuration: 3.8, satisfaction: 8.4 },
  { version: "v2.3", successRate: 94, avgDuration: 3.5, satisfaction: 8.9 },
];

const voiceTests = [
  { id: 1, testName: "Objection Handling", status: "Completed", score: 92, date: "2024-01-15" },
  { id: 2, testName: "Product Demo", status: "Running", score: null, date: "2024-01-16" },
  { id: 3, testName: "Pricing Discussion", status: "Pending", score: null, date: "2024-01-16" },
];

const agentBehavior = [
  { metric: "Interruption Rate", current: "12%", target: "< 15%", status: "good" },
  { metric: "Response Latency", current: "1.2s", target: "< 2s", status: "good" },
  { metric: "Conversation Flow", current: "89%", target: "> 85%", status: "good" },
  { metric: "Error Rate", current: "3.4%", target: "< 5%", status: "good" },
];

export function SystemPromptsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">System Prompts & Voice Testing</h2>
          <p className="text-muted-foreground">Manage prompts and test voice agent behavior</p>
        </div>
        <Button>
          <MessageSquare className="h-4 w-4 mr-2" />
          Create New Prompt
        </Button>
      </div>

      <Tabs defaultValue="prompts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="prompts">Prompt History</TabsTrigger>
          <TabsTrigger value="testing">Voice Testing</TabsTrigger>
          <TabsTrigger value="behavior">Agent Behavior</TabsTrigger>
          <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
        </TabsList>

        <TabsContent value="prompts" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Prompt Version History</CardTitle>
                <CardDescription>Track performance across different prompt versions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {promptHistory.map((prompt) => (
                    <div key={prompt.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">{prompt.version}</div>
                        <div className="text-sm text-muted-foreground">{prompt.date}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-medium">{prompt.performance}%</div>
                          <div className="text-sm text-muted-foreground">Success Rate</div>
                        </div>
                        <Badge variant={prompt.status === "Active" ? "default" : "secondary"}>
                          {prompt.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Comparison</CardTitle>
                <CardDescription>Success rate across prompt versions</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="version" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="successRate" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="satisfaction" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Current Active Prompt</CardTitle>
              <CardDescription>Version 2.3 - Deployed January 15, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-mono">
                    You are a professional sales assistant for [Company]. Your goal is to qualify leads and book appointments. 
                    Be conversational, helpful, and focused on understanding the customer's needs. 
                    Handle objections with empathy and provide clear value propositions...
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Edit Prompt</Button>
                  <Button variant="outline" size="sm">Test Changes</Button>
                  <Button variant="outline" size="sm">View Full Prompt</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testing" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Voice Test Queue</CardTitle>
                <CardDescription>Scheduled and running voice tests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {voiceTests.map((test) => (
                    <div key={test.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">{test.testName}</div>
                        <div className="text-sm text-muted-foreground">{test.date}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        {test.score && (
                          <div className="text-right">
                            <div className="font-medium">{test.score}%</div>
                            <div className="text-sm text-muted-foreground">Score</div>
                          </div>
                        )}
                        <Badge variant={
                          test.status === "Completed" ? "default" : 
                          test.status === "Running" ? "secondary" : "outline"
                        }>
                          {test.status}
                        </Badge>
                        {test.status === "Running" && (
                          <Button size="sm" variant="outline">
                            <Pause className="h-4 w-4" />
                          </Button>
                        )}
                        {test.status === "Pending" && (
                          <Button size="sm" variant="outline">
                            <Play className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4">
                  <Mic className="h-4 w-4 mr-2" />
                  Start New Voice Test
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Test Scenarios</CardTitle>
                <CardDescription>Common test scenarios for voice agents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Price Objection Handling</div>
                    <div className="text-sm text-muted-foreground">Test responses to "too expensive" objections</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Feature Questions</div>
                    <div className="text-sm text-muted-foreground">Product knowledge and feature explanations</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Appointment Booking</div>
                    <div className="text-sm text-muted-foreground">Calendar coordination and scheduling</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Competitor Comparisons</div>
                    <div className="text-sm text-muted-foreground">Handling competitive positioning questions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Test Results Summary</CardTitle>
              <CardDescription>Latest voice testing performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-muted-foreground">Avg Test Score</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">3.2s</div>
                  <div className="text-sm text-muted-foreground">Avg Response Time</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-sm text-muted-foreground">Tests Completed</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">94%</div>
                  <div className="text-sm text-muted-foreground">Pass Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Agent Behavior Metrics</CardTitle>
              <CardDescription>Real-time monitoring of agent performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {agentBehavior.map((metric) => (
                  <div key={metric.metric} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{metric.metric}</span>
                      <Badge className={
                        metric.status === "good" ? "bg-green-100 text-green-800" : 
                        metric.status === "warning" ? "bg-yellow-100 text-yellow-800" : 
                        "bg-red-100 text-red-800"
                      }>
                        {metric.status === "good" ? "Good" : metric.status === "warning" ? "Warning" : "Poor"}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">{metric.current}</span>
                      <span className="text-sm text-muted-foreground">Target: {metric.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Conversation Quality</CardTitle>
                <CardDescription>Analysis of conversation patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Natural Flow Score</span>
                    <span className="font-medium">8.7/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Empathy Rating</span>
                    <span className="font-medium">9.1/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Problem Resolution</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Customer Satisfaction</span>
                    <span className="font-medium">8.9/10</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Behavior Changes</CardTitle>
                <CardDescription>Notable improvements and issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-green-800">Improved Response Time</div>
                      <div className="text-sm text-green-600">Average latency reduced by 0.3s</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-blue-800">Better Objection Handling</div>
                      <div className="text-sm text-blue-600">Success rate increased to 94%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Improvements</CardTitle>
              <CardDescription>Smart suggestions to optimize your prompts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-medium">Improve Objection Handling</div>
                      <div className="text-sm text-muted-foreground mb-3">
                        Add more empathy phrases when customers mention budget concerns. 
                        Current success rate: 78% → Potential: 89%
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Apply Suggestion</Button>
                        <Button size="sm" variant="outline">Preview Changes</Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-medium">Enhance Product Explanations</div>
                      <div className="text-sm text-muted-foreground mb-3">
                        Include more specific use cases in feature descriptions. 
                        Clarity score: 7.2/10 → Potential: 8.8/10
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Apply Suggestion</Button>
                        <Button size="sm" variant="outline">Preview Changes</Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-medium">Optimize Call-to-Action</div>
                      <div className="text-sm text-muted-foreground mb-3">
                        Refine appointment booking language for higher conversion. 
                        Booking rate: 45% → Potential: 58%
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Apply Suggestion</Button>
                        <Button size="sm" variant="outline">Preview Changes</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
