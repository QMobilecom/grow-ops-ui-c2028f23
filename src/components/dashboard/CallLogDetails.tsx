
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Play, Pause, Download, Copy, Trash2 } from "lucide-react";

interface CallLogDetailsProps {
  callId: string;
  onBack: () => void;
}

const transcriptData = [
  { speaker: "AI", message: "Hi, this is Rachel from No Cudi Payment Services. Quick one, is now a good time?", timestamp: "00:00" },
  { speaker: "User", message: "Yes, who's this?", timestamp: "00:05" },
  { speaker: "AI", message: "This is Rachel from Nokuti Payment Services. How are you today?", timestamp: "00:08" },
  { speaker: "User", message: "I'm good. How I can help you?", timestamp: "00:15" },
  { speaker: "AI", message: "Great to hear that, I'm - I'm glad to hear that. I wanted to reach out because we've noticed your business has a great reputation in the area, and we believe we could help streamline your payment processes. Do you handle the payment and finance decisions for your business?", timestamp: "00:18" },
  { speaker: "User", message: "No, I'm not the one.", timestamp: "00:45" },
];

export function CallLogDetails({ callId, onBack }: CallLogDetailsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("01:40");

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Call Logs
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Call Log Details</h2>
            <p className="text-gray-600">Call ID: {callId}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="border-red-300 text-red-600 hover:bg-red-50">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-900">Call Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500">Assistant</p>
              <p className="text-gray-900 font-medium">Noqoody Store</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="text-gray-900 font-medium">1m 40s</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-red-200">Fail</Badge>
            </div>
            <div>
              <p className="text-sm text-gray-500">Cost</p>
              <p className="text-gray-900 font-medium">$0.09</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-900 flex items-center justify-between">
            Recording
            <span className="text-sm text-gray-500">1.0x</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Button 
                size="sm" 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <span className="text-gray-900 font-mono">{currentTime}</span>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 ml-auto">
                Audio
              </Button>
            </div>
            
            <div className="relative">
              <div className="h-16 bg-gray-100 rounded-lg overflow-hidden border">
                {/* Audio waveform visualization */}
                <div className="flex items-center h-full px-2">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 mx-px bg-gradient-to-t from-blue-500 to-blue-300 rounded-sm"
                      style={{ height: `${Math.random() * 60 + 10}%` }}
                    />
                  ))}
                </div>
                {/* Timeline markers */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
                  <span>0</span>
                  <span>30</span>
                  <span>60</span>
                  <span>90</span>
                  <span>120</span>
                  <span>150</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="transcript" className="space-y-6">
        <TabsList className="bg-gray-100 border-gray-200">
          <TabsTrigger value="transcript" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-gray-700">Transcripts</TabsTrigger>
          <TabsTrigger value="logs" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-gray-700">Logs</TabsTrigger>
          <TabsTrigger value="analysis" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-gray-700">Analysis</TabsTrigger>
          <TabsTrigger value="messages" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-gray-700">Messages</TabsTrigger>
          <TabsTrigger value="cost" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-gray-700">Call Cost</TabsTrigger>
        </TabsList>

        <TabsContent value="transcript">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Transcript</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {transcriptData.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 text-sm text-gray-500">{item.timestamp}</div>
                    <div className="flex-1">
                      <div className={`inline-block px-3 py-2 rounded-lg max-w-[80%] ${
                        item.speaker === "AI" 
                          ? "bg-blue-100 text-blue-900 border border-blue-200" 
                          : "bg-gray-100 text-gray-900 border border-gray-200"
                      }`}>
                        <div className="text-xs opacity-75 mb-1">{item.speaker}</div>
                        <div>{item.message}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">System Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 font-mono text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <p>[2025-05-22 21:51:00] Call initiated</p>
                <p>[2025-05-22 21:51:02] Connection established</p>
                <p>[2025-05-22 21:51:05] User speech detected</p>
                <p>[2025-05-22 21:52:30] Silence timeout detected</p>
                <p>[2025-05-22 21:52:40] Call ended - Silence Timed Out</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Call Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Sentiment Analysis</h4>
                  <p className="text-gray-600">Customer sentiment: Neutral</p>
                  <p className="text-gray-600">Engagement level: Low</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Insights</h4>
                  <p className="text-gray-600">Customer indicated they are not the decision maker</p>
                  <p className="text-gray-600">Call ended due to silence timeout</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">No messages recorded for this call.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cost">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Call Cost Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">LLM Usage:</span>
                  <span className="text-gray-900">$0.05</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TTS:</span>
                  <span className="text-gray-900">$0.02</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">STT:</span>
                  <span className="text-gray-900">$0.01</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">VAPI:</span>
                  <span className="text-gray-900">$0.01</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between font-medium">
                  <span className="text-gray-900">Total:</span>
                  <span className="text-gray-900">$0.09</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
