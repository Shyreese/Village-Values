import imgImageWithFallback from "figma:asset/eb06bdca81e935bd3d464786cf7f42cfcd2ef284.png";
import { motion } from "motion/react";
import { useInView } from "./useInView";

export function FoundersNote() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} id="founders-note" className="relative bg-[#f5edda] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl relative">
              <motion.img
                src={imgImageWithFallback}
                alt="Founders"
                className="w-full h-[400px] md:h-[500px] object-cover cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.location.hash = '#about'}
              />
              {/* Est Badge */}
              <div className="absolute bottom-6 right-6 bg-[#c49a3a] rounded-2xl px-6 py-4 shadow-lg">
                <p className="font-['Poppins'] text-white text-xl">Est. 2014</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-1 md:order-2"
          >
            <h2 className="font-['Poppins'] text-[#232e43] text-3xl md:text-[40px] leading-tight">
              A Note from Our Founders
            </h2>
            <div className="space-y-4 font-['Poppins'] text-[#1e7872] text-base md:text-lg leading-relaxed">
              <p>
                We started Village Values with a simple belief: every child deserves a safe, nurturing environment where they can learn, play, and grow into their full potential.
              </p>
              <p>
                As parents ourselves, we understand the trust you place in us. That's why we've built our program on the foundation of authentic care, transparent communication, and proven educational practices.
              </p>
              <p>
                Our home isn't just a childcare facility it's an extension of your family's village. We're honored to be part of your child's journey.
              </p>
              <div className="pt-4">
                <p className="font-['Poppins'] text-[#232e43]">With love and gratitude,</p>
                <p className="font-['Poppins'] italic text-[#c49a3a]">The Village Values Team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}