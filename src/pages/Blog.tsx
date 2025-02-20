
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "كيف يمكن للذكاء الاصطناعي تحسين التعليم؟",
      excerpt: "اكتشف كيف يغير الذكاء الاصطناعي طريقة تعلمنا وتعليمنا في القرن الحادي والعشرين",
      image: "/blog/ai-education.jpg",
      date: "2024-03-20",
      readTime: "10 دقائق",
      category: "التعليم والتكنولوجيا"
    },
    {
      id: 2,
      title: "أفضل الممارسات لاستخدام المساعد الذكي في البحث العلمي",
      excerpt: "دليل شامل حول كيفية الاستفادة من الذكاء الاصطناعي في البحث العلمي وكتابة الأوراق البحثية",
      image: "/blog/research-ai.jpg",
      date: "2024-03-18",
      readTime: "12 دقائق",
      category: "البحث العلمي"
    },
    {
      id: 3,
      title: "مستقبل التعلم الذاتي مع الذكاء الاصطناعي",
      excerpt: "استكشف كيف يمكن للذكاء الاصطناعي أن يساعدك في تطوير مهاراتك وتعلم مواضيع جديدة بشكل فعال",
      image: "/blog/self-learning.jpg",
      date: "2024-03-15",
      readTime: "8 دقائق",
      category: "التعلم الذاتي"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">مدونة نبراس للذكاء الاصطناعي</h1>
          <p className="text-xl text-gray-400">
            مقالات وأفكار حول الذكاء الاصطناعي في التعليم والبحث العلمي
          </p>
        </header>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src="/blog/featured-post.jpg"
                  alt="Featured post about AI in education"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <span className="text-blue-400 text-sm font-semibold">مقال مميز</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  كيف يغير الذكاء الاصطناعي مستقبل التعليم والبحث العلمي
                </h2>
                <p className="text-gray-400 mb-6">
                  دراسة شاملة حول تأثير الذكاء الاصطناعي على قطاع التعليم والبحث العلمي، مع نظرة مستقبلية للتغييرات المتوقعة في السنوات القادمة.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-500">مارس 22, 2024</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">15 دقيقة قراءة</span>
                </div>
                <Link to="/blog/featured" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  اقرأ المزيد
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
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
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-400">{post.category}</span>
                  <Link to={`/blog/${post.id}`} className="text-blue-400 hover:text-blue-300">
                    اقرأ المزيد →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">المواضيع</h2>
          <div className="flex flex-wrap gap-4">
            {['التعليم', 'البحث العلمي', 'الذكاء الاصطناعي', 'التعلم الذاتي', 'التكنولوجيا', 'المهارات الرقمية'].map(category => (
              <Link
                key={category}
                to={`/blog/category/${category}`}
                className="px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">اشترك في نشرتنا البريدية</h2>
          <p className="text-gray-400 mb-6">احصل على أحدث المقالات والأخبار حول الذكاء الاصطناعي والتعليم</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              اشترك
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
