import svgPaths from "../imports/svg-n15349y8je";
import svgPathsNew from "../imports/svg-keqvt1t3dn";
import svgPathsMoon from "../imports/svg-oy6vrragej";
import svgPathsHouse from "../imports/svg-5etd43a2t9";
import svgPathsTree from "../imports/svg-84pa6cpod5";
import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useState } from "react";

export function BookingForm() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} id="booking" className="relative bg-gradient-to-b from-[#149496] to-[#1e7872] py-16 md:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-20 bottom-20 opacity-40">
        <svg className="w-40 h-40 md:w-64 md:h-64" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
          <g opacity="0.5">
            <path d={svgPathsNew.p1a9f8d00} fill="#F5EDDA" />
            <path d={svgPathsNew.p68bcc80} fill="#F5EDDA" />
            <path d={svgPathsNew.pe5f9d00} fill="#F5EDDA" />
          </g>
        </svg>
      </div>

      <div className="absolute right-20 bottom-20 opacity-40">
        <svg className="w-40 h-40 md:w-64 md:h-64" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
          <g opacity="0.5">
            <path d={svgPathsHouse.p14f1c380} fill="#F5EDDA" />
            <path d={svgPathsHouse.p244d6640} fill="#F5EDDA" />
            <path d={svgPathsHouse.p2f98fdf0} fill="#F5EDDA" />
            <path d={svgPathsHouse.p327f8e00} fill="#F5EDDA" />
          </g>
        </svg>
        <svg className="w-40 h-40 md:w-64 md:h-64 absolute top-0 -left-48" fill="none" preserveAspectRatio="none" viewBox="0 0 290 343">
          <g opacity="0.5">
            <path d={svgPathsTree.p115cb900} fill="#F5EDDA" />
            <path d={svgPathsTree.p1285ce00} fill="#F5EDDA" />
            <path d={svgPathsTree.p173f9e80} fill="#F5EDDA" />
            <path d={svgPathsTree.p26a84a00} fill="#F5EDDA" />
            <path d={svgPathsTree.p3dba2d00} fill="#F5EDDA" />
          </g>
        </svg>
      </div>

      <div className="absolute right-32 top-32 opacity-40">
        <svg className="w-32 h-32 md:w-52 md:h-52" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
          <g opacity="0.5">
            <path d={svgPathsMoon.p26d94000} fill="#F5EDDA" />
          </g>
        </svg>
      </div>

      <div className="absolute left-32 top-32 opacity-20">
        <svg className="w-32 h-32 md:w-48 md:h-48" fill="none" viewBox="0 0 202 202">
          <path d={svgPaths.p2ae84300} fill="#F5EDDA" />
        </svg>
      </div>

      <div className="relative max-w-[900px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 text-white space-y-4"
        >
          <h2 className="font-['Poppins'] text-3xl md:text-[40px] leading-tight">
            Ready to Join Our Village?
          </h2>
          <p className="font-['Poppins'] text-lg md:text-xl text-white/90">
            We make enrollment and visit scheduling easy with Brightwheel—our secure, parent-friendly portal!
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
        >
          {/* Icon */}
          <div className="w-20 h-20 bg-[rgba(20,148,150,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
              <path d="M13.3333 3.33333V10" stroke="#149496" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.6667 3.33333V10" stroke="#149496" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p1da67b80} stroke="#149496" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 16.6667H35" stroke="#149496" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Content */}
          <h3 className="font-['Poppins'] text-[#232e43] text-2xl md:text-3xl mb-4">
            Start Your Enrollment on Brightwheel
          </h3>
          
          <p className="font-['Poppins'] text-[#1e7872] text-base md:text-lg mb-6 max-w-xl mx-auto">
            Brightwheel makes it simple to share your family&apos;s information, schedule a visit, and get started with Village Values. The whole process takes just a few minutes!
          </p>

          {/* Benefits List */}
          <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#149496] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l3 3 7-7" />
                </svg>
              </div>
              <p className="font-['Poppins'] text-[#232e43]">Quick and easy—takes just a few minutes</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#149496] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l3 3 7-7" />
                </svg>
              </div>
              <p className="font-['Poppins'] text-[#232e43]">Secure and private for your peace of mind</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#149496] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l3 3 7-7" />
                </svg>
              </div>
              <p className="font-['Poppins'] text-[#232e43]">We&apos;ll reach out within 24-48 hours</p>
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://schools.mybrightwheel.com/sign-in?redirect_path=forms/a3312612-97f2-456c-9444-121c9a92c1a9/self-service"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-[#e5795b] text-white font-['Poppins'] uppercase tracking-wider px-12 py-4 rounded-2xl hover:bg-[#d66d4f] transition-colors shadow-lg"
          >
            Go to Brightwheel
          </motion.a>

          {/* Bottom Note */}
          <p className="font-['Poppins'] text-[#1e7872] text-sm mt-6 italic">
            New to Brightwheel? Don&apos;t worry—it&apos;s designed for parents like you!
          </p>
        </motion.div>
      </div>
    </section>
  );
}