'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: February 2, 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the Enterstellar Softwares website and services, you accept and agree 
                to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. Use of Services</h2>
              <p className="text-gray-700 mb-4">
                Our services are provided for business and professional use. You agree to use our services 
                only for lawful purposes and in accordance with these Terms.
              </p>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality on our website are owned by Enterstellar Softwares 
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Service Availability</h2>
              <p className="text-gray-700 mb-4">
                We strive to ensure our services are available at all times, but we do not guarantee 
                uninterrupted access. We may suspend, withdraw, or restrict availability of services 
                without notice for maintenance or other reasons.
              </p>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">5. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We maintain strict confidentiality of all client data and information shared with us. 
                We will not disclose confidential information to third parties without your explicit consent, 
                except as required by law.
              </p>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, Enterstellar Softwares shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages resulting from your use 
                of our services.
              </p>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">7. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, India.
              </p>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any 
                material changes by updating the "Last updated" date at the top of this page.
              </p>

              <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms, please contact us at:
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
