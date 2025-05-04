
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ActionButtons from "@/components/ActionButtons";
import MessageList from "@/components/MessageList";
import { getChatResponse, setApiKey, getApiKey } from "@/services/ai";
import { Link } from "react-router-dom";

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKeyState] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    // Load previously stored API key on component mount
    const storedKey = getApiKey();
    if (storedKey) {
      setApiKeyState(storedKey);
    }
  }, []);

  const handleApiKeyChange = (newKey: string) => {
    setApiKeyState(newKey);
    if (newKey) {
      setApiKey(newKey);
      toast({
        title: "API Key Set",
        description: "Your OpenAI API key has been saved successfully.",
      });
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message",
        variant: "destructive"
      });
      return;
    }

    if (!getApiKey()) {
      toast({
        title: "API Key Required",
        description: "Please set your OpenAI API key in the sidebar first.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const newMessages = [
        ...messages,
        { role: 'user', content } as const
      ];
      
      setMessages(newMessages);

      const aiResponse = await getChatResponse(content);
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: aiResponse
      };

      setMessages([...newMessages, assistantMessage]);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onApiKeyChange={handleApiKeyChange}
      />
      
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <ChatHeader />
        
        <div className={`flex h-full flex-col ${messages.length === 0 ? 'items-center justify-start pt-16' : 'justify-between'} pt-[60px] pb-4`}>
          {messages.length === 0 ? (
            <div className="w-full max-w-4xl px-4 space-y-12">
              <div className="text-center space-y-6">
                <h1 className="text-4xl font-semibold">Nibras AI Assistant</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Welcome to Nibras AI Assistant - Your comprehensive platform for education, research, and technical support
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Educational Support</h3>
                  <p className="text-gray-400 mb-4">We provide comprehensive support in all subjects with detailed explanations and practical examples</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Explanation of core concepts</li>
                    <li>• Problem-solving assistance</li>
                    <li>• Clarifying examples</li>
                    <li>• Material review and analysis</li>
                    <li>• Study summary preparation</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Research & Writing</h3>
                  <p className="text-gray-400 mb-4">We help you create content and conduct research with high quality standards</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Article and research writing</li>
                    <li>• Content editing and review</li>
                    <li>• Idea organization</li>
                    <li>• Research data analysis</li>
                    <li>• Citation and references</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Technical Support</h3>
                  <p className="text-gray-400 mb-4">We provide technical solutions and guidance in technology and programming</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Technical troubleshooting</li>
                    <li>• Programming guidance</li>
                    <li>• Information security tips</li>
                    <li>• Web and app development</li>
                    <li>• System performance optimization</li>
                  </ul>
                </div>
              </div>

              <div className="text-center space-y-8">
                <h2 className="text-2xl font-semibold">Nibras AI Platform Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">Advanced AI</h4>
                    <p className="text-gray-400">Using the latest AI technology to provide accurate and personalized responses</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">24/7 Support</h4>
                    <p className="text-gray-400">Available 24/7 to provide immediate assistance whenever you need it</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">Privacy & Security</h4>
                    <p className="text-gray-400">Your data protection and privacy secured with latest security technologies</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Nibras AI?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">High accuracy in answers and analysis</p>
                    </div>
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">Comprehensive coverage of various fields</p>
                    </div>
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">Multilingual support</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">Continuous content and service updates</p>
                    </div>
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">User-friendly interface</p>
                    </div>
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">Exceptional technical support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold">Important Links</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/about" className="text-blue-400 hover:text-blue-300">About Us</Link>
                  <Link to="/blog" className="text-blue-400 hover:text-blue-300">Blog</Link>
                  <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
                  <Link to="/terms" className="text-blue-400 hover:text-blue-300">Terms & Conditions</Link>
                  <Link to="/contact" className="text-blue-400 hover:text-blue-300">Contact Us</Link>
                </div>
              </div>

              <div className="max-w-2xl mx-auto w-full">
                <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
                <p className="text-center text-sm text-gray-400 mt-4">Start chatting now and get the help you need</p>
              </div>
            </div>
          ) : (
            <>
              <MessageList messages={messages} />
              <div className="w-full max-w-3xl mx-auto px-4 py-2">
                <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
              </div>
              <div className="text-xs text-center text-gray-500 py-2">
                Your conversations are automatically saved
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
