import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Users, PhoneCall, Clock, CheckCircle, XCircle, DollarSign, AlertTriangle } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line } from "recharts";
import { CallAnalyticsOverview } from "./CallAnalyticsOverview";

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

const callVolumeData = [
  { name: "Mon", calls: 45, successful: 32 },
  { name: "Tue", calls: 52, successful: 38 },
  { name: "Wed", calls: 48, successful: 35 },
  { name: "Thu", calls: 61, successful: 44 },
  { name: "Fri", calls: 55, successful: 40 },
  { name: "Sat", calls: 35, successful: 25 },
  { name: "Sun", calls: 28, successful: 20 },
];

const revenueData = [
  { month: "Jan", revenue: 45000, calls: 1250 },
  { month: "Feb", revenue: 52000, calls: 1450 },
  { month: "Mar", revenue: 48000, calls: 1320 },
  { month: "Apr", revenue: 61000, calls: 1680 },
  { month: "May", revenue: 58000, calls: 1590 },
  { month: "Jun", revenue: 67000, calls: 1820 },
];

const conversionData = [
  { month: "Jan", leads: 850, appointments: 195, closed: 142 },
  { month: "Feb", leads: 920, appointments: 228, closed: 164 },
  { month: "Mar", leads: 890, appointments: 245, closed: 178 },
  { month: "Apr", leads: 1120, appointments: 285, closed: 205 },
  { month: "May", leads: 1050, appointments: 294, closed: 218 },
  { month: "Jun", leads: 1280, appointments: 345, closed: 262 },
];

export function OverviewSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <p className="text-muted-foreground">Your AI assistant performance at a glance</p>
        </div>
        <Button>Generate Report</Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="call-analytics">Call Analytics</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Calls Today</CardTitle>
                <PhoneCall className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  +12% from yesterday
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">84.2%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  +2.1% from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Call Duration</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4:32</div>
                <p className="text-xs text-muted-foreground">Optimal range</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue Today</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,247</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  +18% from yesterday
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Call Volume Trend</CardTitle>
                <CardDescription>Daily call volume and success rate</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={callVolumeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Area type="monotone" dataKey="calls" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="successful" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue & Call Correlation</CardTitle>
                <CardDescription>Monthly revenue vs call volume</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="calls" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Create New Assistant
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  View Live Calls
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Generate Revenue Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Important notifications and warnings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <div>
                    <p className="font-medium">High Call Volume</p>
                    <p className="text-sm text-muted-foreground">Consider scaling up resources</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="font-medium">All Systems Operational</p>
                    <p className="text-sm text-muted-foreground">No issues detected</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="call-analytics" className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Call Analytics</h3>
            <CallAnalyticsOverview />
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lead Conversion Funnel</CardTitle>
              <CardDescription>Track lead progression through your sales pipeline</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Bar dataKey="leads" fill="#3b82f6" />
                  <Bar dataKey="appointments" fill="#10b981" />
                  <Bar dataKey="closed" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
