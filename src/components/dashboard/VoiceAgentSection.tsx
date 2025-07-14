import { useState, useCallback } from "react";
import { useConversation } from "@11labs/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Phone, PhoneOff, Volume2, VolumeX } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Top voices with their ElevenLabs voice IDs
const VOICES = [
  { id: "9BWtsMINqrJLrRacOk9x", name: "Aria" },
  { id: "CwhRBWXzGAHq8TQ4Fs17", name: "Roger" },
  { id: "EXAVITQu4vr4xnSDxMaL", name: "Sarah" },
  { id: "FGY2WhTYpPnrIDTdsKH5", name: "Laura" },
  { id: "IKne3meq5aSn9XLyUdCD", name: "Charlie" },
  { id: "JBFqnCBsd6RMkjVDRZzb", name: "George" },
  { id: "N2lVS1w4EtoT3dr4eOWO", name: "Callum" },
  { id: "SAz9YHcvj6GT2YYXdXww", name: "River" },
  { id: "TX3LPaxmHKxFdv7VOQHJ", name: "Liam" },
  { id: "XB0fDUnXU5powFXDhCwa", name: "Charlotte" }
];

const MODELS = [
  { id: "eleven_multilingual_v2", name: "Eleven Multilingual v2" },
  { id: "eleven_turbo_v2_5", name: "Eleven Turbo v2.5" },
  { id: "eleven_turbo_v2", name: "Eleven Turbo v2" }
];

export function VoiceAgentSection() {
  const { toast } = useToast();
  const [agentId, setAgentId] = useState("");
  const [selectedVoice, setSelectedVoice] = useState(VOICES[0].id);
  const [selectedModel, setSelectedModel] = useState(MODELS[0].id);
  const [customPrompt, setCustomPrompt] = useState("");
  const [volume, setVolume] = useState(0.8);
  const [conversationId, setConversationId] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      toast({
        title: "Connected",
        description: "Voice conversation started successfully",
      });
    },
    onDisconnect: () => {
      toast({
        title: "Disconnected",
        description: "Voice conversation ended",
      });
      setConversationId(null);
    },
    onError: (error: any) => {
      const errorMessage = error?.message || (typeof error === 'string' ? error : 'Unknown error');
      toast({
        title: "Error",
        description: `Voice conversation error: ${errorMessage}`,
        variant: "destructive",
      });
    },
    overrides: {
      agent: {
        prompt: {
          prompt: customPrompt || "You are a helpful AI assistant.",
        },
        firstMessage: "Hello! How can I help you today?",
        language: "en",
      },
      tts: {
        voiceId: selectedVoice,
        model: selectedModel,
      },
    },
  });

  const startConversation = useCallback(async () => {
    console.log("🚀 Starting conversation with agent ID:", agentId);
    
    if (!agentId.trim()) {
      toast({
        title: "Agent ID Required",
        description: "Please enter an agent ID to start the conversation",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log("🎤 Requesting microphone access...");
      // Request microphone access
      await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log("✅ Microphone access granted");
      
      console.log("🔗 Generating signed URL...");
      // Generate signed URL (in a real app, this should be done on your server)
      const API_KEY = "sk_e89cdf72dbaac5dd3365aa318504a2da287bc5b58169e895";
      const response = await fetch(
        `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`,
        {
          method: "GET",
          headers: {
            "xi-api-key": API_KEY,
          },
        }
      );

      console.log("📡 API Response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ API Error:", errorText);
        throw new Error(`Failed to get signed URL: ${response.status} ${errorText}`);
      }

      const body = await response.json();
      console.log("✅ Signed URL received:", body.signed_url ? "✓" : "✗");
      
      console.log("🔌 Starting WebSocket session...");
      const conversationIdResult = await conversation.startSession({ 
        signedUrl: body.signed_url 
      });
      
      console.log("✅ Conversation started with ID:", conversationIdResult);
      setConversationId(conversationIdResult);
    } catch (error) {
      console.error("❌ Conversation start failed:", error);
      toast({
        title: "Failed to Start",
        description: error instanceof Error ? error.message : "Failed to start voice conversation",
        variant: "destructive",
      });
    }
  }, [agentId, conversation, toast]);

  const endConversation = useCallback(async () => {
    try {
      await conversation.endSession();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to end conversation properly",
        variant: "destructive",
      });
    }
  }, [conversation, toast]);

  const handleVolumeChange = useCallback(async (newVolume: number) => {
    setVolume(newVolume);
    try {
      await conversation.setVolume({ volume: newVolume });
    } catch (error) {
      console.error("Failed to set volume:", error);
    }
  }, [conversation]);

  const isConnected = conversation.status === "connected";
  const isDisconnected = conversation.status === "disconnected";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Voice Agent</h2>
          <p className="text-muted-foreground">
            Configure and manage ElevenLabs voice conversations
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Configuration</CardTitle>
            <CardDescription>
              Set up your voice agent parameters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="agentId">Agent ID</Label>
              <Input
                id="agentId"
                value={agentId}
                onChange={(e) => setAgentId(e.target.value)}
                placeholder="Enter your ElevenLabs agent ID"
                disabled={isConnected}
              />
            </div>

            <div>
              <Label htmlFor="voice">Voice</Label>
              <Select value={selectedVoice} onValueChange={setSelectedVoice} disabled={isConnected}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {VOICES.map((voice) => (
                    <SelectItem key={voice.id} value={voice.id}>
                      {voice.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="model">Model</Label>
              <Select value={selectedModel} onValueChange={setSelectedModel} disabled={isConnected}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MODELS.map((model) => (
                    <SelectItem key={model.id} value={model.id}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="prompt">Custom Prompt (Optional)</Label>
              <Input
                id="prompt"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Enter custom system prompt"
                disabled={isConnected}
              />
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Voice Controls</CardTitle>
            <CardDescription>
              Manage your voice conversation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge variant={isConnected ? "default" : "secondary"}>
                {isConnected ? "Connected" : "Disconnected"}
              </Badge>
              {conversation.isSpeaking && (
                <Badge variant="outline">
                  AI Speaking
                </Badge>
              )}
            </div>

            <div className="flex gap-2">
              {isDisconnected ? (
                <Button onClick={startConversation} className="flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Start Conversation
                </Button>
              ) : (
                <Button onClick={endConversation} variant="destructive" className="flex-1">
                  <PhoneOff className="mr-2 h-4 w-4" />
                  End Conversation
                </Button>
              )}
            </div>

            {isConnected && (
              <div className="space-y-2">
                <Label>Volume: {Math.round(volume * 100)}%</Label>
                <div className="flex items-center space-x-2">
                  <VolumeX className="h-4 w-4" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="flex-1"
                  />
                  <Volume2 className="h-4 w-4" />
                </div>
              </div>
            )}

            {conversationId && (
              <div className="text-sm text-muted-foreground">
                <strong>Conversation ID:</strong> {conversationId}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}