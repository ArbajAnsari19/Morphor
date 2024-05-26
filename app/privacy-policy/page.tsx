"use client"
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen flex flex-col justify-center items-center font-roboto overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-gray-200">1. Information We Collect</h2>
            <p className="text-gray-400 leading-relaxed">
              At Morpher, we collect and use limited information to improve the user experience. The only data we collect is through Google Analytics, which includes: Usage Information, such as the pages you visit, your IP address, browser type, device type, and referral URLs. This information helps us understand how users interact with our website to enhance its functionality and content.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-gray-200">2. How We Use Your Information</h2>
            <p className="text-gray-400 leading-relaxed">
              We use the information collected through Google Analytics solely for the purpose of understanding user behavior and improving our website's performance. We do not sell, rent, or share this information with third parties.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-gray-200">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-400 leading-relaxed">
              We use cookies and similar tracking technologies to collect and store information about your interactions with our website. You can control cookie preferences through your browser settings. Please note that disabling cookies may affect your experience on our website.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-gray-200">4. Data Security</h2>
            <p className="text-gray-400 leading-relaxed">
              We take reasonable measures to protect your data against unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of data transmission over the internet or electronic storage is 100% secure.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-gray-200">5. Third-Party Links</h2>
            <p className="text-gray-400 leading-relaxed">
              Our website may contain links to third-party websites or services that are not operated by us. We have no control over the content, privacy policies, or practices of these third-party websites. We encourage you to review the privacy policies of these websites before providing any personal information.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-gray-200">6. Children's Privacy</h2>
            <p className="text-gray-400 leading-relaxed">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take appropriate action to remove that information.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-gray-200">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting on this page, and the date of the latest revision will be indicated at the top of the policy.
            </p>
          </div>

    
          <p className="text-gray-400 leading-relaxed">
            By using Morpher, you agree to the practices outlined in this Privacy Policy. Please discontinue use of our services if you do not agree with this policy. Thank you for trusting us with your privacy.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
