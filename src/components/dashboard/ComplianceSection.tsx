
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Shield, CheckCircle, XCircle, AlertTriangle, Download } from "lucide-react";

const complianceData = [
  { id: "1", callId: "1a9ef26-86c7", customerPhone: "+974 (5532) 0001", consentGiven: true, timestamp: "2025-05-22 21:51:00", recordingConsent: true, dataProcessing: true },
  { id: "2", callId: "eec7c547-18a3", customerPhone: "+974 (5532) 0001", consentGiven: false, timestamp: "2025-05-22 21:48:00", recordingConsent: false, dataProcessing: true },
  { id: "3", callId: "f7545895-463e", customerPhone: "+974 (5532) 0001", consentGiven: true, timestamp: "2025-05-22 21:46:00", recordingConsent: true, dataProcessing: true },
  { id: "4", callId: "28af95a2-0803", customerPhone: "+974 (5500) 1996", consentGiven: true, timestamp: "2025-05-22 10:52:00", recordingConsent: true, dataProcessing: true },
];

export function ComplianceSection() {
  const totalCalls = complianceData.length;
  const consentGiven = complianceData.filter(call => call.consentGiven).length;
  const consentRate = (consentGiven / totalCalls) * 100;

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Compliance & Consent</h2>
          <p className="text-gray-600">Monitor compliance and consent management</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
            <Shield className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCalls}</div>
            <p className="text-xs text-muted-foreground">Tracked for compliance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consent Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{consentRate.toFixed(1)}%</div>
            <Progress value={consentRate} className="mt-2" />
            <p className="text-xs text-muted-foreground">{consentGiven} of {totalCalls} calls</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recording Consent</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <Progress value={75} className="mt-2" />
            <p className="text-xs text-muted-foreground">3 of 4 calls</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Processing</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <Progress value={100} className="mt-2" />
            <p className="text-xs text-muted-foreground">All calls compliant</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="logs" className="space-y-6">
        <TabsList>
          <TabsTrigger value="logs">Compliance Logs</TabsTrigger>
          <TabsTrigger value="consent">Consent Management</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Logging</CardTitle>
              <CardDescription>Detailed compliance records for all calls</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Call ID</TableHead>
                    <TableHead>Customer Phone</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Consent Given</TableHead>
                    <TableHead>Recording Consent</TableHead>
                    <TableHead>Data Processing</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {complianceData.map((call) => (
                    <TableRow key={call.id}>
                      <TableCell className="font-mono text-sm">{call.callId}</TableCell>
                      <TableCell>{call.customerPhone}</TableCell>
                      <TableCell>{call.timestamp}</TableCell>
                      <TableCell>
                        {call.consentGiven ? (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Yes
                          </Badge>
                        ) : (
                          <Badge className="bg-red-100 text-red-800">
                            <XCircle className="h-3 w-3 mr-1" />
                            No
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        {call.recordingConsent ? (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Yes
                          </Badge>
                        ) : (
                          <Badge className="bg-red-100 text-red-800">
                            <XCircle className="h-3 w-3 mr-1" />
                            No
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        {call.dataProcessing ? (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Compliant
                          </Badge>
                        ) : (
                          <Badge className="bg-red-100 text-red-800">
                            <XCircle className="h-3 w-3 mr-1" />
                            Non-compliant
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        {call.consentGiven && call.recordingConsent && call.dataProcessing ? (
                          <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                        ) : (
                          <Badge className="bg-yellow-100 text-yellow-800">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            Review Required
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Consent Scripts</CardTitle>
                <CardDescription>Manage consent request scripts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Recording Consent Script</h4>
                  <p className="text-sm text-gray-600">
                    "This call may be recorded for quality and training purposes. Do you consent to this recording?"
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">Edit Script</Button>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Data Processing Consent</h4>
                  <p className="text-sm text-gray-600">
                    "We may process your personal data to provide our services. Do you consent to this processing?"
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">Edit Script</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance Rules</CardTitle>
                <CardDescription>Configure compliance requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Require recording consent</span>
                  <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Require data processing consent</span>
                  <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Auto-stop on consent denial</span>
                  <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">GDPR compliance mode</span>
                  <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Report</CardTitle>
                <CardDescription>Compliance summary for the week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Calls:</span>
                    <span className="text-sm font-medium">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Consent Rate:</span>
                    <span className="text-sm font-medium">89.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Compliance Issues:</span>
                    <span className="text-sm font-medium text-red-600">5</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">Download Report</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Report</CardTitle>
                <CardDescription>Compliance summary for the month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Calls:</span>
                    <span className="text-sm font-medium">203</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Consent Rate:</span>
                    <span className="text-sm font-medium">91.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Compliance Issues:</span>
                    <span className="text-sm font-medium text-red-600">17</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">Download Report</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Annual Report</CardTitle>
                <CardDescription>Compliance summary for the year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Calls:</span>
                    <span className="text-sm font-medium">2,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Consent Rate:</span>
                    <span className="text-sm font-medium">93.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Compliance Issues:</span>
                    <span className="text-sm font-medium text-red-600">194</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">Download Report</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
