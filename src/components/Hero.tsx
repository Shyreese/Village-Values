import imgImageWithFallback4 from "figma:asset/940def1fbe82bc8a0f2a7104a8709bad4c1aa619.png";
import svgPaths from "../imports/svg-n15349y8je";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./useInView";
import { useState, useEffect } from "react";

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const carouselImages = [
    {
      src: imgImageWithFallback4,
      alt: "Children playing"
    },
    {
      src: "https://images.unsplash.com/photo-1597075958693-75173d1c837f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXljYXJlJTIwY2hpbGRyZW4lMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc2NDgwMTgxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Daycare children activities"
    },
    {
      src: "https://images.unsplash.com/photo-1626187429639-7a77bfad0523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2RkbGVyJTIwcGxheWluZyUyMHRveXN8ZW58MXx8fHwxNzY0NzYzNzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Toddler playing with toys"
    },
    {
      src: "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBraWRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY0ODAxODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Preschool kids learning"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section ref={ref} className="relative bg-[#f5edda] overflow-hidden pt-24 md:pt-32">
      {/* Decorative Elements */}
      <div className="absolute left-2 md:left-10 top-16 md:top-24 opacity-30">
        <svg className="w-24 h-24 md:w-40 md:h-40" fill="none" viewBox="0 0 172 172">
          <path d={svgPaths.p148f8400} fill="#149496" opacity="0.3" />
        </svg>
      </div>

      <div className="absolute right-4 md:right-20 top-32 md:top-40 opacity-30">
        <svg className="w-20 h-20 md:w-32 md:h-32" fill="none" viewBox="0 0 252 252">
          <path d={svgPaths.p2546c700} fill="#C49A3A" />
        </svg>
      </div>

      <div className="absolute left-4 md:left-20 bottom-20 opacity-30">
        <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" viewBox="0 0 209 209">
          <path d={svgPaths.p2a064180} fill="#E5795B" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="font-['Poppins'] text-[#232e43] text-4xl md:text-5xl lg:text-[56px] leading-tight">
              Where families grow together
            </h1>
            <p className="font-['Poppins'] text-[#1e7872] text-lg md:text-xl max-w-md">
              Licensed in-home childcare built on trust, learning, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                type="button"
                onClick={() => window.open('https://calendly.com/villagevalues-info/30min?month=2026-02', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#149496] text-white px-8 py-4 rounded-full font-['Poppins'] uppercase text-sm tracking-wider hover:bg-[#1e7872] transition-colors text-center cursor-pointer"
              >
                Book a Visit
              </motion.button>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#149496] border-2 border-[#149496] px-8 py-4 rounded-full font-['Poppins'] uppercase text-sm tracking-wider hover:bg-[#149496] hover:text-white transition-colors text-center"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentIndex}
                  src={carouselImages[currentIndex].src}
                  alt={carouselImages[currentIndex].alt}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom shapes */}
      <div className="absolute right-20 bottom-10 opacity-20 hidden md:block">
        <svg className="w-32 h-32" fill="none" viewBox="0 0 252 252">
          <path d={svgPaths.p350a9ef0} fill="#149496" opacity="0.3" />
        </svg>
      </div>
    </section>
  );
}