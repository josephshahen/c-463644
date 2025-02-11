
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
            <div className="w-full max-w-4xl px-4 space-y-12">
              <div className="text-center space-y-6">
                <h1 className="text-4xl font-semibold">مساعد نبراس الذكي</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  مرحباً بك في مساعد نبراس الذكي - منصتك الشاملة للمساعدة في مختلف المجالات
                </p>
              </div>

              {/* Featured Services */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">المساعدة التعليمية</h3>
                  <p className="text-gray-400 mb-4">نقدم دعماً شاملاً في جميع المواد الدراسية، مع شرح مفصل وأمثلة عملية</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• شرح المفاهيم الأساسية</li>
                    <li>• حل المسائل والتمارين</li>
                    <li>• تقديم أمثلة توضيحية</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">البحث والكتابة</h3>
                  <p className="text-gray-400 mb-4">نساعدك في كتابة المحتوى وإجراء البحوث بجودة عالية</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• كتابة المقالات والأبحاث</li>
                    <li>• تحرير وتدقيق المحتوى</li>
                    <li>• تنسيق وتنظيم الأفكار</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">الدعم التقني</h3>
                  <p className="text-gray-400 mb-4">نقدم حلولاً تقنية وإرشادات في مجال التكنولوجيا والبرمجة</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• حل المشكلات التقنية</li>
                    <li>• إرشادات البرمجة</li>
                    <li>• نصائح أمن المعلومات</li>
                  </ul>
                </div>
              </div>

              {/* How It Works */}
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-semibold">كيف يعمل المساعد الذكي؟</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-3xl mb-3">1</div>
                    <h4 className="font-medium mb-2">اطرح سؤالك</h4>
                    <p className="text-sm text-gray-400">اكتب سؤالك أو استفسارك بشكل واضح في مربع المحادثة</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-3xl mb-3">2</div>
                    <h4 className="font-medium mb-2">احصل على إجابة فورية</h4>
                    <p className="text-sm text-gray-400">سيقوم المساعد الذكي بتحليل سؤالك وتقديم إجابة دقيقة وشاملة</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-3xl mb-3">3</div>
                    <h4 className="font-medium mb-2">تابع المحادثة</h4>
                    <p className="text-sm text-gray-400">يمكنك طرح المزيد من الأسئلة للحصول على توضيحات إضافية</p>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="max-w-2xl mx-auto w-full">
                <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
                <p className="text-center text-sm text-gray-400 mt-4">ابدأ المحادثة الآن واحصل على المساعدة التي تحتاجها</p>
              </div>
            </div>
          ) : (
            <>
              <MessageList messages={messages} />
              <div className="w-full max-w-3xl mx-auto px-4 py-2">
                <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
              </div>
              <div className="text-xs text-center text-gray-500 py-2">
                يتم حفظ محادثاتك تلقائياً
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
