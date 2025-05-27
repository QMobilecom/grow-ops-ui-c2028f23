import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Users, UserCheck, Calendar, AlertTriangle, TrendingUp, Copy, Upload, Mail, Send, Clock, MailOpen, Reply } from "lucide-react";

const leadData = [
  { id: "1", name: "John Smith", phone: "+1 (555) 123-4567", source: "Website", status: "Qualified", score: 85, lastContact: "2025-05-23 10:30", followUpDate: "2025-05-24 14:00", duplicateRisk: false },
  { id: "2", name: "Sarah Johnson", phone: "+1 (555) 987-6543", source: "Facebook Ads", status: "New", score: 72, lastContact: "2025-05-23 09:15", followUpDate: "2025-05-24 11:00", duplicateRisk: true },
  { id: "3", name: "Mike Wilson", phone: "+1 (555) 456-7890", source: "Google Ads", status: "Contacted", score: 91, lastContact: "2025-05-22 16:45", followUpDate: "2025-05-23 15:30", duplicateRisk: false },
  { id: "4", name: "Emily Davis", phone: "+1 (555) 321-0987", source: "Referral", status: "Qualified", score: 78, lastContact: "2025-05-22 14:20", followUpDate: "2025-05-25 10:00", duplicateRisk: false },
];

const followUpQueue = [
  { id: "1", leadName: "John Smith", phone: "+1 (555) 123-4567", scheduledTime: "2025-05-24 14:00", priority: "High", lastAttempt: "2025-05-23 10:30", attempts: 2 },
  { id: "2", leadName: "Mike Wilson", phone: "+1 (555) 456-7890", scheduledTime: "2025-05-23 15:30", priority: "Medium", lastAttempt: "2025-05-22 16:45", attempts: 1 },
  { id: "3", leadName: "Sarah Johnson", phone: "+1 (555) 987-6543", scheduledTime: "2025-05-24 11:00", priority: "Low", lastAttempt: "2025-05-23 09:15", attempts: 1 },
];

const emailsSentData = [
  { id: "1", leadName: "John Smith", email: "john.smith@email.com", subject: "Follow-up on your inquiry", status: "Delivered", sentDate: "2025-05-23 14:30", openedDate: "2025-05-23 15:45", clicked: true, template: "Follow-up Template", needsFollowUp: false },
  { id: "2", leadName: "Sarah Johnson", email: "sarah.j@email.com", subject: "Welcome to our services", status: "Opened", sentDate: "2025-05-23 11:20", openedDate: "2025-05-23 12:10", clicked: false, template: "Welcome Template", needsFollowUp: true },
  { id: "3", leadName: "Mike Wilson", email: "mike.wilson@email.com", subject: "Special offer for you", status: "Bounced", sentDate: "2025-05-22 16:00", openedDate: null, clicked: false, template: "Promotion Template", needsFollowUp: true },
  { id: "4", leadName: "Emily Davis", email: "emily.davis@email.com", subject: "Thank you for your interest", status: "Delivered", sentDate: "2025-05-22 10:15", openedDate: null, clicked: false, template: "Thank You Template", needsFollowUp: true },
];

const emailsReceivedData = [
  { id: "1", leadName: "John Smith", email: "john.smith@email.com", subject: "Re: Follow-up on your inquiry", receivedDate: "2025-05-23 16:30", status: "Unread", priority: "High", responded: false, needsResponse: true },
  { id: "2", leadName: "Sarah Johnson", email: "sarah.j@email.com", subject: "Question about pricing", receivedDate: "2025-05-23 14:20", status: "Read", priority: "Medium", responded: true, needsResponse: false },
  { id: "3", leadName: "Mike Wilson", email: "mike.wilson@email.com", subject: "Schedule a call", receivedDate: "2025-05-22 11:45", status: "Read", priority: "High", responded: false, needsResponse: true },
  { id: "4", leadName: "Emily Davis", email: "emily.davis@email.com", subject: "Thank you for the information", receivedDate: "2025-05-22 09:15", status: "Read", priority: "Low", responded: true, needsResponse: false },
];

export function LeadHandlingSection() {
  const totalLeads = leadData.length;
  const qualifiedLeads = leadData.filter(lead => lead.status === "Qualified").length;
  const duplicateLeads = leadData.filter(lead => lead.duplicateRisk).length;
  const duplicateRate = (duplicateLeads / totalLeads) * 100;
  const averageScore = leadData.reduce((sum, lead) => sum + lead.score, 0) / totalLeads;

  const totalEmailsSent = emailsSentData.length;
  const deliveredEmails = emailsSentData.filter(email => email.status === "Delivered" || email.status === "Opened").length;
  const emailsNeedingFollowUp = emailsSentData.filter(email => email.needsFollowUp).length;
  const deliveryRate = (deliveredEmails / totalEmailsSent) * 100;
  const followUpRate = (emailsNeedingFollowUp / totalEmailsSent) * 100;

  const totalEmailsReceived = emailsReceivedData.length;
  const unreadEmails = emailsReceivedData.filter(email => email.status === "Unread").length;
  const emailsNeedingResponse = emailsReceivedData.filter(email => email.needsResponse).length;
  const responseRate = ((emailsReceivedData.filter(email => email.responded).length / totalEmailsReceived) * 100);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800 border-red-200";
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Qualified": return "bg-green-100 text-green-800 border-green-200";
      case "Contacted": return "bg-blue-100 text-blue-800 border-blue-200";
      case "New": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getEmailStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-800 border-green-200";
      case "Opened": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Bounced": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getEmailReceivedStatusColor = (status: string) => {
    switch (status) {
      case "Unread": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Read": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("CSV file selected:", file.name);
      // TODO: Process CSV file
    }
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Lead Handling</h2>
          <p className="text-gray-600">Manage leads, follow-ups, and quality tracking</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLeads}</div>
            <p className="text-xs text-muted-foreground">Active leads in pipeline</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{qualifiedLeads}</div>
            <p className="text-xs text-muted-foreground">{((qualifiedLeads / totalLeads) * 100).toFixed(1)}% qualification rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Duplicate Rate</CardTitle>
            <Copy className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{duplicateRate.toFixed(1)}%</div>
            <Progress value={duplicateRate} className="mt-2" />
            <p className="text-xs text-muted-foreground">{duplicateLeads} duplicate leads detected</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Quality Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageScore.toFixed(1)}</div>
            <p className="text-xs text-muted-foreground">Out of 100</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="leads" className="space-y-6">
        <TabsList>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="quality">Lead Quality</TabsTrigger>
          <TabsTrigger value="followup">Follow-up Queue</TabsTrigger>
          <TabsTrigger value="calendar">Follow-up Calendar</TabsTrigger>
          <TabsTrigger value="emails-sent">Emails Sent</TabsTrigger>
          <TabsTrigger value="emails-received">Emails Received</TabsTrigger>
        </TabsList>

        <TabsContent value="leads">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Lead Management</CardTitle>
                  <CardDescription>All leads with quality scores and status</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => document.getElementById('csv-upload')?.click()}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload CSV
                  </Button>
                  <input
                    id="csv-upload"
                    type="file"
                    accept=".csv"
                    onChange={handleCSVUpload}
                    className="hidden"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Quality Score</TableHead>
                    <TableHead>Last Contact</TableHead>
                    <TableHead>Follow-up Date</TableHead>
                    <TableHead>Duplicate Risk</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leadData.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.phone}</TableCell>
                      <TableCell>{lead.source}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(lead.status)}>
                          {lead.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{lead.score}</span>
                          <Progress value={lead.score} className="w-16" />
                        </div>
                      </TableCell>
                      <TableCell>{lead.lastContact}</TableCell>
                      <TableCell>{lead.followUpDate}</TableCell>
                      <TableCell>
                        {lead.duplicateRisk ? (
                          <Badge className="bg-red-100 text-red-800">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            Risk
                          </Badge>
                        ) : (
                          <Badge className="bg-green-100 text-green-800">Clean</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quality">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Lead Sources</CardTitle>
                <CardDescription>Sources with highest quality scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Referrals</span>
                    <div className="flex items-center gap-2">
                      <Progress value={91} className="w-16" />
                      <span className="text-sm font-medium">91</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Google Ads</span>
                    <div className="flex items-center gap-2">
                      <Progress value={85} className="w-16" />
                      <span className="text-sm font-medium">85</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Website</span>
                    <div className="flex items-center gap-2">
                      <Progress value={78} className="w-16" />
                      <span className="text-sm font-medium">78</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Facebook Ads</span>
                    <div className="flex items-center gap-2">
                      <Progress value={72} className="w-16" />
                      <span className="text-sm font-medium">72</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lead Quality Metrics</CardTitle>
                <CardDescription>Quality assessment breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>High Quality (80-100)</span>
                      <span>2 leads</span>
                    </div>
                    <Progress value={50} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Medium Quality (60-79)</span>
                      <span>2 leads</span>
                    </div>
                    <Progress value={50} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Low Quality (0-59)</span>
                      <span>0 leads</span>
                    </div>
                    <Progress value={0} className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="followup">
          <Card>
            <CardHeader>
              <CardTitle>Follow-up Queue</CardTitle>
              <CardDescription>Scheduled follow-up calls and their priority</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lead Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Scheduled Time</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Last Attempt</TableHead>
                    <TableHead>Attempts</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {followUpQueue.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.leadName}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell>{item.scheduledTime}</TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.lastAttempt}</TableCell>
                      <TableCell>{item.attempts}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Call Now</Button>
                          <Button size="sm" variant="outline">Reschedule</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Follow-ups</CardTitle>
                <CardDescription>Scheduled calls for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Mike Wilson</p>
                      <p className="text-sm text-gray-600">15:30 - High Priority</p>
                    </div>
                    <Button size="sm">Call</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">17:00 - Medium Priority</p>
                    </div>
                    <Button size="sm">Call</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tomorrow's Follow-ups</CardTitle>
                <CardDescription>Scheduled calls for tomorrow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">John Smith</p>
                      <p className="text-sm text-gray-600">14:00 - High Priority</p>
                    </div>
                    <Button size="sm" variant="outline">Scheduled</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Emily Davis</p>
                      <p className="text-sm text-gray-600">10:00 - Medium Priority</p>
                    </div>
                    <Button size="sm" variant="outline">Scheduled</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="emails-sent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
                <Send className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalEmailsSent}</div>
                <p className="text-xs text-muted-foreground">Emails sent to leads</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
                <Mail className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{deliveryRate.toFixed(1)}%</div>
                <Progress value={deliveryRate} className="mt-2" />
                <p className="text-xs text-muted-foreground">{deliveredEmails} delivered</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Need Follow-up</CardTitle>
                <Clock className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{emailsNeedingFollowUp}</div>
                <Progress value={followUpRate} className="mt-2" />
                <p className="text-xs text-muted-foreground">{followUpRate.toFixed(1)}% need follow-up</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="emails-received">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Received</CardTitle>
                  <MailOpen className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalEmailsReceived}</div>
                  <p className="text-xs text-muted-foreground">Emails from leads</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Unread</CardTitle>
                  <Mail className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{unreadEmails}</div>
                  <Progress value={(unreadEmails / totalEmailsReceived) * 100} className="mt-2" />
                  <p className="text-xs text-muted-foreground">Need attention</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
                  <Reply className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{responseRate.toFixed(1)}%</div>
                  <Progress value={responseRate} className="mt-2" />
                  <p className="text-xs text-muted-foreground">{emailsNeedingResponse} need response</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Received Emails</CardTitle>
                    <CardDescription>Track all emails received from leads</CardDescription>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Reply className="h-4 w-4 mr-2" />
                    Reply All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Lead Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Received Date</TableHead>
                      <TableHead>Needs Response</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {emailsReceivedData.map((email) => (
                      <TableRow key={email.id}>
                        <TableCell className="font-medium">{email.leadName}</TableCell>
                        <TableCell>{email.email}</TableCell>
                        <TableCell>{email.subject}</TableCell>
                        <TableCell>
                          <Badge className={getEmailReceivedStatusColor(email.status)}>
                            {email.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getPriorityColor(email.priority)}>
                            {email.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>{email.receivedDate}</TableCell>
                        <TableCell>
                          {email.needsResponse ? (
                            <Badge className="bg-orange-100 text-orange-800">
                              <Clock className="h-3 w-3 mr-1" />
                              Yes
                            </Badge>
                          ) : (
                            <Badge className="bg-green-100 text-green-800">No</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">Read</Button>
                            <Button size="sm" variant="outline">Reply</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
