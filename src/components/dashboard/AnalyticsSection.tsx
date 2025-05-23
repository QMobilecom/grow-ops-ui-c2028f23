
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Users, Target, DollarSign, Phone, Clock, MessageSquare } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const funnelData = [
  { stage: "Leads Generated", count: 2420, percentage: 100 },
  { stage: "Qualified", count: 1936, percentage: 80 },
  { stage: "Booked", count: 774, percentage: 32 },
  { stage: "Closed", count: 581, percentage: 24 },
];

const leadSourceData = [
  { source: "Website", leads: 850, revenue: 45000, quality: 85 },
  { source: "Social Media", leads: 650, revenue: 32000, quality: 72 },
  { source: "Referrals", leads: 420, revenue: 28000, quality: 92 },
  { source: "Cold Outreach", leads: 300, revenue: 15000, quality: 58 },
  { source: "Paid Ads", leads: 200, revenue: 12000, quality: 65 },
];

const conversionData = [
  { month: "Jan", appointmentRate: 22, conversionRate: 18, escalationRate: 5 },
  { month: "Feb", appointmentRate: 25, conversionRate: 20, escalationRate: 4 },
  { month: "Mar", appointmentRate: 28, conversionRate: 22, escalationRate: 3 },
  { month: "Apr", appointmentRate: 30, conversionRate: 24, escalationRate: 3 },
  { month: "May", appointmentRate: 32, conversionRate: 26, escalationRate: 2.8 },
  { month: "Jun", appointmentRate: 35, conversionRate: 28, escalationRate: 2.5 },
];

const objectionData = [
  { objection: "Price concerns", frequency: 35, successRate: 75 },
  { objection: "Timing issues", frequency: 28, successRate: 60 },
  { objection: "Feature questions", frequency: 22, successRate: 85 },
  { objection: "Competitor comparison", frequency: 18, successRate: 68 },
  { objection: "Budget constraints", frequency: 15, successRate: 45 },
];

const costData = [
  { month: "Jan", totalCost: 2400, costPerCall: 1.2, costPerLead: 15, revenue: 35000 },
  { month: "Feb", totalCost: 2800, costPerCall: 1.15, costPerLead: 14, revenue: 42000 },
  { month: "Mar", totalCost: 3200, costPerCall: 1.1, costPerLead: 13, revenue: 48000 },
  { month: "Apr", totalCost: 3600, costPerCall: 1.05, costPerLead: 12.5, revenue: 55000 },
  { month: "May", totalCost: 4000, costPerCall: 1.0, costPerLead: 12, revenue: 62000 },
  { month: "Jun", totalCost: 4200, costPerCall: 0.95, costPerLead: 11.5, revenue: 68000 },
];

export function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Advanced Analytics</h2>
          <p className="text-muted-foreground">Comprehensive insights into funnel performance, lead quality, and conversion metrics</p>
        </div>
        <Button>Export Analytics Report</Button>
      </div>

      <Tabs defaultValue="funnel" className="space-y-6">
        <TabsList>
          <TabsTrigger value="funnel">Funnel & Lead Flow</TabsTrigger>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
          <TabsTrigger value="behavior">Agent Behavior</TabsTrigger>
          <TabsTrigger value="cost">Cost & ROI</TabsTrigger>
        </TabsList>

        <TabsContent value="funnel" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,420</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Qualified Rate</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">80.0%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  +2.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Booking Rate</CardTitle>
                <Phone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32.0%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  +1.8% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Close Rate</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.0%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  +0.5% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales Funnel</CardTitle>
                <CardDescription>Lead progression through the sales pipeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {funnelData.map((stage, index) => (
                    <div key={stage.stage} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{stage.stage}</span>
                        <span className="text-sm text-muted-foreground">{stage.count} ({stage.percentage}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
                          style={{ width: `${stage.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lead Sources Performance</CardTitle>
                <CardDescription>Quality and revenue by lead source</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={leadSourceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="source" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Bar dataKey="leads" fill="#3b82f6" />
                    <Bar dataKey="quality" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Appointment Booking Rate</CardTitle>
                <Phone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">35%</div>
                <p className="text-xs text-muted-foreground">+3% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Human Escalation Rate</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.5%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1 text-green-500" />
                  -0.3% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Intent Mismatch Rate</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.8%</div>
                <p className="text-xs text-muted-foreground">Industry benchmark: 3.2%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Concurrent Calls</CardTitle>
                <Phone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Peak: 18 calls</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Conversion Metrics Trend</CardTitle>
              <CardDescription>Track key performance indicators over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Line type="monotone" dataKey="appointmentRate" stroke="#3b82f6" strokeWidth={2} name="Appointment Rate %" />
                  <Line type="monotone" dataKey="conversionRate" stroke="#10b981" strokeWidth={2} name="Conversion Rate %" />
                  <Line type="monotone" dataKey="escalationRate" stroke="#f59e0b" strokeWidth={2} name="Escalation Rate %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Objection Handling Analysis</CardTitle>
                <CardDescription>Common objections and AI response effectiveness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {objectionData.map((objection) => (
                    <div key={objection.objection} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{objection.objection}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{objection.frequency}%</Badge>
                          <Badge variant={objection.successRate > 70 ? "default" : "secondary"}>
                            {objection.successRate}% success
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${objection.successRate}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Call Duration Analysis</CardTitle>
                <CardDescription>Average call duration by outcome</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Successful Appointments</span>
                    <span className="font-medium">6:42 avg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Qualified but Not Booked</span>
                    <span className="font-medium">4:18 avg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Not Qualified</span>
                    <span className="font-medium">2:35 avg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Human Escalation</span>
                    <span className="font-medium">8:22 avg</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Call End Reasons</CardTitle>
              <CardDescription>Why calls are ending and improvement opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">68%</div>
                  <p className="text-sm text-muted-foreground">Customer Ended (Natural)</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">15%</div>
                  <p className="text-sm text-muted-foreground">Assistant Completed Task</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">8%</div>
                  <p className="text-sm text-muted-foreground">Max Duration Reached</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">5%</div>
                  <p className="text-sm text-muted-foreground">Silence Timeout</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">3%</div>
                  <p className="text-sm text-muted-foreground">Human Escalation</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-red-600">1%</div>
                  <p className="text-sm text-muted-foreground">Technical Error</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cost" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Monthly Cost</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,200</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost per Call</CardTitle>
                <Phone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0.95</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1 text-green-500" />
                  -$0.05 from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost per Lead</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$11.50</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1 text-green-500" />
                  -$0.50 from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">ROI</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,519%</div>
                <p className="text-xs text-muted-foreground">Revenue: $68,000</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cost vs Revenue Trend</CardTitle>
              <CardDescription>Monthly cost analysis and revenue attribution</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={costData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="totalCost" stackId="2" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Cost Breakdown by Service</CardTitle>
                <CardDescription>Current month distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>LLM (OpenAI/DeepSeek)</span>
                    <span className="font-medium">$2,100 (50%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Voice Synthesis (11Labs)</span>
                    <span className="font-medium">$1,260 (30%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Speech-to-Text (Deepgram)</span>
                    <span className="font-medium">$630 (15%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>VAPI Platform</span>
                    <span className="font-medium">$210 (5%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projected Revenue Impact</CardTitle>
                <CardDescription>Revenue attribution from AI calls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Direct Appointments</span>
                    <span className="font-medium">$45,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Follow-up Conversions</span>
                    <span className="font-medium">$18,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Qualified Leads (Pipeline)</span>
                    <span className="font-medium">$5,000</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between items-center font-medium">
                    <span>Total Revenue Impact</span>
                    <span>$68,000</span>
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
