
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ActionButtons from "@/components/ActionButtons";
import MessageList from "@/components/MessageList";
import { getChatResponse } from "@/services/ai";

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message",
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
        onApiKeyChange={() => {}}
      />
      
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <ChatHeader />
        
        <div className={`flex h-full flex-col ${messages.length === 0 ? 'items-center justify-start pt-16' : 'justify-between'} pt-[60px] pb-4`}>
          {messages.length === 0 ? (
            <div className="w-full max-w-3xl px-4 space-y-8">
              <div className="text-center space-y-6">
                <h1 className="text-4xl font-semibold">Welcome to Our AI Assistant</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Our AI assistant is here to help you with various tasks including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-medium mb-2">General Questions</h3>
                    <p className="text-sm text-gray-400">Get answers to your questions on any topic</p>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-medium mb-2">Writing Assistance</h3>
                    <p className="text-sm text-gray-400">Help with writing, editing, and proofreading</p>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-medium mb-2">Problem Solving</h3>
                    <p className="text-sm text-gray-400">Get help with complex problems and calculations</p>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-medium mb-2">Learning Support</h3>
                    <p className="text-sm text-gray-400">Explanations and tutorials on various subjects</p>
                  </div>
                </div>
              </div>
              <div>
                <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
              </div>
            </div>
          ) : (
            <>
              <MessageList messages={messages} />
              <div className="w-full max-w-3xl mx-auto px-4 py-2">
                <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
              </div>
              <div className="text-xs text-center text-gray-500 py-2">
                Please verify any important information.
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
