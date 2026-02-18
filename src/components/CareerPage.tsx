import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import svgPaths from '../imports/svg-34qkhcxsxe';
import logoImage from 'figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png';
import heroImage from 'figma:asset/8702622d69c2aceacd807bbafaed4805316594ff.png';
import { BottomNavBar } from './BottomNavBar';

const cultureImage = "https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXljYXJlJTIwdGVhY2hlcnMlMjBzdGFmZiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjYyNzY1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// ============================================================================
// SHARED ANIMATION VARIANTS
// ============================================================================
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay: 0.2 }
};

// ============================================================================
// SHARED STYLES
// ============================================================================
const inputClassName = "w-full bg-[#f5edda] border-2 border-[#f5edda] rounded-2xl px-4 py-3 font-['Poppins'] text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:ring-2 focus:ring-[#149496]";

const buttonPrimaryClassName = "bg-[#149496] text-white px-10 py-4 rounded-full font-['Poppins'] uppercase text-base tracking-wider shadow-lg hover:bg-[#1e7872] transition-colors";

const sectionTitleClassName = "font-['Poppins'] text-[#232e43] text-4xl lg:text-[40px] lg:leading-[52px] mb-4";

const sectionSubtitleClassName = "font-['Poppins'] text-[#1e7872] text-xl";

export function CareerPage() {
  useEffect(() => {
    const scrollTarget = sessionStorage.getItem('scrollTo');
    if (scrollTarget) {
      sessionStorage.removeItem('scrollTo');
      setTimeout(() => {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <WhyWorkHere />
      <CultureMission />
      <OpenPositions />
      <WhatWeOfferStaff />
      <GrowthAndTraining />
      <ApplyForm />
      <Footer />
      <BottomNavBar
        sections={[
          { id: 'why-work-here', label: 'Why Join Us' },
          { id: 'culture', label: 'Our Culture' },
          { id: 'open-positions', label: 'Open Jobs' },
          { id: 'benefits', label: 'Benefits' },
          { id: 'training', label: 'Training' },
          { id: 'apply-form', label: 'Apply Now' }
        ]}
      />
    </div>
  );
}

// ============================================================================
// HEADER
// ============================================================================
function Header() {
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { href: '/', label: 'Home', onClick: handleHomeClick },
    { href: '#programs', label: 'Programs' },
    { href: '#about', label: 'About' },
    { href: '#enroll', label: 'Enroll' },
    { href: '#careers', label: 'Careers', active: true },
    { href: '#resources', label: 'Resources' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="bg-[#f5edda] fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">
        <a
          href="/"
          onClick={handleHomeClick}
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

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={link.onClick}
              className={`font-['Poppins'] text-base hover:text-[#149496] transition-colors ${link.active ? 'text-[#149496]' : 'text-[#232e43]'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://calendly.com/villagevalues-info/30min?month=2026-02', '_blank')}
          className="bg-[#149496] text-white px-5 py-2 rounded-full font-['Poppins'] text-sm tracking-wider uppercase hover:bg-[#1e7872] transition-colors cursor-pointer"
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
      <div className="max-w-[1040px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInLeft}>
            <div className="inline-block bg-[#149496] text-white px-6 py-2 rounded-full mb-6 font-['Poppins']">
              Careers at Village Values
            </div>

            <h1 className="font-['Poppins'] text-[#232e43] text-5xl lg:text-[56px] lg:leading-[67.2px] mb-6">
              Join the Village.<br />
              Make an impact.
            </h1>

            <p className="font-['Poppins'] text-[#1e7872] text-xl leading-[32.5px] mb-8">
              We&apos;re building a childcare environment where children feel loved and staff feel supported. If you&apos;re passionate about early childhood education and community, we&apos;d love to meet you.
            </p>

            <motion.button
              onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e5795b] text-white px-10 py-4 rounded-full font-['Poppins'] uppercase text-base tracking-wider shadow-lg hover:bg-[#d66b4d] transition-colors inline-flex items-center gap-2"
            >
              View Open Positions
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div {...fadeInRight} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src={heroImage}
                alt="Join Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#c49a3a] rounded-2xl px-8 py-6 shadow-xl">
                <p className="font-['Poppins'] text-white/90 text-sm mb-1">Join Our Team</p>
                <p className="font-['Poppins'] text-white text-2xl">We&apos;re Hiring!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <DecorativeVectorSun className="absolute top-20 left-20 w-64 h-64 opacity-30" />
      <DecorativeVectorStickman className="absolute bottom-32 left-40 w-40 h-40 opacity-30 rotate-180 scale-y-[-1]" />
      <DecorativeVectorBubble className="absolute bottom-48 left-16 w-28 h-28 opacity-30" />
      <DecorativeVectorBike className="absolute bottom-32 right-40 w-40 h-40 opacity-30" />
      <DecorativeVectorCloud className="absolute top-48 right-44 w-64 h-64 opacity-30" />
      <DecorativeVectorBird className="absolute top-96 right-36 w-52 h-52 opacity-30" />
      <DecorativeVectorBubble2 className="absolute bottom-1/3 left-24 w-52 h-52 opacity-30 rotate-[324deg]" />
    </section>
  );
}

// ============================================================================
// WHY WORK HERE
// ============================================================================
function WhyWorkHere() {
  const benefits = [
    {
      icon: 'safety',
      title: 'Safe & Licensed Environment',
      description: 'Work in a fully licensed, regulation-compliant facility that prioritizes safety and professionalism.'
    },
    {
      icon: 'support',
      title: 'Supportive Leadership',
      description: 'Our leadership team is invested in your success, well-being, and professional growth.'
    },
    {
      icon: 'group',
      title: 'Small Group Ratios',
      description: 'Work with manageable class sizes that allow you to build real connections and impact with each child.'
    },
    {
      icon: 'family',
      title: 'Real Family Culture',
      description: 'Experience a workplace that feels like home, where staff and families are valued equally.'
    }
  ];

  return (
    <section id="why-work-here" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className={sectionTitleClassName}>Why Work Here</h2>
          <p className={sectionSubtitleClassName}>
            Here is your opportunity to build yourself and your community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon, title, description, index }: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  const iconMap: Record<string, JSX.Element> = {
    safety: <SafetyIcon />,
    support: <SupportIcon />,
    group: <GroupIcon />,
    family: <FamilyIcon />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#f5edda] rounded-3xl p-8 flex gap-4"
    >
      <div className="bg-[rgba(20,148,150,0.1)] w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
        {iconMap[icon]}
      </div>
      <div>
        <h3 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-[28px] lg:leading-[39.2px] mb-3">
          {title}
        </h3>
        <p className="font-['Poppins'] text-[#1e7872] leading-[26px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// ============================================================================
// OUR CULTURE & MISSION
// ============================================================================
function CultureMission() {
  return (
    <section id="culture" className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1040px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={sectionTitleClassName + " mb-6"}>
              Our Culture & Mission
            </h2>

            <p className="font-['Poppins'] text-[#1e7872] leading-[24px] mb-6">
              At Village Values, we believe that great childcare starts with great people. That&apos;s why we invest deeply in creating an environment where educators feel valued, supported, and empowered to do their best work.
            </p>

            <div className="bg-white border-l-4 border-[#149496] rounded-2xl p-6 shadow-md mb-6">
              <h3 className="font-['Poppins'] text-[#232e43] mb-2">
                We care about children AND the staff who guide them.
              </h3>
              <p className="font-['Poppins'] text-[#1e7872] leading-[24px]">
                You can&apos;t pour from an empty cup. We make sure our team feels fulfilled, appreciated, and equipped to create magic every day.
              </p>
            </div>

            <p className="font-['Poppins'] text-[#1e7872] leading-[24px] mb-6">
              We build a home environment that feels safe and intentional. Our small group ratios, warm spaces, and thoughtful approach create a workplace where you can truly connect with children and families.
            </p>

            <p className="font-['Poppins'] text-[#1e7872] mb-2">
              <strong className="text-[#1e7872]">We believe childcare is heart work and community work.</strong>
            </p>
            <p className="font-['Poppins'] text-[#1e7872] leading-[24px]">
              If you&apos;re looking for a place where your passion for early childhood education is matched by leadership that supports you, you&apos;ve found it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[550px]">
              <img
                src={cultureImage}
                alt="Our Culture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(35,46,67,0.3)] to-transparent" />

              <div className="absolute bottom-20 left-52 bg-white rounded-2xl px-8 py-6 shadow-xl max-w-xs">
                <p className="font-['Poppins'] text-[#149496] text-sm mb-2">Staff Member</p>
                <p className="font-['Poppins'] italic text-[#232e43]">
                  &quot;This is the first place I&apos;ve worked where I truly feel supported.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <DecorativeVectorButterfly className="absolute bottom-32 right-36 w-56 h-56 opacity-30 rotate-[351deg]" />
      <DecorativeVectorBird2 className="absolute -top-6 left-20 w-72 h-72 opacity-30 rotate-[347deg]" />
      <DecorativeVectorLadybug className="absolute bottom-48 left-24 w-44 h-44 opacity-30" />
    </section>
  );
}

// ============================================================================
// OPEN POSITIONS
// ============================================================================
function OpenPositions() {
  const positions = [
    {
      title: 'Lead Educator',
      salary: '$18 - $22/hour',
      type: 'Full-time',
      requirements: [
        'Associate\'s degree in Early Childhood Education or related field',
        '2+ years experience in childcare setting',
        'Current CPR and First Aid certification',
        'Strong communication and leadership skills'
      ]
    },
    {
      title: 'Infant Specialist',
      salary: '$16 - $20/hour',
      type: 'Full-time',
      requirements: [
        'Experience with infant care (0-12 months)',
        'Gentle, patient, and nurturing personality',
        'Knowledge of infant developmental milestones',
        'Commitment to health and safety protocols'
      ]
    },
    {
      title: 'Toddler Guide',
      salary: '$16 - $20/hour',
      type: 'Full-time',
      requirements: [
        'Experience with toddlers (1-3 years)',
        'Energetic and creative approach to learning',
        'Strong classroom management skills',
        'Team-oriented mindset'
      ]
    },
    {
      title: 'Preschool Assistant',
      salary: '$15 - $19/hour',
      type: 'Part-time',
      requirements: [
        'Experience with preschool-age children (3-5 years)',
        'Creative and organized',
        'Supports lead educator in curriculum delivery',
        'Flexible schedule availability'
      ]
    },
    {
      title: 'Floater',
      salary: '$15 - $18/hour',
      type: 'Part-time',
      requirements: [
        'Adaptable across all age groups',
        'Quick learner and team player',
        'Available for various shifts',
        'Reliable and punctual'
      ]
    },
    {
      title: 'Intern / Apprentice',
      salary: '$13 - $15/hour',
      type: 'Part-time',
      requirements: [
        'Currently enrolled in ECE program or recent graduate',
        'Eager to learn and grow',
        'Friendly and professional demeanor',
        'Must meet internship or apprenticeship requirements'
      ]
    }
  ];

  return (
    <section id="open-positions" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className={sectionTitleClassName}>Open Positions</h2>
          <p className={sectionSubtitleClassName}>
            Join our team and start making an impact today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positions.map((position, index) => (
            <PositionCard key={index} {...position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PositionCard({ title, salary, type, requirements, index }: {
  title: string;
  salary: string;
  type: string;
  requirements: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="bg-[#f5edda] rounded-2xl p-8"
    >
      <h3 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-[28px] lg:leading-[39.2px] mb-4">
        {title}
      </h3>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <DollarIconSmall />
          <span className="font-['Poppins'] text-[#1e7872]">{salary}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIconSmall />
          <span className="font-['Poppins'] text-[#1e7872]">{type}</span>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-['Poppins'] text-[#232e43] mb-3">Requirements:</p>
        <ul className="space-y-2">
          {requirements.map((req, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="mt-1 flex-shrink-0">
                <CheckIconSmall />
              </div>
              <span className="font-['Poppins'] text-[#1e7872] text-sm">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full bg-[#149496] text-white px-8 py-3 rounded-2xl font-['Poppins'] uppercase text-base tracking-wider hover:bg-[#1e7872] transition-colors"
      >
        Apply for this Position
      </motion.button>
    </motion.div>
  );
}

// ============================================================================
// WHAT WE OFFER STAFF
// ============================================================================
function WhatWeOfferStaff() {
  const benefits = [
    {
      icon: 'development',
      title: 'Professional Development',
      description: 'Ongoing training, workshops, and certification support'
    },
    {
      icon: 'flexible',
      title: 'Flexible Scheduling',
      description: 'Work-life balance is a priority, not an afterthought'
    },
    {
      icon: 'team',
      title: 'Collaborative Team',
      description: 'Work alongside passionate, dedicated educators'
    },
    {
      icon: 'appreciation',
      title: 'Recognition & Appreciation',
      description: 'Regular team appreciation events and incentives'
    },
    {
      icon: 'growth',
      title: 'Career Growth',
      description: 'Clear pathways for advancement and leadership'
    }
  ];

  return (
    <section id="benefits" className="bg-[#f5edda] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className={sectionTitleClassName}>What We Offer Staff</h2>
          <p className={sectionSubtitleClassName}>
            Comprehensive benefits that show we care about you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <StaffBenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 bg-gradient-to-r from-[#149496] to-[#1e7872] rounded-2xl p-8 text-white"
        >
          <p className="font-['Poppins'] text-lg mb-4">
            These are just some of the ways we invest in our team. When you thrive, our children thrive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StaffBenefitCard({ icon, title, description, index }: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  const iconMap: Record<string, JSX.Element> = {
    development: <DevelopmentIcon />,
    flexible: <FlexibleIcon />,
    team: <TeamIcon />,
    appreciation: <AppreciationIcon />,
    growth: <GrowthIcon />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="bg-white rounded-2xl p-6 text-center shadow-md"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgba(20,148,150,0.1)] rounded-2xl mb-4">
        {iconMap[icon]}
      </div>
      <h3 className="font-['Poppins'] text-[#232e43] text-lg mb-2">
        {title}
      </h3>
      <p className="font-['Poppins'] text-[#1e7872] text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

// ============================================================================
// GROWTH & TRAINING
// ============================================================================
function GrowthAndTraining() {
  const training = [
    {
      title: 'Mentorship Program',
      description: 'Pair with experienced educators for guidance'
    },
    {
      title: 'Ongoing Training',
      description: 'Access to webinars, workshops, and conferences'
    },
    {
      title: 'Credential Support',
      description: 'We help cover costs for ECE certifications'
    },
    {
      title: 'Reflecting Best Ideas',
      description: 'Open to incorporating your innovative approaches'
    }
  ];

  return (
    <section id="training" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className={sectionTitleClassName}>Growth & Training</h2>
          <p className={sectionSubtitleClassName}>
            We invest in your professional development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {training.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#f5edda] rounded-2xl p-8 flex gap-4 items-start"
            >
              <div className="w-12 h-12 bg-[#149496] rounded-full flex items-center justify-center flex-shrink-0 text-white font-['Poppins']">
                {index + 1}
              </div>
              <div>
                <h3 className="font-['Poppins'] text-[#232e43] text-xl mb-2">
                  {item.title}
                </h3>
                <p className="font-['Poppins'] text-[#1e7872]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#c49a3a] rounded-2xl p-8 text-center text-white"
        >
          <h3 className="font-['Poppins'] text-2xl mb-4">Ready to Join Our Team?</h3>
          <p className="font-['Poppins'] mb-6 max-w-2xl mx-auto">
            Apply today and start making a difference in the lives of children and families in our community.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#c49a3a] px-10 py-3 rounded-full font-['Poppins'] uppercase tracking-wider hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// APPLY FORM
// ============================================================================
function ApplyForm() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mwvnvabw", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert("Application submitted successfully!");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="apply-form" className="bg-[#f5edda] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className={sectionTitleClassName}>Apply Here</h2>
          <p className={sectionSubtitleClassName}>
            Take the first step toward joining our team
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            encType="multipart/form-data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-['Poppins'] text-[#232e43] mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                  className={inputClassName}
                  required
                />
              </div>
              <div>
                <label className="block font-['Poppins'] text-[#232e43] mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  className={inputClassName}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-['Poppins'] text-[#232e43] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className={inputClassName}
                  required
                />
              </div>
              <div>
                <label className="block font-['Poppins'] text-[#232e43] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  className={inputClassName}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-['Poppins'] text-[#232e43] mb-2">
                  Position Applying For *
                </label>
                <select
                  name="position"
                  className={inputClassName + " appearance-none"}
                  required>
                  <option value="">Select a position</option>
                  <option>Lead Educator</option>
                  <option>Infant Specialist</option>
                  <option>Toddler Guide</option>
                  <option>Preschool Assistant</option>
                  <option>Floater</option>
                  <option>Intern / Apprentice</option>
                </select>
              </div>
              <div>
                <label className="block font-['Poppins'] text-[#232e43] mb-2">
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  className={inputClassName + " appearance-none"}
                  required>
                  <option value="">Select experience level</option>
                  <option>Less than 1 year</option>
                  <option>1-2 years</option>
                  <option>2-5 years</option>
                  <option>5+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-['Poppins'] text-[#232e43] mb-2">
                Upload Resume *
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className={inputClassName + " file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#149496] file:text-white file:cursor-pointer hover:file:bg-[#1e7872]"}
              />
            </div>

            <div>
              <label className="block font-['Poppins'] text-[#232e43] mb-2">
                Tell us why you&apos;d be a great fit (optional)
              </label>
              <textarea
                name="coverletter"
                rows={4}
                placeholder="Share your passion for early childhood education and what draws you to Village Values..."
                className={inputClassName + " resize-none"}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full ${buttonPrimaryClassName}`}
            >
              Submit Application
            </motion.button>

            <p className="font-['Poppins'] text-[#1e7872] text-sm text-center">
              By submitting this application, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  return (
    <footer className="bg-[#232e43] py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logoImage} alt="Village Values" className="h-12 w-auto mb-4" />
            <p className="font-['Poppins'] text-white/70 text-sm">
              Nurturing young minds in a safe and caring environment.
            </p>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="#programs" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Programs</a></li>
              <li><a href="#about" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#enroll" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Enroll</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-white mb-4">Careers</h3>
            <ul className="space-y-2">
              <li><a href="#careers" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Why Work Here</a></li>
              <li><a href="#open-positions" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Open Positions</a></li>
              <li><a href="#apply-form" className="font-['Poppins'] text-white/70 hover:text-white text-sm transition-colors">Apply Now</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="font-['Poppins'] text-white/70 text-sm">123 Main Street</li>
              <li className="font-['Poppins'] text-white/70 text-sm">Anytown, ST 12345</li>
              <li className="font-['Poppins'] text-white/70 text-sm">(555) 123-4567</li>
              <li className="font-['Poppins'] text-white/70 text-sm">careers@villagevalues.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Poppins'] text-white/60 text-sm text-center md:text-left">
            © 2024 Village Values Daycare. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <FacebookIconSmall />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <InstagramIconSmall />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <TwitterIconSmall />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// DECORATIVE VECTORS
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
        </g>
      </svg>
    </div>
  );
}

function DecorativeVectorStickman({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 160 160">
        <path d={svgPaths.p29f22a80} fill="#E5795B" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorBubble({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 112 112">
        <path d={svgPaths.p1872d0c0} fill="#149496" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorBike({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 160 160">
        <path d={svgPaths.p1a15f080} fill="#C49A3A" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorCloud({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 250 189">
        <path d={svgPaths.p15e80380} fill="#149496" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorBird({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 203 172">
        <path d={svgPaths.p33b02500} fill="#C49A3A" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorBubble2({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 207 207">
        <path d={svgPaths.p2fdf4b80} fill="#E5795B" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorButterfly({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 219 219">
        <path d={svgPaths.p1f361280} fill="#C49A3A" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorBird2({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 283 283">
        <path d={svgPaths.p1a3e1a80} fill="#149496" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorLadybug({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 173 173">
        <path d={svgPaths.p1a066900} fill="#E5795B" opacity="0.5" />
      </svg>
    </div>
  );
}

// ============================================================================
// ICONS
// ============================================================================
function SafetyIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.pae2ff80} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p27a3200} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p3c1b880} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p16bbf900} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p2ee517c0} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p9921600} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p3b973d80} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p1603b400} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

function DollarIconSmall() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d="M10 1.66667V18.3333" stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p3055a600} stroke="#C49A3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function ClockIconSmall() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d="M10 5V10L13.3333 11.6667" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p14d24500} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function CheckIconSmall() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
      <path d={svgPaths.p3eaa2980} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p1f2c5400} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function DevelopmentIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z" stroke="#149496" strokeWidth="2.33333" />
      <path d="M14 3.5V14H24.5" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" />
    </svg>
  );
}

function FlexibleIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z" stroke="#149496" strokeWidth="2.33333" />
      <path d="M14 10V14L17 17" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPaths.p9921600} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </svg>
  );
}

function AppreciationIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M14 24.5L6.125 20.125L3.5 12.25L7.875 4.375L14 3.5L20.125 7.875L22.75 15.75L18.375 23.625L14 24.5Z" stroke="#149496" strokeWidth="2.33333" />
      <circle cx="14" cy="14" r="3.5" fill="#149496" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M3.5 21L10.5 14L14 17.5L24.5 7M24.5 7H17.5M24.5 7V14" stroke="#149496" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
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