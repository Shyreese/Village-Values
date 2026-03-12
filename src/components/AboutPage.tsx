import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import svgPaths from '../imports/svg-9p6g9itbjb';
import imgHero from 'figma:asset/ba59090be9c12b8024e88e8ac3c5681bf0d086f9.png';
import logoImage from 'figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png';
import imgStory from 'figma:asset/63e301fbec260b5ace96d0f4cde75e071b58afd1.png';
import imgEnv1 from 'figma:asset/9ea0bd25103ef664c7d3e953afa36854e885e9bd.png';
import imgEnv2 from 'figma:asset/4cd16b76a3e21abfab79bf7da38c206b5d3f4198.png';
import imgEnv3 from 'figma:asset/4cd16b76a3e21abfab79bf7da38c206b5d3f4198.png';
import imgEnv4 from 'figma:asset/6f62f72217494770bd91e775714c5d665ec0c738.png';
import imgTeam1 from 'figma:asset/e03b94db5142c4ef4947991f63a4ec301b08cf79.png';
import imgTeam2 from 'figma:asset/7b1661a324ecfd7ae8307491f3cb63bf113f890f.png';
import imgTeam3 from 'figma:asset/b068a89f71b6e9545b91acd20faf82885452dc06.png';
import imgTeam4 from 'figma:asset/ca27e31ef2c2e6763717010455537962ccdd0fe8.png';
import { BottomNavBar } from './BottomNavBar';
import { Footer } from './Footer';

export function AboutPage() {
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

      {/* Mission Statement */}
      <MissionSection />

      {/* Our Story */}
      <OurStory />

      {/* Our Environments */}
      <OurEnvironments />

      {/* Meet Our Team */}
      <MeetOurTeam />

      {/* Stay Connected */}
      <StayConnected />

      {/* Book a Visit */}
      <BookAVisit />

      {/* Footer */}
      <Footer />

      {/* Bottom Navigation Bar */}
      <BottomNavBar
        sections={[
          { id: 'story', label: 'Our Story' },
          { id: 'environments', label: 'Environments' },
          { id: 'team', label: 'Our Team' },
          { id: 'connect', label: 'Connect' },
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
          <a href="#about" className="font-['Poppins'] text-[#149496] text-base hover:text-[#149496] transition-colors">About</a>
          <a href="#enroll" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Enroll</a>
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
              We&apos;re the hearts behind Village Values
            </h1>
            <p className="font-['Poppins'] text-[#1e7872] text-lg lg:text-xl lg:leading-[28px] mb-8">
              Our story began with a simple dream: to create a nurturing space where every child feels valued, safe, and inspired to grow.
            </p>
            <motion.a
              href="#story"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('story');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#149496] text-white px-8 py-4 rounded-full font-['Poppins'] uppercase text-sm tracking-wider hover:bg-[#1e7872] transition-colors"
            >
              Learn Our Story
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
            className="rounded-full overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-80 h-80 lg:w-96 lg:h-96 mx-auto"
          >
            <img src={imgHero} alt="Village Values Team" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorHeart className="absolute top-8 left-8 w-16 h-16 opacity-50" />
      <DecorativeVectorSun className="absolute top-8 right-8 lg:right-20 w-32 h-32 opacity-50" />
      <DecorativeVectorPaw className="absolute bottom-16 left-8 w-24 h-24 opacity-50" />
      <DecorativeVectorLeaf className="absolute bottom-16 right-16 w-20 h-20 opacity-50" />
    </section>
  );
}

// ============================================================================
// MISSION SECTION
// ============================================================================
function MissionSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-['Poppins'] text-[#1e7872] text-xl lg:text-2xl lg:leading-[39px] max-w-4xl mx-auto">
            At Village Values, we believe that raising a child takes a village. We&apos;re here to be part of yours, creating a warm, safe, and loving environment where your little ones can thrive, learn, and grow into their fullest potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// OUR STORY
// ============================================================================
function OurStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#f5edda] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:leading-[52px] mb-6">
              Our Story
            </h2>
            <p className="font-['Poppins'] text-[#1e7872] text-lg lg:leading-[28px] mb-4">
              Village Values Daycare was founded in 2015 by Shyreese and Paskel Tyiska, two educators with a shared vision of creating a childcare center that felt like family.
            </p>
            <p className="font-['Poppins'] text-[#1e7872] text-lg lg:leading-[28px] mb-4">
              After years of working in traditional childcare settings, they realized there was a gap—a need for a place where children weren&apos;t just cared for, but truly nurtured. They wanted to build a community where parents felt supported, educators felt valued, and children felt seen.
            </p>
            <p className="font-['Poppins'] text-[#1e7872] text-lg lg:leading-[28px] mb-8">
              What started in a small space with just six children has grown into a thriving center serving dozens of families. Our name reflects our core belief: it takes a village to raise a child, and we&apos;re honored to be part of yours.
            </p>
            <motion.a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('team');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#e5795b] text-white px-8 py-4 rounded-full font-['Poppins'] uppercase text-sm tracking-wider hover:bg-[#d66b4d] transition-colors"
            >
              Meet Our Team
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
            <img src={imgStory} alt="Our Story" className="w-full h-[400px] object-cover" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorBalloon className="absolute top-16 left-8 w-24 h-24 opacity-50" />
      <DecorativeVectorFlower className="absolute bottom-16 right-8 w-32 h-32 opacity-50" />
    </section>
  );
}

// ============================================================================
// OUR ENVIRONMENTS
// ============================================================================
function OurEnvironments() {
  const environments = [
    { title: 'Infant Room', description: 'Small group spaces for focused activities', image: imgEnv1 },
    { title: 'Play & Learning Area', description: 'Quiet space for stories and rest', image: imgEnv2 },
    { title: 'Creative Corner', description: 'Hands-on activities and art projects', image: imgEnv3 },
    { title: 'Outdoor Play Space', description: 'Fresh air and active play', image: imgEnv4 },
  ];

  return (
    <section id="environments" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:leading-[52px] mb-4">
            Our Environments
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl max-w-2xl mx-auto">
            Safe spaces designed for exploration, growth, and creativity at every developmental stage.
          </p>
        </motion.div>

        {/* Environment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {environments.map((env, index) => (
            <EnvironmentCard key={index} {...env} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorRainbow className="absolute top-16 left-8 w-28 h-16 opacity-50" />
      <DecorativeVectorBee className="absolute bottom-16 right-16 w-24 h-24 opacity-50" />
    </section>
  );
}

function EnvironmentCard({ title, description, image, index }: {
  title: string;
  description: string;
  image: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl h-80 cursor-pointer"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(35,46,67,0.8)] to-transparent opacity-100 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="font-['Poppins'] text-2xl lg:text-[28px] lg:leading-[39.2px] mb-2">{title}</h3>
        <p className="font-['Poppins'] text-sm text-white/90">{description}</p>
      </div>
    </motion.div>
  );
}

// ============================================================================
// MEET OUR TEAM
// ============================================================================
function MeetOurTeam() {
  const founders = [
    {
      name: 'Shyreese Tyiska',
      role: 'Co-Director | Lead Educator',
      yearsExperience: 'Over 18 years',
      credentials: '[Credentials or licenses]',
      education: 'Early Childhood Education coursework with the UCLA Extension program.',
      ageGroups: '0-5 year olds',
      whyChildcare: 'As a lifelong educator, my heart is in the classroom, watching a child’s eyes light up when they make a new discovery. I design and lead our play-based curriculum, ensuring every activity is not just fun, but purposeful. My focus is on the individual developmental journey of every child, from our infants to our preschoolers. I am here to be your primary resource for your child’s educational and emotional growth, celebrating every milestone with you.',
      safetyTraining: 'CPR and First Aid certified from the American Heart Association ',
      caringStyle: 'My approach blends safety, structure, creativity, and compassionate care to help every child thrive while giving families confidence and peace of mind.',
      personalFact: '[Hobby or fun fact]',
      image: 'https://res.cloudinary.com/dm4ezpefh/image/upload/v1771849412/Shyrees_VV_a3q0y9.jpg',
    },
    {
      name: 'Paskael Tyiska',
      role: 'Co-Founder | Community & Mentorship',
      credentials: 'Community Partnership Development, Internship Program Director, Facility & Safety Operations',
      whyChildcare: 'My passion has always been in building strong communities and mentoring others to see their own potential. At Village Values, my role is to ensure our center is a pillar of support for everyone who walks through our doors. I manage our operations, lead our community partnership initiatives, and run our internship program. I believe that by mentoring the next generation of caregivers and connecting our families with valuable local resources, we strengthen the entire village.',
      /* yearsExperience: '[Years working with children]',
      credentials: '[Credentials or licenses]',
      education: '[Education or certifications]',
      ageGroups: '[Age groups they specialize in]',
      whyChildcare: '[Why they chose childcare - one line human reason]',
      safetyTraining: '[CPR, First Aid, background cleared]',
      caringStyle: '[What parents can expect from them - caring style]',
      personalFact: '[Hobby or fun fact]',*/
      image: 'https://res.cloudinary.com/dqifsvgju/image/upload/v1769130751/Screenshot_2026-01-22_181153_fvcgwv.png',
    },
  ];
  /* //Team members to be displayed
   const team = [
     {
       name: '[Name]',
       role: 'Intern',
       school: '[School and degree]',
       whyEarlyEducation: '[Why do you support early childhood education]',
       contribution: '[How do you contribute to this program or mission]',
       excitement: '[What excites you about helping families and this community]',
       image: null,
     },
     {
       name: '[Name]',
       role: 'Intern',
       school: '[School and degree]',
       whyEarlyEducation: '[Why do you support early childhood education]',
       contribution: '[How do you contribute to this program or mission]',
       excitement: '[What excites you about helping families and this community]',
       image: null,
     },
     {
       name: '[Name]',
       role: 'Intern',
       school: '[School and degree]',
       whyEarlyEducation: '[Why do you support early childhood education]',
       contribution: '[How do you contribute to this program or mission]',
       excitement: '[What excites you about helping families and this community]',
       image: null,
     },
     {
       name: '[Name]',
       role: 'Intern',
       school: '[School and degree]',
       whyEarlyEducation: '[Why do you support early childhood education]',
       contribution: '[How do you contribute to this program or mission]',
       excitement: '[What excites you about helping families and this community]',
       image: null,
     },
     {
       name: '[Name]',
       role: 'Intern',
       school: '[School and degree]',
       whyEarlyEducation: '[Why do you support early childhood education]',
       contribution: '[How do you contribute to this program or mission]',
       excitement: '[What excites you about helping families and this community]',
       image: null,
     },
     {
       name: '[Name]',
       role: 'Intern',
       school: '[School and degree]',
       whyEarlyEducation: '[Why do you support early childhood education]',
       contribution: '[How do you contribute to this program or mission]',
       excitement: '[What excites you about helping families and this community]',
       image: null,
     },
     {
       name: '[Name]',
       role: 'Intern',
       school: '[School and degree]',
       whyEarlyEducation: '[Why do you support early childhood education]',
       contribution: '[How do you contribute to this program or mission]',
       excitement: '[What excites you about helping families and this community]',
       image: null,
     },
     {
       name: '[Name]',
       role: 'Intern',
       school: '[School and degree]',
       whyEarlyEducation: '[Why do you support early childhood education]',
       contribution: '[How do you contribute to this program or mission]',
       excitement: '[What excites you about helping families and this community]',
       image: null,
     },
   ];
  */
  return (
    <section id="team" className="relative overflow-hidden bg-[#f5edda] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:leading-[52px] mb-4">
            Meet Our Team!
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl max-w-2xl mx-auto">
            Dedicated educators and caregivers who make Village Values a second home.
          </p>
        </motion.div>

        {/* Founders - Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
          {founders.map((founder, index) => (
            <FounderCard key={index} {...founder} index={index} />
          ))}
        </div>

        {/* Team Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} index={index} />
          ))}
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#careers"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#e5795b] text-white px-8 py-4 rounded-full font-['Poppins'] uppercase text-sm tracking-wider hover:bg-[#d66b4d] transition-colors"
          >
            Join Our Team
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <DecorativeVectorStar className="absolute top-16 right-16 w-32 h-32 opacity-50" />
      <DecorativeVectorTree className="absolute bottom-16 left-8 w-28 h-36 opacity-50" />
    </section>
  );
}

function FounderCard({ name, role, image, index, yearsExperience, credentials, education, ageGroups, whyChildcare, safetyTraining, caringStyle, personalFact }: {
  name: string;
  role: string;
  image: string | null;
  index: number;
  yearsExperience?: string;
  credentials?: string;
  education?: string;
  ageGroups?: string;
  whyChildcare?: string;
  safetyTraining?: string;
  caringStyle?: string;
  personalFact?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{
          zIndex: isExpanded ? 10 : 1,
        }}
        className="bg-white rounded-3xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow relative"
      >
        {/* Profile Picture */}
        <motion.div
          animate={{
            width: isExpanded ? 160 : 96,
            height: isExpanded ? 160 : 96
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="rounded-full mx-auto mb-6 overflow-hidden border-4 border-[#f5edda] shadow-lg bg-[#e0e0e0]"
        >
          {image && <img src={image} alt={name} className="w-full h-full object-cover" />}
        </motion.div>

        {/* Name and Role */}
        <div className="text-center mb-4 pb-4 border-b border-gray-200">
          <h3 className="font-['Poppins'] text-[#232e43] text-xl lg:text-2xl mb-1">{name}</h3>
          <p className="font-['Poppins'] text-[#149496] text-sm">{role}</p>
        </div>

        {/* Always Visible Info */}
        <div className="space-y-3 text-left">
          {yearsExperience && (
            <div>
              <p className="font-['Poppins'] text-[#232e43] text-xs mb-1">Years with Children:</p>
              <p className="font-['Poppins'] text-[#1e7872] text-xs">{yearsExperience}</p>
            </div>
          )}

          {credentials && (
            <div>
              <p className="font-['Poppins'] text-[#232e43] text-xs mb-1">Credentials/Licenses:</p>
              <p className="font-['Poppins'] text-[#1e7872] text-xs">{credentials}</p>
            </div>
          )}
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? 16 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="space-y-3 text-left pt-4 border-t border-gray-200">
            {education && (
              <div>
                <p className="font-['Poppins'] text-[#232e43] text-xs mb-1">Education/Certifications:</p>
                <p className="font-['Poppins'] text-[#1e7872] text-xs">{education}</p>
              </div>
            )}

            {ageGroups && (
              <div>
                <p className="font-['Poppins'] text-[#232e43] text-xs mb-1">Age Groups:</p>
                <p className="font-['Poppins'] text-[#1e7872] text-xs">{ageGroups}</p>
              </div>
            )}

            {whyChildcare && (
              <div>
                <p className="font-['Poppins'] text-[#232e43] text-xs mb-1">Why Childcare:</p>
                <p className="font-['Poppins'] text-[#1e7872] text-xs italic">{whyChildcare}</p>
              </div>
            )}

            {safetyTraining && (
              <div>
                <p className="font-['Poppins'] text-[#232e43] text-xs mb-1">Safety Training:</p>
                <p className="font-['Poppins'] text-[#1e7872] text-xs">{safetyTraining}</p>
              </div>
            )}

            {caringStyle && (
              <div>
                <p className="font-['Poppins'] text-[#232e43] text-xs mb-1">Caring Style:</p>
                <p className="font-['Poppins'] text-[#1e7872] text-xs">{caringStyle}</p>
              </div>
            )}

            {personalFact && (
              <div className="pt-3 border-t border-gray-200">
                <p className="font-['Poppins'] text-[#1e7872] text-xs italic">{personalFact}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Click indicator */}
        <div className="text-center mt-4">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TeamCard({ name, role, image, index, school, whyEarlyEducation, contribution, excitement }: {
  name: string;
  role: string;
  image: string | null;
  index: number;
  school?: string;
  whyEarlyEducation?: string;
  contribution?: string;
  excitement?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{
          zIndex: isExpanded ? 10 : 1,
        }}
        className="bg-white rounded-3xl shadow-lg p-5 cursor-pointer hover:shadow-xl transition-shadow relative"
      >
        {/* Profile Picture */}
        <motion.div
          animate={{
            width: isExpanded ? 120 : 80,
            height: isExpanded ? 120 : 80
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="rounded-full mx-auto mb-4 overflow-hidden border-4 border-[#f5edda] shadow-lg bg-[#e0e0e0]"
        >
          {image && <img src={image} alt={name} className="w-full h-full object-cover" />}
        </motion.div>

        {/* Name and Role */}
        <div className="text-center mb-3 pb-3 border-b border-gray-200">
          <h3 className="font-['Poppins'] text-[#232e43] text-base lg:text-lg mb-1">{name}</h3>
          <p className="font-['Poppins'] text-[#149496] text-xs">{role}</p>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? 12 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="space-y-3 text-left">
            {school && (
              <div>
                <p className="font-['Poppins'] text-[#232e43] text-xs mb-1">School & Degree:</p>
                <p className="font-['Poppins'] text-[#1e7872] text-xs">{school}</p>
              </div>
            )}

            {whyEarlyEducation && (
              <div>
                <p className="font-['Poppins'] text-[#232e43] text-xs mb-1">Why Early Childhood Education:</p>
                <p className="font-['Poppins'] text-[#1e7872] text-xs italic">{whyEarlyEducation}</p>
              </div>
            )}

            {contribution && (
              <div>
                <p className="font-['Poppins'] text-[#232e43] text-xs mb-1">Contribution:</p>
                <p className="font-['Poppins'] text-[#1e7872] text-xs italic">{contribution}</p>
              </div>
            )}

            {excitement && (
              <div>
                <p className="font-['Poppins'] text-[#232e43] text-xs mb-1">What Excites Me:</p>
                <p className="font-['Poppins'] text-[#1e7872] text-xs italic">{excitement}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Click indicator */}
        <div className="text-center mt-3">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// STAY CONNECTED
// ============================================================================
function StayConnected() {
  return (
    <section id="connect" className="bg-[#f5edda] py-16 lg:py-20">
      <div className="max-w-[800px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-4xl lg:leading-[52px] mb-4">
            Stay Connected
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-lg">
            Follow us for updates, tips, and glimpses into our daily adventures!
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          <SocialButton icon="facebook" href="#" />
          <SocialButton icon="instagram" href="#" />
          <SocialButton icon="linkedin" href="#" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialButton({ icon, href }: { icon: string; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="w-14 h-14 rounded-full bg-[#149496] flex items-center justify-center text-white hover:bg-[#1e7872] transition-colors shadow-lg"
    >
      {icon === 'facebook' && <FacebookIcon />}
      {icon === 'instagram' && <InstagramIcon />}
      {icon === 'linkedin' && <LinkedinIcon />}
    </motion.a>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
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
      <DecorativeVectorLeafWhite className="absolute top-16 left-8 w-32 h-32 opacity-30" />
      <DecorativeVectorHeartWhite className="absolute bottom-16 right-8 w-24 h-24 opacity-30" />
    </section>
  );
}
// ============================================================================
// ICONS
// ============================================================================
function FacebookIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// ============================================================================
// DECORATIVE VECTORS (with 50% opacity as requested)
// ============================================================================
function DecorativeVectorHeart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 150 150">
        <path d={svgPaths.p9921600} fill="#E5795B" opacity="0.5" />
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

function DecorativeVectorPaw({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 150 150">
        <path d={svgPaths.p1b89e780} fill="#149496" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorLeaf({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 150 150">
        <path d={svgPaths.p188b5880} fill="#C49A3A" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorBalloon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 100 52">
        <path d={svgPaths.p1a23de80} stroke="#F6D33A" strokeLinecap="round" strokeWidth="3.58279" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorFlower({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 173 173">
        <path d={svgPaths.p1926b900} fill="#C49A3A" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorRainbow({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 100 52">
        <path d={svgPaths.p1a23de80} stroke="#F6D33A" strokeLinecap="round" strokeWidth="3.58279" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorBee({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 133 128">
        <path d={svgPaths.p2d57e380} fill="#C49A3A" opacity="0.5" />
      </svg>
    </div>
  );
}

function DecorativeVectorStar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
        <path d={svgPaths.p148b37b0} fill="#149496" opacity="0.5" />
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

function DecorativeVectorLeafWhite({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 150 150">
        <path d={svgPaths.p188b5880} fill="#ffffff" opacity="0.3" />
      </svg>
    </div>
  );
}

function DecorativeVectorHeartWhite({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 150 150">
        <path d={svgPaths.p9921600} fill="#ffffff" opacity="0.3" />
      </svg>
    </div>
  );
}