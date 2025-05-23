
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PhoneCall, Clock, Download, Copy, Phone, Globe } from "lucide-react";
import { CallLogDetails } from "./CallLogDetails";

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
  { 
    id: "f7ab5a37-ba5...", 
    assistant: "Noqoody Store", 
    assistantId: "3204f94c-8dff-480f-b...",
    assistantPhone: "+1 (620) 459 3009",
    assistantName: "Suzan",
    customerPhone: "+974 (5532) 0001", 
    callType: "Outbound",
    duration: "5m 2s", 
    status: "Pass", 
    endedReason: "Customer Ended Call",
    successEvaluation: "Pass",
    startTime: "22 May 2025, 02:22",
    cost: "$0.32"
  },
  { 
    id: "4c6b5558-e4c...", 
    assistant: "Noqoody Store", 
    assistantId: "3204f94c-8dff-480f-b...",
    assistantPhone: "N/A",
    assistantName: "N/A",
    customerPhone: "N/A", 
    callType: "Web",
    duration: "N/A", 
    status: "Fail", 
    endedReason: "Assistant Did Not Receiv...",
    successEvaluation: "N/A",
    startTime: "22 May 2025, 02:22",
    cost: "$0.00"
  },
  { 
    id: "67ae8961-159...", 
    assistant: "Noqoody Store", 
    assistantId: "3204f94c-8dff-480f-b...",
    assistantPhone: "+1 (620) 459 3009",
    assistantName: "Suzan",
    customerPhone: "+974 (5532) 0001", 
    callType: "Outbound",
    duration: "47s", 
    status: "Fail", 
    endedReason: "Pipeline error eleven la...",
    successEvaluation: "Fail",
    startTime: "22 May 2025, 02:14",
    cost: "$0.05"
  },
  { 
    id: "6018f48c-3e2...", 
    assistant: "No Assistant Assigned", 
    assistantId: "N/A",
    assistantPhone: "N/A",
    assistantName: "N/A",
    customerPhone: "N/A", 
    callType: "Web",
    duration: "5s", 
    status: "Fail", 
    endedReason: "Customer Ended Call",
    successEvaluation: "Fail",
    startTime: "22 May 2025, 01:24",
    cost: "$0.00"
  }
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
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">Pass</Badge>
    ) : (
      <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-red-200">Fail</Badge>
    );
  };

  const getEndedReasonBadge = (reason: string) => {
    const colorMap: { [key: string]: string } = {
      "Silence Timed Out": "bg-orange-100 text-orange-800 border-orange-200",
      "Customer Ended Call": "bg-blue-100 text-blue-800 border-blue-200", 
      "Max Duration Exceeded": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Assistant Did Not Receiv...": "bg-purple-100 text-purple-800 border-purple-200",
      "Pipeline error eleven la...": "bg-red-100 text-red-800 border-red-200"
    };
    
    return (
      <Badge className={colorMap[reason] || "bg-gray-100 text-gray-800 border-gray-200"}>
        {reason}
      </Badge>
    );
  };

  const getCallTypeIcon = (callType: string) => {
    if (callType === "Web") {
      return <Globe className="h-3 w-3 text-purple-500" />;
    }
    return <PhoneCall className="h-3 w-3 text-green-500" />;
  };

  const getCallTypeColor = (callType: string) => {
    switch (callType) {
      case "Inbound": return "bg-green-100 text-green-800 border-green-200";
      case "Outbound": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Web": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (selectedCall) {
    return <CallLogDetails callId={selectedCall} onBack={() => setSelectedCall(null)} />;
  }

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Call Logs</h2>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Logs</h3>
          
          <div className="flex gap-2 mb-4">
            {[
              { name: "Current", count: 56 },
              { name: "Transferred", count: 10 },
              { name: "Successful", count: 38 },
              { name: "Failed", count: 1 }
            ].map((filter) => (
              <Button 
                key={filter.name}
                variant={callFilter === filter.name ? "default" : "outline"}
                size="sm"
                onClick={() => setCallFilter(filter.name)}
                className={callFilter === filter.name 
                  ? "bg-blue-600 hover:bg-blue-700 border-blue-600 text-white" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }
              >
                {filter.name}
                <span className="ml-1 text-xs">{filter.count}</span>
              </Button>
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Note: The filter counts reflect only the logs currently loaded in the table.
          </p>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
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
              <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Export to CSV
              </Button>
            </div>
          </div>
        </div>

        <Card className="bg-white border-gray-200">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200 bg-gray-50">
                  <TableHead className="text-gray-700 font-medium">Call ID</TableHead>
                  <TableHead className="text-gray-700 font-medium">Assistant</TableHead>
                  <TableHead className="text-gray-700 font-medium">Assistant Phone Number</TableHead>
                  <TableHead className="text-gray-700 font-medium">Customer Phone Number</TableHead>
                  <TableHead className="text-gray-700 font-medium">Ended Reason</TableHead>
                  <TableHead className="text-gray-700 font-medium">Success Evaluation</TableHead>
                  <TableHead className="text-gray-700 font-medium">Start Time</TableHead>
                  <TableHead className="text-gray-700 font-medium">Duration</TableHead>
                  <TableHead className="text-gray-700 font-medium">Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCalls.map((call) => (
                  <TableRow 
                    key={call.id} 
                    className="border-gray-200 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedCall(call.id)}
                  >
                    <TableCell className="text-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm">{call.id}</span>
                        <Copy className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-gray-900">
                        <p className="font-medium">{call.assistant}</p>
                        <p className="text-sm text-gray-500">{call.assistantId}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-gray-900">
                        <p>{call.assistantPhone}</p>
                        {call.assistantName !== "N/A" && (
                          <p className="text-sm text-gray-500">{call.assistantName}</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getCallTypeIcon(call.callType)}
                        <span className="text-gray-900">{call.customerPhone}</span>
                        <Badge className={`text-xs ${getCallTypeColor(call.callType)}`}>
                          {call.callType}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getEndedReasonBadge(call.endedReason)}
                    </TableCell>
                    <TableCell>
                      {call.successEvaluation !== "N/A" ? getStatusBadge(call.successEvaluation) : <span className="text-gray-400">N/A</span>}
                    </TableCell>
                    <TableCell className="text-gray-700">{call.startTime}</TableCell>
                    <TableCell className="text-gray-700">{call.duration}</TableCell>
                    <TableCell className="text-gray-700">{call.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
