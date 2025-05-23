
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
    <div className="space-y-6 bg-gray-900 text-white p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Call Logs
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-white">Call Log Details</h2>
            <p className="text-gray-400">Call ID: {callId}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="border-red-600 text-red-400 hover:bg-red-600">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Call Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-400">Assistant</p>
              <p className="text-white font-medium">Noqoody Store</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Duration</p>
              <p className="text-white font-medium">1m 40s</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Status</p>
              <Badge variant="destructive">Fail</Badge>
            </div>
            <div>
              <p className="text-sm text-gray-400">Cost</p>
              <p className="text-white font-medium">$0.09</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            Recording
            <span className="text-sm text-gray-400">1.0x</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Button 
                size="sm" 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-green-600 hover:bg-green-700"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <span className="text-white font-mono">{currentTime}</span>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white ml-auto">
                Audio
              </Button>
            </div>
            
            <div className="relative">
              <div className="h-16 bg-gray-700 rounded-lg overflow-hidden">
                {/* Audio waveform visualization */}
                <div className="flex items-center h-full px-2">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 mx-px bg-gradient-to-t from-orange-500 to-cyan-400 rounded-sm"
                      style={{ height: `${Math.random() * 60 + 10}%` }}
                    />
                  ))}
                </div>
                {/* Timeline markers */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 px-2">
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
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="transcript" className="data-[state=active]:bg-gray-700 text-green-400">Transcripts</TabsTrigger>
          <TabsTrigger value="logs" className="data-[state=active]:bg-gray-700">Logs</TabsTrigger>
          <TabsTrigger value="analysis" className="data-[state=active]:bg-gray-700">Analysis</TabsTrigger>
          <TabsTrigger value="messages" className="data-[state=active]:bg-gray-700">Messages</TabsTrigger>
          <TabsTrigger value="cost" className="data-[state=active]:bg-gray-700">Call Cost</TabsTrigger>
        </TabsList>

        <TabsContent value="transcript">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Transcript</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {transcriptData.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 text-sm text-gray-400">{item.timestamp}</div>
                    <div className="flex-1">
                      <div className={`inline-block px-3 py-2 rounded-lg max-w-[80%] ${
                        item.speaker === "AI" 
                          ? "bg-green-600 text-white" 
                          : "bg-gray-700 text-white"
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
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">System Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 font-mono text-sm text-gray-400">
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
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Call Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Sentiment Analysis</h4>
                  <p className="text-gray-400">Customer sentiment: Neutral</p>
                  <p className="text-gray-400">Engagement level: Low</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Key Insights</h4>
                  <p className="text-gray-400">Customer indicated they are not the decision maker</p>
                  <p className="text-gray-400">Call ended due to silence timeout</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">No messages recorded for this call.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cost">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Call Cost Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">LLM Usage:</span>
                  <span className="text-white">$0.05</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">TTS:</span>
                  <span className="text-white">$0.02</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">STT:</span>
                  <span className="text-white">$0.01</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">VAPI:</span>
                  <span className="text-white">$0.01</span>
                </div>
                <div className="border-t border-gray-700 pt-2 flex justify-between font-medium">
                  <span className="text-white">Total:</span>
                  <span className="text-white">$0.09</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
