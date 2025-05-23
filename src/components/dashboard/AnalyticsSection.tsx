
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Line
} from "recharts";

const userAnalytics = [
  { date: "2024-01", sessions: 1200, pageviews: 4800, bounceRate: 45 },
  { date: "2024-02", sessions: 1450, pageviews: 5200, bounceRate: 42 },
  { date: "2024-03", sessions: 1680, pageviews: 6100, bounceRate: 38 },
  { date: "2024-04", sessions: 1920, pageviews: 7200, bounceRate: 35 },
  { date: "2024-05", sessions: 2150, pageviews: 8400, bounceRate: 33 },
  { date: "2024-06", sessions: 2420, pageviews: 9800, bounceRate: 30 },
];

const channelData = [
  { channel: "Organic Search", users: 890, conversion: 4.2 },
  { channel: "Direct", users: 650, conversion: 6.1 },
  { channel: "Social Media", users: 420, conversion: 2.8 },
  { channel: "Paid Ads", users: 320, conversion: 8.5 },
  { channel: "Email", users: 280, conversion: 12.3 },
  { channel: "Referral", users: 160, conversion: 5.7 },
];

const cohortData = [
  { week: "Week 1", retention: 100 },
  { week: "Week 2", retention: 65 },
  { week: "Week 4", retention: 45 },
  { week: "Week 8", retention: 35 },
  { week: "Week 12", retention: 28 },
  { week: "Week 16", retention: 25 },
];

export function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="traffic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="acquisition">Acquisition</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="retention">Retention</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Overview</CardTitle>
                <CardDescription>Sessions and pageviews over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={userAnalytics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="sessions" 
                      stackId="1" 
                      stroke="#3b82f6" 
                      fill="#3b82f6" 
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="pageviews" 
                      stackId="2" 
                      stroke="#06d6a0" 
                      fill="#06d6a0" 
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bounce Rate Trend</CardTitle>
                <CardDescription>Percentage of single-page sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userAnalytics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="bounceRate" 
                      stroke="#ef4444" 
                      strokeWidth={3}
                      dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="acquisition" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Acquisition Channels</CardTitle>
              <CardDescription>User acquisition by channel and conversion rates</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={channelData} layout="horizontal" margin={{ left: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis type="number" stroke="#64748b" />
                  <YAxis dataKey="channel" type="category" stroke="#64748b" width={80} />
                  <Tooltip />
                  <Bar dataKey="users" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="retention" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Retention Cohort</CardTitle>
              <CardDescription>Percentage of users returning over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={cohortData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="week" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="retention" 
                    stroke="#8b5cf6" 
                    fill="#8b5cf6" 
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
