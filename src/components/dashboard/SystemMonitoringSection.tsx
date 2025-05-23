
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Cpu, HardDrive, Wifi, AlertTriangle, CheckCircle, Clock, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";

const systemHealthData = [
  { time: "00:00", cpu: 45, memory: 62, latency: 120, uptime: 99.9 },
  { time: "04:00", cpu: 38, memory: 58, latency: 115, uptime: 99.9 },
  { time: "08:00", cpu: 65, memory: 72, latency: 140, uptime: 99.8 },
  { time: "12:00", cpu: 78, memory: 85, latency: 160, uptime: 99.9 },
  { time: "16:00", cpu: 82, memory: 88, latency: 180, uptime: 99.9 },
  { time: "20:00", cpu: 55, memory: 68, latency: 125, uptime: 99.9 },
];

const apiHealthData = [
  { service: "OpenAI GPT-4", status: "Operational", latency: "145ms", uptime: "99.98%", errors: 2 },
  { service: "DeepSeek", status: "Operational", latency: "180ms", uptime: "99.95%", errors: 0 },
  { service: "ElevenLabs TTS", status: "Operational", latency: "320ms", uptime: "99.92%", errors: 1 },
  { service: "Deepgram STT", status: "Operational", latency: "95ms", uptime: "99.99%", errors: 0 },
  { service: "VAPI Platform", status: "Degraded", latency: "450ms", uptime: "99.85%", errors: 5 },
];

const tokenUsageData = [
  { hour: "00", input: 12500, output: 18750, cost: 0.85 },
  { hour: "01", input: 8200, output: 12300, cost: 0.56 },
  { hour: "02", input: 5800, output: 8700, cost: 0.39 },
  { hour: "03", input: 4200, output: 6300, cost: 0.28 },
  { hour: "04", input: 6800, output: 10200, cost: 0.46 },
  { hour: "05", input: 9500, output: 14250, cost: 0.64 },
  { hour: "06", input: 15200, output: 22800, cost: 1.02 },
  { hour: "07", input: 22800, output: 34200, cost: 1.54 },
  { hour: "08", input: 28500, output: 42750, cost: 1.92 },
  { hour: "09", input: 35200, output: 52800, cost: 2.38 },
  { hour: "10", input: 42500, output: 63750, cost: 2.87 },
  { hour: "11", input: 38900, output: 58350, cost: 2.62 },
];

const errorLogs = [
  { timestamp: "2024-06-15 14:32:15", service: "VAPI Platform", error: "Connection timeout", severity: "High", resolved: false },
  { timestamp: "2024-06-15 13:45:22", service: "OpenAI", error: "Rate limit exceeded", severity: "Medium", resolved: true },
  { timestamp: "2024-06-15 12:18:09", service: "ElevenLabs", error: "Audio generation failed", severity: "Medium", resolved: true },
  { timestamp: "2024-06-15 11:22:33", service: "Deepgram", error: "Transcription delay", severity: "Low", resolved: true },
  { timestamp: "2024-06-15 10:55:44", service: "VAPI Platform", error: "WebSocket disconnection", severity: "High", resolved: true },
];

export function SystemMonitoringSection() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Operational":
        return <Badge className="bg-green-100 text-green-800">Operational</Badge>;
      case "Degraded":
        return <Badge className="bg-yellow-100 text-yellow-800">Degraded</Badge>;
      case "Down":
        return <Badge variant="destructive">Down</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "High":
        return <Badge variant="destructive">High</Badge>;
      case "Medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case "Low":
        return <Badge variant="secondary">Low</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Operational":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Degraded":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "Down":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">System Monitoring</h2>
          <p className="text-muted-foreground">Monitor system health, API performance, and resource usage</p>
        </div>
        <Button>
          <Activity className="h-4 w-4 mr-2" />
          View Detailed Logs
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">System Overview</TabsTrigger>
          <TabsTrigger value="apis">API Health</TabsTrigger>
          <TabsTrigger value="resources">Resource Usage</TabsTrigger>
          <TabsTrigger value="errors">Error Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145ms</div>
                <p className="text-xs text-muted-foreground">-15ms from yesterday</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Errors</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">1</div>
                <p className="text-xs text-muted-foreground">VAPI connection timeout</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
                <Cpu className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">55%</div>
                <p className="text-xs text-muted-foreground">Peak: 82% at 16:00</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>System Health Metrics</CardTitle>
              <CardDescription>Real-time system performance monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={systemHealthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Line type="monotone" dataKey="cpu" stroke="#3b82f6" strokeWidth={2} name="CPU %" />
                  <Line type="monotone" dataKey="memory" stroke="#10b981" strokeWidth={2} name="Memory %" />
                  <Line type="monotone" dataKey="latency" stroke="#f59e0b" strokeWidth={2} name="Latency (ms)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Status</CardTitle>
                <CardDescription>Current status of all integrated services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {apiHealthData.map((service) => (
                    <div key={service.service} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <p className="font-medium">{service.service}</p>
                          <p className="text-sm text-muted-foreground">Latency: {service.latency}</p>
                        </div>
                      </div>
                      {getStatusBadge(service.status)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Average Call Setup Time</span>
                    <span className="font-medium">2.3s</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Voice Model Health Score</span>
                    <span className="font-medium text-green-600">98%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Audio Quality Score</span>
                    <span className="font-medium text-green-600">97%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Transcription Accuracy</span>
                    <span className="font-medium text-green-600">95%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="apis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Service Health</CardTitle>
              <CardDescription>Detailed monitoring of external API services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiHealthData.map((service) => (
                  <div key={service.service} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(service.status)}
                        <h3 className="font-medium">{service.service}</h3>
                      </div>
                      {getStatusBadge(service.status)}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Response Time</p>
                        <p className="font-medium">{service.latency}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Uptime (30d)</p>
                        <p className="font-medium">{service.uptime}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Errors (24h)</p>
                        <p className="font-medium">{service.errors}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Response Times</CardTitle>
              <CardDescription>Track response time trends for external services</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={systemHealthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Area type="monotone" dataKey="latency" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Token Usage (24h)</CardTitle>
                <Cpu className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2M</div>
                <p className="text-xs text-muted-foreground">Cost: $18.50</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
                <HardDrive className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4GB</div>
                <p className="text-xs text-muted-foreground">12% of allocated</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bandwidth</CardTitle>
                <Wifi className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45MB/s</div>
                <p className="text-xs text-muted-foreground">Peak: 78MB/s</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Concurrent Sessions</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Peak: 42 sessions</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Token Usage Pattern</CardTitle>
              <CardDescription>Hourly token consumption and costs</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={tokenUsageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="hour" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Bar dataKey="input" stackId="a" fill="#3b82f6" />
                  <Bar dataKey="output" stackId="a" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Resource Allocation</CardTitle>
                <CardDescription>Current resource usage and limits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>CPU</span>
                      <span>55%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "55%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Memory</span>
                      <span>68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "68%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Storage</span>
                      <span>12%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "12%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Network</span>
                      <span>34%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "34%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost Breakdown</CardTitle>
                <CardDescription>Resource costs for the current period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>LLM Tokens</span>
                    <span className="font-medium">$18.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>TTS Generation</span>
                    <span className="font-medium">$12.30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>STT Processing</span>
                    <span className="font-medium">$8.20</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Infrastructure</span>
                    <span className="font-medium">$15.00</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between items-center font-medium">
                    <span>Total (24h)</span>
                    <span>$54.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="errors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Error Logs</CardTitle>
              <CardDescription>System errors and their resolution status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {errorLogs.map((error, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-sm font-medium">{error.timestamp.split(' ')[1].split(':')[0]}:{error.timestamp.split(' ')[1].split(':')[1]}</div>
                        <div className="text-xs text-muted-foreground">{error.timestamp.split(' ')[0]}</div>
                      </div>
                      <div>
                        <p className="font-medium">{error.service}</p>
                        <p className="text-sm text-muted-foreground">{error.error}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getSeverityBadge(error.severity)}
                      {error.resolved ? (
                        <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                      ) : (
                        <Badge variant="destructive">Active</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Error Distribution</CardTitle>
                <CardDescription>Error types and frequency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Connection Timeouts</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rate Limit Exceeded</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>API Failures</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Network Issues</span>
                    <span className="font-medium">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resolution Metrics</CardTitle>
                <CardDescription>Error resolution performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Mean Time to Resolution</span>
                    <span className="font-medium">8.5 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Auto-resolved</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Manual Intervention</span>
                    <span className="font-medium">22%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Critical Errors (24h)</span>
                    <span className="font-medium">1</span>
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
