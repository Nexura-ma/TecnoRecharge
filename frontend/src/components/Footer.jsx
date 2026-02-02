import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Section 1: About */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="/Logo.webp" alt="DLC Recharge Logo" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner for instant mobile top-ups and digital codes worldwide. Secure, fast, and reliable.
            </p>
          </div>

          {/* Section 2: Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-yellow-400 inline-block">Categories</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/games" className="hover:text-yellow-400 transition-colors">Video Games</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Mobile Top-Up</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Gift Cards</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Entertainment</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Online Services</Link></li>
            </ul>
          </div>

          {/* Section 3: Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-yellow-400 inline-block">Legal</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Legal Mentions</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Refund Policy</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">GDPR</Link></li>
            </ul>
          </div>

          {/* Section 4: Social & Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-yellow-400 inline-block">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <i className="fab fa-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <i className="fab fa-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <div className="text-slate-300 space-y-2">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                support@dlcrecharge.com
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Paris, France
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© {currentYear} DLC Recharge. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" width="40" height="13" className="h-4 w-auto opacity-70 grayscale hover:grayscale-0 transition-all cursor-default" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" width="38" height="24" className="h-6 w-auto opacity-70 grayscale hover:grayscale-0 transition-all cursor-default" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="Paypal" width="60" height="16" className="h-4 w-auto opacity-70 grayscale hover:grayscale-0 transition-all cursor-default" />
          </div>
        </div>
      </div>
    </footer>
  );
}
