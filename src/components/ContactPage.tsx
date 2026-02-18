import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import svgPaths from '../imports/svg-03b0ljplgr';
import svgPathsHours from '../imports/svg-iw6a9dx0mr';
import svgPathsResource from '../imports/svg-cagmn7iq8h';
import svgPathsCareers from '../imports/svg-8iy3x6elu4';
import svgPathsVisit from '../imports/svg-uj2p21gynf';
import { PageLayout } from './PageLayout';

const heroImage = "https://images.unsplash.com/photo-1742522450616-a2cf0cba1274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHNtaWxpbmd8ZW58MXx8fHwxNzY2MTY5NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout
      currentPage="contact"
      bgColor="bg-gradient-to-b from-[#f5edda] to-white"
      sections={[
        { id: 'contact-form', label: 'Send Message' },
        { id: 'info', label: 'Contact Info' },
        { id: 'hours', label: 'Hours' }
      ]}
    >
      <div className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <DecorativeElements />

        {/* Hero Section */}
        <HeroSection />

        {/* Contact Form Section */}
        <ContactFormSection selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />

        {/* Contact Information Section */}
        <ContactInformationSection />

        {/* Hours of Operation Section */}
        <HoursOfOperationSection />

        {/* Research & Resource Department */}
        <ResourceDepartmentSection />

        {/* Join Our Team Section */}
        <JoinTeamSection />

        {/* Visit Village Values */}
        <VisitSection />
      </div>
    </PageLayout>
  );
}

// ============================================================================
// DECORATIVE ELEMENTS
// ============================================================================
function DecorativeElements() {
  return (
    <>
      {/* Cloud decorations */}
      <div className="absolute top-32 right-32 w-64 h-64 opacity-30">
        <CloudIcon />
      </div>
      <div className="absolute top-48 right-48 w-72 h-72 opacity-30" style={{ transform: 'scaleY(-1)' }}>
        <CloudIcon />
      </div>
      <div className="absolute top-48 left-48 w-64 h-64 opacity-30" style={{ transform: 'scaleY(-1)' }}>
        <CloudIcon />
      </div>

      {/* Rain icon */}
      <div className="absolute top-96 right-80 w-48 h-48 opacity-30" style={{ transform: 'rotate(7.377deg)' }}>
        <RainIcon />
      </div>

      {/* Umbrella */}
      <div className="absolute bottom-96 right-64 w-52 h-52 opacity-30" style={{ transform: 'rotate(354.832deg)' }}>
        <UmbrellaIcon />
      </div>

      {/* Stickman */}
      <div className="absolute bottom-32 right-96 w-64 h-64 opacity-30">
        <StickmanIcon />
      </div>

      {/* Cat */}
      <div className="absolute bottom-24 right-32 w-36 h-36 opacity-30">
        <CatIcon />
      </div>

      {/* Rainbow */}
      <div className="absolute top-24 left-6 w-84 h-60 opacity-30">
        <RainbowIcon />
      </div>
    </>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-[#149496] text-white px-6 py-2 rounded-full mb-6">
            <span className="font-['Poppins'] text-base">Get in Touch</span>
          </div>

          <h1 className="font-['Poppins'] text-[#232e43] text-5xl lg:text-[56px] lg:leading-[67.2px] mb-6">
            We&apos;re here for you.
          </h1>

          <p className="font-['Poppins'] text-[#1e7872] text-xl leading-[32.5px] mb-8">
            Reach out with any questions or support you need. Your Village is ready to help. Whether you&apos;re a parent, job seeker, or community partner, we&apos;re just a message away.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#149496] text-white px-10 py-4 rounded-full font-['Poppins'] tracking-wider uppercase shadow-lg hover:bg-[#1e7872] transition-colors"
            >
              Send a Message
            </motion.a>
            {/* <motion.a
              href="tel:5551234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-[#149496] text-[#232e43] px-10 py-4 rounded-full font-['Poppins'] tracking-wider uppercase shadow-lg hover:bg-[#f5edda] transition-colors"
            >
              Call Us
            </motion.a>  */}
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl relative">
            <img
              src={heroImage}
              alt="Happy family"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(35,46,67,0.2)] to-transparent"></div>

            {/* Available Badge */}
            <div className="absolute bottom-0 -left-6 bg-[#e5795b] text-white px-8 pt-6 pb-0 rounded-2xl shadow-xl">
              <p className="font-['Poppins'] text-sm opacity-90">Available</p>
              <p className="font-['Poppins'] text-2xl">Mon - Fri</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// CONTACT FORM SECTION
// ============================================================================
function ContactFormSection({ selectedTopic, setSelectedTopic }: {
  selectedTopic: string;
  setSelectedTopic: (value: string) => void;
}) {
  return (
    <section id="contact-form" className="bg-white py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Dotted Line */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{ top: '25%', height: '50%' }}>
        <path
          d="M 200 350 Q 600 100, 1000 350 Q 1400 600, 1800 350"
          fill="none"
          stroke="#C49A3A"
          strokeWidth="16"
          strokeDasharray="42 42"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>

      {/* Decorative Icons */}
      <div className="absolute top-12 right-48 w-72 h-72 opacity-30" style={{ transform: 'rotate(352.437deg)' }}>
        <EmailIcon />
      </div>
      <div className="absolute bottom-24 left-64 w-64 h-64 opacity-30">
        <PaperAirplaneIcon />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Send Us a Message
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl">
            We typically respond within 24 hours
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-[#f5edda] rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <ContactForm selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// CONTACT FORM (extracted so useForm hook is called at component top level)
// ============================================================================
function ContactForm({ selectedTopic, setSelectedTopic }: {
  selectedTopic: string;
  setSelectedTopic: (value: string) => void;
}) {
  const [state, handleSubmit] = useForm("mdaldoyn");

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <h3 className="font-['Poppins'] text-[#232e43] text-3xl mb-4">
          Thank you!
        </h3>
        <p className="font-['Poppins'] text-[#1e7872] text-xl">
          Your message has been sent. We'll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-8 bg-[#149496] text-white px-10 py-4 rounded-2xl font-['Poppins'] uppercase tracking-wider shadow-lg hover:bg-[#1e7872] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block font-['Poppins'] text-[#232e43] mb-2">Your Name *</label>
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <UserIcon />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full bg-white border-2 border-white rounded-2xl pl-12 pr-4 py-3 font-['Poppins'] text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:ring-2 focus:ring-[#149496]"
            required
          />
        </div>
        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm mt-1 ml-4" />
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-['Poppins'] text-[#232e43] mb-2">Email Address *</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <EmailIconForm />
            </div>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full bg-white border-2 border-white rounded-2xl pl-12 pr-4 py-3 font-['Poppins'] text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:ring-2 focus:ring-[#149496]"
              required
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1 ml-4" />
        </div>
        <div>
          <label className="block font-['Poppins'] text-[#232e43] mb-2">Phone Number</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <PhoneIcon />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 123-4567"
              className="w-full bg-white border-2 border-white rounded-2xl pl-12 pr-4 py-3 font-['Poppins'] text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:ring-2 focus:ring-[#149496]"
            />
          </div>
        </div>
      </div>

      {/* Topic Dropdown */}
      <div>
        <label className="block font-['Poppins'] text-[#232e43] mb-2">What are you reaching out about? *</label>
        <select
          name="topic"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="w-full bg-white border-2 border-white rounded-2xl px-4 py-3 font-['Poppins'] text-[#232e43] focus:outline-none focus:ring-2 focus:ring-[#149496] appearance-none cursor-pointer"
          style={{ color: selectedTopic ? '#232e43' : 'rgba(35,46,67,0.5)' }}
          required
        >
          <option value="" disabled>Select a topic</option>
          <option value="enrollment">Enrollment</option>
          <option value="programs">Programs</option>
          <option value="billing">Billing</option>
          <option value="careers">Careers</option>
          <option value="resources">Resources</option>
          <option value="other">Other</option>
        </select>
        <ValidationError prefix="Topic" field="topic" errors={state.errors} className="text-red-600 text-sm mt-1 ml-4" />
      </div>

      {/* Message */}
      <div>
        <label className="block font-['Poppins'] text-[#232e43] mb-2">Your Message *</label>
        <div className="relative">
          <div className="absolute left-4 top-4">
            <MessageIcon />
          </div>
          <textarea
            name="message"
            rows={6}
            placeholder="How can we help you?"
            className="w-full bg-white border-2 border-white rounded-2xl pl-12 pr-4 py-3 font-['Poppins'] text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:ring-2 focus:ring-[#149496] resize-none"
            required
          ></textarea>
        </div>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1 ml-4" />
      </div>

      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#149496] text-white px-8 py-4 rounded-2xl font-['Poppins'] uppercase tracking-wider shadow-lg hover:bg-[#1e7872] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </motion.button>

      {!state.submitting && state.errors && (Array.isArray(state.errors) ? state.errors.length > 0 : Object.keys(state.errors).length > 0) && (
        <p className="text-red-600 text-center mt-4 font-['Poppins']">
          Please correct the errors shown above.
        </p>
      )}
    </form>
  );
}

// ============================================================================
// CONTACT INFORMATION SECTION
// ============================================================================
function ContactInformationSection() {
  return (
    <section id="info" className="bg-[#f5edda] py-16 lg:py-24">
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
            Contact Information
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl">
            Prefer a quick call or email? We&apos;re here to help.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Phone */}
          <ContactCard
            icon={<PhoneIconLarge />}
            title="Phone Number"
            main="916-761-0211"
            sub="Mon - Fri, 7:00 AM - 6:00 PM"
            delay={0}
          />

          {/* Email */}
          <ContactCard
            icon={<EmailIconLarge />}
            title="Email Address"
            main="info@villagevalues.net"
            sub="We respond within 24 hours"
            delay={0.1}
          />

          {/* Service Area */}
          <ContactCard
            icon={<LocationIcon />}
            title="Service Area"
            main="Greater Metro Area"
            sub="Serving families across the region"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, main, sub, delay }: {
  icon: React.ReactNode;
  title: string;
  main: string;
  sub: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="bg-[rgba(20,148,150,0.1)] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="font-['Poppins'] text-[#232e43] text-[28px] leading-[39.2px] mb-2">
        {title}
      </h3>
      <p className="font-['Poppins'] text-[#149496] mb-2">
        {main}
      </p>
      <p className="font-['Poppins'] text-[#1e7872] text-sm">
        {sub}
      </p>
    </motion.div>
  );
}

// ============================================================================
// HOURS OF OPERATION SECTION
// ============================================================================
function HoursOfOperationSection() {
  return (
    <section id="hours" className="bg-white py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-16 top-[168px] w-60 h-60 opacity-30">
        <SunIcon />
      </div>
      <div className="absolute right-[270px] top-[154px] w-[291px] h-[291px] opacity-30" style={{ transform: 'rotate(9.798deg)' }}>
        <MoonIcon />
      </div>
      <div className="absolute left-[149px] bottom-[70px] w-[236px] h-[236px] opacity-30" style={{ transform: 'scaleY(-1)' }}>
        <BirdIcon />
      </div>
      <div className="absolute right-[250px] bottom-[82px] w-[221px] h-[221px] opacity-30">
        <OwlIcon />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Hours of Operation
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl">
            When you can reach us and when we&apos;re caring for children
          </p>
        </motion.div>

        {/* Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-[#f5edda] rounded-3xl shadow-xl p-8 lg:p-12"
        >
          {/* Icon & Title */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[rgba(20,148,150,0.1)] w-14 h-14 rounded-2xl flex items-center justify-center">
              <ClockIcon />
            </div>
            <h3 className="font-['Poppins'] text-[#232e43] text-[28px] leading-[39.2px]">
              Operating Hours
            </h3>
          </div>

          {/* Hours List */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center py-4 border-b border-white">
              <span className="font-['Poppins'] text-[#232e43]">Monday - Friday</span>
              <span className="font-['Poppins'] text-[#149496]">6:30 AM - 5:30 PM</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-white">
              <span className="font-['Poppins'] text-[#232e43]">Saturday</span>
              <span className="font-['Poppins'] text-[#149496]">Closed</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="font-['Poppins'] text-[#232e43]">Sunday</span>
              <span className="font-['Poppins'] text-[#149496]">Closed</span>
            </div>
          </div>

          {/* Holiday Closures */}
          <div className="pt-8 border-t border-white">
            <p className="font-['Poppins'] text-[#1e7872] text-sm text-center mb-2">
              <span className="font-['Poppins']">Holiday Closures:</span> We&apos;re closed on major holidays including New Year&apos;s Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, and Christmas. Families are notified of closures in advance.
            </p>
          </div>

          {/* Bottom Note */}
          <div className="pt-8 border-t border-white mt-6">
            <p className="font-['Poppins'] italic text-[#1e7872] text-sm text-center">
              Need to reach us outside these hours? Send us a message and we&apos;ll respond first thing the next business day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// RESEARCH & RESOURCE DEPARTMENT SECTION
// ============================================================================
function ResourceDepartmentSection() {
  return (
    <section className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-10 top-20 w-25 h-[134px] opacity-30">
        <WavyLineIcon />
      </div>
      <div className="absolute left-44 bottom-[102px] w-64 h-64 opacity-30" style={{ transform: 'rotate(359.809deg)' }}>
        <MagnifyingGlassIcon />
      </div>
      <div className="absolute right-48 top-[74px] w-56 h-56 opacity-30">
        <GlobeIcon />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Research & Resource Department
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl">
            Partner with us to support families and community
          </p>
        </motion.div>

        {/* Teal Gradient Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-b from-[#149496] to-[#1e7872] rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          {/* Three Icon Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Schools & Organizations */}
            <div className="text-center">
              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SchoolIcon />
              </div>
              <h3 className="font-['Poppins'] text-white text-xl mb-2">
                Schools & Organizations
              </h3>
              <p className="font-['Poppins'] text-white/80 text-sm">
                Collaborate on programs and resources
              </p>
            </div>

            {/* Community Partners */}
            <div className="text-center">
              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CommunityIcon />
              </div>
              <h3 className="font-['Poppins'] text-white text-xl mb-2">
                Community Partners
              </h3>
              <p className="font-['Poppins'] text-white/80 text-sm">
                Share resources and support families together
              </p>
            </div>

            {/* Direct Contact */}
            <div className="text-center">
              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DirectContactIcon />
              </div>
              <h3 className="font-['Poppins'] text-white text-xl mb-2">
                Direct Contact
              </h3>
              <p className="font-['Poppins'] text-white/80 text-sm">
                Reach our team for partnership inquiries
              </p>
            </div>
          </div>

          {/* Bottom Section with Description and Buttons */}
          <div className="pt-8 border-t border-white/20">
            <p className="font-['Poppins'] text-white/90 text-center mb-6 max-w-3xl mx-auto">
              Our Research & Resource Department connects with hospitals, therapists, schools, food banks, and community organizations to create a comprehensive support network for families.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:info@villagevalues.net"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#149496] px-6 py-3 rounded-full font-['Poppins'] flex items-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <EmailResourceIcon />
                info@villagevalues.net
              </motion.a>
              <motion.button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = 'mailto:info@villagevalues.net?subject=Partnership%20Inquiry'; }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#c49a3a] text-white px-6 py-3 rounded-full font-['Poppins'] hover:bg-[#b38a2a] transition-colors cursor-pointer"
              >
                Partner With Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// JOIN OUR TEAM SECTION
// ============================================================================
function JoinTeamSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Cream Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#f5edda] rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div>
              {/* Briefcase Icon Badge */}
              <div className="bg-[rgba(196,154,58,0.1)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BriefcaseIcon />
              </div>

              {/* Heading */}
              <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
                Interested in Joining Our Team?
              </h2>

              {/* Paragraph */}
              <p className="font-['Poppins'] text-[#1e7872] mb-8">
                We&apos;re always looking for passionate educators, assistants, and interns who want to make a real impact in children&apos;s lives. Whether you&apos;re exploring opportunities or ready to apply, we&apos;d love to hear from you.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#149496] rounded-full flex-shrink-0"></div>
                  <span className="font-['Poppins'] text-[#1e7872]">Full-time and part-time positions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#149496] rounded-full flex-shrink-0"></div>
                  <span className="font-['Poppins'] text-[#1e7872]">Internship and apprentice opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#149496] rounded-full flex-shrink-0"></div>
                  <span className="font-['Poppins'] text-[#1e7872]">Supportive team environment</span>
                </li>
              </ul>

              {/* Email Link */}
              <div className="flex items-center gap-3">
                <EmailCareersIcon />
                <a href="mailto:careers@villagevalues.com" className="font-['Poppins'] text-[#1e7872] hover:text-[#149496] transition-colors">
                  careers@villagevalues.com
                </a>
              </div>
            </div>

            {/* Right Side - Action Cards */}
            <div className="space-y-4 lg:pt-32">
              {/* View Open Roles Button */}
              <motion.button
                type="button"
                onClick={() => {
                  sessionStorage.setItem('scrollTo', 'open-positions');
                  window.location.hash = '#careers';
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-[#149496] text-white px-6 py-4 rounded-2xl font-['Poppins'] text-center uppercase tracking-wider shadow-lg hover:bg-[#1e7872] transition-colors cursor-pointer"
              >
                View Open Roles
              </motion.button>

              {/* Ask About Internships Button */}
              <motion.button
                type="button"
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-white border-2 border-[#c49a3a] text-[#232e43] px-6 py-4 rounded-2xl font-['Poppins'] text-center uppercase tracking-wider shadow-lg hover:bg-[#f5edda] transition-colors cursor-pointer"
              >
                Ask About Internships
              </motion.button>

              {/* Not Sure Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-8 h-8 mx-auto mb-4">
                  <PaperPlaneIcon />
                </div>
                <p className="font-['Poppins'] text-[#1e7872] text-sm">
                  Not sure where to start? Send us your resume and we&apos;ll help you find the right fit.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// VISIT VILLAGE VALUES SECTION
// ============================================================================
function VisitSection() {
  return (
    <section className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Elements - Ducks on the left */}
      <div className="absolute left-10 bottom-10 w-64 h-64 opacity-30">
        <DuckyIcon1 />
      </div>
      <div className="absolute left-56 bottom-5 w-48 h-48 opacity-30">
        <DuckyIcon2 />
      </div>

      {/* Decorative Elements - Birds on the right */}
      <div className="absolute right-10 top-10 w-64 h-64 opacity-30">
        <BirdIcon1 />
      </div>
      <div className="absolute right-5 top-28 w-48 h-48 opacity-30">
        <BirdIcon2 />
      </div>

      <div className="max-w-[900px] mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#e5795b] to-[#f5a96e] rounded-3xl shadow-2xl p-8 lg:p-16 text-center relative overflow-hidden"
        >
          {/* White Decorative Circles in Background */}
          <div className="absolute left-10 top-10 w-20 h-20 border-4 border-white rounded-full opacity-10"></div>
          <div className="absolute right-16 bottom-5 w-32 h-32 border-4 border-white rounded-full opacity-10"></div>
          <div className="absolute right-10 top-16 w-16 h-16 border-4 border-white rounded-full opacity-10"></div>

          {/* Calendar Icon */}
          <div className="relative z-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CalendarIcon />
          </div>

          {/* Heading */}
          <h2 className="relative z-10 font-['Poppins'] text-white text-4xl lg:text-[40px] lg:leading-[52px] mb-4">
            Ready to Join Our Village Family?
          </h2>

          {/* Paragraph */}
          <p className="relative z-10 font-['Poppins'] text-white/90 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            We use Brightwheel to make enrollment and visit scheduling easy for busy parents. Head over to our Brightwheel portal to get started—it only takes a few minutes to fill out your information!
          </p>

          {/* Button */}
          <motion.a
            href="https://schools.mybrightwheel.com/sign-in?redirect_path=forms/a3312612-97f2-456c-9444-121c9a92c1a9/self-service"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 inline-block bg-white text-[#e5795b] px-10 py-4 rounded-full font-['Poppins'] text-base uppercase tracking-wider shadow-xl hover:bg-[#f5edda] transition-colors"
          >
            Go to Brightwheel
          </motion.a>

          {/* Small text at bottom */}
          <p className="relative z-10 font-['Poppins'] text-white/70 text-sm mt-8">
            New to Brightwheel? Don't worry—it's simple and secure!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// ICON COMPONENTS
// ============================================================================
function CloudIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <path d={svgPaths.p250d980} fill="#1E7872" opacity="0.3" />
    </svg>
  );
}

function RainIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 187 187">
      <g opacity="0.3">
        <path d={svgPaths.p36965e00} fill="#149496" />
        <path d={svgPaths.p35d15200} fill="#149496" />
        <path d={svgPaths.p1a96b100} fill="#149496" />
        <path d={svgPaths.p2eebe780} fill="#149496" />
        <path d={svgPaths.p3a6cbd00} fill="#149496" />
        <path d={svgPaths.p2025b280} fill="#149496" />
        <path d={svgPaths.p3a52e000} fill="#149496" />
        <path d={svgPaths.p1fb29400} fill="#149496" />
      </g>
    </svg>
  );
}

function UmbrellaIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 202 202">
      <path d={svgPaths.p20201b00} fill="#E5795B" opacity="0.3" />
    </svg>
  );
}

function StickmanIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <g opacity="0.3">
        <path d={svgPaths.p16161c80} fill="#C49A3A" />
        <path d={svgPaths.p31994680} fill="#C49A3A" />
        <path d={svgPaths.p1cd71400} fill="#C49A3A" />
      </g>
    </svg>
  );
}

function CatIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 148 148">
      <g opacity="0.3">
        <path d={svgPaths.p3f669000} fill="#C49A3A" />
        <path d={svgPaths.p1b4f0b00} fill="#C49A3A" />
        <path d={svgPaths.p2f3c0b00} fill="#C49A3A" />
        <path d={svgPaths.p153fc500} fill="#C49A3A" />
      </g>
    </svg>
  );
}

function RainbowIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 335 230">
      <path d={svgPaths.p29573480} fill="#1E7872" opacity="0.3" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <path d={svgPaths.p7967e00} fill="#149496" opacity="0.3" />
    </svg>
  );
}

function PaperAirplaneIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <path d={svgPaths.p7d0b4f0} fill="#C49A3A" opacity="0.3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p1beb9580} stroke="#1E7872" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p32ab0300} stroke="#1E7872" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EmailIconForm() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p24d83580} stroke="#1E7872" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.pd919a80} stroke="#1E7872" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p24c7c480} stroke="#1E7872" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p12dcd500} stroke="#1E7872" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIconLarge() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p1efd0200} stroke="#149496" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EmailIconLarge() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.pd243c80} stroke="#149496" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p3cc2c7f0} stroke="#149496" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p3ae94df2} stroke="#149496" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p363c980} stroke="#149496" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64" stroke="currentColor">
      <circle cx="32" cy="20" r="8" strokeWidth="2" />
      <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="24" r="6" strokeWidth="2" />
      <circle cx="48" cy="24" r="6" strokeWidth="2" />
      <path d="M4 52c0-6.627 5.373-12 12-12M60 52c0-6.627-5.373-12-12-12" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}



function SunIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 240 240">
      <g opacity="0.3">
        <path d={svgPathsHours.p9a0380} fill="#C49A3A" />
        <path d={svgPathsHours.p209e9580} fill="#C49A3A" />
        <path d={svgPathsHours.p22ad4780} fill="#C49A3A" />
        <path d={svgPathsHours.p29c88340} fill="#C49A3A" />
        <path d={svgPathsHours.p1c991940} fill="#C49A3A" />
        <path d={svgPathsHours.p29a2b800} fill="#C49A3A" />
        <path d={svgPathsHours.p1771c300} fill="#C49A3A" />
        <path d={svgPathsHours.p2e15a5c0} fill="#C49A3A" />
        <path d={svgPathsHours.p127c7200} fill="#C49A3A" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <path d={svgPathsHours.p26d94000} fill="#149496" opacity="0.3" />
    </svg>
  );
}

function BirdIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 236 236">
      <g opacity="0.3">
        <g>
          <path d={svgPathsHours.p3da7c100} fill="#149496" />
          <path d={svgPathsHours.p14437580} fill="#149496" />
          <path d={svgPathsHours.p163c7d00} fill="#149496" />
          <path d={svgPathsHours.p1a73dd00} fill="#149496" />
        </g>
        <path d={svgPathsHours.p200ba800} fill="#149496" />
        <path d={svgPathsHours.p16c04400} fill="#149496" />
        <path d={svgPathsHours.paa11500} fill="#149496" />
        <path d={svgPathsHours.p1fe5fc00} fill="#149496" />
        <path d={svgPathsHours.p1327e00} fill="#149496" />
        <path d={svgPathsHours.p353ddf80} fill="#149496" />
      </g>
    </svg>
  );
}

function OwlIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 221 221">
      <path d={svgPathsHours.p39fc5900} fill="#C49A3A" opacity="0.3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M14 7V14L18.6667 16.3333" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsHours.p1fa66600} stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WavyLineIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 112 58">
      <path d={svgPathsResource.p261d5040} stroke="#F6D33A" strokeWidth="4.02288" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

function MagnifyingGlassIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <g opacity="0.3">
        <path d={svgPathsResource.p8f9c000} fill="#E5795B" />
        <path d={svgPathsResource.pd8dd080} fill="#E5795B" />
        <path d={svgPathsResource.p2ff57b00} fill="#E5795B" />
      </g>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 227 227">
      <path d={svgPathsResource.p3f0e1e80} fill="#1E7872" opacity="0.3" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResource.p184ba090} stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResource.p182f3148} stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResource.p2f1426c0} stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResource.p5d36b00} stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M14 8.16667V24.5" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResource.pcca6c00} stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DirectContactIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResource.p31cdb480} stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResource.p3ea83200} stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EmailResourceIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPathsResource.p24d83580} stroke="#149496" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResource.pd919a80} stroke="#149496" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsCareers.p984d200} stroke="#C49A3A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsCareers.p28e98400} stroke="#C49A3A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EmailCareersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPathsCareers.p24d83580} stroke="#C49A3A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsCareers.pd919a80} stroke="#C49A3A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PaperPlaneIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsCareers.p2b331900} stroke="#C49A3A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsCareers.p305f7200} stroke="#C49A3A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DuckyIcon1() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <g opacity="0.3">
        <path d={svgPathsVisit.p1bb22680} fill="#C49A3A" />
        <path d={svgPathsVisit.p37055800} fill="#C49A3A" />
      </g>
    </svg>
  );
}

function DuckyIcon2() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 198 198">
      <g opacity="0.3">
        <path d={svgPathsVisit.pce79180} fill="#C49A3A" />
        <path d={svgPathsVisit.p3e2c4300} fill="#C49A3A" />
      </g>
    </svg>
  );
}

function BirdIcon1() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <g opacity="0.3">
        <g>
          <path d={svgPathsVisit.p2ad8e880} fill="#E5795B" />
          <path d={svgPathsVisit.p23689700} fill="#E5795B" />
          <path d={svgPathsVisit.p183d5200} fill="#E5795B" />
          <path d={svgPathsVisit.p247d2600} fill="#E5795B" />
        </g>
        <path d={svgPathsVisit.p3ca92d00} fill="#E5795B" />
        <path d={svgPathsVisit.p3390b500} fill="#E5795B" />
        <path d={svgPathsVisit.p17c88400} fill="#E5795B" />
        <path d={svgPathsVisit.pfe07580} fill="#E5795B" />
        <path d={svgPathsVisit.p1f875600} fill="#E5795B" />
        <path d={svgPathsVisit.p17b8d100} fill="#E5795B" />
      </g>
    </svg>
  );
}

function BirdIcon2() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 188 198">
      <g opacity="0.3">
        <g>
          <path d={svgPathsVisit.p37b22c00} fill="#E5795B" />
          <path d={svgPathsVisit.p1e48c600} fill="#E5795B" />
          <path d={svgPathsVisit.p3959c00} fill="#E5795B" />
          <path d={svgPathsVisit.p25f3bc20} fill="#E5795B" />
        </g>
        <path d={svgPathsVisit.p303e6500} fill="#E5795B" />
        <path d={svgPathsVisit.p2489d0c0} fill="#E5795B" />
        <path d={svgPathsVisit.pa68b830} fill="#E5795B" />
        <path d={svgPathsVisit.p37dc5780} fill="#E5795B" />
        <path d={svgPathsVisit.p1a677c00} fill="#E5795B" />
        <path d={svgPathsVisit.p39bc8a70} fill="#E5795B" />
      </g>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
      <path d="M13.3333 3.33333V10" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26.6667 3.33333V10" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsVisit.p36a93880} stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 16.6667H35" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}