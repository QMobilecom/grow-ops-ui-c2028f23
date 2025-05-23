
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PhoneCall, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  DollarSign,
  Target,
  Zap,
  BarChart3
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

const dashboardMetrics = [
  { date: "2024-01", calls: 1250, conversions: 285, revenue: 28500, cost: 1200 },
  { date: "2024-02", calls: 1450, conversions: 334, revenue: 33400, cost: 1450 },
  { date: "2024-03", calls: 1680, conversions: 402, revenue: 40200, cost: 1680 },
  { date: "2024-04", calls: 1920, conversions: 461, revenue: 46100, cost: 1920 },
  { date: "2024-05", calls: 2150, conversions: 516, revenue: 51600, cost: 2150 },
  { date: "2024-06", calls: 2420, conversions: 581, revenue: 58100, cost: 2420 },
];

const leadSources = [
  { name: "Inbound Calls", value: 45, color: "#3b82f6" },
  { name: "Outbound Campaigns", value: 35, color: "#10b981" },
  { name: "Follow-ups", value: 15, color: "#f59e0b" },
  { name: "Referrals", value: 5, color: "#ef4444" },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export function OverviewSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <p className="text-muted-foreground">Monitor your AI voice agents performance and key metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export Report</Button>
          <Button>Live Dashboard</Button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Calls Today</CardTitle>
            <PhoneCall className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+8% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.0%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue Today</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,042</div>
            <p className="text-xs text-muted-foreground">ROI: 1,768%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">12 concurrent calls</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList>
          <TabsTrigger value="analytics">Call Analytics</TabsTrigger>
          <TabsTrigger value="funnel">Funnel Analysis</TabsTrigger>
          <TabsTrigger value="leads">Lead Management</TabsTrigger>
          <TabsTrigger value="performance">AI Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Call Volume & Revenue</CardTitle>
                <CardDescription>Track call performance and revenue generation over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={dashboardMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip formatter={(value, name) => [
                      name === 'revenue' ? `$${value}` : value,
                      name === 'calls' ? 'Calls' : name === 'conversions' ? 'Conversions' : 'Revenue'
                    ]} />
                    <Area type="monotone" dataKey="calls" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="conversions" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lead Sources</CardTitle>
                <CardDescription>Distribution of leads by source type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={leadSources}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {leadSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">First Call Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">89.2%</div>
                <p className="text-xs text-muted-foreground">+3.1% improvement</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Avg Call Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4:32</div>
                <p className="text-xs text-muted-foreground">Optimal range: 3-6 min</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Human Escalation Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">3.2%</div>
                <p className="text-xs text-muted-foreground">Below 5% target</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="funnel" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
              <CardDescription>Track lead progression through the sales funnel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="font-medium">Total Calls</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">2,420</div>
                    <div className="text-sm text-muted-foreground">100%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg bg-green-50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span className="font-medium">Qualified Leads</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">1,694</div>
                    <div className="text-sm text-muted-foreground">70.0%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg bg-yellow-50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                    <span className="font-medium">Appointments Booked</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">774</div>
                    <div className="text-sm text-muted-foreground">32.0%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg bg-purple-50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="font-medium">Closed Deals</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">581</div>
                    <div className="text-sm text-muted-foreground">24.0%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leads" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,694</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hot Leads</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">89</div>
                <p className="text-xs text-muted-foreground">Require immediate follow-up</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Follow-up Queue</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">234</div>
                <p className="text-xs text-muted-foreground">Scheduled callbacks</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Duplicate Rate</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.1%</div>
                <p className="text-xs text-muted-foreground">Below 5% target</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Lead Sources</CardTitle>
              <CardDescription>Lead sources ranked by conversion rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Referral Program</p>
                    <p className="text-sm text-muted-foreground">156 leads</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">42.3%</p>
                    <p className="text-sm text-muted-foreground">conversion</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Google Ads</p>
                    <p className="text-sm text-muted-foreground">892 leads</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">28.7%</p>
                    <p className="text-sm text-muted-foreground">conversion</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Social Media</p>
                    <p className="text-sm text-muted-foreground">423 leads</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">19.2%</p>
                    <p className="text-sm text-muted-foreground">conversion</p>
                  </div>
                </div>
              </div>
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
                <p className="text-xs text-muted-foreground">Intent recognition</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Response Latency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.8s</div>
                <p className="text-xs text-muted-foreground">Average response time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">System Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">99.97%</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent System Alerts</CardTitle>
              <CardDescription>Monitor system health and performance issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <div className="flex-1">
                    <p className="font-medium">All systems operational</p>
                    <p className="text-sm text-muted-foreground">No active alerts</p>
                  </div>
                  <Badge variant="default">Healthy</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
