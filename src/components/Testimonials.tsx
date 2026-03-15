import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./useInView";

const testimonials = [
  {
    name: "Chanita D.",
    stars: 5,
    text: "Village Values is awesome. My son was always happy leaving here and enjoying their park days. They helped with his math homework while I was at work. Super helpful and great daycare and my son loved the other kids.",
  },
  {
    name: "Andaes W.",
    stars: 5,
    text: "I can't say enough good things about this childcare service. The staff are so thoughtful patient and genuinely caring. They've created such a safe and loving environment for my four year old. Every day my child comes home happy learning new things and excited to go back. It's such a relief knowing they're in kind capable hands.",
  },
  {
    name: "Lucile J.",
    stars: 5,
    text: "I couldn't find drop in childcare anywhere until I found Village Values. From structured play to meals included my grandson had an amazing time and came home happy tired and already asking to go back. Village Values truly lives up to its name.",
  },
  {
    name: "Kristina P.",
    stars: 5,
    text: "Village Values is exceptional as it relates to child safety skill development business operations and being a community resource hub. The staff are experienced in early childhood needs and provide a safe welcoming space for children and peace of mind for parents.",
  },
  {
    name: "Turtle B.",
    stars: 5,
    text: "Village Values makes it so much easier being away from your child all day. The staff go above and beyond to create a loving structured and positive environment. The space is always clean welcoming and full of joy. It genuinely feels like an extension of our family.",
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={ref} id="testimonials" className="relative bg-gradient-to-b from-white to-[#f5edda] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Poppins'] text-[#232e43] text-3xl md:text-[40px] mb-4">
            What Families Are Saying
          </h2>
          <p className="font-['Poppins'] text-[#1e7872] text-lg md:text-xl">
            Don't just take our word for it, hear from our Village Values community.
          </p>
        </motion.div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[320px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6" fill="#F6D33A" viewBox="0 0 24 24">
                      <path d={svgPaths.p9b81900} stroke="#F6D33A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-['Poppins'] italic text-[#1e7872] text-lg md:text-xl text-center leading-relaxed max-w-3xl mx-auto">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="text-center space-y-1">
                  <p className="font-['Poppins'] text-[#232e43]">
                    {testimonials[currentIndex].name}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="bg-[#149496] text-white rounded-full size-12 flex items-center justify-center hover:bg-[#1e7872] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#149496] w-8 h-3'
                      : 'bg-[#149496]/30 w-3 h-3'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="bg-[#149496] text-white rounded-full size-12 flex items-center justify-center hover:bg-[#1e7872] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

const svgPaths = {
  p9b81900: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
};