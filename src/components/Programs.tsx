import { ProgramCard } from "./ProgramCard";
import imgImageWithFallback1 from "figma:asset/df3528e8af5425e6f19e2448b019913ab02914cd.png";
import imgImageWithFallback2 from "figma:asset/4cd16b76a3e21abfab79bf7da38c206b5d3f4198.png";
import imgImageWithFallback3 from "figma:asset/7b4e932327d85c236f8c8254106660e80c422ac9.png";
import imgImageWithFallback4 from "figma:asset/940def1fbe82bc8a0f2a7104a8709bad4c1aa619.png";
import { motion } from "motion/react";
import { useInView } from "./useInView";

const programs = [
  {
    title: "Infant Care",
    ageRange: "6 - 23 months",
    description: "Gentle, responsive care focused on building trust, routines, and early sensory development.",
    image: imgImageWithFallback1,
    iconColor: "#e5795b",
  },
  {
    title: "Toddler Program",
    ageRange: "2 - 3 years",
    description: "Exploration and discovery through play-based learning, language development, and social interaction.",
    image: imgImageWithFallback2,
    iconColor: "#f6d33a",
  },
  {
    title: "Preschool",
    ageRange: "3 - 5 years",
    description: "School readiness through structured activities, creative expression, and foundational academic skills.",
    image: imgImageWithFallback3,
    iconColor: "#149496",
  },
  {
    title: "Drop-In Care",
    ageRange: "6 months - 5 years",
    description: "Flexible care options for occasional needs, date nights, or unexpected schedule changes.",
    image: imgImageWithFallback4,
    iconColor: "#c49a3a",
  },
];

export function Programs() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} id="programs" className="relative bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-3xl md:text-[40px] mb-4">
            What We Offer
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-lg md:text-xl max-w-2xl mx-auto">
            Age-appropriate care designed to nurture continuous growth through all childhood stages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#programs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#149496] text-white px-8 py-4 rounded-full font-['Poppins'] uppercase text-sm tracking-wider hover:bg-[#1e7872] transition-colors"
          >
            View All Programs
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}