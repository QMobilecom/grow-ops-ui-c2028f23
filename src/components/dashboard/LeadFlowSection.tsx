
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, TrendingUp, Calendar, CheckCircle, Phone, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, FunnelChart, Funnel, Cell } from "recharts";

const funnelData = [
  { name: "Total Leads", value: 1000, fill: "#3b82f6" },
  { name: "Qualified", value: 750, fill: "#10b981" },
  { name: "Booked", value: 450, fill: "#f59e0b" },
  { name: "Closed", value: 285, fill: "#8b5cf6" },
];

const sourceData = [
  { source: "Inbound Calls", leads: 450, qualified: 340, booked: 220, closed: 145 },
  { source: "Outbound Campaigns", leads: 350, qualified: 280, booked: 180, closed: 110 },
  { source: "Website Forms", leads: 120, qualified: 90, booked: 50, closed: 20 },
  { source: "Social Media", leads: 80, qualified: 40, booked: 25, closed: 10 },
];

const pipelineData = [
  { stage: "New Lead", count: 125, percentage: 100 },
  { stage: "Contacted", count: 98, percentage: 78 },
  { stage: "Qualified", count: 76, percentage: 61 },
  { stage: "Proposal", count: 54, percentage: 43 },
  { stage: "Negotiation", count: 32, percentage: 26 },
  { stage: "Closed Won", count: 18, percentage: 14 },
];

export function LeadFlowSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Lead Flow & Funnel Analysis</h2>
          <p className="text-muted-foreground">Track lead progression through your sales pipeline</p>
        </div>
        <Button>
          <TrendingUp className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <Tabs defaultValue="funnel" className="space-y-6">
        <TabsList>
          <TabsTrigger value="funnel">Funnel View</TabsTrigger>
          <TabsTrigger value="sources">Lead Sources</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="funnel" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,000</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Qualified Rate</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75%</div>
                <p className="text-xs text-muted-foreground">750 of 1,000 leads</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Booking Rate</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45%</div>
                <p className="text-xs text-muted-foreground">450 appointments booked</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28.5%</div>
                <p className="text-xs text-muted-foreground">285 closed deals</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription>Lead progression through sales stages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pipelineData.map((stage, index) => (
                    <div key={stage.stage} className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">{stage.stage}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                        <div 
                          className="bg-blue-600 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium"
                          style={{ width: `${stage.percentage}%` }}
                        >
                          {stage.count}
                        </div>
                      </div>
                      <div className="w-12 text-sm text-muted-foreground">{stage.percentage}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lead Flow Stages</CardTitle>
                <CardDescription>Current leads in each stage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>New Leads</span>
                    </div>
                    <Badge variant="secondary">125</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Qualified</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">76</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>In Negotiation</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">32</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Ready to Close</span>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">18</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sources" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lead Source Performance</CardTitle>
              <CardDescription>Compare conversion rates across different lead sources</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={sourceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="source" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                  <Bar dataKey="leads" fill="#3b82f6" name="Total Leads" />
                  <Bar dataKey="qualified" fill="#10b981" name="Qualified" />
                  <Bar dataKey="booked" fill="#f59e0b" name="Booked" />
                  <Bar dataKey="closed" fill="#8b5cf6" name="Closed" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Sources</CardTitle>
                <CardDescription>Highest conversion rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Inbound Calls</span>
                    <div className="text-right">
                      <div className="font-medium text-green-600">32.2%</div>
                      <div className="text-sm text-muted-foreground">145/450 closed</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Outbound Campaigns</span>
                    <div className="text-right">
                      <div className="font-medium text-green-600">31.4%</div>
                      <div className="text-sm text-muted-foreground">110/350 closed</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Website Forms</span>
                    <div className="text-right">
                      <div className="font-medium text-yellow-600">16.7%</div>
                      <div className="text-sm text-muted-foreground">20/120 closed</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lead Quality Metrics</CardTitle>
                <CardDescription>Quality indicators by source</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Average Lead Score</span>
                    <span className="font-medium">8.3/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <span className="font-medium">2.5 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Follow-up Rate</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Duplicate Rate</span>
                    <span className="font-medium text-red-600">3.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pipeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pipeline Health Analysis</CardTitle>
              <CardDescription>Identify bottlenecks and optimization opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Bottleneck Analysis</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <span className="text-sm">Qualification Stage</span>
                      <Badge variant="destructive">22% drop-off</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="text-sm">Proposal Stage</span>
                      <Badge className="bg-yellow-100 text-yellow-800">18% drop-off</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Average Time in Stage</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Qualification</span>
                      <span>2.3 days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Proposal</span>
                      <span>5.1 days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Negotiation</span>
                      <span>8.7 days</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Pipeline Value</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Pipeline</span>
                      <span className="font-medium">$2.4M</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Weighted Value</span>
                      <span className="font-medium">$1.8M</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Expected Close</span>
                      <span className="font-medium">$950K</span>
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
