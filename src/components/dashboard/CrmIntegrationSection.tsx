import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Database, 
  RefreshCw, 
  TrendingUp, 
  DollarSign, 
  Target,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  BarChart3,
  AlertCircle,
  Plus
} from "lucide-react";

const crmConnections = [
  {
    name: "Salesforce",
    status: "Connected",
    lastSync: "2 minutes ago",
    records: 1247,
    leads: 89,
    deals: 23
  },
  {
    name: "HubSpot",
    status: "Connected",
    lastSync: "5 minutes ago",
    records: 892,
    leads: 45,
    deals: 12
  },
  {
    name: "Pipedrive",
    status: "Disconnected",
    lastSync: "2 hours ago",
    records: 0,
    leads: 0,
    deals: 0
  }
];

const roiMetrics = [
  {
    metric: "Total Revenue Generated",
    value: "$127,350",
    change: "+23%",
    period: "This month"
  },
  {
    metric: "Cost Per Lead",
    value: "$12.50",
    change: "-18%",
    period: "vs last month"
  },
  {
    metric: "Conversion Rate",
    value: "34.2%",
    change: "+8%",
    period: "This quarter"
  },
  {
    metric: "Average Deal Size",
    value: "$5,540",
    change: "+12%",
    period: "This month"
  }
];

const leadsByRole = [
  { role: "CEO", leads: 45, success: 78, conversion: "18.2%" },
  { role: "Sales Manager", leads: 89, success: 65, conversion: "24.7%" },
  { role: "Marketing Director", leads: 67, success: 82, conversion: "31.3%" },
  { role: "Operations Manager", leads: 34, success: 56, conversion: "15.8%" },
  { role: "Business Owner", leads: 123, success: 89, conversion: "42.1%" }
];

const intentMismatch = [
  {
    intent: "Product Demo",
    expected: 45,
    actual: 38,
    mismatch: "15.6%",
    issue: "Price concerns not addressed"
  },
  {
    intent: "Pricing Inquiry",
    expected: 89,
    actual: 78,
    mismatch: "12.4%",
    issue: "Feature confusion"
  },
  {
    intent: "Support Request",
    expected: 23,
    actual: 31,
    mismatch: "34.8%",
    issue: "Misrouted calls"
  }
];

export function CrmIntegrationSection() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Database className="h-6 w-6 text-blue-600" />
            CRM Integration
          </h2>
          <p className="text-gray-600">Sync data, track ROI, and measure performance across platforms</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add CRM
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="overview">CRM Sync</TabsTrigger>
          <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
          <TabsTrigger value="performance">Performance by Role</TabsTrigger>
          <TabsTrigger value="intent">Intent Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">Active Syncs</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mt-1">2/3</p>
                  <p className="text-xs text-green-600">Connected CRMs</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Total Records</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mt-1">2,139</p>
                  <p className="text-xs text-blue-600">Synced today</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600">Last Sync</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mt-1">2m</p>
                  <p className="text-xs text-green-600">ago</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>CRM Connections</CardTitle>
                <CardDescription>Manage your connected CRM platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {crmConnections.map((crm, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Database className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{crm.name}</h4>
                          <p className="text-sm text-gray-600">Last sync: {crm.lastSync}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">{crm.records} records</p>
                          <p className="text-xs text-gray-600">{crm.leads} leads, {crm.deals} deals</p>
                        </div>
                        <Badge className={
                          crm.status === "Connected" 
                            ? "bg-green-100 text-green-800 border-green-200" 
                            : "bg-red-100 text-red-800 border-red-200"
                        }>
                          {crm.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          {crm.status === "Connected" ? (
                            <RefreshCw className="h-3 w-3" />
                          ) : (
                            "Connect"
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="roi">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {roiMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{metric.metric}</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className={`text-xs font-medium ${
                        metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {metric.change}
                      </span>
                      <span className="text-xs text-gray-600">{metric.period}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>ROI Breakdown</CardTitle>
                <CardDescription>Detailed return on investment analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Revenue Sources</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">New Customers</span>
                          <span className="font-medium">$89,240</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Upsells</span>
                          <span className="font-medium">$28,110</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Renewals</span>
                          <span className="font-medium">$10,000</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Cost Analysis</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Platform Costs</span>
                          <span className="font-medium">$2,140</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Call Costs</span>
                          <span className="font-medium">$890</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Integration</span>
                          <span className="font-medium">$150</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Net ROI</span>
                      <span className="text-2xl font-bold text-green-600">3,970%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Success Rate by Role</CardTitle>
              <CardDescription>Performance metrics segmented by contact role</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Role</TableHead>
                    <TableHead>Total Leads</TableHead>
                    <TableHead>Successful Calls</TableHead>
                    <TableHead>Success Rate</TableHead>
                    <TableHead>Conversion Rate</TableHead>
                    <TableHead>Performance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leadsByRole.map((role, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{role.role}</TableCell>
                      <TableCell>{role.leads}</TableCell>
                      <TableCell>{role.success}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress 
                            value={(role.success / role.leads) * 100} 
                            className="w-16 h-2" 
                          />
                          <span className="text-sm">
                            {Math.round((role.success / role.leads) * 100)}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={
                          parseFloat(role.conversion) > 30 
                            ? "bg-green-100 text-green-800 border-green-200"
                            : parseFloat(role.conversion) > 20
                            ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                            : "bg-red-100 text-red-800 border-red-200"
                        }>
                          {role.conversion}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {parseFloat(role.conversion) > 30 ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="intent">
          <Card>
            <CardHeader>
              <CardTitle>Intent Mismatch Analysis</CardTitle>
              <CardDescription>Track when customer intent doesn't match expected outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Intent Category</TableHead>
                    <TableHead>Expected</TableHead>
                    <TableHead>Actual</TableHead>
                    <TableHead>Mismatch Rate</TableHead>
                    <TableHead>Primary Issue</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {intentMismatch.map((intent, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{intent.intent}</TableCell>
                      <TableCell>{intent.expected}</TableCell>
                      <TableCell>{intent.actual}</TableCell>
                      <TableCell>
                        <Badge className={
                          parseFloat(intent.mismatch) > 30 
                            ? "bg-red-100 text-red-800 border-red-200"
                            : parseFloat(intent.mismatch) > 15
                            ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                            : "bg-green-100 text-green-800 border-green-200"
                        }>
                          {intent.mismatch}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">{intent.issue}</TableCell>
                      <TableCell>
                        {parseFloat(intent.mismatch) > 20 ? (
                          <XCircle className="h-4 w-4 text-red-500" />
                        ) : (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
