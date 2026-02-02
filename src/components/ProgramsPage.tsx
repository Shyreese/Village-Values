import { motion } from 'motion/react';
import { useEffect } from 'react';
import svgPaths from '../imports/svg-js3y2l02vb';
import imgHero from 'figma:asset/63e301fbec260b5ace96d0f4cde75e071b58afd1.png';
import imgInfant from 'figma:asset/40c81052a73fb88a1608e98df07b890338611765.png';
import imgToddler from 'figma:asset/2c4d841bf9cc9df2bf98c494766e795cd8d967e0.png';
import imgPreschool from 'figma:asset/d18c5a1435a5c3802f7bfaac4a63c39da81a8929.png';
import { PageLayout } from './PageLayout';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProgramsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout 
      currentPage="programs"
      sections={[
        { id: 'infant', label: 'Infant Care' },
        { id: 'toddler', label: 'Toddler' },
        { id: 'preschool', label: 'Preschool' },
        { id: 'drop-in', label: 'Drop-In' },
        { id: 'comparison', label: 'Compare' },
        { id: 'book-visit', label: 'Book a Visit' }
      ]}
    >
      <HeroSection />
      <InfantProgram />
      <ToddlerProgram />
      <PreschoolProgram />
      <DropInCare />
      <ComparisonTable />
      <BookAVisit />
    </PageLayout>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[56px] lg:leading-[67.2px] mb-6">
              Programs built to help your child grow
            </h1>
            <p className="font-['Poppins'] text-[#1e7872] text-lg lg:text-xl lg:leading-[32.5px] mb-8">
              From infants to preschoolers, each program supports learning, safety, and fun. We create nurturing environments where children thrive at every stage of development.
            </p>
            <motion.a
              href="#infant"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('infant')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#149496] text-white px-8 py-4 rounded-full font-['Poppins'] uppercase text-sm tracking-wider hover:bg-[#1e7872] transition-colors"
            >
              Explore Programs
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
          >
            <ImageWithFallback
              src={imgHero}
              alt="Happy children playing"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorSun className="absolute top-16 right-8 lg:right-20 w-32 h-32 opacity-50" />
      <DecorativeVectorFlower className="absolute bottom-16 left-8 lg:left-20 w-40 h-40 lg:w-48 lg:h-48 opacity-50" />
      <DecorativeVectorGrass className="absolute bottom-16 right-40 w-32 h-32 opacity-50" />
      <DecorativeVectorTree className="absolute bottom-12 right-8 w-40 h-40 opacity-50" />
    </section>
  );
}

// ============================================================================
// INFANT PROGRAM
// ============================================================================
function InfantProgram() {
  return (
    <section id="infant" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <ImageWithFallback
                src={imgInfant}
                alt="Infant Program"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-6 right-0 bg-[#e5795b] rounded-2xl shadow-lg px-6 py-6">
              <p className="font-['Poppins'] text-white text-xl">6 months– 12 months</p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:leading-[52px] mb-4">
              Infant Program
            </h2>
            <p className="font-['Poppins'] text-[#1e7872] text-lg lg:leading-[29.25px] mb-8">
              Our infant program provides a calm, safe, and nurturing environment for your littlest ones. We follow each baby's unique development rate with personalized feeding schedules, gentle sleep routines, and plenty of loving interaction to support healthy growth rate.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <FeatureCard icon={<SleepIcon />} title="Sleep" description="Personalized sleep schedules" />
              <FeatureCard icon={<PlayIcon />} title="Play" description="Age-appropriate sensory activities" />
              <FeatureCard icon={<CareIcon />} title="Care" description="Attentive care and bonding" />
              <FeatureCard icon={<MonitoringIcon />} title="Monitoring" description="Constant supervision and safety" />
            </div>

            <motion.a
              href="#enroll"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#149496] text-white px-8 py-4 rounded-full font-['Poppins'] uppercase text-sm tracking-wider hover:bg-[#1e7872] transition-colors"
            >
              Enroll
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorMoon className="absolute top-12 right-12 lg:right-20 w-32 h-32 lg:w-40 lg:h-40 opacity-50" />
      <DecorativeVectorStar className="absolute bottom-16 left-16 w-56 h-52 opacity-50" />
    </section>
  );
}

// ============================================================================
// TODDLER PROGRAM
// ============================================================================
function ToddlerProgram() {
  return (
    <section id="toddler" className="relative overflow-hidden bg-[#f5edda] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#f6d33a] rounded-full px-4 py-2 mb-6">
              <p className="font-['Poppins'] text-[#232e43]">1–3 years</p>
            </div>
            <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:leading-[52px] mb-4">
              Toddler Program
            </h2>
            <p className="font-['Poppins'] text-[#1e7872] text-lg lg:leading-[29.25px] mb-8">
              Our toddler program is designed for curious little explorers ready to move, discover, and learn. We provide a structured yet playful environment that encourages independence, builds social skills, and supports their growing need for movement and creativity.
            </p>

            {/* Daily Activities */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <SparklesIcon />
                <h3 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-[28px] lg:leading-[39.2px]">Daily Activities</h3>
              </div>
              <ul className="space-y-3">
                <ActivityItem text="Guided play and exploration" />
                <ActivityItem text="Social skills development" />
                <ActivityItem text="Motor skills activities" />
                <ActivityItem text="Music and movement" />
                <ActivityItem text="Creative arts and crafts" />
                <ActivityItem text="Story time and language building" />
              </ul>
            </div>

            <motion.a
              href="#enroll"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#149496] text-white px-8 py-4 rounded-full font-['Poppins'] uppercase text-sm tracking-wider hover:bg-[#1e7872] transition-colors"
            >
              Enroll
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1754623034737-805e6300a94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2RkbGVyJTIwcGxheWluZyUyMGRheWNhcmV8ZW58MXx8fHwxNzY2MjcwOTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Toddler Program"
              className="w-full h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorRainbow className="absolute top-48 left-8 w-88 h-45 opacity-50" />
    </section>
  );
}

// ============================================================================
// PRESCHOOL PROGRAM
// ============================================================================
function PreschoolProgram() {
  return (
    <section id="preschool" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#149496] rounded-full px-4 py-2 mb-6">
            <p className="font-['Poppins'] text-white">3–5 years</p>
          </div>
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:leading-[52px] mb-4">
            Preschool Program
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl lg:leading-[28px] max-w-3xl mx-auto">
            Our preschool program prepares children for kindergarten through structured learning, creative exploration, and social development in a fun and engaging environment.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Curriculum Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-[28px] lg:leading-[39.2px] mb-6">
              Curriculum Highlights
            </h3>
            <div className="space-y-6">
              <CurriculumCard
                icon={<BookIcon />}
                title="Letters & Literacy"
                description="Pre-reading skills and letter recognition"
              />
              <CurriculumCard
                icon={<CalculatorIcon />}
                title="Numbers & Math"
                description="Counting, patterns, and early math concepts"
              />
              <CurriculumCard
                icon={<FlaskIcon />}
                title="Science & Discovery"
                description="Hands-on experiments and sensory learning"
              />
              <CurriculumCard
                icon={<PaletteIcon />}
                title="Arts & Creativity"
                description="Self-expression through art, music, and drama"
              />
            </div>

            <motion.a
              href="#enroll"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block bg-[#149496] text-white px-8 py-4 rounded-full font-['Poppins'] uppercase text-sm tracking-wider hover:bg-[#1e7872] transition-colors"
            >
              Enroll
            </motion.a>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NjI3MTAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Preschool Program"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute bottom-12 -left-6 bg-[#c49a3a] rounded-2xl shadow-lg px-6 py-6">
              <p className="font-['Poppins'] text-white text-xl">Kindergarten Ready!</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorStarBig className="absolute top-12 right-12 lg:right-20 w-64 h-64 opacity-50" />
      <DecorativeVectorTree className="absolute bottom-16 left-4 w-40 h-48 opacity-50" />
    </section>
  );
}

// ============================================================================
// DROP-IN CARE
// ============================================================================
function DropInCare() {
  return (
    <section id="drop-in" className="relative overflow-hidden bg-[#f5edda] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e5795b] rounded-full px-4 py-2 mb-6">
            <p className="font-['Poppins'] text-white">Flexible Care</p>
          </div>
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:leading-[52px] mb-4">
            Drop-In Care
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl lg:leading-[28px] max-w-3xl mx-auto">
            Life happens, and we&apos;re here for you. Our drop-in care provides a safe and structured environment to busy families with flexible childcare solutions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <DropInCard
            icon={<ClockIcon />}
            title="Flexible Hours"
            description="Available Monday–Friday, 7 AM – 6 PM"
          />
          <DropInCard
            icon={<CalendarIcon />}
            title="Book Ahead"
            description="Reserve your spot 24 hours in advance"
          />
          <DropInCard
            icon={<CheckCircleIcon />}
            title="Same Quality Care"
            description="All our programs maintain the same high standards"
          />
        </div>

        {/* What You Need to Know */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h3 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-[28px] lg:leading-[39.2px] mb-6">
            What You Need to Know
          </h3>
          <ul className="space-y-4">
            <RequirementItem text="Children must be between 6 months and 5 years old" />
            <RequirementItem text="All required forms and immunization records must be on file" />
            <RequirementItem text="Limited spots available each day — reserve early" />
            <RequirementItem text="Hourly and daily rates available" />
          </ul>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPARISON TABLE
// ============================================================================
function ComparisonTable() {
  return (
    <section id="comparison" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:leading-[52px] mb-4">
            Compare Programs
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl max-w-2xl mx-auto">
            Find the perfect program for your child&apos;s age and developmental stage
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-[#232e43]">
                <th className="font-['Poppins'] text-white text-left p-6">Program</th>
                <th className="font-['Poppins'] text-white text-center p-6">Age Range</th>
                <th className="font-['Poppins'] text-white text-center p-6">Hours</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                program="Infant Program"
                age="6-12 months"
                hours="7 AM - 6 PM"
                bg="bg-[#f5edda]"
              />
              <TableRow
                program="Toddler Program"
                age="1-3 years"
                hours="7 AM - 6 PM"
                bg="bg-white"
              />
              <TableRow
                program="Preschool Program"
                age="3-5 years"
                hours="7 AM - 6 PM"
                bg="bg-[#f5edda]"
              />
              <TableRow
                program="Drop-In Care"
                age="6 months-5 years"
                hours="7 AM - 6 PM"
                bg="bg-white"
              />
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <motion.a
            href="#book-visit"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('book-visit')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#c49a3a] text-white px-8 py-4 rounded-full font-['Poppins'] uppercase text-sm tracking-wider hover:opacity-90 transition-opacity"
          >
            Schedule a Tour
          </motion.a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// BOOK A VISIT
// ============================================================================
function BookAVisit() {
  return (
    <section id="book-visit" className="relative overflow-hidden bg-[#149496] py-16 lg:py-24">
      <div className="max-w-[800px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Poppins'] text-white text-4xl lg:text-[48px] lg:leading-[60px] mb-4">
            Ready to See Our Programs in Action?
          </h2>
          <p className="font-['Poppins'] text-white/90 text-xl">
            Book a visit through Brightwheel—it's quick, secure, and designed with busy parents in mind!
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-[rgba(20,148,150,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
              <path d="M13.3333 3.33333V10" stroke="#149496" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.6667 3.33333V10" stroke="#149496" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.66667 16.6667H33.3333C34.8061 16.6667 36 17.8606 36 19.3333V33.3333C36 34.8061 34.8061 36 33.3333 36H6.66667C5.19391 36 4 34.8061 4 33.3333V19.3333C4 17.8606 5.19391 16.6667 6.66667 16.6667Z" stroke="#149496" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 16.6667H35" stroke="#149496" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Content */}
          <h3 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-3xl mb-4">
            Schedule Your Visit on Brightwheel
          </h3>
          
          <p className="font-['Poppins'] text-[#1e7872] text-base lg:text-lg mb-8 max-w-xl mx-auto">
            Come meet our team, see our facilities, and experience the Village Values difference firsthand. Use our Brightwheel portal to pick a time that works for your family!
          </p>

          {/* Benefits List */}
          <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#149496] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l3 3 7-7" />
                </svg>
              </div>
              <p className="font-['Poppins'] text-[#232e43]">Choose a convenient time for your tour</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#149496] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l3 3 7-7" />
                </svg>
              </div>
              <p className="font-['Poppins'] text-[#232e43]">Secure and easy-to-use platform</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#149496] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l3 3 7-7" />
                </svg>
              </div>
              <p className="font-['Poppins'] text-[#232e43]">Tours available during operating hours</p>
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://schools.mybrightwheel.com/sign-in?redirect_path=forms/a3312612-97f2-456c-9444-121c9a92c1a9/self-service"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-[#e5795b] text-white px-12 py-4 rounded-full font-['Poppins'] uppercase tracking-wider hover:bg-[#d66b4d] transition-colors shadow-lg"
          >
            Book on Brightwheel
          </motion.a>

          {/* Bottom Note */}
          <p className="font-['Poppins'] text-[#1e7872] text-sm mt-6 italic">
            We can't wait to meet you and your little one!
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorLeaf className="absolute top-16 left-8 w-32 h-32 opacity-30" />
      <DecorativeVectorHeart className="absolute bottom-16 right-8 w-24 h-24 opacity-30" />
    </section>
  );
}

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-[#f5edda] rounded-2xl p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="font-['Poppins'] text-[#232e43] text-xl mb-2">{title}</h3>
      <p className="font-['Poppins'] text-[#1e7872] text-sm">{description}</p>
    </div>
  );
}

function ActivityItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-[#149496] shrink-0" />
      <p className="font-['Poppins'] text-[#1e7872]">{text}</p>
    </li>
  );
}

function CurriculumCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-[#f5edda] rounded-2xl p-6 flex gap-4">
      <div className="bg-[#149496] rounded-2xl p-3 h-fit">{icon}</div>
      <div>
        <h4 className="font-['Poppins'] text-[#232e43] text-xl mb-2">{title}</h4>
        <p className="font-['Poppins'] text-[#1e7872] text-sm">{description}</p>
      </div>
    </div>
  );
}

function DropInCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-8 text-center"
    >
      <div className="bg-[#149496] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="font-['Poppins'] text-[#232e43] text-xl mb-3">{title}</h3>
      <p className="font-['Poppins'] text-[#1e7872] text-sm">{description}</p>
    </motion.div>
  );
}

function RequirementItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <svg className="w-5 h-5 text-[#149496] mt-1 shrink-0" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p35700380} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d={svgPaths.p3fe63d80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </svg>
      <p className="font-['Poppins'] text-[#1e7872]">{text}</p>
    </li>
  );
}

function TableRow({ program, age, hours, bg }: {
  program: string;
  age: string;
  hours: string;
  bg: string;
}) {
  return (
    <tr className={bg}>
      <td className="font-['Poppins'] text-[#232e43] p-6">{program}</td>
      <td className="font-['Poppins'] text-[#232e43] text-center p-6">{age}</td>
      <td className="font-['Poppins'] text-[#232e43] text-center p-6">{hours}</td>
    </tr>
  );
}

// ============================================================================
// ICONS
// ============================================================================
function SleepIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p186c1a00} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p12922f00} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M20 16H20.0133" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p2b75c580} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M12 16H12.0133" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p9921600} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function MonitoringIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p110e8100} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p34392700} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p3eebfc00} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M20 2V6" stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M22 4H18" stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p352890c0} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d="M12 7V21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p38e00000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.pd5bb600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 6H16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 14V18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 10H16.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 10H12.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 10H8.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 14H12.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 14H8.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 18H12.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 18H8.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p1ea91d80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9 18H15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10 22H14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p91a73b0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2476dfc0} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.pf6f2500} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p7aea480} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2f047a30} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d="M16 8V16L21.3333 18.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p1dee4500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d="M10.6667 2.66667V8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M21.3333 2.66667V8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p8d31b00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M4 13.3333H28" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p13d00d80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p1adb0100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

// ============================================================================
// DECORATIVE VECTORS (with 50% opacity as requested)
// ============================================================================
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

function DecorativeVectorFlower({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <g opacity="0.5">
          <path d={svgPaths.p1d8cd880} fill="#E5795B" />
        </g>
      </svg>
    </div>
  );
}

function DecorativeVectorGrass({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <g opacity="0.5">
          <path d={svgPaths.p15f51900} fill="#1E7872" />
          <path d={svgPaths.p2b360600} fill="#1E7872" />
          <path d={svgPaths.p3b3d4d00} fill="#1E7872" />
          <path d={svgPaths.p2eb2a780} fill="#1E7872" />
          <path d={svgPaths.p171c380} fill="#1E7872" />
          <path d={svgPaths.p1030c600} fill="#1E7872" />
          <path d={svgPaths.p26c23280} fill="#1E7872" />
        </g>
      </svg>
    </div>
  );
}

function DecorativeVectorTree({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 310 303">
        <g opacity="0.5">
          <path d={svgPaths.p3c08cf00} fill="#C49A3A" />
          <path d={svgPaths.p20c6d400} fill="#C49A3A" />
          <path d={svgPaths.pd699f00} fill="#C49A3A" />
          <path d={svgPaths.p1e015c00} fill="#C49A3A" />
          <path d={svgPaths.pb2a9280} fill="#C49A3A" />
        </g>
      </svg>
    </div>
  );
}

function DecorativeVectorMoon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <g opacity="0.5">
          <path d={svgPaths.p26d94000} fill="#C49A3A" />
        </g>
      </svg>
    </div>
  );
}

function DecorativeVectorStar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 224 203">
        <path d={svgPaths.p172e0700} fill="#F6D33A" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorRainbow({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 352 181">
        <path d={svgPaths.p272c0500} fill="#E5795B" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorStarBig({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <g opacity="0.5">
          <path d={svgPaths.p148b37b0} fill="#149496" />
        </g>
      </svg>
    </div>
  );
}

function DecorativeVectorLeaf({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <path d={svgPaths.p188b5880} fill="#ffffff" opacity="0.3" />
      </svg>
    </div>
  );
}

function DecorativeVectorHeart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <path d={svgPaths.p9921600} fill="#ffffff" opacity="0.3" />
      </svg>
    </div>
  );
}