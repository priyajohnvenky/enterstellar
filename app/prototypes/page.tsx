'use client';

import { motion } from 'framer-motion';
import { Cpu, Shield, MessageCircle, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Prototypes() {
  const caseStudies = [
    {
      icon: Cpu,
      title: 'AI-Powered Digital Metering Infrastructure Prototype',
      problem: 'State water utilities often rely on manual meter readings, which lead to data inaccuracies, delayed billing cycles, high operational costs, and increased risk of fraud.',
      challenge: 'Utilities operate across large geographic areas with legacy meter infrastructure, limited digital systems, high data volumes, and sensitive customer information.',
      approach: 'We designed a security-first AI-powered digital metering platform that uses computer vision to automatically read meter values, securely transmits readings to a central data platform, integrates with billing and analytics systems, and provides real-time visibility into consumption data.',
      solution: [
        'Mobile and device-based AI meter recognition',
        'Secure data ingestion pipeline',
        'Centralised utility dashboard',
        'Consumption tracking and alerts'
      ],
      impact: [
        'Improved reading accuracy',
        'Reduced operational costs',
        'Faster billing processes',
        'Enhanced data security',
        'Real-time operational insights'
      ],
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Secure Centralised Utility Data Infrastructure',
      problem: 'Utilities often manage data across fragmented systems, leading to inconsistent records, limited visibility, security vulnerabilities, and operational inefficiencies.',
      challenge: 'To create a secure, centralised platform capable of handling large-scale utility data while integrating with existing operational systems.',
      approach: 'We designed a security-first digital data platform that centralises utility data streams, encrypts sensitive information, enables controlled access, and integrates with metering and billing systems.',
      solution: [
        'Secure data ingestion pipelines',
        'Centralised dashboards',
        'Role-based access controls',
        'Audit-ready data flows'
      ],
      impact: [
        'Improved data accuracy',
        'Enhanced security compliance',
        'Real-time operational visibility',
        'Reduced system fragmentation'
      ],
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: 'AI-Enabled Utility Customer Service Infrastructure',
      problem: 'Public utilities often face high volumes of customer inquiries, manual complaint handling, slow response times, and limited service tracking.',
      challenge: 'To develop a scalable, intelligent service platform that improves citizen engagement while reducing operational workload.',
      approach: 'We built an AI-powered service platform integrated into secure utility systems that automates common inquiries, manages service requests, provides real-time updates, and protects sensitive customer data.',
      solution: [
        'Intelligent chat and voice assistants',
        'Automated case management',
        'Secure customer data handling',
        'Service performance dashboards'
      ],
      impact: [
        'Faster service response times',
        'Reduced operational costs',
        'Improved citizen satisfaction',
        'Better service transparency'
      ],
      color: 'green'
    }
  ];

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
              Prototypes & Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilot-ready digital infrastructure prototypes demonstrating how AI and secure
              platforms can modernise utility operations.
            </p>
          </motion.div>

          {/* Dashboard Preview Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
              <img 
                src="/dashboard-preview.jpg" 
                alt="Water Billing Dashboard Preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-xl font-semibold">AI-Powered Water Billing Platform</p>
                <p className="text-white/80 text-sm">Real-time dashboard with automated meter reading and analytics</p>
              </div>
            </div>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${
                  study.color === 'blue' ? 'from-brand-blue to-blue-600' :
                  study.color === 'purple' ? 'from-purple-600 to-purple-800' :
                  'from-green-600 to-green-800'
                } p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <study.icon className="h-12 w-12" />
                    <h2 className="text-2xl md:text-3xl font-bold">{study.title}</h2>
                  </div>
                </div>

                <div className="p-8 md:p-12 space-y-8">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-6 w-6 text-red-500" />
                      <h3 className="text-xl font-bold text-brand-dark">The Problem</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{study.problem}</p>
                  </div>

                  {/* Challenge */}
                  <div className="bg-brand-grey-light rounded-lg p-6">
                    <h3 className="text-xl font-bold text-brand-dark mb-3">The Challenge</h3>
                    <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Our Approach</h3>
                    <p className="text-gray-700 leading-relaxed">{study.approach}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">The Solution</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.solution.map((item, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-bold text-brand-dark">Projected Impact</h3>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {study.impact.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-brand-blue rounded-xl shadow-xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Interested in a Pilot Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how these platforms can be adapted for your utility operations.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-brand-red text-white text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
