
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  GraduationCap, 
  Clock, 
  TrendingUp, 
  MessageSquare, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart3,
  Play,
  Users,
  Target
} from "lucide-react";

const transcriptAnalytics = [
  {
    callId: "1a9ef26-86c7",
    timestamp: "22 May 2025, 21:51",
    duration: "1m 40s",
    sentiment: "Neutral",
    confidence: 78,
    tips: ["Improve greeting tone", "Ask qualifying questions"],
    issues: ["Silence timeout", "Missed objection handling"],
    success: false
  },
  {
    callId: "eec7c547-18a3",
    timestamp: "22 May 2025, 21:48",
    duration: "2m 38s",
    sentiment: "Positive",
    confidence: 85,
    tips: ["Maintain energy level", "Better call closure"],
    issues: ["Call ended abruptly"],
    success: false
  },
  {
    callId: "28af95a2-0803",
    timestamp: "22 May 2025, 10:52",
    duration: "6m 8s",
    sentiment: "Positive",
    confidence: 92,
    tips: ["Perfect conversation flow", "Great objection handling"],
    issues: [],
    success: true
  }
];

const trainingTips = [
  {
    category: "Greeting & Opening",
    priority: "High",
    tip: "Use a warmer tone in the first 5 seconds to establish rapport",
    impact: "23% improvement in engagement",
    examples: ["Hi, this is Sarah from...", "Good morning! Hope you're having a great day"]
  },
  {
    category: "Objection Handling",
    priority: "Medium",
    tip: "Acknowledge concerns before presenting solutions",
    impact: "18% increase in conversion",
    examples: ["I understand your concern about...", "That's a valid point, let me address that"]
  },
  {
    category: "Call Closure",
    priority: "High",
    tip: "Summarize key points and confirm next steps",
    impact: "31% better follow-up success",
    examples: ["To summarize what we discussed...", "So the next step would be..."]
  }
];

export function LiveAssistantTrainerSection() {
  const [activeTab, setActiveTab] = useState("analytics");

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            Live Assistant Trainer
          </h2>
          <p className="text-gray-600">Real-time transcript analysis and AI coaching</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-600">Training Minutes</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">2,847</p>
            <p className="text-xs text-green-600">+12% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-600">Improvement Rate</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">67%</p>
            <p className="text-xs text-green-600">+8% this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-purple-500" />
              <span className="text-sm text-gray-600">Tips Generated</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">1,234</p>
            <p className="text-xs text-blue-600">Active coaching</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-gray-600">Success Rate</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">73%</p>
            <p className="text-xs text-green-600">+15% improvement</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="analytics">Transcript Analysis</TabsTrigger>
          <TabsTrigger value="tips">Training Tips</TabsTrigger>
          <TabsTrigger value="performance">Performance Tracking</TabsTrigger>
          <TabsTrigger value="coaching">AI Coaching</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Real-time Transcript Analysis</CardTitle>
              <CardDescription>AI-powered insights from recent conversations</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Call ID</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Sentiment</TableHead>
                    <TableHead>Confidence</TableHead>
                    <TableHead>Key Issues</TableHead>
                    <TableHead>Success</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transcriptAnalytics.map((call) => (
                    <TableRow key={call.callId}>
                      <TableCell className="font-mono text-sm">{call.callId}</TableCell>
                      <TableCell>{call.duration}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={
                          call.sentiment === "Positive" ? "border-green-200 text-green-800" :
                          call.sentiment === "Negative" ? "border-red-200 text-red-800" :
                          "border-gray-200 text-gray-800"
                        }>
                          {call.sentiment}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={call.confidence} className="w-16 h-2" />
                          <span className="text-sm">{call.confidence}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          {call.issues.slice(0, 2).map((issue, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-orange-200 text-orange-800">
                              {issue}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        {call.success ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500" />
                        )}
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          <Play className="h-3 w-3 mr-1" />
                          Review
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips">
          <div className="space-y-4">
            {trainingTips.map((tip, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={
                          tip.priority === "High" ? "bg-red-100 text-red-800" :
                          tip.priority === "Medium" ? "bg-yellow-100 text-yellow-800" :
                          "bg-green-100 text-green-800"
                        }>
                          {tip.priority} Priority
                        </Badge>
                        <span className="font-medium text-gray-900">{tip.category}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{tip.tip}</p>
                      <p className="text-sm text-green-600 font-medium">Expected Impact: {tip.impact}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                    <div className="space-y-1">
                      {tip.examples.map((example, exIndex) => (
                        <p key={exIndex} className="text-sm text-gray-600 italic">"{example}"</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Training Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Conversation Flow</span>
                    <span>89%</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Objection Handling</span>
                    <span>76%</span>
                  </div>
                  <Progress value={76} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Call Closure</span>
                    <span>82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Empathy & Tone</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Success Rate</span>
                    <span className="text-green-600 font-medium">+12%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Avg Call Duration</span>
                    <span className="text-blue-600 font-medium">+2m 15s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Customer Satisfaction</span>
                    <span className="text-green-600 font-medium">+18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Objection Resolution</span>
                    <span className="text-green-600 font-medium">+23%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="coaching">
          <Card>
            <CardHeader>
              <CardTitle>AI Coaching Recommendations</CardTitle>
              <CardDescription>Personalized training suggestions based on performance data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900">Focus on Human Connection</h4>
                      <p className="text-blue-700 text-sm mt-1">
                        Your recent calls show strong technical performance but could benefit from more personal rapport building.
                        Try starting with a friendly comment about their business or location.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-900">Address Silence Timeouts</h4>
                      <p className="text-orange-700 text-sm mt-1">
                        3 calls this week ended due to silence. Practice keeping conversations flowing with open-ended questions
                        and active listening techniques.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-green-900">Excellent Objection Handling</h4>
                      <p className="text-green-700 text-sm mt-1">
                        Your objection handling has improved 23% this week! Keep using the acknowledge-address-advance technique
                        you've been implementing.
                      </p>
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
