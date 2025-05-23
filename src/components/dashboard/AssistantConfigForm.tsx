
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

interface AssistantConfigFormProps {
  assistant: {
    id: string;
    name: string;
    template: string;
    status: string;
  };
  onBack: () => void;
}

export function AssistantConfigForm({ assistant, onBack }: AssistantConfigFormProps) {
  const [expandedSections, setExpandedSections] = useState({
    model: true,
    voice: true,
    additionalVoice: true,
    transcriber: true,
    analysis: true
  });

  const [customVoiceId, setCustomVoiceId] = useState(false);
  const [backgroundNoise, setBackgroundNoise] = useState(true);
  const [confidenceThreshold, setConfidenceThreshold] = useState([0.8]);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{assistant.name}</h2>
          <div className="flex items-center gap-6 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Cost:</span>
              <span className="text-orange-500">~$0.1 /min</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Latency:</span>
              <span className="text-orange-500">~1690 ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Model Configuration */}
      <Card>
        <CardHeader 
          className="cursor-pointer" 
          onClick={() => toggleSection('model')}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Model</CardTitle>
              <CardDescription>Configure the behavior of the assistant.</CardDescription>
            </div>
            {expandedSections.model ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        </CardHeader>
        {expandedSections.model && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Provider</Label>
                <Select defaultValue="openai">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="openai">OpenAI</SelectItem>
                    <SelectItem value="deepseek">DeepSeek</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Model</Label>
                <Select defaultValue="gpt-4o-mini">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4o-mini">GPT 4o Mini Cluster</SelectItem>
                    <SelectItem value="gpt-4o">GPT 4o</SelectItem>
                    <SelectItem value="gpt-4">GPT 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>First Message</Label>
              <Input 
                placeholder="Hi, this is Rachel from Nogoody Payment Services—quick one, is now a good time?"
                defaultValue="Hi, this is Rachel from Nogoody Payment Services—quick one, is now a good time?"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>System Prompt</Label>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700">Generate</Button>
              </div>
              <Textarea 
                className="min-h-[200px] font-mono text-sm"
                defaultValue="Absolutely! Here is your full, elite-focused **Nogoody Payment Services sales system prompt** with the **role changed to Suzan Khalil**:

---

## Nogoody Payment Services – Conversational Sales System Prompt (Elite Customer Focus)

**Role:** Suzan Khalil, Senior Sales Specialist
**Company:** Nogoody Payment Services

---

### 🚀 Sales Call Flow (Elite Customer Edition)"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Max Tokens</Label>
                <Input type="number" defaultValue="1000" />
              </div>
              <div className="space-y-2">
                <Label>Temperature</Label>
                <Input type="number" step="0.1" defaultValue="0.7" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Knowledge Base</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select knowledge base" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Knowledge</SelectItem>
                  <SelectItem value="sales">Sales Documentation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Voice Configuration */}
      <Card>
        <CardHeader 
          className="cursor-pointer" 
          onClick={() => toggleSection('voice')}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Voice Configuration</CardTitle>
              <CardDescription>Select a voice from the list, or sync your voice library if it's missing.</CardDescription>
            </div>
            {expandedSections.voice ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        </CardHeader>
        {expandedSections.voice && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Provider</Label>
                <Select defaultValue="11labs">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="11labs">11labs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Voice</Label>
                <Select defaultValue="rachel">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rachel">Rachel</SelectItem>
                    <SelectItem value="aria">Aria</SelectItem>
                    <SelectItem value="roger">Roger</SelectItem>
                    <SelectItem value="sarah">Sarah</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch 
                id="custom-voice" 
                checked={customVoiceId}
                onCheckedChange={setCustomVoiceId}
              />
              <Label htmlFor="custom-voice">Add Voice ID Manually</Label>
            </div>

            {customVoiceId && (
              <div className="space-y-2">
                <Label>Custom Voice ID</Label>
                <Input placeholder="Enter your voice ID" />
              </div>
            )}

            <div className="space-y-2">
              <Label>Model</Label>
              <Select defaultValue="eleven_turbo_v2">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eleven_turbo_v2">Eleven_turbo_v2</SelectItem>
                  <SelectItem value="eleven_multilingual_v2">Eleven_multilingual_v2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Additional Voice Configuration */}
      <Card>
        <CardHeader 
          className="cursor-pointer" 
          onClick={() => toggleSection('additionalVoice')}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Additional Configuration</CardTitle>
              <CardDescription>Configure additional settings for the voice of your assistant.</CardDescription>
            </div>
            {expandedSections.additionalVoice ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        </CardHeader>
        {expandedSections.additionalVoice && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Background Sound</Label>
                <Select defaultValue="office">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="office">Office</SelectItem>
                    <SelectItem value="cafe">Cafe</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Background Sound URL</Label>
                <Input placeholder="https://www.soundjay.com/ambient/sounds/people-" />
              </div>
              <div className="space-y-2">
                <Label>Input Min Characters</Label>
                <Input type="number" defaultValue="10" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Stability</Label>
                <div className="px-3">
                  <Slider defaultValue={[0.5]} max={1} step={0.1} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>More Variable</span>
                    <span>More Stable</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Clarity + Similarity</Label>
                <div className="px-3">
                  <Slider defaultValue={[0.75]} max={1} step={0.1} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Low</span>
                    <span>High</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Speed</Label>
                <div className="px-3">
                  <Slider defaultValue={[0.9]} max={1} step={0.1} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Slower</span>
                    <span>Faster</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Transcriber */}
      <Card>
        <CardHeader 
          className="cursor-pointer" 
          onClick={() => toggleSection('transcriber')}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Transcriber</CardTitle>
              <CardDescription>This section allows you to configure the transcription settings for the assistant.</CardDescription>
            </div>
            {expandedSections.transcriber ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        </CardHeader>
        {expandedSections.transcriber && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Provider</Label>
                <Select defaultValue="deepgram">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deepgram">Deepgram</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Model</Label>
              <Select defaultValue="nova-3">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nova-3">Nova 3</SelectItem>
                  <SelectItem value="nova-2">Nova 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Switch 
                id="background-noise" 
                checked={backgroundNoise}
                onCheckedChange={setBackgroundNoise}
              />
              <Label htmlFor="background-noise">Background Denoising Enabled</Label>
            </div>

            <div className="space-y-2">
              <Label>Confidence Threshold</Label>
              <div className="px-3">
                <Slider 
                  value={confidenceThreshold} 
                  onValueChange={setConfidenceThreshold}
                  max={1} 
                  step={0.1} 
                  className="w-full" 
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0</span>
                  <span className="text-teal-400">{confidenceThreshold[0]}</span>
                  <span>1</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Transcripts with a confidence score below this threshold will be filtered out.
              </p>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Analysis */}
      <Card>
        <CardHeader 
          className="cursor-pointer" 
          onClick={() => toggleSection('analysis')}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Analysis</CardTitle>
              <CardDescription>Configure analysis settings for call insights.</CardDescription>
            </div>
            {expandedSections.analysis ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        </CardHeader>
        {expandedSections.analysis && (
          <CardContent className="space-y-6">
            {/* Summary */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Summary</h4>
                <p className="text-sm text-muted-foreground">
                  This is the prompt that's used to summarize the call. The output is stored in call.analysis.summary.
                </p>
              </div>
              <div className="space-y-2">
                <Label>Prompt</Label>
                <Textarea 
                  placeholder="You are an expert note-taker. You will be given a transcript of a call. Summarize the call in 2-3 sentences, if applicable."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Summary request timeout in seconds</Label>
                <div className="px-3">
                  <Slider defaultValue={[10]} min={1} max={60} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1 (sec)</span>
                    <span>60 (sec)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Evaluation */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Success Evaluation</h4>
                <p className="text-sm text-muted-foreground">
                  Evaluate if your call was successful. You can use Rubric standalone or in combination with Success Evaluation Prompt.
                </p>
              </div>
              <div className="space-y-2">
                <Label>Prompt</Label>
                <Textarea 
                  placeholder="You are an expert call evaluator. You will be given a transcript of a call and the system prompt of the AI participant. Determine if the call was successful based on the objectives inferred from the system prompt."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Success Evaluation Rubric</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Evaluation Rubric" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales Success Rubric</SelectItem>
                    <SelectItem value="support">Support Success Rubric</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Structured Data */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Structured Data</h4>
                <p className="text-sm text-muted-foreground">
                  Extract structured data from call conversation. You can use Data Schema standalone or in combination with Structured Data Prompt.
                </p>
              </div>
              <div className="space-y-2">
                <Label>Prompt</Label>
                <Textarea 
                  placeholder="You will be given a transcript of a call and the system prompt of the AI participant. Extract..."
                  className="min-h-[100px]"
                />
              </div>
              <Button variant="outline" size="sm">
                Add Property
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-teal-600 hover:bg-teal-700">
          Save Configuration
        </Button>
      </div>
    </div>
  );
}
