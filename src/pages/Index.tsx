
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ActionButtons from "@/components/ActionButtons";
import MessageList from "@/components/MessageList";
import { getChatResponse } from "@/services/ai";
import { Link } from "react-router-dom";

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
        title: "خطأ",
        description: "الرجاء إدخال رسالة",
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
        title: "خطأ",
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
                <h1 className="text-4xl font-semibold">مساعد نبراس للذكاء الاصطناعي</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  مرحباً بك في مساعد نبراس للذكاء الاصطناعي - منصتك الشاملة للمساعدة في مجالات التعليم والبحث العلمي والدعم التقني
                </p>
              </div>

              {/* خدماتنا المميزة */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">الدعم التعليمي</h3>
                  <p className="text-gray-400 mb-4">نقدم دعماً شاملاً في جميع المواد الدراسية، مع شرح تفصيلي وأمثلة عملية</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• شرح المفاهيم الأساسية</li>
                    <li>• حل المسائل والتمارين</li>
                    <li>• تقديم أمثلة توضيحية</li>
                    <li>• مراجعة وتحليل المواد</li>
                    <li>• إعداد ملخصات دراسية</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">البحث العلمي والكتابة</h3>
                  <p className="text-gray-400 mb-4">نساعدك في إنشاء محتوى وإجراء البحوث بمعايير جودة عالية</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• كتابة المقالات والأبحاث</li>
                    <li>• تحرير وتدقيق المحتوى</li>
                    <li>• تنظيم وهيكلة الأفكار</li>
                    <li>• تحليل البيانات البحثية</li>
                    <li>• توثيق المصادر والمراجع</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">الدعم التقني</h3>
                  <p className="text-gray-400 mb-4">نقدم حلولاً تقنية وإرشادات في مجال التكنولوجيا والبرمجة</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• حل المشاكل التقنية</li>
                    <li>• توجيه برمجي</li>
                    <li>• نصائح أمن المعلومات</li>
                    <li>• تطوير المواقع والتطبيقات</li>
                    <li>• تحسين أداء الأنظمة</li>
                  </ul>
                </div>
              </div>

              {/* مميزات المنصة */}
              <div className="text-center space-y-8">
                <h2 className="text-2xl font-semibold">مميزات منصة نبراس للذكاء الاصطناعي</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">ذكاء اصطناعي متقدم</h4>
                    <p className="text-gray-400">نستخدم أحدث تقنيات الذكاء الاصطناعي لتقديم إجابات دقيقة ومخصصة</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">دعم على مدار الساعة</h4>
                    <p className="text-gray-400">متوفرون 24/7 لتقديم المساعدة الفورية في أي وقت تحتاج إليها</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">خصوصية وأمان</h4>
                    <p className="text-gray-400">نضمن حماية بياناتك وخصوصيتك بأحدث تقنيات الأمان</p>
                  </div>
                </div>
              </div>

              {/* لماذا نبراس؟ */}
              <div className="bg-gray-800 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6 text-center">لماذا تختار نبراس للذكاء الاصطناعي؟</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">دقة عالية في الإجابات والتحليلات</p>
                    </div>
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">تغطية شاملة لمختلف المجالات والتخصصات</p>
                    </div>
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">دعم متعدد اللغات</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">تحديثات مستمرة للمحتوى والخدمات</p>
                    </div>
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">واجهة سهلة الاستخدام</p>
                    </div>
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300">دعم فني متميز</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* روابط مهمة */}
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold">روابط مهمة</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/about" className="text-blue-400 hover:text-blue-300">من نحن</Link>
                  <Link to="/blog" className="text-blue-400 hover:text-blue-300">المدونة</Link>
                  <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300">سياسة الخصوصية</Link>
                  <Link to="/terms" className="text-blue-400 hover:text-blue-300">الشروط والأحكام</Link>
                  <Link to="/contact" className="text-blue-400 hover:text-blue-300">اتصل بنا</Link>
                </div>
              </div>

              {/* مربع الدردشة */}
              <div className="max-w-2xl mx-auto w-full">
                <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
                <p className="text-center text-sm text-gray-400 mt-4">ابدأ الدردشة الآن واحصل على المساعدة التي تحتاجها</p>
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

