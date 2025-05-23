
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, DollarSign, TrendingUp, Zap, AlertCircle } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const costData = [
  { month: "Jan", totalSpent: 1200, apiCosts: 800, callCosts: 400 },
  { month: "Feb", totalSpent: 1450, apiCosts: 950, callCosts: 500 },
  { month: "Mar", totalSpent: 1680, apiCosts: 1100, callCosts: 580 },
  { month: "Apr", totalSpent: 1920, apiCosts: 1250, callCosts: 670 },
  { month: "May", totalSpent: 2150, apiCosts: 1400, callCosts: 750 },
  { month: "Jun", totalSpent: 2420, apiCosts: 1580, callCosts: 840 },
];

const apiModels = [
  { name: "GPT-4", usage: 45000, cost: 900, color: "#3b82f6" },
  { name: "GPT-3.5", usage: 125000, cost: 250, color: "#10b981" },
  { name: "Text-to-Speech", usage: 8500, cost: 170, color: "#f59e0b" },
  { name: "Speech-to-Text", usage: 12000, cost: 120, color: "#ef4444" },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export function BillingSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Billing & Cost Management</h2>
          <p className="text-muted-foreground">Monitor costs, API usage, and manage billing preferences</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Download Invoice</Button>
          <Button>Upgrade Plan</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Cost Overview</TabsTrigger>
          <TabsTrigger value="usage">API Usage</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Attribution</TabsTrigger>
          <TabsTrigger value="settings">Billing Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,420</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Cost/Call</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1.02</div>
                <p className="text-xs text-muted-foreground">-$0.08 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Projected Monthly</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,850</div>
                <p className="text-xs text-muted-foreground">Based on current usage</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Budget Status</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">78%</div>
                <p className="text-xs text-muted-foreground">of monthly budget used</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cost Breakdown Over Time</CardTitle>
              <CardDescription>Track API costs and call expenses monthly</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={costData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip formatter={(value) => [`$${value}`, '']} />
                  <Area type="monotone" dataKey="apiCosts" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="callCosts" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>API Model Usage</CardTitle>
                <CardDescription>Distribution of costs across different AI models</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={apiModels}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="cost"
                    >
                      {apiModels.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`$${value}`, 'Cost']} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Model Usage Details</CardTitle>
                <CardDescription>Detailed breakdown of API model consumption</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apiModels.map((model, index) => (
                    <div key={model.name} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: COLORS[index] }}
                        ></div>
                        <div>
                          <p className="font-medium">{model.name}</p>
                          <p className="text-sm text-muted-foreground">{model.usage.toLocaleString()} tokens</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${model.cost}</p>
                        <p className="text-sm text-muted-foreground">this month</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Revenue Generated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">$45,200</div>
                <p className="text-xs text-muted-foreground">From AI voice agent calls</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">1,768%</div>
                <p className="text-xs text-muted-foreground">Return on investment</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Revenue/Cost Ratio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18.7:1</div>
                <p className="text-xs text-muted-foreground">Revenue per dollar spent</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Attribution</CardTitle>
              <CardDescription>Track revenue generated from different call outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Appointments Booked</p>
                    <p className="text-sm text-muted-foreground">774 appointments</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">$38,700</p>
                    <p className="text-sm text-muted-foreground">85.6% of revenue</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Direct Sales</p>
                    <p className="text-sm text-muted-foreground">126 sales</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">$5,040</p>
                    <p className="text-sm text-muted-foreground">11.2% of revenue</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Follow-ups</p>
                    <p className="text-sm text-muted-foreground">58 conversions</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">$1,460</p>
                    <p className="text-sm text-muted-foreground">3.2% of revenue</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Manage your billing details and payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/2027</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="default">Primary</Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button>Add Payment Method</Button>
                <Button variant="outline">Update Billing Address</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Alerts</CardTitle>
              <CardDescription>Set up notifications for cost thresholds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Monthly Budget Alert</p>
                  <p className="text-sm text-muted-foreground">Alert when 80% of budget is reached</p>
                </div>
                <Badge variant="default">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">High Usage Spike</p>
                  <p className="text-sm text-muted-foreground">Alert when daily costs exceed $150</p>
                </div>
                <Badge variant="secondary">Inactive</Badge>
              </div>
              <Button>Configure Alerts</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
