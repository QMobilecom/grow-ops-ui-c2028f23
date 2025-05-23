import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, ChevronDown, ChevronUp, Settings, Clock, DollarSign, MessageSquare, Mic } from "lucide-react";

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
    analysis: true,
    advanced: false
  });

  const [customVoiceId, setCustomVoiceId] = useState(false);
  const [backgroundNoise, setBackgroundNoise] = useState(true);
  const [confidenceThreshold, setConfidenceThreshold] = useState([0.8]);
  const [hipaaCompliance, setHipaaCompliance] = useState(false);
  const [pciCompliance, setPciCompliance] = useState(false);
  const [audioRecording, setAudioRecording] = useState(true);
  const [videoRecording, setVideoRecording] = useState(true);
  const [smartEndpointing, setSmartEndpointing] = useState(false);
  const [enableKeypad, setEnableKeypad] = useState(false);
  const [waitSeconds, setWaitSeconds] = useState([0.4]);
  const [punctuationSeconds, setPunctuationSeconds] = useState([0.1]);
  const [noPunctuationSeconds, setNoPunctuationSeconds] = useState([1.5]);
  const [numberSeconds, setNumberSeconds] = useState([0.5]);
  const [numWords, setNumWords] = useState([1]);
  const [voiceSeconds, setVoiceSeconds] = useState([0.1]);
  const [backoffSeconds, setBackoffSeconds] = useState([0]);
  const [silenceTimeout, setSilenceTimeout] = useState([30]);
  const [maxDuration, setMaxDuration] = useState([1800]);
  const [keypadTimeout, setKeypadTimeout] = useState([2]);
  const [maxIdleMessages, setMaxIdleMessages] = useState([3]);
  const [idleTimeout, setIdleTimeout] = useState([7.5]);

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
          
          {/* Improved Cost and Latency Display */}
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg border border-gray-700">
              <DollarSign className="h-4 w-4 text-orange-500" />
              <div>
                <div className="text-xs text-gray-400">Cost</div>
                <div className="text-orange-500 font-medium">~$0.11 /min</div>
              </div>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden ml-3">
                <div className="h-full bg-gradient-to-r from-teal-500 via-orange-500 via-yellow-500 via-blue-500 to-cyan-500 w-1/4"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg border border-gray-700">
              <Clock className="h-4 w-4 text-orange-500" />
              <div>
                <div className="text-xs text-gray-400">Latency</div>
                <div className="text-orange-500 font-medium">~990 ms</div>
              </div>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden ml-3">
                <div className="h-full bg-gradient-to-r from-orange-500 via-yellow-500 via-blue-500 to-purple-500 w-1/3"></div>
              </div>
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

      {/* Advanced */}
      <Card>
        <CardHeader 
          className="cursor-pointer" 
          onClick={() => toggleSection('advanced')}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Advanced
              </CardTitle>
              <CardDescription>Advanced configuration options for fine-tuning assistant behavior.</CardDescription>
            </div>
            {expandedSections.advanced ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        </CardHeader>
        {expandedSections.advanced && (
          <CardContent className="space-y-6">
            {/* Privacy Section */}
            <div className="space-y-4">
              <h4 className="font-medium flex items-center gap-2">
                Privacy
                <span className="text-xs text-gray-500">This section allows you to configure the privacy settings for the assistant.</span>
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm">🛡️</span>
                    </div>
                    <div>
                      <div className="font-medium">HIPAA Compliance</div>
                      <div className="text-sm text-gray-500">When this is enabled, no logs, recordings, or transcriptions will be stored.</div>
                    </div>
                  </div>
                  <Switch checked={hipaaCompliance} onCheckedChange={setHipaaCompliance} />
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm">💳</span>
                    </div>
                    <div>
                      <div className="font-medium">PCI Compliance</div>
                      <div className="text-sm text-gray-500">When enabled, only PCI-compliant providers can be selected.</div>
                    </div>
                  </div>
                  <Switch checked={pciCompliance} onCheckedChange={setPciCompliance} />
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mic className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium">Audio Recording</div>
                      <div className="text-sm text-gray-500">Record the conversation with the assistant.</div>
                    </div>
                  </div>
                  <Switch checked={audioRecording} onCheckedChange={setAudioRecording} />
                </div>

                {audioRecording && (
                  <div className="ml-8 space-y-2">
                    <Label>Audio Recording Format</Label>
                    <Select defaultValue="wav">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wav">WAV</SelectItem>
                        <SelectItem value="mp3">MP3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm">📹</span>
                    </div>
                    <div>
                      <div className="font-medium">Video Recording</div>
                      <div className="text-sm text-gray-500">Enable or disable video recording during a web call. This will record the video of your user.</div>
                    </div>
                  </div>
                  <Switch checked={videoRecording} onCheckedChange={setVideoRecording} />
                </div>
              </div>
            </div>

            {/* Start Speaking Plan */}
            <div className="space-y-4">
              <h4 className="font-medium">Start Speaking Plan</h4>
              <p className="text-sm text-gray-500">This is the plan for when the assistant should start talking.</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium">Wait seconds</div>
                      <div className="text-sm text-gray-500">This is how long assistant waits before speaking.</div>
                    </div>
                  </div>
                  <div className="text-lg font-mono">{waitSeconds[0]}</div>
                </div>
                <div className="px-3">
                  <Slider value={waitSeconds} onValueChange={setWaitSeconds} max={5} step={0.1} className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0 (sec)</span>
                    <span>5 (sec)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs">🧠</span>
                    </div>
                    <div>
                      <div className="font-medium">Smart Endpointing</div>
                      <div className="text-sm text-gray-500">Enable for more accurate speech endpoint detection. LiveKit is only available in English.</div>
                    </div>
                  </div>
                  <Select value={smartEndpointing ? "on" : "off"} onValueChange={(value) => setSmartEndpointing(value === "on")}>
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="off">Off</SelectItem>
                      <SelectItem value="on">On</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <Label>On Punctuation Seconds</Label>
                    </div>
                    <div className="text-lg font-mono text-center">{punctuationSeconds[0]}</div>
                    <Slider value={punctuationSeconds} onValueChange={setPunctuationSeconds} max={3} step={0.1} />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0 (sec)</span>
                      <span>3 (sec)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <Label>On No Punctuation Seconds</Label>
                    </div>
                    <div className="text-lg font-mono text-center">{noPunctuationSeconds[0]}</div>
                    <Slider value={noPunctuationSeconds} onValueChange={setNoPunctuationSeconds} max={3} step={0.1} />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0 (sec)</span>
                      <span>3 (sec)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">#</span>
                    <Label>On Number Seconds</Label>
                  </div>
                  <div className="text-lg font-mono text-center">{numberSeconds[0]}</div>
                  <Slider value={numberSeconds} onValueChange={setNumberSeconds} max={3} step={0.1} />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0 (sec)</span>
                    <span>3 (sec)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Voicemail Detection */}
            <div className="space-y-4">
              <h4 className="font-medium">Voicemail Detection</h4>
              <p className="text-sm text-gray-500">Configure how the assistant detects and handles voicemail.</p>
              
              <div className="space-y-2">
                <Label>Voicemail Detection Provider</Label>
                <Select defaultValue="off">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="off">Off</SelectItem>
                    <SelectItem value="vapi">Vapi</SelectItem>
                    <SelectItem value="twilio">Twilio</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">Vapi uses advanced AI for detection. Google/OpenAI use simpler models. Twilio uses traditional AMD.</p>
              </div>
            </div>

            {/* Stop Speaking Plan */}
            <div className="space-y-4">
              <h4 className="font-medium">Stop Speaking Plan</h4>
              <p className="text-sm text-gray-500">This is the plan for when the assistant should stop talking.</p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">#</span>
                    <Label>Number of words</Label>
                  </div>
                  <p className="text-sm text-gray-500">This is the number of words that the customer has to say before the assistant will stop talking.</p>
                  <div className="text-lg font-mono text-center">{numWords[0]}</div>
                  <Slider value={numWords} onValueChange={setNumWords} max={10} step={1} />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0</span>
                    <span>10</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-gray-500" />
                    <Label>Voice seconds</Label>
                  </div>
                  <p className="text-sm text-gray-500">This is the seconds customer has to speak before the assistant stops talking.</p>
                  <div className="text-lg font-mono text-center">{voiceSeconds[0]}</div>
                  <Slider value={voiceSeconds} onValueChange={setVoiceSeconds} max={0.5} step={0.1} />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0 (sec)</span>
                    <span>0.5 (sec)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <Label>Back off seconds</Label>
                  </div>
                  <p className="text-sm text-gray-500">This is the seconds to wait before the assistant will start talking again after being interrupted.</p>
                  <div className="text-lg font-mono text-center">{backoffSeconds[0]}</div>
                  <Slider value={backoffSeconds} onValueChange={setBackoffSeconds} max={10} step={1} />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0 (sec)</span>
                    <span>10 (sec)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call Timeout Settings */}
            <div className="space-y-4">
              <h4 className="font-medium">Call Timeout Settings</h4>
              <p className="text-sm text-gray-500">Configure when the assistant should end a call based on silence or duration.</p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <Label>Silence Timeout</Label>
                  </div>
                  <p className="text-sm text-gray-500">How long to wait before a call is automatically ended due to inactivity.</p>
                  <div className="text-lg font-mono text-center">{silenceTimeout[0]}</div>
                  <Slider value={silenceTimeout} onValueChange={setSilenceTimeout} min={10} max={3600} step={10} />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>10 (sec)</span>
                    <span>3600 (sec)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <Label>Maximum Duration</Label>
                  </div>
                  <p className="text-sm text-gray-500">The maximum number of seconds a call will last.</p>
                  <div className="text-lg font-mono text-center">{maxDuration[0]}</div>
                  <Slider value={maxDuration} onValueChange={setMaxDuration} min={10} max={43200} step={10} />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>10 (sec)</span>
                    <span>43200 (sec)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Keypad Input Settings */}
            <div className="space-y-4">
              <h4 className="font-medium">Keypad Input Settings</h4>
              <p className="text-sm text-gray-500">Configure whether a user can input digits via the keypad, and when to process the input.</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm">⌨️</span>
                    </div>
                    <div>
                      <div className="font-medium">Enable Keypad Input</div>
                      <div className="text-sm text-gray-500">Accept user input via the keypad</div>
                    </div>
                  </div>
                  <Switch checked={enableKeypad} onCheckedChange={setEnableKeypad} />
                </div>

                {enableKeypad && (
                  <>
                    <div className="space-y-2 ml-8">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <Label>Timeout</Label>
                      </div>
                      <p className="text-sm text-gray-500">The number of seconds to wait before processing the user's keypad input. Set to 0 to only wait for a delimiter.</p>
                      <div className="text-lg font-mono text-center">{keypadTimeout[0]}</div>
                      <Slider value={keypadTimeout} onValueChange={setKeypadTimeout} max={10} step={1} />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0 (sec)</span>
                        <span>10 (sec)</span>
                      </div>
                    </div>

                    <div className="space-y-2 ml-8">
                      <Label>Delimiter</Label>
                      <p className="text-sm text-gray-500">A character that will be used to determine when to process the user's keypad input. If both delimiter and timeout are set, the first to be reached will cause the input to be processed.</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">#</Button>
                        <Button variant="outline" size="sm">*</Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Messaging */}
            <div className="space-y-4">
              <h4 className="font-medium">Messaging</h4>
              <p className="text-sm text-gray-500">Message configuration for messages that are sent to and from the assistant.</p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Server URL</Label>
                  <Input placeholder="https://api.example.com/function" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Secret Token</Label>
                    <Input type="password" placeholder="••••••••••••••••••••••••••••••" />
                  </div>
                  <div className="space-y-2">
                    <Label>Timeout (seconds)</Label>
                    <Input type="number" defaultValue="20" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>HTTP Headers</Label>
                    <Button size="sm" variant="outline">+ Add Header</Button>
                  </div>
                  <p className="text-sm text-gray-500">Custom HTTP headers to include in API requests to your server</p>
                  <div className="p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                    No headers configured. Click "Add Header" to add your first header.
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Client Messages</Label>
                  <p className="text-sm text-gray-500 italic">These are the messages that will be sent to the Client SDKs.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs">conversation-update</span>
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs">function-call</span>
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs">hang</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">+ 9 more</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Server Messages</Label>
                  <p className="text-sm text-gray-500 italic">These are the messages that will be sent to the Server URL configured.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs">conversation-update</span>
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs">end-of-call-report</span>
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs">function-call</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">+ 6 more</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Voicemail Message</Label>
                    <p className="text-sm text-gray-500">This is the message that the assistant will say if the call is forwarded to voicemail.</p>
                    <Textarea placeholder="Please call back when you're available." className="bg-gray-800 text-white" />
                  </div>

                  <div className="space-y-2">
                    <Label>End Call Message</Label>
                    <p className="text-sm text-gray-500">This is the message that the assistant will say if the call is ended.</p>
                    <Textarea placeholder="Goodbye." className="bg-gray-800 text-white" />
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Idle Messages</Label>
                      <p className="text-sm text-gray-500">Messages that the assistant will speak when the user hasn't responded.</p>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select idle messages" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="default">Default Messages</SelectItem>
                          <SelectItem value="custom">Custom Messages</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-gray-500" />
                        <Label>Max Idle Messages</Label>
                      </div>
                      <p className="text-sm text-gray-500">Maximum number of times idle messages can be spoken during the call.</p>
                      <div className="text-lg font-mono text-center">{maxIdleMessages[0]}</div>
                      <Slider value={maxIdleMessages} onValueChange={setMaxIdleMessages} min={1} max={10} step={1} />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>1</span>
                        <span>10</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <Label>Idle Timeout</Label>
                      </div>
                      <p className="text-sm text-gray-500">Timeout in seconds before an idle message is spoken.</p>
                      <div className="text-lg font-mono text-center">{idleTimeout[0]}</div>
                      <Slider value={idleTimeout} onValueChange={setIdleTimeout} min={5} max={60} step={0.5} />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>5 (sec)</span>
                        <span>60 (sec)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
