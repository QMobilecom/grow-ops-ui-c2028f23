
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Code, Headphones } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-white p-8 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Resources</h1>
          <p className="text-xl max-w-3xl mx-auto text-center mb-12">
            Access documentation, tutorials, guides, and other helpful resources to get the most out of Nova AI.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-green-400/50 transition-all duration-300 shadow-lg">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-full bg-green-400/20 flex items-center justify-center">
                  <Book className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Documentation</CardTitle>
                <CardDescription className="text-gray-300">Complete guides and API references</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Comprehensive documentation to help you integrate and customize Nova AI for your specific needs.
                </p>
                <Button 
                  className="bg-green-400 hover:bg-green-500 text-black font-medium transition-colors"
                >
                  View Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-green-400/50 transition-all duration-300 shadow-lg">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-full bg-green-400/20 flex items-center justify-center">
                  <Code className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Tutorials</CardTitle>
                <CardDescription className="text-gray-300">Step-by-step implementation guides</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Follow our detailed tutorials to learn how to implement and optimize Nova AI Voice Agents.
                </p>
                <Button 
                  className="bg-green-400 hover:bg-green-500 text-black font-medium transition-colors"
                >
                  Start Learning
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-green-400/50 transition-all duration-300 shadow-lg">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-full bg-green-400/20 flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Support</CardTitle>
                <CardDescription className="text-gray-300">24/7 expert assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Our team of experts is available around the clock to help you resolve any issues.
                </p>
                <Button 
                  className="bg-green-400 hover:bg-green-500 text-black font-medium transition-colors"
                >
                  Get Help
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
