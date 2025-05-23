import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PhoneCall, Clock, CheckCircle, XCircle, TrendingUp, Users, AlertTriangle, Play, ChevronDown, Copy, Download } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line } from "recharts";
import { CallLogDetails } from "./CallLogDetails";

const callMetrics = [
  { date: "2024-01", totalCalls: 1250, successful: 950, appointments: 380, conversions: 285 },
  { date: "2024-02", totalCalls: 1450, successful: 1120, appointments: 445, conversions: 334 },
  { date: "2024-03", totalCalls: 1680, successful: 1340, appointments: 521, conversions: 402 },
  { date: "2024-04", totalCalls: 1920, successful: 1536, appointments: 614, conversions: 461 },
  { date: "2024-05", totalCalls: 2150, successful: 1720, appointments: 688, conversions: 516 },
  { date: "2024-06", totalCalls: 2420, successful: 1936, appointments: 774, conversions: 581 },
];

const reasonCallEndedData = [
  { month: "Apr 22", assistantEnded: 10, customerDidNotAnswer: 5, assistantSaidPhrase: 3, exceededMaxDuration: 38, pipelineError: 2, callInProgress: 1, silenceTimedOut: 8 },
  { month: "Apr 26", assistantEnded: 8, customerDidNotAnswer: 4, assistantSaidPhrase: 2, exceededMaxDuration: 4, pipelineError: 1, callInProgress: 0, silenceTimedOut: 3 },
  { month: "May 1", assistantEnded: 6, customerDidNotAnswer: 3, assistantSaidPhrase: 1, exceededMaxDuration: 3, pipelineError: 1, callInProgress: 0, silenceTimedOut: 2 },
  { month: "May 8", assistantEnded: 12, customerDidNotAnswer: 6, assistantSaidPhrase: 4, exceededMaxDuration: 9, pipelineError: 2, callInProgress: 1, silenceTimedOut: 4 },
];

const avgCallDurationData = [
  { month: "Apr 22", riley: 0, unknown: 0, noqoody: 0 },
  { month: "Apr 26", riley: 2, unknown: 0, noqoody: 0 },
  { month: "Apr 30", riley: 2.5, unknown: 0, noqoody: 0 },
  { month: "May 1", riley: 1.8, unknown: 0, noqoody: 0 },
  { month: "May 8", riley: 2.2, unknown: 0, noqoody: 0 },
  { month: "May 14", riley: 1.9, unknown: 0, noqoody: 0 },
  { month: "May 17", riley: 2.8, unknown: 0, noqoody: 0 },
  { month: "May 20", riley: 4, unknown: 4.2, noqoody: 3.5 },
  { month: "May 25", riley: 0, unknown: 0, noqoody: 0 },
];

const costBreakdownData = [
  { month: "Apr 22", LLM: 0, STT: 0, TTS: 0, VAPI: 0 },
  { month: "Apr 26", LLM: 0, STT: 0, TTS: 0, VAPI: 0 },
  { month: "Apr 30", LLM: 0, STT: 0, TTS: 0, VAPI: 0 },
  { month: "May 1", LLM: 0, STT: 0, TTS: 0, VAPI: 0 },
  { month: "May 8", LLM: 0, STT: 0, TTS: 0, VAPI: 0 },
  { month: "May 14", LLM: 0, STT: 0, TTS: 0, VAPI: 0 },
  { month: "May 17", LLM: 0, STT: 0, TTS: 0, VAPI: 0 },
  { month: "May 20", LLM: 4, STT: 0, TTS: 0, VAPI: 1.8 },
  { month: "May 25", LLM: 0, STT: 0, TTS: 0, VAPI: 0 },
];

const successEvaluationData = [
  { month: "Apr 22", unknown: 0, false: 0, true: 0, score85: 0, score95: 0, score40: 0, score10: 0, other: 0 },
  { month: "Apr 26", unknown: 0, false: 0, true: 0, score85: 0, score95: 0, score40: 0, score10: 0, other: 0 },
  { month: "Apr 30", unknown: 0, false: 0, true: 0, score85: 0, score95: 0, score40: 0, score10: 0, other: 0 },
  { month: "May 1", unknown: 0, false: 0, true: 0, score85: 0, score95: 0, score40: 0, score10: 0, other: 0 },
  { month: "May 8", unknown: 37, false: 8, true: 9, score85: 3, score95: 2, score40: 1, score10: 2, other: 1 },
  { month: "May 14", unknown: 0, false: 0, true: 0, score85: 0, score95: 0, score40: 0, score10: 0, other: 0 },
  { month: "May 17", unknown: 0, false: 0, true: 0, score85: 0, score95: 0, score40: 0, score10: 0, other: 0 },
  { month: "May 20", unknown: 0, false: 0, true: 0, score85: 0, score95: 0, score40: 0, score10: 0, other: 0 },
  { month: "May 25", unknown: 0, false: 0, true: 0, score85: 0, score95: 0, score40: 0, score10: 0, other: 9 },
];

const concurrentCallsData = [
  { time: "2025-05-11 03:00", calls: 1 },
  { time: "2025-05-15 03:00", calls: 2 },
  { time: "2025-05-20 03:00", calls: 1 },
  { time: "2025-05-22 03:00", calls: 1 },
];

const recentCalls = [
  { 
    id: "1a9ef26-86c7-4c9a-8901-cb1175af3ad", 
    assistant: "Noqoody Store", 
    assistantId: "3204f94c-8dff-480f-b...",
    assistantPhone: "+1 (620) 459 3009",
    assistantName: "Suzan",
    customerPhone: "+974 (5532) 0001", 
    callType: "Inbound",
    duration: "1m 40s", 
    status: "Fail", 
    endedReason: "Silence Timed Out",
    successEvaluation: "Fail",
    startTime: "22 May 2025, 21:51",
    cost: "$0.09"
  },
  { 
    id: "eec7c547-18a3-4c9a-8901-cb1175af3ad", 
    assistant: "Noqoody Store", 
    assistantId: "3204f94c-8dff-480f-b...",
    assistantPhone: "+1 (620) 459 3009",
    assistantName: "Suzan",
    customerPhone: "+974 (5532) 0001", 
    callType: "Inbound",
    duration: "2m 38s", 
    status: "Fail", 
    endedReason: "Customer Ended Call",
    successEvaluation: "Fail",
    startTime: "22 May 2025, 21:48",
    cost: "$0.14"
  },
  { 
    id: "f7545895-463e-4c9a-8901-cb1175af3ad", 
    assistant: "Noqoody Store", 
    assistantId: "3204f94c-8dff-480f-b...",
    assistantPhone: "+1 (620) 459 3009",
    assistantName: "Suzan",
    customerPhone: "+974 (5532) 0001", 
    callType: "Inbound",
    duration: "1m 34s", 
    status: "Fail", 
    endedReason: "Silence Timed Out",
    successEvaluation: "Fail",
    startTime: "22 May 2025, 21:46",
    cost: "$0.09"
  },
  { 
    id: "28af95a2-0803-4c9a-8901-cb1175af3ad", 
    assistant: "Noqoody Store", 
    assistantId: "3204f94c-8dff-480f-b...",
    assistantPhone: "+1 (620) 459 3009",
    assistantName: "Suzan",
    customerPhone: "+974 (5500) 1996", 
    callType: "Outbound",
    duration: "6m 8s", 
    status: "Pass", 
    endedReason: "Customer Ended Call",
    successEvaluation: "Pass",
    startTime: "22 May 2025, 10:52",
    cost: "$0.38"
  },
  { 
    id: "517cb8b8-abc3-4c9a-8901-cb1175af3ad", 
    assistant: "Noqoody Store", 
    assistantId: "3204f94c-8dff-480f-b...",
    assistantPhone: "+1 (620) 459 3009",
    assistantName: "Suzan",
    customerPhone: "+974 (5532) 0001", 
    callType: "Outbound",
    duration: "10m 0s", 
    status: "Pass", 
    endedReason: "Max Duration Exceeded",
    successEvaluation: "Pass",
    startTime: "22 May 2025, 02:34",
    cost: "$0.62"
  },
];

const unsuccessfulCalls = [
  { assistant: "Noqoody Store", date: "22 May, 21:51", phone: "+97455320001", status: "Failed" },
  { assistant: "Noqoody Store", date: "22 May, 21:48", phone: "+97455320001", status: "Failed" },
  { assistant: "Noqoody Store", date: "22 May, 21:46", phone: "+97455320001", status: "Failed" },
  { assistant: "Noqoody Store", date: "22 May, 02:14", phone: "+97455320001", status: "Failed" },
  { assistant: "Untitled Assistant", date: "22 May, 01:24", phone: "No number", status: "Failed" },
];

export function CallLogsSection() {
  const [selectedCall, setSelectedCall] = useState<string | null>(null);
  const [callFilter, setCallFilter] = useState("Current");

  const filteredCalls = recentCalls.filter(call => {
    switch (callFilter) {
      case "Current": return true;
      case "Transferred": return false;
      case "Successful": return call.status === "Pass";
      case "Failed": return call.status === "Fail";
      default: return true;
    }
  });

  const getStatusBadge = (status: string) => {
    return status === "Pass" ? (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Pass</Badge>
    ) : (
      <Badge variant="destructive">Fail</Badge>
    );
  };

  const getEndedReasonBadge = (reason: string) => {
    const colorMap: { [key: string]: string } = {
      "Silence Timed Out": "bg-orange-100 text-orange-800",
      "Customer Ended Call": "bg-cyan-100 text-cyan-800", 
      "Max Duration Exceeded": "bg-yellow-100 text-yellow-800",
      "Assistant Did Not Receive...": "bg-purple-100 text-purple-800",
      "Pipeline error eleven la...": "bg-red-100 text-red-800"
    };
    
    return (
      <Badge className={colorMap[reason] || "bg-gray-100 text-gray-800"}>
        {reason}
      </Badge>
    );
  };

  if (selectedCall) {
    return <CallLogDetails callId={selectedCall} onBack={() => setSelectedCall(null)} />;
  }

  return (
    <div className="space-y-6 bg-gray-900 text-white p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Call Analysis</h2>
          <p className="text-gray-400">Track call performance, conversions, and AI insights</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Export Data</Button>
      </div>

      <Tabs defaultValue="analysis" className="space-y-6">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="analysis" className="data-[state=active]:bg-gray-700">Call Analysis</TabsTrigger>
          <TabsTrigger value="logs" className="data-[state=active]:bg-gray-700">Call Logs</TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:bg-gray-700">AI Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="analysis" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Reason Call Ended</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={reasonCallEndedData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                    <Bar dataKey="exceededMaxDuration" stackId="a" fill="#FB923C" />
                    <Bar dataKey="assistantEnded" stackId="a" fill="#6366F1" />
                    <Bar dataKey="customerDidNotAnswer" stackId="a" fill="#10B981" />
                    <Bar dataKey="assistantSaidPhrase" stackId="a" fill="#F59E0B" />
                    <Bar dataKey="pipelineError" stackId="a" fill="#06B6D4" />
                    <Bar dataKey="silenceTimedOut" stackId="a" fill="#8B5CF6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Average Call Duration by Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={avgCallDurationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                    <Bar dataKey="riley" fill="#6366F1" />
                    <Bar dataKey="unknown" fill="#10B981" />
                    <Bar dataKey="noqoody" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Cost Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={costBreakdownData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                    <Bar dataKey="LLM" fill="#6366F1" />
                    <Bar dataKey="STT" fill="#10B981" />
                    <Bar dataKey="TTS" fill="#F59E0B" />
                    <Bar dataKey="VAPI" fill="#06B6D4" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Success Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={successEvaluationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                    <Bar dataKey="unknown" stackId="a" fill="#6B7280" />
                    <Bar dataKey="false" stackId="a" fill="#F87171" />
                    <Bar dataKey="true" stackId="a" fill="#34D399" />
                    <Bar dataKey="score85" stackId="a" fill="#FBBF24" />
                    <Bar dataKey="score95" stackId="a" fill="#A78BFA" />
                    <Bar dataKey="score40" stackId="a" fill="#FB7185" />
                    <Bar dataKey="score10" stackId="a" fill="#60A5FA" />
                    <Bar dataKey="other" stackId="a" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Unsuccessful calls</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {unsuccessfulCalls.map((call, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-700 rounded-lg">
                      <div>
                        <p className="font-medium text-white">{call.assistant}</p>
                        <p className="text-sm text-gray-400">{call.date} • {call.phone}</p>
                      </div>
                      <Badge variant="destructive">{call.status}</Badge>
                    </div>
                  ))}
                  <Button variant="link" className="text-cyan-400 p-0">View More</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  Number of Concurrent Calls
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Day</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={concurrentCallsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                    <Line type="monotone" dataKey="calls" stroke="#06B6D4" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="logs" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <PhoneCall className="h-5 w-5" />
                Call Logs
              </CardTitle>
              <div className="flex gap-2 mt-4">
                {["Current", "Transferred", "Successful", "Failed"].map((filter) => (
                  <Button 
                    key={filter}
                    variant={callFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCallFilter(filter)}
                    className={callFilter === filter ? "bg-cyan-600 hover:bg-cyan-700" : "border-gray-600 text-gray-300 hover:bg-gray-700"}
                  >
                    {filter}
                    {filter === "Current" && <span className="ml-1 text-xs">56</span>}
                    {filter === "Transferred" && <span className="ml-1 text-xs">10</span>}
                    {filter === "Successful" && <span className="ml-1 text-xs">38</span>}
                    {filter === "Failed" && <span className="ml-1 text-xs">1</span>}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-2">Note: The filter counts reflect only the logs currently loaded in the table.</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Date and Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Cost</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Call Type</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Assistant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Call ID</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Success Evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Ended Reason</span>
                </div>
                <div className="ml-auto">
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                    Export to CSV
                  </Button>
                </div>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Call ID</TableHead>
                    <TableHead className="text-gray-300">Assistant</TableHead>
                    <TableHead className="text-gray-300">Assistant Phone Number</TableHead>
                    <TableHead className="text-gray-300">Customer Phone Number</TableHead>
                    <TableHead className="text-gray-300">Ended Reason</TableHead>
                    <TableHead className="text-gray-300">Success Evaluation</TableHead>
                    <TableHead className="text-gray-300">Start Time</TableHead>
                    <TableHead className="text-gray-300">Duration</TableHead>
                    <TableHead className="text-gray-300">Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCalls.map((call) => (
                    <TableRow 
                      key={call.id} 
                      className="border-gray-700 hover:bg-gray-700 cursor-pointer"
                      onClick={() => setSelectedCall(call.id)}
                    >
                      <TableCell className="text-gray-300">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm">{call.id}</span>
                          <Copy className="h-3 w-3 text-gray-500" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-white">
                          <p className="font-medium">{call.assistant}</p>
                          <p className="text-sm text-gray-400">{call.assistantId}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-white">
                          <p>{call.assistantPhone}</p>
                          <p className="text-sm text-gray-400">{call.assistantName}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <PhoneCall className="h-3 w-3 text-green-400" />
                          <span className="text-white">{call.customerPhone}</span>
                          <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                            {call.callType}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getEndedReasonBadge(call.endedReason)}
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(call.successEvaluation)}
                      </TableCell>
                      <TableCell className="text-gray-300">{call.startTime}</TableCell>
                      <TableCell className="text-gray-300">{call.duration}</TableCell>
                      <TableCell className="text-gray-300">{call.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
                <p className="text-xs text-muted-foreground">Intent recognition accuracy</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Avg Latency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.8s</div>
                <p className="text-xs text-muted-foreground">Response time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Token Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">125K</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Error Tracking</CardTitle>
              <CardDescription>Monitor system errors and performance issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <div>
                      <p className="font-medium">High Latency Warning</p>
                      <p className="text-sm text-muted-foreground">Response time exceeded 2s threshold</p>
                    </div>
                  </div>
                  <Badge variant="secondary">3 occurrences</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <div>
                      <p className="font-medium">API Connection Failed</p>
                      <p className="text-sm text-muted-foreground">External service timeout</p>
                    </div>
                  </div>
                  <Badge variant="secondary">1 occurrence</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
