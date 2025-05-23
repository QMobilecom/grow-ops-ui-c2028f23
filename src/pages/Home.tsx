
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { 
  Phone, 
  Bot, 
  TrendingUp, 
  Clock, 
  Users, 
  PhoneCall, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap,
  Target,
  AlertTriangle,
  PieChart
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-gray-800 text-white border-gray-600">
            AI Voice Agent Platform
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Scale Your Sales with
            <br />
            AI Voice Agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Deploy intelligent voice agents that handle calls, qualify leads, and book meetings 24/7. 
            Increase your conversion rates while reducing operational costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">300%</div>
              <div className="text-gray-400">Increase in Lead Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50%</div>
              <div className="text-gray-400">Faster Qualification</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete AI Voice Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate and scale your voice operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Lead Qualification & Scoring Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  • Automatically rank and prioritize your raw lead lists by purchase intent—so your AI agents only dial the hottest prospects.
                  <br /><br />
                  • Delivers higher connect-to-meeting ratios by weeding out low-value contacts before you ever pick up the phone.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Real-Time Objection Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  • During live calls, detect and classify objections (price, timing, decision-maker, etc.) in real time, and prompt the agent with data-backed rebuttals.
                  <br /><br />
                  • Reduces hang-ups and dead-ends by up to 30%, so every call has a fighting chance at booking the next step.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <PieChart className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Integrated Analytics & ROI Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  • An all-in-one portal showing calls dialed → connects → booked meetings → closed deals, plus cost-per-lead and revenue-per-campaign.
                  <br /><br />
                  • Includes ROI forecasting and SLA-style reports you can share with stakeholders to prove your AI program's impact.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <Bot className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Intelligent Voice Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Deploy human-like AI agents that handle inbound and outbound calls with natural conversation flow.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Lead Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Automatically qualify, score, and route leads to the right team members based on custom criteria.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Track performance metrics, conversion rates, and ROI with comprehensive dashboards and reporting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Multi-channel Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Seamlessly integrate voice, SMS, and email communications for a complete outreach strategy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-400 mb-4" />
                <CardTitle className="text-white">Automation & Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Create custom workflows that trigger based on call outcomes, lead behavior, and business rules.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-400 mb-4" />
                <CardTitle className="text-white">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Bank-level security with end-to-end encryption, compliance monitoring, and audit trails.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300">
              Get started in minutes, not months
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Configure Your Agent</h3>
              <p className="text-gray-300">
                Set up your AI voice agent with custom scripts, goals, and personality traits in just a few clicks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Deploy & Monitor</h3>
              <p className="text-gray-300">
                Launch your agent and watch real-time analytics as it handles calls and qualifies leads automatically.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Scale & Optimize</h3>
              <p className="text-gray-300">
                Use insights from your dashboard to optimize performance and scale your operations effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Sales?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI voice agents to scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
