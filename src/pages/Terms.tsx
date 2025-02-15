
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using Nibras AI Assistant, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Permission is granted to temporarily use Nibras AI Assistant for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained in Nibras AI Assistant</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person or mirror the materials on any other server</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Service Description</h2>
            <p className="text-gray-300 leading-relaxed">
              Nibras AI Assistant provides artificial intelligence-powered assistance for educational, research, and technical support purposes. While we strive to provide accurate and helpful information, we do not guarantee the accuracy, completeness, or usefulness of any information provided through our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Users of Nibras AI Assistant agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide accurate and complete information when using the service</li>
                <li>Use the service in a lawful and ethical manner</li>
                <li>Not misuse or attempt to exploit the service</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any activity that could harm or disrupt the service</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              The materials on Nibras AI Assistant are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at support@nibrasai.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
