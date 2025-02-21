
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const lastUpdated = "2024-03-20";

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: {lastUpdated}</p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              At Nibras AI, we take your privacy seriously. This privacy policy explains how we collect, use, and protect your information when using our AI assistance platform. Please read this privacy policy carefully. By using our service, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                We collect information that you provide directly to us when using our service:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Chat conversations and queries</li>
                <li>Account information (if you create an account)</li>
                <li>Usage and interaction data with our platform</li>
                <li>Technical information about your device and connection</li>
                <li>Content you create or share on our platform</li>
                <li>Communications with our support team</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                We use the information we collect for multiple purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To improve our AI assistant's capabilities</li>
                <li>To personalize your experience</li>
                <li>To communicate with you about updates and changes</li>
                <li>To detect and prevent technical issues</li>
                <li>To analyze and improve our services</li>
                <li>To provide personalized content and recommendations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. We use modern encryption technologies and best security practices to ensure your data safety. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to request data deletion</li>
                <li>Right to restrict data processing</li>
                <li>Right to data portability</li>
                <li>Right to object to data processing</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar technologies to improve your experience on our website. You can modify your browser settings to decline cookies, but this may affect some functionalities of our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and notifying you via email or website notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300">Email: support@nibrasai.com</p>
              <p className="text-gray-300">Phone: +966 XX XXX XXXX</p>
              <p className="text-gray-300">
                Or through our{" "}
                <Link to="/contact" className="text-blue-400 hover:text-blue-300">
                  contact form
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
