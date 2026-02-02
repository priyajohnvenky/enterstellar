'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: February 2, 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Enterstellar Softwares Pvt Ltd ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Contact us through our website</li>
                <li>Request information about our services</li>
                <li>Engage with us for business purposes</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver services and fulfill contractual obligations</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your information</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 mb-4">
                Email: venky@enterstellarsoftwares.com<br />
                Phone: +91 96299 43399<br />
                Address: NO.49 & 50L, 3rd Floor, Express Chambers, Royapettah, Chennai-600 014, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
