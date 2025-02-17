
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Nibras AI</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At Nibras AI, we are dedicated to democratizing access to artificial intelligence technology and making it accessible to everyone. Our mission is to provide comprehensive, intelligent assistance that enhances learning, research, and problem-solving capabilities for students, professionals, and organizations worldwide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Founded in 2024, Nibras AI emerged from a vision to transform how people interact with artificial intelligence. We recognized that while AI technology was advancing rapidly, many people still struggled to access and effectively utilize these powerful tools. Our team of dedicated AI specialists and educators came together to create a solution that would bridge this gap.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The name "Nibras" comes from the Arabic word meaning "beacon" or "guiding light," reflecting our commitment to illuminating paths to knowledge and understanding through advanced AI technology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Advanced AI Technology</h3>
                <p className="text-gray-300">
                  Our AI system is built on cutting-edge machine learning models, constantly learning and evolving to provide more accurate and helpful responses.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Educational Focus</h3>
                <p className="text-gray-300">
                  We specialize in educational support, ensuring our AI not only provides answers but helps users understand concepts deeply.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">24/7 Availability</h3>
                <p className="text-gray-300">
                  Our AI assistant is always available, providing instant support whenever you need it, anywhere in the world.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Multilingual Support</h3>
                <p className="text-gray-300">
                  We break down language barriers by offering support in multiple languages, making knowledge truly accessible globally.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Academic Support</h3>
                <p className="text-gray-300 mb-4">
                  Our AI assistant provides comprehensive academic support across various subjects:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Mathematics and Sciences</li>
                  <li>Literature and Language Arts</li>
                  <li>History and Social Studies</li>
                  <li>Computer Science and Programming</li>
                  <li>Research and Writing Assistance</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment to Quality</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are committed to maintaining the highest standards of quality in our AI assistance. Our team continuously monitors and improves our AI models to ensure accuracy, relevance, and ethical compliance in all interactions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We also prioritize user privacy and data security, implementing robust protection measures to safeguard all user information and interactions with our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Join Us in Shaping the Future</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Whether you're a student seeking academic support, a professional looking for research assistance, or an organization wanting to leverage AI technology, Nibras AI is here to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Contact Us
              </Link>
              <Link to="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200">
                Try Our AI Assistant
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
