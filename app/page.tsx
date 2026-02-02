'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cpu, BarChart3, Database } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/hero-water-pipes.jpg" 
            alt="Water Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/80 to-brand-blue/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Main Headline - Animated */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
            >
              <span className="text-white">Secure Digital Utility Infrastructure</span>
              <br />
              <span className="text-brand-red">& AI-Enabled Service Platforms</span>
            </motion.h1>

            {/* Tagline - Animated with delay */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-4 font-medium drop-shadow-md"
            >
              Building Secure Digital Infrastructure for Public Utilities
            </motion.p>

            {/* Subtext - Animated with delay */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/80 mb-12 max-w-3xl mx-auto drop-shadow-md"
            >
              Modernising state-level water utilities through AI-powered metering systems,
              secure data platforms, and intelligent service delivery.
            </motion.p>

            {/* CTA Buttons - Animated with delay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/prototypes" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-blue text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                View Prototypes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/approach" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-blue text-lg font-semibold rounded-lg border-2 border-brand-blue hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105 shadow-lg">
                Our Approach
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Security-first digital infrastructure platforms for public utilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cpu,
                title: 'AI-Powered Metering',
                description: 'Automated digital metering systems using computer vision'
              },
              {
                icon: Shield,
                title: 'Secure Data Platforms',
                description: 'Encrypted, audit-ready utility data infrastructure'
              },
              {
                icon: Database,
                title: 'AI Customer Service',
                description: 'Intelligent chat and voice assistants for citizens'
              },
              {
                icon: BarChart3,
                title: 'Analytics & Optimisation',
                description: 'Real-time dashboards and consumption forecasting'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="bg-brand-blue bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/what-we-build" className="inline-flex items-center text-brand-blue hover:text-brand-red font-semibold text-lg transition-colors">
              Learn more about our platforms
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in exploring a pilot project?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Learn more about our digital infrastructure platforms
            </p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-brand-red text-white text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
