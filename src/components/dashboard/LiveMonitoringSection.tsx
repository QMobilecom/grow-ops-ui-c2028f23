
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Mic, Phone, Play, Square, AlertTriangle, CheckCircle } from "lucide-react";

const liveCalls = [
  { id: 1, assistant: "Riley", customer: "+1 (555) 123-4567", duration: "2:34", status: "Active", intent: "Product Demo" },
  { id: 2, assistant: "Noqoody", customer: "+1 (555) 987-6543", duration: "1:12", status: "Active", intent: "Pricing Inquiry" },
  { id: 3, assistant: "Riley", customer: "+1 (555) 456-7890", duration: "4:56", status: "On Hold", intent: "Technical Support" },
];

const liveTranscripts = [
  { id: 1, speaker: "Assistant", message: "Hi there! I'm Riley, your AI assistant. How can I help you today?", timestamp: "14:23:45" },
  { id: 2, speaker: "Customer", message: "I'm interested in learning more about your software solution.", timestamp: "14:23:52" },
  { id: 3, speaker: "Assistant", message: "That's great! I'd love to show you what we can do. What's your main challenge right now?", timestamp: "14:23:58" },
  { id: 4, speaker: "Customer", message: "We're struggling with lead management and follow-ups.", timestamp: "14:24:15" },
];

const alertsMonitoring = [
  { id: 1, type: "High Intent", call: "+1 (555) 123-4567", message: "Customer showing strong buying signals", severity: "info" },
  { id: 2, type: "Objection Spike", call: "+1 (555) 987-6543", message: "Multiple pricing objections detected", severity: "warning" },
  { id: 3, type: "Escalation Request", call: "+1 (555) 456-7890", message: "Customer requested human agent", severity: "urgent" },
];

const conversationDrops = [
  { time: "14:20", calls: 3, reason: "Network timeout" },
  { time: "14:15", calls: 1, reason: "Customer hangup" },
  { time: "14:10", calls: 2, reason: "System error" },
];

export function LiveMonitoringSection() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "urgent": return "bg-red-100 text-red-800";
      case "warning": return "bg-yellow-100 text-yellow-800";
      case "info": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "urgent": return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "warning": return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "info": return <CheckCircle className="h-4 w-4 text-blue-500" />;
      default: return <CheckCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Live Call Monitoring</h2>
          <p className="text-muted-foreground">Real-time call monitoring and transcript analysis</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Square className="h-4 w-4 mr-2" />
            Stop All Recording
          </Button>
          <Button>
            <Eye className="h-4 w-4 mr-2" />
            Monitor All
          </Button>
        </div>
      </div>

      <Tabs defaultValue="live-calls" className="space-y-6">
        <TabsList>
          <TabsTrigger value="live-calls">Live Calls</TabsTrigger>
          <TabsTrigger value="transcripts">Live Transcripts</TabsTrigger>
          <TabsTrigger value="alerts">Proactive Alerts</TabsTrigger>
          <TabsTrigger value="drops">Conversation Drops</TabsTrigger>
        </TabsList>

        <TabsContent value="live-calls" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Calls</CardTitle>
                <Phone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">3</div>
                <p className="text-xs text-muted-foreground">2 inbound, 1 outbound</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Queue Length</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">No calls waiting</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Call Time</CardTitle>
                <Mic className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2:54</div>
                <p className="text-xs text-muted-foreground">Last 10 calls</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Live Alerts</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">2</div>
                <p className="text-xs text-muted-foreground">Requires attention</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Active Calls Monitor</CardTitle>
              <CardDescription>Real-time view of ongoing conversations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {liveCalls.map((call) => (
                  <div key={call.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${call.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                        <span className="font-medium">{call.assistant}</span>
                      </div>
                      <div>
                        <div className="font-medium">{call.customer}</div>
                        <div className="text-sm text-muted-foreground">{call.intent}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-medium">{call.duration}</div>
                        <Badge variant={call.status === 'Active' ? 'default' : 'secondary'}>
                          {call.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mic className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transcripts" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Transcript - Call #1</CardTitle>
                <CardDescription>Riley → +1 (555) 123-4567 • Product Demo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {liveTranscripts.map((entry) => (
                    <div key={entry.id} className={`p-3 rounded-lg ${
                      entry.speaker === 'Assistant' ? 'bg-blue-50 ml-4' : 'bg-gray-50 mr-4'
                    }`}>
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-sm">{entry.speaker}</span>
                        <span className="text-xs text-muted-foreground">{entry.timestamp}</span>
                      </div>
                      <p className="text-sm">{entry.message}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Recording live...</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">Export</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-time Analysis</CardTitle>
                <CardDescription>AI insights from current conversation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium text-green-700">Positive Intent Detected</div>
                    <div className="text-sm text-muted-foreground">Customer shows strong interest in product features</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium text-blue-700">Key Topics</div>
                    <div className="text-sm text-muted-foreground">Lead management, automation, pricing</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium text-purple-700">Sentiment Score</div>
                    <div className="text-sm text-muted-foreground">8.2/10 - Very positive</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium text-orange-700">Recommended Action</div>
                    <div className="text-sm text-muted-foreground">Schedule demo, focus on ROI benefits</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Live Transcript Controls</CardTitle>
              <CardDescription>Manage real-time monitoring and recording</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <div className="font-medium mb-2">Auto-Save Transcripts</div>
                  <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="font-medium mb-2">Real-time Analysis</div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="font-medium mb-2">Human Escalation</div>
                  <Badge variant="secondary">Ready</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Proactive Alerts Dashboard</CardTitle>
              <CardDescription>Real-time notifications for high-priority events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertsMonitoring.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getSeverityIcon(alert.severity)}
                      <div>
                        <div className="font-medium">{alert.type}</div>
                        <div className="text-sm text-muted-foreground">{alert.message}</div>
                        <div className="text-xs text-muted-foreground mt-1">Call: {alert.call}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                      </Badge>
                      <Button size="sm" variant="outline">View Call</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Alert Configuration</CardTitle>
                <CardDescription>Customize notification triggers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">High-Intent Leads</div>
                      <div className="text-sm text-muted-foreground">Notify on strong buying signals</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">On</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Objection Spikes</div>
                      <div className="text-sm text-muted-foreground">Alert on multiple objections</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">On</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Escalation Requests</div>
                      <div className="text-sm text-muted-foreground">Human agent requested</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">On</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alert History</CardTitle>
                <CardDescription>Recent notification events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium">Today: 8 alerts</div>
                    <div className="text-muted-foreground">5 high-intent, 2 objections, 1 escalation</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Yesterday: 12 alerts</div>
                    <div className="text-muted-foreground">7 high-intent, 4 objections, 1 escalation</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">This Week: 45 alerts</div>
                    <div className="text-muted-foreground">28 high-intent, 14 objections, 3 escalations</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="drops" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversation Drops Analysis</CardTitle>
              <CardDescription>Monitor and analyze call disconnections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conversationDrops.map((drop, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">Drop Event - {drop.time}</div>
                      <div className="text-sm text-muted-foreground">Reason: {drop.reason}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{drop.calls} call{drop.calls > 1 ? 's' : ''}</div>
                      <div className="text-sm text-muted-foreground">affected</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Drop Statistics</CardTitle>
                <CardDescription>Call drop analysis metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Drops Today</span>
                    <span className="font-medium">6</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Drop Rate</span>
                    <span className="font-medium">2.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Avg Time to Drop</span>
                    <span className="font-medium">3:42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Recovery Rate</span>
                    <span className="font-medium">78%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Drop Reasons</CardTitle>
                <CardDescription>Most frequent disconnection causes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Customer Hangup</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Network Issues</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>System Errors</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Call Timeout</span>
                    <span className="font-medium">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
