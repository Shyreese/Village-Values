import svgPaths from "../imports/svg-n15349y8je";
import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useState } from "react";

export function Newsletter() {
  const { ref, isInView } = useInView();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section ref={ref} id="newsletter" className="relative bg-[#f5edda] py-16 md:py-20">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h3 className="font-['Poppins'] text-[#232e43] text-2xl md:text-[28px]">
            Join Our Village
          </h3>
          <p className="font-['Poppins'] text-[#1e7872] max-w-2xl mx-auto">
            Get childcare updates, parenting tips, and community news delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 font-['Poppins'] px-6 py-4 border-2 border-[#f5edda] rounded-full focus:border-[#149496] focus:outline-none bg-white transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#149496] text-white font-['Poppins'] uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#1e7872] transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p151c1700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p15e62a80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}