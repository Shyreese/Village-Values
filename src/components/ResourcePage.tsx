import { motion } from 'motion/react';
import { useState, useEffect, } from 'react';
import { Search, BookOpen, Heart, Moon, Users, CalendarDays, School, Book, Brain, Sparkles, Clock, Sun, Coffee, Apple, Utensils, Music, Palette } from 'lucide-react';
import svgPathsHero from '../imports/svg-na88d9mshn';
import svgPathsResources from '../imports/svg-t3ovlu8fzf';
import svgPathsEducation from '../imports/svg-dnxsc6clny';
import logoImage from 'figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png';
import { Footer } from './Footer';
import { BottomNavBar } from './BottomNavBar';
import { useRef, forwardRef } from 'react';

export function ResourcesPage() {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* ← CHANGED: pass setSelectedCategory to ParentResourcesSection */}
      <ParentResourcesSection setSelectedCategory={setSelectedCategory} />
      {/* ← NEW: add ResourceDetail component below, passing selectedCategory */}
      <ResourceDetail selectedCategory={selectedCategory} ref={detailRef} />
      <DailyScheduleSection />
      <ChildcareEducationSection />
      <Footer />
      <BottomNavBar
        sections={[
          { id: 'parent-resources', label: 'Parent Resources' },
          { id: 'daily-schedule', label: 'Daily Schedule' },
          { id: 'childcare', label: 'Staff Training' }
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
          <img src={logoImage} alt="Village Values" className="h-12 w-12 rounded-full object-cover hover:opacity-80 transition-opacity" />
          <h1 className="font-['Poppins'] text-[#232e43] text-2xl lg:text-3xl hidden sm:block">
            Village Values
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="/" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo(0, 0); }} className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Home</a>
          <a href="#programs" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Programs</a>
          <a href="#about" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">About</a>
          <a href="#enroll" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Enroll</a>
          <a href="#careers" className="font-['Poppins'] text-[#232e43] text-base hover:text-[#149496] transition-colors">Careers</a>
          <a href="#resources" className="font-['Poppins'] text-[#149496] text-base hover:text-[#149496] transition-colors">Resources</a>
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
function HeroSection({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (query: string) => void }) {
  return (
    <section className="bg-gradient-to-b from-[#f5edda] to-white py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-12 top-32 w-28 h-28 opacity-30 pointer-events-none">
        <HouseIcon />
      </div>
      <div className="absolute left-[543px] bottom-20 w-24 h-24 opacity-30 pointer-events-none">
        <HouseIcon />
      </div>
      <div className="absolute right-10 top-24 w-64 h-64 opacity-30 pointer-events-none">
        <TreeIcon />
      </div>
      <div className="absolute right-48 bottom-10 w-64 h-64 opacity-30 pointer-events-none">
        <GrassIcon />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-block bg-[#149496] rounded-full px-8 py-2.5 mb-8">
            <p className="font-['Poppins'] text-white text-base">Resources & Support</p>
          </div>

          {/* Heading */}
          <h1 className="font-['Poppins'] text-[#232e43] text-4xl lg:text-[56px] lg:leading-[67.2px] mb-6">
            Your Village of Support,
            <br />
            All in One Place
          </h1>

          {/* Paragraph */}
          <p className="font-['Poppins'] text-[#1e7872] text-lg lg:text-xl leading-relaxed mb-10 max-w-[733px] mx-auto">
            Resources collected by our Village Values Research & Resource Department to help your family grow, thrive, and feel supported every step of the way.
          </p>

          {/* Search Bar */}
          <div className="max-w-[672px] mx-auto mb-4">
            <div className="relative">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#1e7872]">
                <Search className="w-full h-full" strokeWidth={2} />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[72px] pl-16 pr-6 rounded-full bg-white border-2 border-[rgba(20,148,150,0.2)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] font-['Poppins'] text-lg text-[#232e43] placeholder:text-[rgba(35,46,67,0.5)] focus:outline-none focus:border-[#149496] transition-colors"
              />
            </div>
          </div>

          {/* Search Suggestions */}
          <p className="font-['Poppins'] text-[rgba(30,120,114,0.7)] text-sm">
            Try searching: &quot;sleep tips&quot;, &quot;safety checklist&quot;, or &quot;local services&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// PARENT RESOURCES SECTION
// ============================================================================
function ParentResourcesSection({ setSelectedCategory }: { setSelectedCategory: (slug: string | null) => void }) {  // ← CHANGED: added props for setSelectedCategory
  const resources = [
    {
      icon: <BookOpenIcon />,
      title: 'Child Development',
      description: 'Milestones, growth charts, and developmental stages',
      count: 5,
      color: '#149496'
    },
    {
      icon: <HeartIcon />,
      title: 'Parenting Tips',
      description: 'Expert advice for everyday parenting challenges',
      count: 5,
      color: '#149496'
    },
    {
      icon: <MoonIcon />,
      title: 'Sleep & Feeding Guides',
      description: 'Schedules, routines, and nutrition resources',
      count: 5,
      color: '#149496'
    },
    {
      icon: <UsersIcon />,
      title: 'Behavior Tools',
      description: 'Positive discipline and emotional regulation strategies',
      count: 5,
      color: '#149496'
    },
    {
      icon: <CalendarIcon />,
      title: 'Local Events',
      description: 'Family-friendly activities and community gatherings',
      count: 5,
      color: '#149496'
    },
    {
      icon: <SchoolIcon />,
      title: 'After-School Programs',
      description: 'Extracurricular activities and enrichment options',
      count: 5,
      color: '#149496'
    },
    {
      icon: <BookIcon />,
      title: 'Early Reading Resources',
      description: 'Literacy tools, book lists, and reading activities',
      count: 5,
      color: '#149496'
    },
    {
      icon: <BrainIcon />,
      title: 'Mental Health Support',
      description: 'Resources for parent and child well-being',
      count: 5,
      color: '#149496'
    },
    {
      icon: <SparklesIcon />,
      title: 'Special Needs Services',
      description: 'Support for children with unique learning needs',
      count: 5,
      color: '#149496'
    }
  ];

  return (
    <section id="parent-resources" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-3xl lg:text-4xl mb-4">
            Parent Resources
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-lg">
            Everything you need to support your child's growth and your family's well-being
          </p>
        </motion.div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => {
            // ← NEW: create URL-friendly slug from title
            const slug = resource.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '');

            return (
              // ← CHANGED: added onClick to set the selected category
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}  // ← small improvement: added scale on hover
                onClick={() => {
                  setSelectedCategory(slug);

                  requestAnimationFrame(() => {
                    if (detailRef.current) {
                      detailRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });

                      window.scrollBy(0, -100);
                    }
                  });
                }}
                className="bg-[#f5edda] rounded-2xl p-6 cursor-pointer transition-shadow hover:shadow-xl h-full"  // ← added h-full for equal height
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                  {resource.icon}
                </div>

                {/* Title */}
                <h3 className="font-['Poppins'] text-[#232e43] text-xl mb-2">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="font-['Poppins'] text-[#1e7872] text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>

                {/* ← NEW: count + arrow for visual cue */}
                <div className="flex items-center justify-between text-sm text-[#149496] mt-2">
                  <span>{resource.count} resources</span>
                  <span aria-hidden="true">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Note */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-['Poppins'] italic text-[#1e7872] text-center mt-12"
        >
          Can’t find what you’re looking for or know a great resource to add? Contact us!
        </motion.p>
      </div>
    </section>
  );
}

// ============================================================================
// NEW COMPONENT: ResourceDetail 
// ============================================================================
function ResourceDetail({ selectedCategory }: { selectedCategory: string | null }) {
  if (!selectedCategory) return null;

  // ────────────────────────────────────────────────────────────────
  //     ALL CATEGORIES DATA — ADD / EDIT RESOURCES HERE
  // ────────────────────────────────────────────────────────────────
  const resourceData: Record<
    string,
    { title: string; items: Array<{ title: string; description: string; link: string; source: string }> }
  > = {
    "child-development": {
      title: "Child Development Resources",
      items: [
        {
          title: "CDC's Developmental Milestones",
          description: "Illustrated checklists by age, videos, and tips to track development from birth to 5 years.",
          link: "https://www.cdc.gov/act-early/milestones/index.html",
          source: "Centers for Disease Control and Prevention (CDC)"
        },
        {
          title: "CDC Milestone Tracker App",
          description: "Free mobile app to track milestones, get activities, and receive alerts.",
          link: "https://www.cdc.gov/act-early/milestones-app/index.html",
          source: "CDC"
        },
        {
          title: "CDC Growth Charts",
          description: "Percentile charts for height, weight, head circumference, and BMI (printable).",
          link: "https://www.cdc.gov/growthcharts/cdc-growth-charts.htm",
          source: "CDC"
        },
        {
          title: "WHO Child Growth Standards",
          description: "International growth reference charts for optimal child growth (0–5 years).",
          link: "https://www.who.int/tools/child-growth-standards/standards",
          source: "World Health Organization"
        },
        {
          title: "Ages & Stages – HealthyChildren.org",
          description: "Detailed milestone info, growth guidance, and parent articles by the AAP.",
          link: "https://www.healthychildren.org/English/ages-stages/Pages/default.aspx",
          source: "American Academy of Pediatrics"
        }
      ]
    },

    "parenting-tips": {
      title: "Parenting Tips",
      items: [
        {
          title: "Positive Parenting Tips (by age)",
          description: "Age-specific advice on development, positive parenting, safety, and health for infants through preschoolers.",
          link: "https://www.cdc.gov/child-development/positive-parenting-tips/index.html",
          source: "Centers for Disease Control and Prevention (CDC)"
        },
        {
          title: "Resources for Families",
          description: "Practical strategies to support your child's growth, with emphasis on positive parenting and individual family approaches.",
          link: "https://www.zerotothree.org/resources/for-families",
          source: "ZERO TO THREE"
        },
        {
          title: "Parent Resources, Tips, and Advice",
          description: "Activities, games, articles, and guidance to raise kind, curious, and resilient children.",
          link: "https://www.pbs.org/parents",
          source: "PBS KIDS for Parents"
        },
        {
          title: "UNICEF Parenting Resources",
          description: "Expert advice and tips to help raise healthy, resilient, and happy children.",
          link: "https://www.unicefusa.org/what-unicef-does/parenting",
          source: "UNICEF USA"
        },
        {
          title: "Positive Parenting Resources",
          description: "Clearinghouse of science-based information on common parenting concerns and child behavior.",
          link: "https://infoaboutkids.org/",
          source: "infoaboutkids.org (Consortium of APA divisions)"
        }
      ]
    },

    "sleep-feeding-guides": {
      title: "Sleep & Feeding Guides",
      items: [
        {
          title: "Baby Feeding Schedules - 6 to 24 Months",
          description: "Sample feeding schedules by month for infants and toddlers, including guidance on solids introduction.",
          link: "https://solidstarts.com/feeding-schedules",
          source: "Solid Starts"
        },
        {
          title: "Ages 0-2 Feeding Recommendations",
          description: "Guidelines on feeding from birth to 2 years, including breast milk/formula and establishing schedules.",
          link: "https://healthyeatingresearch.org/tips-for-families/ages-0-2-feeding-recommendations",
          source: "Healthy Eating Research"
        },
        {
          title: "Healthy Sleep Habits for Babies and Toddlers",
          description: "Tips for establishing bedtime routines, night feedings, and safe sleep practices.",
          link: "https://www.nationwidechildrens.org/family-resources-education/health-wellness-and-safety-resources/helping-hands/healthy-sleep-habits-for-infants-and-toddlers",
          source: "Nationwide Children's Hospital"
        },
        {
          title: "Baby Schedules: When to Start a Daily Routine",
          description: "Advice on when babies are ready for schedules, with samples for sleep, feeding, and routines.",
          link: "https://www.babycenter.com/baby/schedules/the-basics-of-baby-schedules-why-when-and-how-to-start-a-rou_3658352",
          source: "BabyCenter"
        },
        {
          title: "Infant Food and Feeding",
          description: "Expert guidance on introducing solids around 6 months and combining with breast milk/formula.",
          link: "https://www.aap.org/en/patient-care/healthy-active-living-for-families/infant-food-and-feeding",
          source: "American Academy of Pediatrics (AAP)"
        }
      ]
    },

    "behavior-tools": {
      title: "Behavior Tools",
      items: [
        {
          title: "Positive Parenting Tips: Preschoolers (3–5 years old)",
          description: "Strategies for discipline, encouragement, and fostering independence in preschoolers.",
          link: "https://www.cdc.gov/child-development/positive-parenting-tips/preschooler-3-5-years.html",
          source: "Centers for Disease Control and Prevention (CDC)"
        },
        {
          title: "Positive Behavior Strategies for Preschoolers",
          description: "Techniques like systematic supervision, clear rules, and nurturing environments.",
          link: "https://www.pbsmidwest.com/blog/behavior-management-positive-behavior-strategies-for-preschoolers",
          source: "PBS Midwest"
        },
        {
          title: "Positive Behavior Guidance",
          description: "Tips for building relationships and environments that foster positive interactions in pre-K.",
          link: "https://www.nysed.gov/early-learning/positive-behavior-guidance",
          source: "New York State Education Department"
        },
        {
          title: "Preschool Behavior Management Best Practices",
          description: "Clear expectations, routines, positive language, and modeling to support prosocial behaviors.",
          link: "https://mybrightwheel.com/blog/keys-to-effective-preschool-behavior-management",
          source: "Brightwheel"
        },
        {
          title: "Early Childhood PBIS",
          description: "Prevention strategies, skill instruction, and responses to reduce challenging behaviors.",
          link: "https://www.pbis.org/topics/early-childhood-pbis",
          source: "Center on PBIS"
        }
      ]
    },

    "local-events": {
      title: "Local Events (Bay Area)",
      items: [
        {
          title: "Bay Area Parent Event Calendar",
          description: "Calendar of kid-friendly events like art shows, farmers markets, and family activities across the Bay Area.",
          link: "https://www.bayareaparent.com/event-calendar",
          source: "Bay Area Parent Magazine"
        },
        {
          title: "510 Families Events Calendar",
          description: "Best things to do with kids in Oakland, Berkeley, and surrounding areas, including many free activities.",
          link: "https://www.510families.com/calendar",
          source: "510 Families"
        },
        {
          title: "Bay Area Kid Fun – Family Events",
          description: "Hundreds of events and special highlights for families in the San Francisco Bay Area.",
          link: "https://www.bayareakidfun.com/",
          source: "Bay Area Kid Fun"
        },
        {
          title: "Bay Area Kids GO – Weekend Guide",
          description: "Curated guide to family events like exhibits, classes, and outdoor adventures in SF, Oakland, San Jose.",
          link: "https://events.bayareakidsgo.com/",
          source: "Bay Area Kids GO"
        },
        {
          title: "Macaroni KID Palo Alto-Redwood City Events",
          description: "Local events including markets, story times, and free family activities in the Peninsula area.",
          link: "https://paloalto.macaronikid.com/events/calendar",
          source: "Macaroni KID"
        }
      ]
    },

    "after-school-programs": {
      title: "After-School Programs (Bay Area)",
      items: [
        {
          title: "SFUSD Before and After School Programs",
          description: "School-based programs with childcare, play, and enrichment starting from Transitional Kindergarten.",
          link: "https://www.sfusd.edu/schools/enroll/resources/and-after-school-programs",
          source: "San Francisco Unified School District"
        },
        {
          title: "After-School All-Stars Bay Area",
          description: "Innovative after-school programs focused on academics, enrichment, and closing opportunity gaps.",
          link: "https://afterschoolallstars.org/asas_chapter/bay-area",
          source: "After-School All-Stars"
        },
        {
          title: "YMCA After School Programs – Silicon Valley",
          description: "Safe spaces with skill-building, relationships, and activities at Bay Area YMCAs.",
          link: "https://www.ymcasv.org/child-care-camps/after-school-programs",
          source: "YMCA Silicon Valley"
        },
        {
          title: "Brains & Motion After-School Programs",
          description: "STEAM, sports, and enrichment after-school activities across the Bay Area.",
          link: "https://www.brains-and-motion.com/pages/after-school-programs-in-the-bay-area",
          source: "Brains & Motion Education"
        },
        {
          title: "After-School Classes – 510 Families Guide",
          description: "Arts, sports, academics, and more classes in Oakland, Berkeley, and the East Bay.",
          link: "https://www.510families.com/after-school-classes-kids-oakland-berkeley",
          source: "510 Families"
        }
      ]
    },

    "early-reading-resources": {
      title: "Early Reading Resources",
      items: [
        {
          title: "Reading Tips for Parents of Preschoolers",
          description: "Fun, practical ways to help your preschooler become a happy and confident reader, including reading aloud, talking about stories, and building print awareness.",
          link: "https://www.readingrockets.org/topics/activities/articles/reading-tips-parents-preschoolers",
          source: "Reading Rockets"
        },
        {
          title: "Every Child Ready to Read – Resources",
          description: "Research-based five practices (talking, singing, reading, writing, playing) with tips, activities, and parent workshops to build early literacy from birth to age 5.",
          link: "https://everychildreadytoread.org/resources",
          source: "Every Child Ready to Read (American Library Association)"
        },
        {
          title: "PBS KIDS for Parents – Language and Literacy",
          description: "Simple, powerful ways to develop literacy: talk, listen, read, and write together, with age-appropriate activities and video support for early childhood.",
          link: "https://www.pbs.org/parents/learn-grow/all-ages/literacy",
          source: "PBS KIDS for Parents"
        },
        {
          title: "Reach Out and Read – Family Resources",
          description: "Tips and videos for shared reading from newborn to age 4, plus guidance on choosing books and making reading interactive and fun.",
          link: "https://reachoutandread.org/what-we-do/family-resources",
          source: "Reach Out and Read"
        },
        {
          title: "12 Early Literacy Tips to Boost Children's Reading Skills",
          description: "Expert tips for building healthy reading habits at home, including starting early, using board books, and turning everyday moments into literacy opportunities.",
          link: "https://www.startearly.org/post/12-tips-to-boost-early-literacy",
          source: "Start Early"
        }
      ]
    },
    "mental-health-support": {
      title: "Mental Health Support (Bay Area Focus)",
      items: [
        {
          title: "T.A.L.K. Line – 24-Hour Parental Support",
          description: "Free, confidential 24/7 hotline for parents/caregivers of children under 18 in the Bay Area – offers support, info, and referrals for mental health concerns.",
          link: "https://safeandsound.org/for-parents/get-help-now/",
          source: "Safe & Sound (Bay Area)"
        },
        {
          title: "Center for Children and Youth (JFCS)",
          description: "Bay Area services including parenting classes, child therapy, family counseling, assessments, and support from infancy through young adulthood.",
          link: "https://ccy.jfcs.org/",
          source: "Jewish Family and Children’s Services (Bay Area)"
        },
        {
          title: "NAMI San Francisco – Youth and Family Resources",
          description: "Local guide to SF mental health resources for children/youth/families, plus free NAMI Basics education classes for parents of kids with mental health symptoms.",
          link: "https://www.namisf.org/resourcesforparentsofyouth",
          source: "NAMI San Francisco"
        },
        {
          title: "Pacific Clinics – Bay Area Behavioral Health",
          description: "Comprehensive services including prevention/early intervention, neurodivergent support, mobile crisis, and family-focused mental health for children/youth.",
          link: "https://www.pacificclinics.org/",
          source: "Pacific Clinics (Bay Area)"
        },
        {
          title: "Parents Place – Parenting & Mental Health Services",
          description: "Bay Area workshops, coaching, child/family therapy, behavior support, and groups for parents dealing with young children's emotional/well-being needs.",
          link: "https://ccy.jfcs.org/",  // Parents Place is part of JFCS
          source: "Jewish Family and Children’s Services (Bay Area)"
        }
      ]
    },

    "special-needs-services": {
      title: "Special Needs Services (Bay Area)",
      items: [
        {
          title: "Early Start Program – California Department of Developmental Services",
          description: "Statewide early intervention for infants/toddlers (0-3) with developmental delays or risks; coordinated through local Bay Area regional centers for assessments and services.",
          link: "https://www.dds.ca.gov/services/early-start",
          source: "CA Department of Developmental Services"
        },
        {
          title: "Bay Area Regional Centers",
          description: "21 centers serving developmental disabilities from birth; provide eligibility assessment, case management, early intervention referrals, and long-term support planning.",
          link: "https://autism.ucsf.edu/bay-area-regional-centers",
          source: "UCSF Center for ASD and NDDs (with DDS listings)"
        },
        {
          title: "Parents Helping Parents (PHP)",
          description: "San Jose/Bay Area parent support, early childhood services (0-5), consultations, groups, and resource connections for children with disabilities/delays.",
          link: "https://www.php.com/",
          source: "Parents Helping Parents"
        },
        {
          title: "AbilityPath",
          description: "Comprehensive Bay Area services from early intervention/infants to school-age support, therapy, and family resources for children of all abilities.",
          link: "https://abilitypath.org/",
          source: "AbilityPath"
        },
        {
          title: "Felton Early Autism Program (FEAP)",
          description: "San Francisco inclusive center-based early intervention for infants/toddlers with autism using Early Start Denver Model (ESDM) – therapies and family resources.",
          link: "https://felton.org/social-services/cyftay/felton-early-autism-program-feap",
          source: "Felton Institute"
        }
      ]
    }
  };

  const category = resourceData[selectedCategory];

  if (!category) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="font-['Poppins'] text-[#232e43] text-3xl mb-4">
            Resources for {selectedCategory.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-lg">
            Coming soon! Check back for curated resources or contact us with suggestions.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#f5edda]">
      <div className="max-w-3xl mx-auto px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-['Poppins'] text-[#232e43] text-3xl lg:text-4xl mb-8 text-center"
        >
          {category.title}
        </motion.h2>

        <div className="space-y-6">
          {category.items.map((res, idx) => (
            <motion.a
              key={idx}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="font-['Poppins'] text-[#232e43] text-xl mb-2">
                {res.title}
              </h3>
              <p className="font-['Poppins'] text-[#1e7872] text-sm mb-3 leading-relaxed">
                {res.description}
              </p>
              <p className="text-xs text-[#149496] italic">
                Source: {res.source}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={() => setSelectedCategory(null)}
          whileHover={{ scale: 1.05 }}
          className="mt-12 mx-auto block bg-[#149496] text-white px-8 py-3 rounded-full font-['Poppins'] text-base hover:bg-[#1e7872] transition-colors"
        >
          Back to Resources
        </motion.button>
      </div>
    </section>
  );
}



// ============================================================================
// DAILY SCHEDULE SECTION
// ============================================================================
function DailyScheduleSection() {
  const scheduleItems = [
    { time: '7:00 AM - 8:30 AM', activity: 'Arrival & Free Play', description: 'Children arrive and engage in self-directed activities' },
    { time: '8:30 AM - 9:00 AM', activity: 'Morning Circle Time', description: 'Welcome, songs, and calendar activities' },
    { time: '9:00 AM - 9:30 AM', activity: 'Snack Time', description: 'Healthy snacks and social time' },
    { time: '9:30 AM - 10:30 AM', activity: 'Learning Centers', description: 'Rotating activities: art, science, dramatic play, blocks' },
    { time: '10:30 AM - 11:30 AM', activity: 'Outdoor Play', description: 'Physical activity and nature exploration' },
    { time: '11:30 AM - 12:00 PM', activity: 'Story Time & Music', description: 'Interactive reading and musical activities' },
    { time: '12:00 PM - 12:45 PM', activity: 'Lunch', description: 'Nutritious meals and family-style dining' },
    { time: '12:45 PM - 2:45 PM', activity: 'Quiet Time & Nap', description: 'Rest and rejuvenation for growing bodies' },
    { time: '2:45 PM - 3:15 PM', activity: 'Afternoon Snack', description: 'Light refreshments and table conversation' },
    { time: '3:15 PM - 4:30 PM', activity: 'Afternoon Activities', description: 'Choice time, special projects, or outdoor play' },
    { time: '4:30 PM - 6:00 PM', activity: 'Free Play & Departure', description: 'Open play until families arrive for pickup' }
  ];

  return (
    <section id="daily-schedule" className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-3xl lg:text-4xl mb-4">
            Daily Schedule
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-lg">
            A structured day designed to support learning, growth, and fun
          </p>
        </motion.div>

        {/* Schedule Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-6 ${index !== scheduleItems.length - 1 ? 'border-b border-[#f5edda]' : ''
                } hover:bg-[#f5edda] transition-colors`}
            >
              {/* Time */}
              <div className="font-['Poppins'] text-[#149496] md:text-right">
                {item.time}
              </div>

              {/* Activity */}
              <div className="font-['Poppins'] text-[#232e43]">
                {item.activity}
              </div>

              {/* Description */}
              <div className="font-['Poppins'] text-[#1e7872] text-sm">
                {item.description}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8"
        >
          <p className="font-['Poppins'] text-[#1e7872] text-sm italic">
            Schedule may vary slightly by age group and classroom. Ask your teacher for specific timing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// CHILDCARE EDUCATION SECTION
// ============================================================================
function ChildcareEducationSection() {
  // State to track which training category is selected
  const [selectedTraining, setSelectedTraining] = useState<string | null>(null);

  // Ref to scroll to the detail section smoothly when a card is clicked
  const detailRef = useRef<HTMLDivElement>(null);

  const trainings = [
    {
      icon: <ClassroomIcon />,
      title: 'Classroom Management',
      description: 'Strategies for creating positive, structured learning environments',
      count: 3
    },
    {
      icon: <EarlyChildhoodIcon />,
      title: 'Early Childhood Development Basics',
      description: 'Core concepts in child development and learning theory',
      count: 3
    },
    {
      icon: <SafetyIcon />,
      title: 'Safety & Mandated Reporting',
      description: 'Critical safety protocols and legal responsibilities',
      count: 3
    },
    {
      icon: <LessonPlanIcon />,
      title: 'Lesson Planning Ideas',
      description: 'Templates, themes, and age-appropriate activity plans',
      count: 3
    },
    {
      icon: <ActivityIcon />,
      title: 'Activity Guides',
      description: 'Creative activities for learning, play, and exploration',
      count: 3
    },
    {
      icon: <BehaviorIcon />,
      title: 'Behavior Strategies',
      description: 'Positive guidance techniques and conflict resolution',
      count: 3
    },
    {
      icon: <ProfessionalGrowthIcon />,
      title: 'Professional Growth',
      description: 'Career development resources and continuing education',
      count: 3
    },
    {
      icon: <LicensingIcon />,
      title: 'Licensing Requirements',
      description: 'State regulations, certification info, and compliance guides',
      count: 3
    }
  ];

  return (
    <section id="childcare" className="bg-[#f5edda] py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-[119px] top-[60.58px] w-[252px] h-[252px] opacity-30">
        <BeeDecorIcon />
      </div>
      <div className="absolute right-[252px] bottom-[80px] w-[180px] h-[197px] opacity-30">
        <AppleDecorIcon />
      </div>
      <div className="absolute right-[115px] top-[562.58px] w-[252px] h-[252px] opacity-30">
        <StarDecorIcon />
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
          <h2 className="font-['Poppins'] text-[#232e43] text-[40px] leading-[52px] mb-4">
            Childcare Education
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-xl mb-2">
            Training resources for our staff and interns
          </p>
          <p className="font-['Poppins'] italic text-[#149496]">
            We invest in our team&apos;s growth and professional development
          </p>
        </motion.div>

        {/* Training Cards Grid - now clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {trainings.map((training, index) => {
            // Create a clean slug from the title (same format as parent resources)
            const slug = training.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => {
                  setSelectedTraining(slug);
                  // Scroll smoothly to the detail section after state updates
                  requestAnimationFrame(() => {
                    detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    window.scrollBy(0, -100); // small offset so header doesn't cover title
                  });
                }}
                className="bg-white rounded-2xl p-6 cursor-pointer transition-shadow hover:shadow-xl"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[rgba(196,154,58,0.1)] rounded-[16.4px] flex items-center justify-center mb-6">
                  {training.icon}
                </div>

                {/* Title */}
                <h3 className="font-['Poppins'] text-[#232e43] text-xl mb-3 leading-7">
                  {training.title}
                </h3>

                {/* Description */}
                <p className="font-['Poppins'] text-[#1e7872] text-sm mb-6 leading-[22.75px]">
                  {training.description}
                </p>

                {/* Resource Count */}
                <p className="font-['Poppins'] text-[#c49a3a] text-sm leading-5">
                  {training.count} resources
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ────────────────────────────────────────────────────────────────
            NEW: Detail view that appears when a training card is clicked
         ──────────────────────────────────────────────────────────────── */}
        <TrainingDetail
          selectedTraining={selectedTraining}
          setSelectedTraining={setSelectedTraining}
          ref={detailRef}
        />

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-b from-[#149496] to-[#1e7872] rounded-2xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] p-8 text-center"
        >
          <p className="font-['Poppins'] text-white text-lg leading-7 max-w-[668px] mx-auto">
            All staff members have access to our comprehensive training library. We believe that investing in our educators creates the best experience for children.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// NEW COMPONENT: Shows detailed resources when a training card is clicked
// ============================================================================
const TrainingDetail = forwardRef<HTMLDivElement, {
  selectedTraining: string | null;
  setSelectedTraining: (slug: string | null) => void;
}>(({ selectedTraining, setSelectedTraining }, ref) => {
  if (!selectedTraining) return null;

  // Data structure: slug → display title + array of 3 resources
  const trainingData: Record<string, { title: string; items: Array<{ title: string; description: string; link: string; source: string }> }> = {
    "classroom-management": {
      title: "Classroom Management Resources",
      items: [
        {
          title: "Positive Classroom Management Strategies",
          description: "Practical techniques to build a respectful, productive classroom environment in early childhood settings.",
          link: "https://www.naeyc.org/resources/pubs/yc/may2017/positive-classroom-management-strategies",
          source: "NAEYC"
        },
        {
          title: "Classroom Management That Works",
          description: "Research-based strategies for establishing rules, routines, and positive relationships with young children.",
          link: "https://www.edutopia.org/article/classroom-management-works",
          source: "Edutopia"
        },
        {
          title: "Foundations of Positive Guidance",
          description: "Free introductory course on creating supportive environments and guiding behavior positively.",
          link: "https://www.cceionline.com/course/foundations-of-positive-guidance",
          source: "ChildCare Education Institute (free trial available)"
        }
      ]
    },

    "early-childhood-development-basics": {
      title: "Early Childhood Development Basics Resources",
      items: [
        {
          title: "Watch Me! Celebrating Milestones and Sharing Concerns",
          description: "Free CDC training module on tracking developmental milestones and communicating with families.",
          link: "https://www.cdc.gov/watch-me-training/about/index.html",
          source: "Centers for Disease Control and Prevention (CDC)"
        },
        {
          title: "Developmentally Appropriate Practice (DAP)",
          description: "Core principles of how young children learn and develop, with practical examples for educators.",
          link: "https://www.naeyc.org/resources/position-statements/dap",
          source: "NAEYC"
        },
        {
          title: "The Science of Early Childhood Development",
          description: "Overview of brain development, attachment, and key concepts in the first five years.",
          link: "https://developingchild.harvard.edu/science/key-concepts/",
          source: "Center on the Developing Child – Harvard University"
        }
      ]
    },

    "safety-mandated-reporting": {
      title: "Safety & Mandated Reporting Resources",
      items: [
        {
          title: "Mandated Reporter Training for Child Care Providers",
          description: "California-specific free training on recognizing and reporting child abuse/neglect (AB 1207 compliant).",
          link: "https://mandatedreporterca.com/",
          source: "California Department of Social Services"
        },
        {
          title: "Preventive Health & Safety Practices",
          description: "Videos and guides covering emergency procedures, illness prevention, and safe environments.",
          link: "https://ccld.childcarevideos.org/child-care-center-operators/health-and-safety-training",
          source: "California Community Care Licensing Division"
        },
        {
          title: "Caring for Our Children – Safety Standards",
          description: "National standards for injury prevention, supervision, and emergency preparedness in child care.",
          link: "https://nrckids.org/CFOC/Database/1",
          source: "American Academy of Pediatrics / National Resource Center"
        }
      ]
    },

    "lesson-planning-ideas": {
      title: "Lesson Planning Ideas Resources",
      items: [
        {
          title: "Preschool Lesson Plan Templates",
          description: "Free downloadable weekly and thematic lesson plan templates for early childhood classrooms.",
          link: "https://www.preschool-plan-it.com/lesson-plans.html",
          source: "Preschool Plan-It"
        },
        {
          title: "Creative Curriculum – Planning Tools",
          description: "Ideas and frameworks for intentional, play-based lesson planning aligned with developmental goals.",
          link: "https://teachingstrategies.com/product-resources/creative-curriculum/",
          source: "Teaching Strategies (free resources section)"
        },
        {
          title: "Lesson Planning for Infants & Toddlers",
          description: "Examples of responsive, interest-based planning for younger children.",
          link: "https://www.zerotothree.org/resources/series/lesson-planning-for-infants-and-toddlers",
          source: "ZERO TO THREE"
        }
      ]
    },

    "activity-guides": {
      title: "Activity Guides Resources",
      items: [
        {
          title: "HiMama Activity Library",
          description: "Hundreds of free, searchable activity ideas categorized by domain and age group.",
          link: "https://www.himama.com/learning/child-activities",
          source: "HiMama"
        },
        {
          title: "Pre-K Printable Fun Activities",
          description: "Free themed activities, crafts, and games with step-by-step instructions.",
          link: "https://www.prekprintablefun.com/",
          source: "Pre-K Printable Fun"
        },
        {
          title: "NAEYC Activity Ideas",
          description: "Play-based learning activities that support all areas of development.",
          link: "https://www.naeyc.org/resources/topics/play/activities",
          source: "NAEYC"
        }
      ]
    },

    "behavior-strategies": {
      title: "Behavior Strategies Resources",
      items: [
        {
          title: "Positive Guidance Techniques",
          description: "Practical strategies for responding to challenging behavior with empathy and teaching.",
          link: "https://www.naeyc.org/resources/pubs/yc/jul2020/positive-guidance-techniques",
          source: "NAEYC"
        },
        {
          title: "CSEFEL – Center on the Social and Emotional Foundations for Early Learning",
          description: "Free modules, tools, and visuals for teaching social-emotional skills and managing behavior.",
          link: "http://csefel.vanderbilt.edu/",
          source: "Vanderbilt University"
        },
        {
          title: "Pyramid Model Resources",
          description: "Evidence-based practices for promoting social-emotional competence and preventing challenging behavior.",
          link: "https://challengingbehavior.org/",
          source: "Center on Social and Emotional Foundations for Early Learning"
        }
      ]
    },

    "professional-growth": {
      title: "Professional Growth Resources",
      items: [
        {
          title: "NAEYC Professional Development Webinars",
          description: "Free and low-cost webinars and recorded sessions on best practices in early childhood.",
          link: "https://www.naeyc.org/events/trainings-webinars",
          source: "NAEYC"
        },
        {
          title: "ChildCare Education Institute Free Trial Courses",
          description: "Access to sample courses and free clock hours for professional development.",
          link: "https://www.cceionline.com/free-trial",
          source: "ChildCare Education Institute"
        },
        {
          title: "Zero to Three Professional Development",
          description: "Free webinars, articles, and tools focused on infant/toddler care and leadership.",
          link: "https://www.zerotothree.org/resources/professional-development",
          source: "ZERO TO THREE"
        }
      ]
    },

    "licensing-requirements": {
      title: "Licensing Requirements Resources",
      items: [
        {
          title: "California Child Care Licensing – Provider Resources",
          description: "Official manuals, forms, regulations, and orientation materials for licensed providers.",
          link: "https://www.cdss.ca.gov/inforesources/child-care-licensing/resources-for-providers",
          source: "California Department of Social Services (CDSS)"
        },
        {
          title: "Community Care Licensing Division Videos",
          description: "Free video series explaining key licensing rules and compliance topics.",
          link: "https://ccld.childcarevideos.org/",
          source: "CDSS Community Care Licensing"
        },
        {
          title: "How to Become a Licensed Family Child Care Provider",
          description: "Step-by-step guide including required training, inspections, and application process.",
          link: "https://www.cdss.ca.gov/inforesources/child-care-licensing/becoming-a-licensed-provider",
          source: "California Department of Social Services"
        }
      ]
    }
  };

  const category = trainingData[selectedTraining];

  if (!category) {
    return (
      <div ref={ref} className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="font-['Poppins'] text-[#232e43] text-3xl mb-4">
            {selectedTraining?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Training'}
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-lg">
            Resources coming soon! Contact us with suggestions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="py-16 bg-[#f5edda]">
      <div className="max-w-3xl mx-auto px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-['Poppins'] text-[#232e43] text-3xl lg:text-4xl mb-8 text-center"
        >
          {category.title}
        </motion.h2>

        <div className="space-y-6">
          {category.items.map((res, idx) => (
            <motion.a
              key={idx}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="font-['Poppins'] text-[#232e43] text-xl mb-2">
                {res.title}
              </h3>
              <p className="font-['Poppins'] text-[#1e7872] text-sm mb-3 leading-relaxed">
                {res.description}
              </p>
              <p className="text-xs text-[#149496] italic">
                Source: {res.source}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={() => setSelectedTraining(null)}
          whileHover={{ scale: 1.05 }}
          className="mt-12 mx-auto block bg-[#149496] text-white px-8 py-3 rounded-full font-['Poppins'] text-base hover:bg-[#1e7872] transition-colors">
          Back to Trainings
        </motion.button>
      </div>
    </div>
  );
});

// ============================================================================
// ICON COMPONENTS
// ============================================================================
function HouseIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <g opacity="0.3">
        <path d={svgPathsHero.p2f98fdf0} fill="#E5795B" />
        <path d={svgPathsHero.p14f1c380} fill="#E5795B" />
        <path d={svgPathsHero.p244d6640} fill="#E5795B" />
        <path d={svgPathsHero.p327f8e00} fill="#E5795B" />
      </g>
    </svg>
  );
}

function TreeIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 310 303">
      <g opacity="0.3">
        <path d={svgPathsHero.p3c08cf00} fill="#149496" />
        <path d={svgPathsHero.p20c6d400} fill="#149496" />
        <path d={svgPathsHero.pd699f00} fill="#149496" />
        <path d={svgPathsHero.p1e015c00} fill="#149496" />
        <path d={svgPathsHero.pb2a9280} fill="#149496" />
      </g>
    </svg>
  );
}

function GrassIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <g>
        <path d={svgPathsHero.p15f51900} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p2b360600} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p3b3d4d00} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p2eb2a780} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p171c380} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p1030c600} fill="#1E7872" opacity="0.3" />
        <path d={svgPathsHero.p26c23280} fill="#1E7872" opacity="0.3" />
      </g>
    </svg>
  );
}

function BookOpenIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p308d0700} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p9921600} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p186c1a00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p2ee517c0} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p27a3200} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p16bbf900} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p8d31b00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6667 2.66667V8" stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.3333 2.66667V8" stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 13.3333H28" stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p17d8f380} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.66667 18.6667V13.3333L16 8L25.3333 13.3333V18.6667" stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p2b75c580} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p308d0700} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.p2d575c00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.pa476500} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p15c192c0} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p13a8aa80} fill="#149496" />
      <path d={svgPathsResources.p3c1b880} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
      <path d={svgPathsResources.pbbd9800} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.pecb2400} fill="#149496" />
      <path d={svgPathsResources.pf6f00} stroke="#149496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CoffeeIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UtensilsIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsResources.p186c1a00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p10890b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsResources.p12922f00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Education Section Icons
function ClassroomIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p184ba090} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p182f3148} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p2f1426c0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p5d36b00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EarlyChildhoodIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d="M14 21V5.83333" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p3536b5c0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.pf30d500} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p1baaa40} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p3fb109e0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.pcb4cbe0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p3edc4ae0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p13ba1050} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SafetyIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p1a3063b0} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LessonPlanIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p35802300} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p2c7af00} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 12.8333H18.6667" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 18.6667H18.6667" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33333 12.8333H9.345" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33333 18.6667H9.345" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p294c6200} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 21H17.5" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6667 25.6667H16.3333" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BehaviorIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p25e06300} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProfessionalGrowthIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p275e0300} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p3997a780} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LicensingIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <path d={svgPathsEducation.p38e02680} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPathsEducation.p394f8700} stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6667 10.5H9.33333" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.6667 15.1667H9.33333" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.6667 19.8333H9.33333" stroke="#C49A3A" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Decorative Icons
function BeeDecorIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <path d={svgPathsEducation.p3b491b80} fill="#C49A3A" opacity="0.3" />
    </svg>
  );
}

function AppleDecorIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 180 197">
      <path d={svgPathsEducation.p3c515872} fill="#E5795B" opacity="0.3" />
    </svg>
  );
}

function StarDecorIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 252 252">
      <path d={svgPathsEducation.p52c5200} fill="#149496" opacity="0.3" />
    </svg>
  );
}