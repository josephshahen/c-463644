
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Blog = () => {
  const [email, setEmail] = useState('');
  const blogPosts = [
    {
      id: 1,
      title: "كيف يمكن للذكاء الاصطناعي تحسين التعليم؟",
      excerpt: "اكتشف كيف يغير الذكاء الاصطناعي طريقة تعلمنا وتعليمنا في القرن الحادي والعشرين. نستكشف في هذا المقال التطبيقات العملية للذكاء الاصطناعي في التعليم وكيف يمكن للمعلمين والطلاب الاستفادة منها.",
      image: "/blog/ai-education.jpg",
      date: "2024-03-20",
      readTime: "10 دقائق",
      category: "التعليم والتكنولوجيا",
      author: "د. محمد الأحمد",
      tags: ["الذكاء الاصطناعي", "التعليم", "التكنولوجيا"]
    },
    {
      id: 2,
      title: "أفضل الممارسات لاستخدام المساعد الذكي في البحث العلمي",
      excerpt: "دليل شامل حول كيفية الاستفادة من الذكاء الاصطناعي في البحث العلمي وكتابة الأوراق البحثية. نقدم إرشادات عملية وأمثلة واقعية لتحسين جودة البحث العلمي باستخدام التقنيات الحديثة.",
      image: "/blog/research-ai.jpg",
      date: "2024-03-18",
      readTime: "12 دقائق",
      category: "البحث العلمي",
      author: "د. سارة الخالدي",
      tags: ["البحث العلمي", "الذكاء الاصطناعي", "المنهجية"]
    },
    {
      id: 3,
      title: "مستقبل التعلم الذاتي مع الذكاء الاصطناعي",
      excerpt: "استكشف كيف يمكن للذكاء الاصطناعي أن يساعدك في تطوير مهاراتك وتعلم مواضيع جديدة بشكل فعال. نناقش أحدث التقنيات والأدوات المتاحة للتعلم الذاتي وكيفية الاستفادة منها.",
      image: "/blog/self-learning.jpg",
      date: "2024-03-15",
      readTime: "8 دقائق",
      category: "التعلم الذاتي",
      author: "م. فاطمة العلي",
      tags: ["التعلم الذاتي", "التطوير الذاتي", "التعليم المستمر"]
    },
    {
      id: 4,
      title: "تطبيقات الذكاء الاصطناعي في تحليل البيانات التعليمية",
      excerpt: "تعرف على كيفية استخدام الذكاء الاصطناعي في تحليل البيانات التعليمية لتحسين نتائج الطلاب وتطوير المناهج الدراسية. دراسة تفصيلية مع أمثلة عملية.",
      image: "/blog/data-analysis.jpg",
      date: "2024-03-12",
      readTime: "15 دقائق",
      category: "تحليل البيانات",
      author: "د. أحمد الصالح",
      tags: ["تحليل البيانات", "الذكاء الاصطناعي", "التعليم"]
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "تنبيه",
        description: "الرجاء إدخال البريد الإلكتروني",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "تم الاشتراك بنجاح",
      description: "شكراً لاشتراكك في نشرتنا البريدية",
    });
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">مدونة نبراس للذكاء الاصطناعي</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            مقالات وأفكار متعمقة حول الذكاء الاصطناعي في التعليم والبحث العلمي، مكتوبة بواسطة خبراء في المجال
          </p>
        </header>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src="/blog/featured-post.jpg"
                  alt="Featured post about AI in education"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">مقال مميز</span>
                  <span className="text-gray-400">نُشر بواسطة د. خالد المحمد</span>
                </div>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  كيف يغير الذكاء الاصطناعي مستقبل التعليم والبحث العلمي
                </h2>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  دراسة شاملة حول تأثير الذكاء الاصطناعي على قطاع التعليم والبحث العلمي، مع نظرة مستقبلية للتغييرات المتوقعة في السنوات القادمة. نستعرض أحدث التقنيات والتطبيقات العملية في المجال التعليمي.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-500">مارس 22, 2024</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">15 دقيقة قراءة</span>
                </div>
                <Link 
                  to="/blog/featured" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  اقرأ المقال كاملاً
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-400">{post.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">{post.author}</span>
                    <Link to={`/blog/${post.id}`} className="text-blue-400 hover:text-blue-300">
                      اقرأ المزيد →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">تصفح حسب المواضيع</h2>
          <div className="flex flex-wrap gap-4">
            {['التعليم', 'البحث العلمي', 'الذكاء الاصطناعي', 'التعلم الذاتي', 'التكنولوجيا', 'المهارات الرقمية', 'تحليل البيانات', 'التعليم الإلكتروني'].map(category => (
              <Link
                key={category}
                to={`/blog/category/${category}`}
                className="px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-800 rounded-xl p-8 text-center shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">اشترك في نشرتنا البريدية</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            احصل على أحدث المقالات والأخبار حول الذكاء الاصطناعي والتعليم، مع نصائح وإرشادات حصرية مباشرة إلى بريدك الإلكتروني
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              اشترك الآن
            </Button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.
          </p>
        </div>

        {/* Related Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">موارد ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">دليل المبتدئين</h3>
              <p className="text-gray-400 mb-4">تعرف على أساسيات الذكاء الاصطناعي وتطبيقاته في التعليم</p>
              <Link to="/resources/beginners-guide" className="text-blue-400 hover:text-blue-300">
                اقرأ الدليل →
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">مكتبة الموارد</h3>
              <p className="text-gray-400 mb-4">مجموعة من الكتب والمقالات والأبحاث حول الذكاء الاصطناعي</p>
              <Link to="/resources/library" className="text-blue-400 hover:text-blue-300">
                استكشف المكتبة →
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">ورش عمل وندوات</h3>
              <p className="text-gray-400 mb-4">تعرف على أحدث الفعاليات والورش التدريبية</p>
              <Link to="/resources/workshops" className="text-blue-400 hover:text-blue-300">
                اكتشف الفعاليات →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
