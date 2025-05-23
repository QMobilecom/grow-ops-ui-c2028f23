
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, CheckCircle, XCircle, AlertTriangle, FileCheck, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const consentData = [
  { month: "Jan", consentRate: 89, violations: 2, compliant: 1248 },
  { month: "Feb", consentRate: 92, violations: 1, compliant: 1449 },
  { month: "Mar", consentRate: 94, violations: 1, compliant: 1679 },
  { month: "Apr", consentRate: 95, violations: 0, compliant: 1920 },
  { month: "May", consentRate: 96, violations: 0, compliant: 2150 },
  { month: "Jun", consentRate: 97, violations: 0, compliant: 2420 },
];

const complianceChecks = [
  { check: "DNC List Verification", status: "Passed", lastCheck: "2 hours ago", details: "All numbers verified against Do Not Call registry" },
  { check: "Consent Recording", status: "Passed", lastCheck: "Real-time", details: "All calls properly record consent" },
  { check: "TCPA Compliance", status: "Passed", lastCheck: "1 hour ago", details: "Call timing and frequency within limits" },
  { check: "GDPR Data Handling", status: "Passed", lastCheck: "30 minutes ago", details: "Personal data processed according to GDPR" },
  { check: "Call Recording Disclosure", status: "Warning", lastCheck: "5 minutes ago", details: "1 call missing disclosure statement" },
  { check: "Opt-out Mechanism", status: "Passed", lastCheck: "Real-time", details: "Opt-out requests processed immediately" },
];

const violationHistory = [
  { date: "2024-06-15", type: "Missing Disclosure", severity: "Low", resolved: true, description: "Call recording disclosure not played at start" },
  { date: "2024-05-22", type: "DNC Violation", severity: "High", resolved: true, description: "Called number on DNC list due to data sync delay" },
  { date: "2024-05-10", type: "Consent Issue", severity: "Medium", resolved: true, description: "Verbal consent not clearly recorded" },
  { date: "2024-04-28", type: "Time Restriction", severity: "Low", resolved: true, description: "Call made outside permitted hours" },
];

export function ComplianceSection() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Passed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "Failed":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Passed":
        return <Badge className="bg-green-100 text-green-800">Passed</Badge>;
      case "Warning":
        return <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>;
      case "Failed":
        return <Badge variant="destructive">Failed</Badge>;
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Compliance & Consent</h2>
          <p className="text-muted-foreground">Monitor regulatory compliance and consent management</p>
        </div>
        <Button>
          <FileCheck className="h-4 w-4 mr-2" />
          Generate Compliance Report
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="consent">Consent Management</TabsTrigger>
          <TabsTrigger value="violations">Violations & Alerts</TabsTrigger>
          <TabsTrigger value="settings">Compliance Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">97%</div>
                <p className="text-xs text-muted-foreground">+2% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Consent Rate</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">97%</div>
                <p className="text-xs text-muted-foreground">2,347 of 2,420 calls</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Violations</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">1</div>
                <p className="text-xs text-muted-foreground">Low severity</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">DNC Compliance</CardTitle>
                <XCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">100%</div>
                <p className="text-xs text-muted-foreground">0 violations this month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Consent Rate Trend</CardTitle>
                <CardDescription>Monthly consent rate and compliance tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={consentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Area type="monotone" dataKey="consentRate" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance Checks Status</CardTitle>
                <CardDescription>Real-time compliance monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceChecks.map((check) => (
                    <div key={check.check} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(check.status)}
                        <div>
                          <p className="font-medium">{check.check}</p>
                          <p className="text-sm text-muted-foreground">{check.details}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(check.status)}
                        <p className="text-xs text-muted-foreground mt-1">{check.lastCheck}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="consent" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Consent Tracking</CardTitle>
                <CardDescription>Detailed consent collection metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={consentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Bar dataKey="compliant" fill="#10b981" />
                    <Bar dataKey="violations" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consent Collection Methods</CardTitle>
                <CardDescription>How consent is being collected</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Verbal Consent (Recorded)</span>
                    <div className="text-right">
                      <div className="font-medium">94%</div>
                      <div className="text-sm text-muted-foreground">2,275 calls</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Prior Written Consent</span>
                    <div className="text-right">
                      <div className="font-medium">5%</div>
                      <div className="text-sm text-muted-foreground">121 calls</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>Opt-in from Website</span>
                    <div className="text-right">
                      <div className="font-medium">1%</div>
                      <div className="text-sm text-muted-foreground">24 calls</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Consent Activities</CardTitle>
              <CardDescription>Latest consent collection and opt-out activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <div>
                      <p className="font-medium">Verbal consent recorded</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567 • 2 minutes ago</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Collected</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <div>
                      <p className="font-medium">Opt-out request processed</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 987-6543 • 15 minutes ago</p>
                    </div>
                  </div>
                  <Badge variant="destructive">Opt-out</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <div>
                      <p className="font-medium">Prior consent verified</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 456-7890 • 1 hour ago</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Verified</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="violations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Violation History</CardTitle>
              <CardDescription>Track and manage compliance violations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {violationHistory.map((violation, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-sm font-medium">{violation.date.split('-')[2]}</div>
                        <div className="text-xs text-muted-foreground">{violation.date.split('-')[1]}/{violation.date.split('-')[0]}</div>
                      </div>
                      <div>
                        <p className="font-medium">{violation.type}</p>
                        <p className="text-sm text-muted-foreground">{violation.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getSeverityBadge(violation.severity)}
                      {violation.resolved ? (
                        <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                      ) : (
                        <Badge variant="destructive">Open</Badge>
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
                <CardTitle>Violation Types</CardTitle>
                <CardDescription>Most common compliance issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Missing Disclosure</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>DNC Violations</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Consent Issues</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Time Restrictions</span>
                    <span className="font-medium">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resolution Times</CardTitle>
                <CardDescription>Average time to resolve violations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Low Severity</span>
                    <span className="font-medium">2.3 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Medium Severity</span>
                    <span className="font-medium">1.2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>High Severity</span>
                    <span className="font-medium">0.5 hours</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between items-center font-medium">
                    <span>Average</span>
                    <span>1.7 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Configuration</CardTitle>
                <CardDescription>Configure compliance rules and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">DNC List Auto-Check</p>
                      <p className="text-sm text-muted-foreground">Automatically verify against Do Not Call registry</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Call Recording Disclosure</p>
                      <p className="text-sm text-muted-foreground">Require disclosure at start of each call</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Consent Verification</p>
                      <p className="text-sm text-muted-foreground">Verify consent before proceeding with call</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Time Zone Restrictions</p>
                      <p className="text-sm text-muted-foreground">Respect local calling hours (8 AM - 9 PM)</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alert Configuration</CardTitle>
                <CardDescription>Configure violation alerts and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Real-time Violation Alerts</p>
                      <p className="text-sm text-muted-foreground">Immediate notification for high-severity violations</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Daily Compliance Report</p>
                      <p className="text-sm text-muted-foreground">Automated daily compliance summary</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Weekly Audit Report</p>
                      <p className="text-sm text-muted-foreground">Comprehensive weekly compliance audit</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
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
