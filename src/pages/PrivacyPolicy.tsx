
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const lastUpdated = "2024-03-20";

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">سياسة الخصوصية</h1>
          <p className="text-gray-400">آخر تحديث: {lastUpdated}</p>
        </div>
        
        <div className="space-y-8 text-right">
          <section>
            <h2 className="text-2xl font-semibold mb-4">مقدمة</h2>
            <p className="text-gray-300 leading-relaxed">
              في نبراس للذكاء الاصطناعي، نأخذ خصوصيتك على محمل الجد. تشرح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحماية معلوماتك عند استخدام منصتنا للمساعدة في الذكاء الاصطناعي. يرجى قراءة سياسة الخصوصية هذه بعناية. باستخدام خدمتنا، فإنك توافق على الممارسات الموضحة في هذه السياسة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">المعلومات التي نجمعها</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                نحن نجمع المعلومات التي تقدمها لنا مباشرة عند استخدام خدمتنا:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mr-6">
                <li>محادثات الدردشة والاستفسارات</li>
                <li>معلومات الحساب (إذا قمت بإنشاء حساب)</li>
                <li>بيانات الاستخدام والتفاعل مع منصتنا</li>
                <li>معلومات تقنية عن جهازك واتصالك</li>
                <li>المحتوى الذي تنشئه أو تشاركه على منصتنا</li>
                <li>المراسلات مع فريق الدعم الفني</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">كيف نستخدم معلوماتك</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                نستخدم المعلومات التي نجمعها لأغراض متعددة:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mr-6">
                <li>لتقديم وصيانة خدمتنا</li>
                <li>لتحسين قدرات مساعدنا الذكي</li>
                <li>لتخصيص تجربتك</li>
                <li>للتواصل معك بخصوص التحديثات والتغييرات</li>
                <li>لاكتشاف ومنع المشكلات التقنية</li>
                <li>لتحليل وتحسين أداء خدماتنا</li>
                <li>لتقديم محتوى مخصص وتوصيات مفيدة</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">أمن البيانات</h2>
            <p className="text-gray-300 leading-relaxed">
              نحن نطبق تدابير أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية. نستخدم تقنيات التشفير الحديثة وأفضل ممارسات الأمان لضمان سلامة بياناتك. ومع ذلك، يرجى ملاحظة أنه لا توجد طريقة نقل عبر الإنترنت أو طريقة تخزين إلكتروني آمنة بنسبة 100٪.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">حقوقك</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                لديك حقوق معينة فيما يتعلق بمعلوماتك الشخصية:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mr-6">
                <li>الحق في الوصول إلى بياناتك الشخصية</li>
                <li>الحق في تصحيح البيانات غير الدقيقة</li>
                <li>الحق في طلب حذف بياناتك</li>
                <li>الحق في تقييد معالجة بياناتك</li>
                <li>الحق في نقل البيانات</li>
                <li>الحق في الاعتراض على معالجة بياناتك</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">ملفات تعريف الارتباط</h2>
            <p className="text-gray-300 leading-relaxed">
              نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لتحسين تجربتك على موقعنا. يمكنك تعديل إعدادات المتصفح الخاص بك لرفض ملفات تعريف الارتباط، ولكن هذا قد يؤثر على بعض وظائف موقعنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">التغييرات على سياسة الخصوصية</h2>
            <p className="text-gray-300 leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي تغييرات جوهرية من خلال نشر السياسة الجديدة على هذه الصفحة وإخطارك عبر البريد الإلكتروني أو إشعار على موقعنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">اتصل بنا</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:
            </p>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300">البريد الإلكتروني: support@nibrasai.com</p>
              <p className="text-gray-300">الهاتف: +966 XX XXX XXXX</p>
              <p className="text-gray-300">
                أو من خلال{" "}
                <Link to="/contact" className="text-blue-400 hover:text-blue-300">
                  نموذج الاتصال
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
