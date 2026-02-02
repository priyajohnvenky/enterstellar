'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Database, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function OurSpeciality() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              Our Speciality: Secure Digital Utility Infrastructure
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building modern, secure platforms that serve as the operational backbone
              for public utilities and critical services.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/building-govt.jpg" 
                alt="Government Infrastructure" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/70 to-brand-blue/40 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold text-center px-8">
                  Secure Infrastructure for Public Services
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Why Security-First Matters */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-white rounded-xl shadow-lg p-12">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="h-12 w-12 text-brand-blue" />
                <h2 className="text-3xl font-bold text-brand-dark">Why Security-First Design Matters</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Public utilities manage sensitive citizen data, critical infrastructure, and essential services.
                Security cannot be an afterthought. Our platforms are built with security embedded at every layer,
                ensuring data integrity, privacy, and operational resilience.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {['Data Protection', 'Regulatory Compliance', 'Operational Resilience'].map((item, i) => (
                  <div key={i} className="bg-brand-grey-light rounded-lg p-4 text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* AI Integration */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-brand-blue bg-opacity-5 rounded-xl p-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-6">How AI Fits Into Infrastructure</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AI is not a buzzword for us—it's a practical tool embedded within secure infrastructure
                to automate operations, improve accuracy, and enable intelligent decision-making.
              </p>
              <ul className="space-y-4">
                {[
                  'Automated meter reading using computer vision',
                  'Predictive maintenance and leak detection',
                  'Intelligent customer service platforms',
                  'Real-time analytics and forecasting'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Database className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-xl shadow-lg p-12"
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Learn More About Our Platforms
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/what-we-build" className="inline-block px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all">
                Explore Our Solutions
              </Link>
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-brand-blue border-2 border-brand-blue font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-all">
                Discuss Your Needs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
