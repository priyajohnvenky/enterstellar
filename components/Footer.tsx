'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-red">enter</span>
              <span className="text-brand-blue">stellar</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Building Secure Digital Infrastructure for Public Utilities. 
              Specialising in AI-powered metering systems and secure data platforms.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@enterstellar.com" className="hover:text-white transition-colors">
                  contact@enterstellar.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/what-we-build" className="text-gray-400 hover:text-white transition-colors">
                  What We Build
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-gray-400 hover:text-white transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/prototypes" className="text-gray-400 hover:text-white transition-colors">
                  Prototypes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Speciality */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Focus</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AI-Powered Metering</li>
              <li>Secure Data Platforms</li>
              <li>Water Utility Systems</li>
              <li>Infrastructure Security</li>
              <li>Government Solutions</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Enterstellar Softwares Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
