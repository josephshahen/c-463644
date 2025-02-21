
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  const lastUpdated = "2024-03-20";

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-gray-400">Last Updated: {lastUpdated}</p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using Nibras AI, you agree to be bound by these terms and conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Usage License</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Permission is granted temporarily to use Nibras AI for personal, non-commercial use only. This is a grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained in Nibras AI</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person or mirror the materials on any other server</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Service Description</h2>
            <p className="text-gray-300 leading-relaxed">
              Nibras AI provides AI-assisted support for educational, research, and technical purposes. While we strive to provide accurate and helpful information, we do not guarantee the accuracy, completeness, or usefulness of any information provided through our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Users of Nibras AI agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide accurate and complete information when using the service</li>
                <li>Use the service in a legal and ethical manner</li>
                <li>Not misuse or attempt to exploit the service</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any activity that could harm or disrupt the service</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Protect their login credentials</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content provided on our platform, including text, images, graphics, logos, product names, is protected by copyright, trademarks, and other intellectual property rights. None of these materials may be used without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are provided "as is" without any warranties. We do not accept responsibility for any direct or indirect damages resulting from the use of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Terms Modifications</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or notice on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              These terms are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia.
            </p>
          </section>

          <section className="mt-8 border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              If you have any questions about these Terms and Conditions, you can contact us through our{" "}
              <Link to="/contact" className="text-blue-400 hover:text-blue-300">
                Contact page
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
