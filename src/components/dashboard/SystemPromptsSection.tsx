
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MessageSquare, Mic, History, Lightbulb, Play, Pause, TrendingUp, Award, FileText } from "lucide-react";
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

const systemPromptHistory = [
  { id: 1, version: "v2.3", date: "2024-01-15", changes: "Enhanced objection handling", author: "AI System", performance: 94 },
  { id: 2, version: "v2.2", date: "2024-01-10", changes: "Updated greeting script", author: "John Smith", performance: 89 },
  { id: 3, version: "v2.1", date: "2024-01-05", changes: "Added empathy phrases", author: "AI System", performance: 85 },
  { id: 4, version: "v2.0", date: "2024-01-01", changes: "Initial optimization", author: "Sarah Johnson", performance: 82 },
];

const suggestedUpdates = [
  {
    id: 1,
    title: "Improve Pricing Objection Response",
    description: "Add more value-focused responses when customers mention budget constraints",
    impact: "Potential 12% increase in conversion rate",
    confidence: "High",
    category: "Objection Handling"
  },
  {
    id: 2,
    title: "Enhance Product Feature Explanations",
    description: "Include specific use cases and benefits for each feature mentioned",
    impact: "Potential 8% increase in engagement",
    confidence: "Medium",
    category: "Product Knowledge"
  },
  {
    id: 3,
    title: "Optimize Call-to-Action Timing",
    description: "Adjust when and how appointment booking requests are made",
    impact: "Potential 15% increase in booking rate",
    confidence: "High",
    category: "Conversion"
  }
];

export function SystemPromptsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Assistant Health & Voice Testing</h2>
          <p className="text-muted-foreground">Manage prompts and test voice agent behavior</p>
        </div>
      </div>

      {/* Add metrics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">First Call Resolution</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lead Quality Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.4/10</div>
            <p className="text-xs text-muted-foreground">+0.3 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Prompts</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Across all assistants</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Suggestions Pending</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">AI-generated improvements</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="prompts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="prompts">Prompt History</TabsTrigger>
          <TabsTrigger value="history">System Prompt History</TabsTrigger>
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

        <TabsContent value="history" className="space-y-6">
          {/* System Prompt History - moved from CreateAssistantSection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                System Prompt History
              </CardTitle>
              <CardDescription>
                Recent changes to assistant prompts across all assistants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Assistant</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: 1, assistant: "SalesAI Pro", version: "v2.1", date: "2024-01-12", performance: 92 },
                    { id: 2, assistant: "Support Bot", version: "v1.8", date: "2024-01-10", performance: 88 },
                    { id: 3, assistant: "Scheduler AI", version: "v3.2", date: "2024-01-08", performance: 95 },
                  ].map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell className="font-medium">{entry.assistant}</TableCell>
                      <TableCell>{entry.version}</TableCell>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell>
                        <Badge variant={entry.performance >= 90 ? "default" : "secondary"}>
                          {entry.performance}%
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View Changes</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Complete history table - keep existing systemPromptHistory content */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                Complete System Prompt History
              </CardTitle>
              <CardDescription>
                Complete history of system prompt changes and their performance impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Version</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Changes</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {systemPromptHistory.map((prompt) => (
                    <TableRow key={prompt.id}>
                      <TableCell className="font-medium">{prompt.version}</TableCell>
                      <TableCell>{prompt.date}</TableCell>
                      <TableCell>{prompt.changes}</TableCell>
                      <TableCell>{prompt.author}</TableCell>
                      <TableCell>
                        <Badge variant={prompt.performance >= 90 ? "default" : "secondary"}>
                          {prompt.performance}%
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Restore</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
          {/* Suggested System Prompt Updates - moved from CreateAssistantSection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Suggested System Prompt Updates
              </CardTitle>
              <CardDescription>
                AI-generated improvements for your assistants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    assistant: "SalesAI Pro",
                    suggestion: "Improve objection handling for price concerns",
                    impact: "+12% conversion rate",
                    status: "pending"
                  },
                  {
                    id: 2,
                    assistant: "Support Bot", 
                    suggestion: "Add more empathy phrases for frustrated customers",
                    impact: "+8% satisfaction score",
                    status: "applied"
                  }
                ].map((suggestion) => (
                  <div key={suggestion.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{suggestion.assistant}</div>
                      <div className="text-sm text-muted-foreground">{suggestion.suggestion}</div>
                      <div className="text-sm font-medium text-green-600">{suggestion.impact}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={suggestion.status === "applied" ? "default" : "outline"}>
                        {suggestion.status === "applied" ? "Applied" : "Pending"}
                      </Badge>
                      {suggestion.status === "pending" && (
                        <div className="flex gap-2">
                          <Button size="sm">Apply</Button>
                          <Button size="sm" variant="outline">Preview</Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Keep existing AI suggestions content */}
          <Card>
            <CardHeader>
              <CardTitle>Suggested System Prompt Updates</CardTitle>
              <CardDescription>AI-generated improvements based on call analysis and performance data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestedUpdates.map((suggestion) => (
                  <div key={suggestion.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="h-4 w-4 text-yellow-500" />
                          <h4 className="font-medium">{suggestion.title}</h4>
                          <Badge variant="outline">{suggestion.category}</Badge>
                          <Badge variant={suggestion.confidence === "High" ? "default" : "secondary"}>
                            {suggestion.confidence} Confidence
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{suggestion.description}</p>
                        <p className="text-sm font-medium text-green-600">{suggestion.impact}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button size="sm">Apply</Button>
                        <Button size="sm" variant="outline">Preview</Button>
                        <Button size="sm" variant="outline">Dismiss</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Suggestion Performance Tracking</CardTitle>
              <CardDescription>Track the impact of implemented AI suggestions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-sm text-muted-foreground">Suggestions Applied</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">+15.3%</div>
                  <div className="text-sm text-muted-foreground">Avg Performance Improvement</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm text-muted-foreground">Suggestion Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
