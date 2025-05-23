
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneCall, Clock, CheckCircle, XCircle, TrendingUp, Users, AlertTriangle } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const callMetrics = [
  { date: "2024-01", totalCalls: 1250, successful: 950, appointments: 380, conversions: 285 },
  { date: "2024-02", totalCalls: 1450, successful: 1120, appointments: 445, conversions: 334 },
  { date: "2024-03", totalCalls: 1680, successful: 1340, appointments: 521, conversions: 402 },
  { date: "2024-04", totalCalls: 1920, successful: 1536, appointments: 614, conversions: 461 },
  { date: "2024-05", totalCalls: 2150, successful: 1720, appointments: 688, conversions: 516 },
  { date: "2024-06", totalCalls: 2420, successful: 1936, appointments: 774, conversions: 581 },
];

const recentCalls = [
  { 
    id: "C001", 
    phone: "+1 (555) 123-4567", 
    duration: "4:32", 
    status: "Completed", 
    outcome: "Appointment Booked",
    timestamp: "2024-06-15 14:30",
    agent: "Sales Assistant",
    leadScore: 85
  },
  { 
    id: "C002", 
    phone: "+1 (555) 987-6543", 
    duration: "2:15", 
    status: "Ended", 
    outcome: "Not Interested",
    timestamp: "2024-06-15 14:15",
    agent: "Customer Support",
    leadScore: 25
  },
  { 
    id: "C003", 
    phone: "+1 (555) 456-7890", 
    duration: "6:45", 
    status: "Completed", 
    outcome: "Follow-up Scheduled",
    timestamp: "2024-06-15 13:45",
    agent: "Sales Assistant",
    leadScore: 72
  },
];

export function CallLogsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Call Logs & Analytics</h2>
          <p className="text-muted-foreground">Track call performance, conversions, and AI insights</p>
        </div>
        <Button>Export Data</Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">AI Performance</TabsTrigger>
          <TabsTrigger value="insights">Behavior Insights</TabsTrigger>
          <TabsTrigger value="logs">Call Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
                <PhoneCall className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,420</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.0%</div>
                <p className="text-xs text-muted-foreground">+2.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Call Duration</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4:32</div>
                <p className="text-xs text-muted-foreground">+0:15 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Human Escalation</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">-0.8% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Call Volume & Conversions</CardTitle>
              <CardDescription>Track call metrics and appointment booking rates over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={callMetrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="date" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Area type="monotone" dataKey="totalCalls" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="appointments" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">AI Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">94.2%</div>
                <p className="text-xs text-muted-foreground">Intent recognition accuracy</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Avg Latency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.8s</div>
                <p className="text-xs text-muted-foreground">Response time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Token Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">125K</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Error Tracking</CardTitle>
              <CardDescription>Monitor system errors and performance issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <div>
                      <p className="font-medium">High Latency Warning</p>
                      <p className="text-sm text-muted-foreground">Response time exceeded 2s threshold</p>
                    </div>
                  </div>
                  <Badge variant="secondary">3 occurrences</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <div>
                      <p className="font-medium">API Connection Failed</p>
                      <p className="text-sm text-muted-foreground">External service timeout</p>
                    </div>
                  </div>
                  <Badge variant="secondary">1 occurrence</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Objection Handling</CardTitle>
                <CardDescription>Common objections and response effectiveness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Price concerns</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Timing issues</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                      <span className="text-sm text-muted-foreground">60%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Feature questions</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lead Quality Score</CardTitle>
                <CardDescription>Distribution of lead scores from recent calls</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={[
                    { score: '0-20', count: 45 },
                    { score: '21-40', count: 32 },
                    { score: '41-60', count: 58 },
                    { score: '61-80', count: 75 },
                    { score: '81-100', count: 42 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="score" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="logs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Call Logs</CardTitle>
              <CardDescription>Detailed logs of recent voice agent interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCalls.map((call) => (
                  <div key={call.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <PhoneCall className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{call.phone}</p>
                        <p className="text-sm text-muted-foreground">{call.timestamp} • {call.agent}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{call.duration}</p>
                        <p className="text-sm text-muted-foreground">Lead Score: {call.leadScore}</p>
                      </div>
                      <Badge variant={call.status === "Completed" ? "default" : "secondary"}>
                        {call.outcome}
                      </Badge>
                      <Button variant="outline" size="sm">View Transcript</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
