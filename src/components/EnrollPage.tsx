import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import svgPaths from '../imports/svg-djgq00ppfz';
import logoImage from 'figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png';
import { BottomNavBar } from './BottomNavBar';
import { Footer } from './Footer';

export function EnrollPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5edda] overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* How Enrollment Works */}
      <HowEnrollmentWorks />

      {/* Enrollment Form */}
      <EnrollmentFormSection />

      {/* Pricing & Availability */}
      <PricingAndAvailability />

      {/* Required Documents */}
      <RequiredDocuments />

      {/* FAQ */}
      <FAQSection />

      {/* Bottom CTA */}
      <ReadyToTakeNextStep />

      {/* Footer */}
      <Footer />

      {/* Bottom Navigation Bar */}
      <BottomNavBar
        sections={[
          { id: 'how-it-works', label: 'How It Works' },
          { id: 'enrollment-form', label: 'Enroll Now' },
          { id: 'pricing', label: 'Pricing' },
          { id: 'documents', label: 'Documents' },
          { id: 'faq', label: 'FAQ' },
          { id: 'book-visit', label: 'Book a Visit' }
        ]}
      />
    </div>
  );
}

// ============================================================================
// HEADER
// ============================================================================
function Header() {
  return (
    <header className="bg-[#f5edda] fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">
        {/* Logo & Title - Clickable to go home */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer shrink-0 flex items-center gap-3"
        >
          <img
            src={logoImage}
            alt="Village Values"
            className="h-12 w-12 rounded-full object-cover hover:opacity-80 transition-opacity"
          />
          <h1 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-3xl hidden sm:block">
            Village Values
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="/" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo(0, 0); }} className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Home</a>
          <a href="#programs" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Programs</a>
          <a href="#about" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">About</a>
          <a href="#enroll" className="font-['Poppins'] text-[#149496] text-base hover:text-[#149496] transition-colors">Enroll</a>
          <a href="#careers" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Careers</a>
          <a href="#resources" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Resources</a>
          <a href="#contact" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Contact</a>
        </div>

        {/* Book a Visit Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://calendly.com/villagevalues-info/30min?month=2026-02', '_blank')}
          className="bg-[#149496] text-white px-6 py-2.5 rounded-full font-['Poppins'] text-base tracking-wider uppercase hover:bg-[#1e7872] transition-colors cursor-pointer"
        >
          Book a Visit
        </motion.button>
      </div>
    </header>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5edda] to-white py-24 lg:py-32">
      <div className="max-w-[896px] mx-auto px-6 lg:px-20 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-[#c49a3a] text-white px-8 py-2 rounded-full mb-6 font-['Poppins']"
        >
          Simple & Family-Friendly
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Poppins'] text-[#232e43] text-5xl lg:text-[56px] lg:leading-[67.2px] mb-6"
        >
          Start your journey with Village Values
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Poppins'] text-[#1e7872] text-xl lg:text-2xl lg:leading-[39px] mb-8 max-w-[704px] mx-auto"
        >
          Enrollment is user friendly. We&apos;re here to guide you through every step.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#149496] text-white px-10 py-4 rounded-full font-['Poppins'] uppercase text-base tracking-wider shadow-lg hover:bg-[#1e7872] transition-colors inline-flex items-center gap-2"
        >
          Start Enrollment
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorMoon className="absolute top-32 left-20 w-64 h-64 opacity-30 rotate-180 scale-y-[-1]" />
      <DecorativeVectorStar className="absolute top-44 right-48 w-44 h-44 opacity-30" />
      <DecorativeVectorRocket className="absolute bottom-32 left-28 w-56 h-56 opacity-30 rotate-[172deg] scale-y-[-1]" />
    </section>
  );
}

// ============================================================================
// HOW ENROLLMENT WORKS
// ============================================================================
function HowEnrollmentWorks() {
  const steps = [
    {
      num: '01',
      title: 'Visit Brightwheel',
      description: 'Head to our Brightwheel portal where you can complete your enrollment information easily and securely.',
      icon: 'form'
    },
    {
      num: '02',
      title: 'Submit your info',
      description: 'Fill out your family details and your child\'s information—it only takes a few minutes!',
      icon: 'calendar'
    },
    {
      num: '03',
      title: 'We\'ll reach out',
      description: 'Our team will contact you to answer questions, schedule a visit, and complete the enrollment.',
      icon: 'document'
    },
    {
      num: '04',
      title: 'Confirm start date',
      description: 'Once everything is ready, we\'ll confirm your child\'s start date. Welcome to the village!',
      icon: 'check'
    }
  ];

  return (
    <section id="how-it-works" className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            How Enrollment Works
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl">
            Four simple steps to join our community
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <EnrollmentStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorBook className="absolute bottom-28 left-32 w-32 h-32 opacity-30" />
      <DecorativeVectorPaperAirplane className="absolute top-24 right-48 w-48 h-48 opacity-30 rotate-180 scale-y-[-1]" />
    </section>
  );
}

function EnrollmentStep({ num, title, description, icon, index }: {
  num: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-white rounded-3xl shadow-lg p-8 h-[333px]"
    >
      {/* Number Badge */}
      <div className="absolute -top-4 right-8 bg-[#c49a3a] text-white w-12 h-12 rounded-full flex items-center justify-center font-['Poppins'] shadow-md">
        {num}
      </div>

      {/* Icon */}
      <div className="bg-[rgba(20,148,150,0.1)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
        {icon === 'form' && <FormIcon />}
        {icon === 'calendar' && <CalendarIcon />}
        {icon === 'document' && <DocumentIcon />}
        {icon === 'check' && <CheckIcon />}
      </div>

      {/* Title */}
      <h3 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-[25px] lg:leading-[35.2px] mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="font-['Poppins'] text-[#1e7872] text-sm leading-[22.75px]">
        {description}
      </p>

      {/* Connecting Line (except last item) */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-[#149496] to-transparent opacity-30" />
      )}
    </motion.div>
  );
}

// ============================================================================
// ENROLLMENT FORM SECTION
// ============================================================================
function EnrollmentFormSection() {
  return (
    <section id="enrollment-form" className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Meet Brightwheel—Your Partner in Childcare
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl max-w-3xl mx-auto">
            We use Brightwheel to make your life easier. From enrollment to daily updates, everything you need is in one secure, parent-friendly app.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#f5edda] to-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12"
        >
          {/* What is Brightwheel */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[rgba(20,148,150,0.15)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="#149496">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8l4 4m6-4c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z" />
              </svg>
            </div>
            <h3 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-3xl mb-3">
              What is Brightwheel?
            </h3>
            <p className="font-['Poppins'] text-[#1e7872] text-lg leading-relaxed max-w-2xl mx-auto">
              Brightwheel is the leading childcare app trusted by thousands of families nationwide. It connects you directly with your child's day—photos, updates, milestones, and more—all from your phone or computer.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(20,148,150,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#149496">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-['Poppins'] text-[#232e43] mb-2">Daily Photos & Videos</h4>
                  <p className="font-['Poppins'] text-[#1e7872] text-sm leading-relaxed">
                    See your child's day unfold with photos and videos sent directly to your device. Watch them learn, play, and grow!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(229,121,91,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#e5795b">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-['Poppins'] text-[#232e43] mb-2">Direct Messaging</h4>
                  <p className="font-['Poppins'] text-[#1e7872] text-sm leading-relaxed">
                    Chat with your child's teachers anytime. Ask questions, share updates, or just say hello—we're always here.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(196,154,58,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#C49A3A">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-['Poppins'] text-[#232e43] mb-2">Learning Reports</h4>
                  <p className="font-['Poppins'] text-[#1e7872] text-sm leading-relaxed">
                    Track meals, naps, activities, and milestones in real-time. You'll always know what your child is up to throughout the day.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(20,148,150,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#149496">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-['Poppins'] text-[#232e43] mb-2">Secure & Private</h4>
                  <p className="font-['Poppins'] text-[#1e7872] text-sm leading-relaxed">
                    Your family's information is protected with bank-level encryption. Only you and your child's teachers have access.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-6 border-t-2 border-[rgba(20,148,150,0.1)]">
            <p className="font-['Poppins'] text-[#149496] mb-4 italic">
              ✨ And the best part? Everything happens in one place—enrollment, billing, updates, and communication!
            </p>
            <p className="font-['Poppins'] text-[#232e43] text-sm">
              Ready to experience the ease of Brightwheel? Keep scrolling to get started.
            </p>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center bg-[rgba(20,148,150,0.05)] rounded-2xl p-6">
            <div className="font-['Poppins'] text-[#149496] text-4xl mb-2">10M+</div>
            <div className="font-['Poppins'] text-[#232e43] text-sm">Families Trust Brightwheel</div>
          </div>
          <div className="text-center bg-[rgba(229,121,91,0.05)] rounded-2xl p-6">
            <div className="font-['Poppins'] text-[#e5795b] text-4xl mb-2">4.8★</div>
            <div className="font-['Poppins'] text-[#232e43] text-sm">Average Parent Rating</div>
          </div>
          <div className="text-center bg-[rgba(196,154,58,0.05)] rounded-2xl p-6">
            <div className="font-['Poppins'] text-[#C49A3A] text-4xl mb-2">24/7</div>
            <div className="font-['Poppins'] text-[#232e43] text-sm">Access to Your Child's Updates</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Rainbow */}
      <DecorativeRainbow className="absolute top-20 left-10 w-24 h-24 opacity-30" />
    </section>
  );
}

// ============================================================================
// PRICING & AVAILABILITY
// ============================================================================
function PricingAndAvailability() {
  const pricingItems = [
    {
      icon: 'dollar',
      title: 'What Tuition Includes',
      description: 'All meals and snacks, educational materials, outdoor play, and structured learning activities.'
    },
    {
      icon: 'clock',
      title: 'How Availability Works',
      description: 'We offer full-time and part-time options. Spots are assigned based on age group and enrollment date.'
    },
    {
      icon: 'chart',
      title: 'What Affects the Rate',
      description: 'Pricing varies by age group, schedule preference, and number of days per week.'
    },
    {
      icon: 'calendar',
      title: 'Payment Options',
      description: 'Flexible payment plans available. We work with families to find the right fit.'
    }
  ];

  return (
    <section id="pricing" className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Pricing & Availability
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl">
            Simple, transparent, and family-friendly pricing
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pricingItems.map((item, index) => (
            <PricingCard key={index} {...item} index={index} />
          ))}
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-gradient-to-b from-[#149496] to-[#1e7872] rounded-2xl shadow-xl p-8 text-center text-white"
        >
          <div className="inline-block bg-[rgba(255,255,255,0.2)] px-6 py-1.5 rounded-full mb-4 text-sm uppercase tracking-wider">
            Important
          </div>
          <p className="font-['Poppins'] text-lg leading-[28px]">
            Exact pricing and availability details are provided during your tour. We&apos;ll answer all your questions and work with you to find the best option for your family.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorMoon className="absolute bottom-24 left-20 w-64 h-64 opacity-30 rotate-180 scale-y-[-1]" />
      <DecorativeVectorSun className="absolute top-10 right-36 w-64 h-64 opacity-30" />
    </section>
  );
}

function PricingCard({ icon, title, description, index }: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg p-8 flex gap-4"
    >
      <div className="bg-[rgba(20,148,150,0.1)] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
        {icon === 'dollar' && <DollarIcon />}
        {icon === 'clock' && <ClockIcon />}
        {icon === 'chart' && <ChartIcon />}
        {icon === 'calendar' && <CalendarIconLarge />}
      </div>
      <div>
        <h3 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-[28px] lg:leading-[39.2px] mb-2">
          {title}
        </h3>
        <p className="font-['Poppins'] text-[#1e7872] text-sm leading-[22.75px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// ============================================================================
// REQUIRED DOCUMENTS
// ============================================================================
function RequiredDocuments() {
  const documents = [
    {
      icon: 'document',
      title: 'Parent Handbook',
      description: 'Review our policies, procedures, and daily schedules'
    },
    {
      icon: 'checklist',
      title: 'Emergency Contact Sheet',
      description: 'Provide emergency contacts and authorized pickup persons'
    },
    {
      icon: 'medical',
      title: 'Immunization Record',
      description: 'Current vaccination records required by the state'
    },
    {
      icon: 'allergy',
      title: 'Allergy & Medication Form',
      description: 'List any allergies, dietary restrictions, or medications'
    },
    {
      icon: 'authorization',
      title: 'Photo & Video Release',
      description: 'Optional consent for class photos and activities'
    },
    {
      icon: 'agreement',
      title: 'Enrollment Agreement',
      description: 'Review and sign the enrollment contract'
    }
  ];

  return (
    <section id="documents" className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Required Documents
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl mb-2">
            Everything you&apos;ll need to complete enrollment
          </p>
          <p className="font-['Poppins'] italic text-[#149496]">
            We help you with this step so you never feel lost.
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {documents.map((doc, index) => (
            <DocumentCard key={index} {...doc} index={index} />
          ))}
        </div>

        {/* Help CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-[#c49a3a] text-white px-8 py-3 rounded-full font-['Poppins']">
            Need Help with Paperwork?
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block mx-auto mt-4 bg-[#e5795b] text-white px-8 py-3 rounded-full font-['Poppins'] hover:bg-[#d66b4d] transition-colors"
          >
            {/* Schedule a Call */}
            Call  +1 916-761-0211
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function DocumentCard({ icon, title, description, index }: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#f5edda] rounded-2xl p-6"
    >
      {/* Icon & Expand Button */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="bg-[rgba(20,148,150,0.1)] w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
          {icon === 'document' && <DocumentIconSmall />}
          {icon === 'checklist' && <ChecklistIcon />}
          {icon === 'medical' && <MedicalIcon />}
          {icon === 'allergy' && <AllergyIcon />}
          {icon === 'authorization' && <PhotoIcon />}
          {icon === 'agreement' && <AgreementIcon />}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#c49a3a] w-5 h-5 flex-shrink-0"
        >
          <DownloadIcon />
        </button>
      </div>

      {/* Title */}
      <h3 className="font-['Poppins'] text-[#232e43] text-xl mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="font-['Poppins'] text-[#1e7872] text-sm leading-[22.75px]">
        {description}
      </p>
    </motion.div>
  );
}

// ============================================================================
// FAQ SECTION
// ============================================================================
function FAQSection() {
  const faqs = [
    {
      question: 'How do I know which program is right for my child?',
      answer: 'Our team will help you choose the best program based on your child\'s age and developmental needs during your tour.'
    },
    {
      question: 'How long does the enrollment process take?',
      answer: 'Once you submit your form, we typically respond within 24-48 hours to schedule a tour.'
    },
    {
      question: 'Do you have a waitlist?',
      answer: 'Yes, if spots are full in your preferred program, we can add you to our waitlist and notify you when space opens.'
    },
    {
      question: 'What if my schedule changes?',
      answer: 'We understand schedules change! Talk to us about flexible options or schedule adjustments.'
    },
    {
      question: 'Can I visit before enrolling?',
      answer: 'Absolutely! We encourage all families to schedule a tour before enrolling.'
    },
    {
      question: 'What happens if my child gets sick?',
      answer: 'Please keep your child home if they show symptoms. We follow state health guidelines for illness policies.'
    }
  ];

  return (
    <section id="faq" className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-2">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-['Poppins'] text-[#1e7872] mb-4">
            Still have questions?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#contact';
              setTimeout(() => window.scrollTo(0, 0), 0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#149496] text-white px-8 py-3 rounded-full font-['Poppins'] hover:bg-[#1e7872] transition-colors"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorApple className="absolute bottom-32 right-36 w-64 h-64 opacity-30" />
      <DecorativeVectorHeart className="absolute top-12 left-12 w-64 h-64 opacity-30 rotate-[21deg]" />
    </section>
  );
}

function FAQItem({ question, answer, index }: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="font-['Poppins'] text-[#232e43] text-xl pr-4">
          {question}
        </h3>
        <div className={`text-[#149496] flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronIcon />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="font-['Poppins'] text-[#1e7872] leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </motion.div>
  );
}

// ============================================================================
// READY TO TAKE NEXT STEP (Bottom CTA)
// ============================================================================
function ReadyToTakeNextStep() {
  return (
    <section id="book-visit" className="relative overflow-hidden bg-[#149496] py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-[rgba(255,255,255,0.2)] rounded-full mb-6"
        >
          <HeartIconLarge />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Poppins'] text-white text-4xl lg:text-[48px] lg:leading-[60px] mb-6"
        >
          Ready to Get Started?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Poppins'] text-white/90 text-xl mb-8 max-w-2xl mx-auto"
        >
          Enrollment is easy! We use Brightwheel to make the process simple and convenient for busy families. Click below to fill out your information and we'll be in touch soon!
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://schools.mybrightwheel.com/sign-in?redirect_path=forms/a3312612-97f2-456c-9444-121c9a92c1a9/self-service"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#e5795b] text-white px-10 py-4 rounded-full font-['Poppins'] uppercase text-base tracking-wider shadow-lg hover:bg-[#d66b4d] transition-colors"
        >
          Enroll on Brightwheel
        </motion.a>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorStarWhite className="absolute top-20 left-20 w-48 h-48 opacity-20" />
      <DecorativeVectorLeafWhite className="absolute bottom-20 right-20 w-40 h-40 opacity-20" />
    </section>
  );
}

// ============================================================================
// DECORATIVE VECTORS (All at 50% opacity)
// ============================================================================
function DecorativeVectorMoon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <path d={svgPaths.p18ae8000} fill="#149496" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorStar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 171 171">
        <path d={svgPaths.p11adfe80} fill="#149496" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorRocket({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 221 221">
        <g opacity="0.5">
          <path d={svgPaths.p13b7200} fill="#C49A3A" />
          <path d={svgPaths.p146c8f80} fill="#C49A3A" />
          <path d={svgPaths.p12d85500} fill="#C49A3A" />
          <path d={svgPaths.p1201c280} fill="#C49A3A" />
        </g>
      </svg>
    </div>
  );
}

function DecorativeVectorBook({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 125 125">
        <path d={svgPaths.p8cb9600} fill="#C49A3A" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorPaperAirplane({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 180 180">
        <path d={svgPaths.p38f2d00} fill="#E5795B" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeRainbow({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 115 60">
        <path d={svgPaths.p1f7c3d80} stroke="#C49A3A" strokeLinecap="round" strokeWidth="4.1462" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorSun({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <g opacity="0.5">
          <path d={svgPaths.p2546c700} fill="#C49A3A" />
          <path d={svgPaths.pa45b000} fill="#C49A3A" />
          <path d={svgPaths.p13797080} fill="#C49A3A" />
          <path d={svgPaths.p18f34d00} fill="#C49A3A" />
          <path d={svgPaths.p32c2a0b0} fill="#C49A3A" />
          <path d={svgPaths.p381a3a00} fill="#C49A3A" />
          <path d={svgPaths.p13920100} fill="#C49A3A" />
          <path d={svgPaths.p141dd4c0} fill="#C49A3A" />
          <path d={svgPaths.p17c99440} fill="#C49A3A" />
        </g>
      </svg>
    </div>
  );
}

function DecorativeVectorApple({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <path d={svgPaths.p1956ae40} fill="#E5795B" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorHeart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <path d={svgPaths.p1cc37670} fill="#C49A3A" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorStarWhite({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <path d={svgPaths.p148b37b0} fill="#ffffff" opacity="0.3" />
      </svg>
    </div>
  );
}

function DecorativeVectorLeafWhite({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 150 150">
        <path d={svgPaths.p188b5880} fill="#ffffff" opacity="0.3" />
      </svg>
    </div>
  );
}

// ============================================================================
// ICONS
// ============================================================================
function FormIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p304640b0} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p2ed4a000} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p277d6f80} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d="M10.6667 2.66667V8" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M21.3333 2.66667V8" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p8d31b00} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M4 13.3333H28" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p101a6580} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p76546be} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M13.3333 12H10.6667" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M21.3333 17.3333H10.6667" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M21.3333 22.6667H10.6667" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p13d00d80} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p1adb0100} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p1beb9580} stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p32ab0300} stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p24d83580} stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.pd919a80} stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p24c7c480} stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function ChildIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p180c3300} stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M12.5 10H12.5083" stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.pf8c46e0} stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M7.5 10H7.50833" stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function CalendarIconSmall() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d="M6.66667 1.66667V5" stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M13.3333 1.66667V5" stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p1da67b80} stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M2.5 8.33333H17.5" stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p12dcd500} stroke="#1E7872" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M14 2.33333V25.6667" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p2a38c0} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M14 7V14L18.6667 16.3333" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p1fa66600} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPaths.p184ba090} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p182f3148} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p2f1426c0} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p5d36b00} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </svg>
  );
}

function CalendarIconLarge() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M9.33333 2.33333V7" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d="M18.6667 2.33333V7" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p57f3600} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d="M3.5 11.6667H24.5" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </svg>
  );
}

function DocumentIconSmall() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.pb47f400} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p17a13100} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10 9H8" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 13H8" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 17H8" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d="M16 11L18 13L22 9" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p1d820380} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p161d4800} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d="M18 2L22 6" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M17 7L20 4" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p206f0800} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9 11L13 15" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M5 19L2 22" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M14 4L20 10" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function AllergyIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p1cbd5800} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function PhotoIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.pe5e3700} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M5.25 19L12 14.25L15.75 18" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9.75 10.5C10.5784 10.5 11.25 9.82843 11.25 9C11.25 8.17157 10.5784 7.5 9.75 7.5C8.92157 7.5 8.25 8.17157 8.25 9C8.25 9.82843 8.92157 10.5 9.75 10.5Z" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function AgreementIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p188c4c00} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p2dc3c480} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p3e05ba00} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M0.833333 10.8333V0.833333" stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function HeartIconLarge() {
  return (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
      <path d={svgPaths.p1dbfe900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
    </svg>
  );
}

function FacebookIconSmall() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIconSmall() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterIconSmall() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}
