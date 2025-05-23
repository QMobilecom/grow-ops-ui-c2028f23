
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line } from "recharts";

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

const unsuccessfulCalls = [
  { assistant: "Noqoody Store", date: "22 May, 21:51", phone: "+97455320001", status: "Failed" },
  { assistant: "Noqoody Store", date: "22 May, 21:48", phone: "+97455320001", status: "Failed" },
  { assistant: "Noqoody Store", date: "22 May, 21:46", phone: "+97455320001", status: "Failed" },
  { assistant: "Noqoody Store", date: "22 May, 02:14", phone: "+97455320001", status: "Failed" },
  { assistant: "Untitled Assistant", date: "22 May, 01:24", phone: "No number", status: "Failed" },
];

export function CallAnalyticsOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Reason Call Ended</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={reasonCallEndedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                <Bar dataKey="exceededMaxDuration" stackId="a" fill="#ef4444" />
                <Bar dataKey="assistantEnded" stackId="a" fill="#3b82f6" />
                <Bar dataKey="customerDidNotAnswer" stackId="a" fill="#10b981" />
                <Bar dataKey="assistantSaidPhrase" stackId="a" fill="#f59e0b" />
                <Bar dataKey="pipelineError" stackId="a" fill="#8b5cf6" />
                <Bar dataKey="silenceTimedOut" stackId="a" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Average Call Duration by Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={avgCallDurationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                <Bar dataKey="riley" fill="#3b82f6" />
                <Bar dataKey="unknown" fill="#10b981" />
                <Bar dataKey="noqoody" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Cost Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={costBreakdownData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                <Bar dataKey="LLM" fill="#3b82f6" />
                <Bar dataKey="STT" fill="#10b981" />
                <Bar dataKey="TTS" fill="#f59e0b" />
                <Bar dataKey="VAPI" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Success Evaluation</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={successEvaluationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                <Bar dataKey="unknown" stackId="a" fill="#6b7280" />
                <Bar dataKey="false" stackId="a" fill="#ef4444" />
                <Bar dataKey="true" stackId="a" fill="#10b981" />
                <Bar dataKey="score85" stackId="a" fill="#f59e0b" />
                <Bar dataKey="score95" stackId="a" fill="#8b5cf6" />
                <Bar dataKey="score40" stackId="a" fill="#ec4899" />
                <Bar dataKey="score10" stackId="a" fill="#3b82f6" />
                <Bar dataKey="other" stackId="a" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Unsuccessful calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {unsuccessfulCalls.map((call, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">{call.assistant}</p>
                    <p className="text-sm text-gray-500">{call.date} • {call.phone}</p>
                  </div>
                  <Badge variant="destructive">{call.status}</Badge>
                </div>
              ))}
              <Button variant="link" className="text-blue-600 p-0 hover:text-blue-800">View More</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center justify-between">
              Number of Concurrent Calls
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Day</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={concurrentCallsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                <Line type="monotone" dataKey="calls" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
