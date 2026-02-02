'use client';

import { motion } from 'framer-motion';
import { Shield, Cpu, MessageCircle, BarChart3, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function WhatWeBuild() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              Secure Digital Utility Infrastructure Platforms
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We design modern digital systems that serve as the operational backbone for public utilities.
              Our platforms are built to support large-scale data processing, secure information flows,
              integration with existing infrastructure, and long-term scalability.
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
                src="/water-infrastructure.jpg" 
                alt="Water Infrastructure Technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/70 to-brand-blue/40 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold text-center px-8">
                  Modern Digital Systems for Public Utilities
                </h2>
              </div>
            </div>
          </motion.div>

          {/* AI-Powered Metering Systems */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-blue bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center">
                  <Cpu className="h-8 w-8 text-brand-blue" />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark">AI-Powered Metering Systems</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Our AI-based metering solutions automate consumption data capture using computer vision
                and secure digital pipelines.
              </p>

              <h3 className="text-xl font-semibold text-brand-dark mb-4">Key capabilities include:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Automated meter reading from images or smart devices',
                  'High accuracy across legacy and modern meters',
                  'Secure data storage and transmission',
                  'Real-time consumption tracking'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start text-gray-700"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="bg-brand-grey-light rounded-lg p-6">
                <h3 className="font-semibold text-brand-dark mb-3">Benefits:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    'Reduced manual labour',
                    'Improved billing accuracy',
                    'Faster revenue cycles'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-brand-blue mr-2">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Secure Utility Data Platforms */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-blue bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center">
                  <Shield className="h-8 w-8 text-brand-blue" />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark">Secure Utility Data Platforms</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                We build centralised data systems designed specifically for public utilities.
              </p>

              <h3 className="text-xl font-semibold text-brand-dark mb-4">Features include:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Encrypted data storage',
                  'Role-based access control',
                  'Audit-ready data flows',
                  'Integration with billing and service platforms'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-brand-grey-light rounded-lg p-4"
                  >
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* AI-Enabled Customer Service Systems */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-blue bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-brand-blue" />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark">AI-Enabled Customer Service Systems</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Our intelligent service platforms improve citizen engagement and operational efficiency.
              </p>

              <h3 className="text-xl font-semibold text-brand-dark mb-4">Capabilities:</h3>
              <ul className="space-y-3">
                {[
                  'AI chat and voice assistants',
                  'Automated service requests',
                  'Billing and consumption inquiries',
                  'Complaint management systems'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start text-gray-700"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Analytics & Operational Optimisation */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-blue bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-brand-blue" />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark">Analytics & Operational Optimisation</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                We provide real-time dashboards and analytics tools that help utilities:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Monitor consumption trends',
                  'Detect losses and leaks',
                  'Forecast demand',
                  'Improve system performance'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center bg-brand-grey-light rounded-lg p-4"
                  >
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
