
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  const lastUpdated = "2024-03-20";

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">الشروط والأحكام</h1>
          <p className="text-gray-400">آخر تحديث: {lastUpdated}</p>
        </div>
        
        <div className="space-y-8 text-right">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. الشروط</h2>
            <p className="text-gray-300 leading-relaxed">
              من خلال الوصول إلى واستخدام نبراس للذكاء الاصطناعي، فإنك توافق على الالتزام بهذه الشروط والأحكام وجميع القوانين واللوائح المعمول بها. إذا كنت لا توافق على أي من هذه الشروط، فيحظر عليك استخدام أو الوصول إلى هذه الخدمة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. ترخيص الاستخدام</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                يُمنح الإذن مؤقتًا لاستخدام نبراس للذكاء الاصطناعي للاستخدام الشخصي غير التجاري فقط. هذا منح ترخيص، وليس نقل ملكية، وبموجب هذا الترخيص لا يجوز لك:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mr-6">
                <li>تعديل أو نسخ المواد</li>
                <li>استخدام المواد لأي غرض تجاري</li>
                <li>محاولة فك تشفير أو هندسة عكسية لأي برنامج موجود في نبراس للذكاء الاصطناعي</li>
                <li>إزالة أي حقوق نشر أو علامات ملكية أخرى</li>
                <li>نقل المواد إلى شخص آخر أو نسخ المواد على أي خادم آخر</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. وصف الخدمة</h2>
            <p className="text-gray-300 leading-relaxed">
              يوفر نبراس للذكاء الاصطناعي مساعدة مدعومة بالذكاء الاصطناعي لأغراض تعليمية وبحثية ودعم تقني. بينما نسعى جاهدين لتقديم معلومات دقيقة ومفيدة، فإننا لا نضمن دقة أو اكتمال أو فائدة أي معلومات مقدمة من خلال خدمتنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. مسؤوليات المستخدم</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                يوافق مستخدمو نبراس للذكاء الاصطناعي على:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mr-6">
                <li>تقديم معلومات دقيقة وكاملة عند استخدام الخدمة</li>
                <li>استخدام الخدمة بطريقة قانونية وأخلاقية</li>
                <li>عدم إساءة استخدام أو محاولة استغلال الخدمة</li>
                <li>احترام حقوق الملكية الفكرية</li>
                <li>عدم المشاركة في أي نشاط يمكن أن يضر أو يعطل الخدمة</li>
                <li>الامتثال لجميع القوانين واللوائح المعمول بها</li>
                <li>حماية معلومات تسجيل الدخول الخاصة بهم</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. الملكية الفكرية</h2>
            <p className="text-gray-300 leading-relaxed">
              جميع المحتوى المقدم على منصتنا، بما في ذلك النصوص والصور والرسومات والشعارات وأسماء المنتجات، محمي بموجب حقوق الطبع والنشر والعلامات التجارية وغيرها من حقوق الملكية الفكرية. لا يجوز استخدام أي من هذه المواد دون إذن كتابي صريح منا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. إخلاء المسؤولية</h2>
            <p className="text-gray-300 leading-relaxed">
              يتم توفير خدماتنا "كما هي" دون أي ضمانات. لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة تنتج عن استخدام خدمتنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. التعديلات على الشروط</h2>
            <p className="text-gray-300 leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطار المستخدمين بالتغييرات الجوهرية عبر البريد الإلكتروني أو إشعار على موقعنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. القانون المطبق</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              تخضع هذه الشروط لقوانين المملكة العربية السعودية وتفسر وفقًا لها.
            </p>
          </section>

          <section className="mt-8 border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              إذا كانت لديك أي أسئلة حول هذه الشروط والأحكام، يمكنك التواصل معنا عبر{" "}
              <Link to="/contact" className="text-blue-400 hover:text-blue-300">
                صفحة الاتصال
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
