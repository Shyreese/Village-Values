import svgPaths from '../imports/svg-m43v9m7s58';
import logoImage from 'figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png';

export function Footer() {
  return (
    <footer className="bg-[#232e43] py-16 px-6 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-2 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img src={logoImage} alt="Village Values" className="w-10 h-10 rounded-full" />
              <h3 className="font-['Poppins'] text-white">Village Values</h3>
            </a>
            <p className="font-['Poppins'] text-[rgba(255,255,255,0.7)] text-sm leading-6">
              Licensed in-home childcare built on trust, learning, and community.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-['Poppins'] text-white text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#programs" className="font-['Poppins'] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#about" className="font-['Poppins'] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#enroll" className="font-['Poppins'] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">
                  Enroll
                </a>
              </li>
              <li>
                <a href="#careers" className="font-['Poppins'] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-['Poppins'] text-white text-xl mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#resources" className="font-['Poppins'] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">
                  Parent Handbook
                </a>
              </li>
              <li>
                <a 
                  href="#resources" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = 'resources';
                    setTimeout(() => {
                      const element = document.getElementById('daily-schedule');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="font-['Poppins'] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
                >
                  Daily Schedule
                </a>
              </li>
              <li>
                <a href="#resources" className="font-['Poppins'] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="font-['Poppins'] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-['Poppins'] text-white text-xl mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p26ddc800} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p35ba4680} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
                <span className="font-['Poppins'] text-[rgba(255,255,255,0.7)] text-sm">
                  Rancho Cordova, CA 95742
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p24c7c480} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
                <a href="tel:9167610211" className="font-['Poppins'] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors text-sm">
                  (916) 761-0211
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p24d83580} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pd919a80} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
                <a href="mailto:info@villagevalues.net" className="font-['Poppins'] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors text-sm">
                  info@villagevalues.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="font-['Poppins'] text-[rgba(255,255,255,0.6)] text-sm">
            © 2024 Village Values. All rights reserved. Licensed & Insured.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center hover:bg-[rgba(255,255,255,0.2)] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p30c8d680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/villagevalues_/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center hover:bg-[rgba(255,255,255,0.2)] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p4b98700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p1b89e780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M14.5833 5.41667H14.5917" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center hover:bg-[rgba(255,255,255,0.2)] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}