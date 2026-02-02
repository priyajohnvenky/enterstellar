'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image 
                src="/logo-enterstellar.jpg" 
                alt="Enterstellar Softwares" 
                width={220} 
                height={60}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Building Secure Digital Infrastructure for Public Utilities. 
              Specialising in AI-powered metering systems and secure data platforms.
            </p>
            <div className="space-y-2 text-gray-600 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>NO.49 & 50L, 3rd Floor, Express Chambers<br />(Express Avenue), Whites Road,<br />Royapettah, Chennai-600 014, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919629943399" className="hover:text-brand-blue transition-colors">
                  +91 96299 43399
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:venky@enterstellarsoftwares.com" className="hover:text-brand-blue transition-colors">
                  venky@enterstellarsoftwares.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/what-we-build" className="text-gray-600 hover:text-brand-blue transition-colors">
                  What We Build
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/prototypes" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Prototypes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Speciality */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Focus</h4>
            <ul className="space-y-2 text-gray-600">
              <li>AI-Powered Metering</li>
              <li>Secure Data Platforms</li>
              <li>Water Utility Systems</li>
              <li>Infrastructure Security</li>
              <li>Government Solutions</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Enterstellar Softwares Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
