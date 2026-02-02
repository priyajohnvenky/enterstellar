'use client';

import { motion } from 'framer-motion';
import { Search, Shield, Code, FlaskConical, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function OurApproach() {
  const steps = [
    {
      number: 1,
      title: 'Operational Understanding',
      icon: Search,
      description: 'We begin by analysing existing utility workflows, legacy systems and infrastructure, data flows and security requirements, and operational challenges. This ensures solutions are practical and aligned with real-world environments.',
      points: [
        'Existing utility workflows',
        'Legacy systems and infrastructure',
        'Data flows and security requirements',
        'Operational challenges'
      ]
    },
    {
      number: 2,
      title: 'Security-First Architecture Design',
      icon: Shield,
      description: 'We design system architecture that prioritises data protection, secure access control, system resilience, and compliance-ready structures. Security is embedded from the start, not added later.',
      points: [
        'Data protection',
        'Secure access control',
        'System resilience',
        'Compliance-ready structures'
      ]
    },
    {
      number: 3,
      title: 'AI-Enabled System Development',
      icon: Code,
      description: 'We develop AI-powered operational tools, secure data platforms, and scalable digital applications. All built for performance, reliability, and integration.',
      points: [
        'AI-powered operational tools',
        'Secure data platforms',
        'Scalable digital applications',
        'Performance and reliability focus'
      ]
    },
    {
      number: 4,
      title: 'Pilot & Validation',
      icon: FlaskConical,
      description: 'We deploy prototype and pilot-ready platforms to test in real operational scenarios, validate performance and accuracy, and gather feedback for refinement.',
      points: [
        'Test in real operational scenarios',
        'Validate performance and accuracy',
        'Gather feedback for refinement',
        'Iterative improvement'
      ]
    },
    {
      number: 5,
      title: 'Scalable Infrastructure Deployment',
      icon: TrendingUp,
      description: 'Our systems are designed to scale across regions, departments, and utility operations, supporting long-term digital transformation.',
      points: [
        'Scale across regions',
        'Department-wide deployment',
        'Utility operations integration',
        'Long-term transformation support'
      ]
    }
  ];

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
              Our Infrastructure-First Delivery Approach
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Public utilities operate within complex, high-trust environments. Our approach is
              designed specifically for building secure, scalable digital infrastructure for
              critical public services.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Step Number and Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-xl flex items-center justify-center">
                          <step.icon className="h-12 w-12 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                        {step.title}
                      </h2>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Points */}
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.points.map((point, pointIndex) => (
                          <motion.div
                            key={pointIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: pointIndex * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <span className="text-gray-700">{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-brand-blue to-brand-grey-light"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-brand-blue rounded-xl shadow-xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to modernise your utility infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our infrastructure-first approach can support your digital transformation.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-brand-red text-white text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Start the Conversation
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
