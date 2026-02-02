'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Lightbulb, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutUs() {
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
              About Enterstellar Softwares
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Enterstellar Softwares is a digital infrastructure technology company specialising in
                secure, AI-enabled platforms for public utilities and critical services.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We focus on building modern digital systems that improve operational efficiency,
                protect sensitive public data, and enable intelligent service delivery across
                large-scale utility environments.
              </p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/office-modern.jpg" 
                alt="Enterstellar Softwares Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
            </div>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-blue bg-opacity-5 rounded-xl p-8 mb-20"
          >
            <p className="text-lg text-gray-800 text-center">
              Our current sector focus is on <span className="font-semibold text-brand-blue">state-level water utilities</span>,
              where we are developing AI-powered metering systems and secure utility data platforms
              designed to modernise core operations.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-red bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center">
                  <Target className="h-8 w-8 text-brand-red" />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark">Our Mission</h2>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                To build secure, scalable digital infrastructure that enables public utilities to
                operate more efficiently, transparently, and intelligently.
              </p>
            </div>
          </motion.section>

          {/* What We Stand For */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-brand-blue text-center mb-12">
              What We Stand For
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Security-First Design',
                  description: 'All our platforms are built with security embedded at the architecture level, ensuring data integrity, privacy, and resilience for public-sector environments.'
                },
                {
                  icon: Target,
                  title: 'Infrastructure-Grade Systems',
                  description: 'We design systems to operate at scale, integrate with existing utility infrastructure, and support long-term operational needs.'
                },
                {
                  icon: Lightbulb,
                  title: 'Practical Innovation',
                  description: 'We apply AI and modern technologies to solve real operational challenges, not as add-ons but as core system components.'
                }
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl shadow-lg p-8 transition-all"
                >
                  <div className="bg-brand-blue bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <pillar.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4">{pillar.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Vision */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue/90 rounded-xl shadow-xl p-8 md:p-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-lg flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-blue-50">
                We aim to become a trusted digital infrastructure partner for public utilities
                and development institutions, delivering secure platforms that support sustainable
                service delivery and modern public infrastructure.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
