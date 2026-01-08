import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useState } from "react";

const certifications = [
  {
    title: "Fully Licensed",
    badge: "🏠",
    description: "State-licensed facility meeting all regulatory requirements for safety and quality care.",
  },
  {
    title: "FBI & DOJ Cleared",
    badge: "✓",
    description: "All staff have passed comprehensive background checks from the FBI & Dept. of Justice.",
  },
  {
    title: "AHA Certified",
    badge: "❤️",
    description: "All lead caregivers are certified in CPR & First Aid by the American Heart Association.",
  },
  {
    title: "Preventative Health & Safety",
    badge: "🏥",
    description: "Certified for Preventative Health and Safety practices for Child Care Providers.",
  },
  {
    title: "Safe Meal Preparation",
    badge: "🍎",
    description: "Both directors hold California Food Handler Certificates, ensuring healthy and safe meals.",
  },
];

export function OurPromise() {
  const { ref, isInView } = useInView();
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <section ref={ref} id="our-promise" className="relative bg-gradient-to-b from-[#f5edda] to-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-3xl md:text-[40px] mb-4">
            Our Promise to Your Family
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-lg md:text-xl max-w-2xl mx-auto">
            These aren't just values on a wall, they're the commitments we live by every single day.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => toggleCard(index)}
            >
              <div
                className="relative transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards.has(index) ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front Side */}
                <div
                  className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[200px] hover:shadow-xl transition-shadow duration-300"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="text-6xl mb-4">
                    {cert.badge}
                  </div>
                  <h3 className="font-['Poppins'] text-[#232e43] text-base md:text-lg">
                    {cert.title}
                  </h3>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 bg-[#232e43] rounded-2xl shadow-md p-6 md:p-8 flex flex-col justify-center items-center text-center min-h-[200px]"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="font-['Poppins'] text-[#c49a3a] text-lg md:text-xl mb-3">
                    {cert.title}
                  </h3>
                  <p className="font-['Poppins'] text-white text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Commitment to Continuous Learning Section */}
        <div className="relative mt-16 md:mt-24 -mx-6 md:-mx-12 px-6 md:px-12 py-16 md:py-20 bg-[#f5edda] overflow-hidden">
          {/* Background Badges - Decorative Texture */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Top Left */}
            <motion.div 
              className="absolute left-4 top-8 bg-white/40 backdrop-blur-[2px] rounded-full px-8 py-4 border border-[#232e43]/10 opacity-40 flex items-center gap-3"
              animate={{
                x: [0, 20, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl">📚</span>
              <span className="font-['Poppins'] text-[#232e43] text-lg">Child Development</span>
            </motion.div>
            <motion.div 
              className="absolute left-4 top-[180px] bg-white/40 backdrop-blur-[2px] rounded-full px-8 py-4 border border-[#232e43]/10 opacity-30 flex items-center gap-3"
              animate={{
                x: [0, -15, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <span className="text-2xl">❤️</span>
              <span className="font-['Poppins'] text-[#232e43] text-lg">CPR Certified</span>
            </motion.div>
            <motion.div 
              className="absolute left-4 top-[340px] bg-white/40 backdrop-blur-[2px] rounded-full px-8 py-4 border border-[#232e43]/10 opacity-35 flex items-center gap-3"
              animate={{
                x: [0, 15, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <span className="text-2xl">🏥</span>
              <span className="font-['Poppins'] text-[#232e43] text-lg">First Aid</span>
            </motion.div>
            
            {/* Top Right */}
            <motion.div 
              className="absolute right-4 top-8 bg-white/40 backdrop-blur-[2px] rounded-full px-8 py-4 border border-[#232e43]/10 opacity-35 hidden md:flex items-center gap-3"
              animate={{
                x: [0, -20, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <span className="text-2xl">🛡️</span>
              <span className="font-['Poppins'] text-[#232e43] text-lg">Health & Safety</span>
            </motion.div>
            <motion.div 
              className="absolute right-4 top-[160px] bg-white/40 backdrop-blur-[2px] rounded-full px-8 py-4 border border-[#232e43]/10 opacity-40 hidden md:flex items-center gap-3"
              animate={{
                x: [0, 10, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              <span className="text-2xl">🚨</span>
              <span className="font-['Poppins'] text-[#232e43] text-lg">Emergency Ready</span>
            </motion.div>
            <motion.div 
              className="absolute right-4 top-[320px] bg-white/40 backdrop-blur-[2px] rounded-full px-8 py-4 border border-[#232e43]/10 opacity-30 hidden lg:flex items-center gap-3"
              animate={{
                x: [0, -15, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 9.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
            >
              <span className="text-2xl">🍎</span>
              <span className="font-['Poppins'] text-[#232e43] text-lg">Nutrition Safety</span>
            </motion.div>
            
            {/* Bottom Left */}
            <motion.div 
              className="absolute left-4 bottom-[240px] bg-white/40 backdrop-blur-[2px] rounded-full px-8 py-4 border border-[#232e43]/10 opacity-35 hidden md:flex items-center gap-3"
              animate={{
                x: [0, 20, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <span className="text-2xl">📖</span>
              <span className="font-['Poppins'] text-[#232e43] text-lg">Ongoing Training</span>
            </motion.div>
            <motion.div 
              className="absolute left-4 bottom-[80px] bg-white/40 backdrop-blur-[2px] rounded-full px-8 py-4 border border-[#232e43]/10 opacity-40 hidden lg:flex items-center gap-3"
              animate={{
                x: [0, -10, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 10.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
              }}
            >
              <span className="text-2xl">✓</span>
              <span className="font-['Poppins'] text-[#232e43] text-lg">Annual Recertification</span>
            </motion.div>
            
            {/* Bottom Right */}
            <motion.div 
              className="absolute right-4 bottom-[220px] bg-white/40 backdrop-blur-[2px] rounded-full px-8 py-4 border border-[#232e43]/10 opacity-35 hidden md:flex items-center gap-3"
              animate={{
                x: [0, 15, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8
              }}
            >
              <span className="text-2xl">⭐</span>
              <span className="font-['Poppins'] text-[#232e43] text-lg">Best Practices</span>
            </motion.div>
            <motion.div 
              className="absolute right-4 bottom-[80px] bg-white/40 backdrop-blur-[2px] rounded-full px-8 py-4 border border-[#232e43]/10 opacity-30 flex items-center gap-3"
              animate={{
                x: [0, -15, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.2
              }}
            >
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              <span className="font-['Poppins'] text-[#232e43] text-lg">Family Focused</span>
            </motion.div>
            <motion.div 
              className="absolute right-4 bottom-[380px] bg-white/40 backdrop-blur-[2px] rounded-full px-8 py-4 border border-[#232e43]/10 opacity-40 hidden lg:flex items-center gap-3"
              animate={{
                x: [0, 10, 0],
                y: [0, -12, 0],
              }}
              transition={{
                duration: 8.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            >
              <span className="text-2xl">🔒</span>
              <span className="font-['Poppins'] text-[#232e43] text-lg">Safety First</span>
            </motion.div>
          </div>

          {/* Foreground Content Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto bg-white rounded-3xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] p-8 md:p-12"
          >
            {/* Headline */}
            <h2 className="font-['Poppins'] text-[#232e43] text-2xl md:text-3xl lg:text-[40px] text-center mb-4">
              Our Commitment to Continuous Learning
            </h2>
            
            {/* Accent Divider */}
            <div className="w-24 h-1 bg-[#c49a3a] mx-auto mb-6"></div>
            
            {/* Subhead */}
            <p className="font-['Poppins'] text-[#149496] text-lg md:text-xl text-center mb-6">
              We stay up to date so your child gets safe, thoughtful care every day.
            </p>
            
            {/* Body Text */}
            <p className="font-['Poppins'] text-[#232e43] text-base md:text-lg leading-relaxed text-center">
              Our team regularly completes professional development in child development, safety, and best practices. We share what we learn to stay transparent and accountable to families.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}