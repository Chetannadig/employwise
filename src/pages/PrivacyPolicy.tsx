import React, { useState } from 'react';
import { Shield, Check, X } from 'lucide-react';
import { STORAGE_KEYS } from '../constants';

const PrivacyPolicy: React.FC = () => {
  const [accepted, setAccepted] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.PRIVACY_ACCEPTED) === 'true';
  });

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEYS.PRIVACY_ACCEPTED, 'true');
    setAccepted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: March 15, 2024
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-6">
              At EmployWise, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Employment information</li>
              <li>Usage data and analytics</li>
              <li>Device and browser information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to data portability</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at privacy@employwise.com
            </p>
          </div>

          {/* Accept/Decline Section */}
          {!accepted && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={handleAccept}
                  className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  <Check className="w-5 h-5 mr-2" />
                  Accept Privacy Policy
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5 mr-2" />
                  Decline
                </button>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                By accepting, you acknowledge that you have read and agree to our Privacy Policy.
              </p>
            </div>
          )}

          {accepted && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center text-green-600">
                <Check className="w-5 h-5 mr-2" />
                <span>You have accepted our Privacy Policy</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;