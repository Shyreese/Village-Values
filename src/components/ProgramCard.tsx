import svgPaths from "../imports/svg-n15349y8je";
import { motion } from "motion/react";

interface ProgramCardProps {
  title: string;
  ageRange: string;
  description: string;
  image: string;
  iconColor: string;
  id: string;
  index: number;
  isInView: boolean;
}

export function ProgramCard({ title, ageRange, description, image, iconColor, index, isInView, id }: ProgramCardProps) {
  const getIcon = (color: string) => {
    if (color === "#e5795b") {
      return (
        <svg className="size-7" fill="none" viewBox="0 0 28 28">
          <path d={svgPaths.p31469900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M17.5 14H17.5117" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3a37f200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M10.5 14H10.5117" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      );
    } else if (color === "#f6d33a") {
      return (
        <svg className="size-7" fill="none" viewBox="0 0 28 28">
          <path d={svgPaths.p1fa66600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p24d80860} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M10.5 10.5H10.5117" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M17.5 10.5H17.5117" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      );
    } else if (color === "#149496") {
      return (
        <svg className="size-7" fill="none" viewBox="0 0 28 28">
          <path d={svgPaths.p1667d400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pcdf2f80} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p7360100} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p32c3ad40} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p39f22100} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      );
    } else {
      return (
        <svg className="size-7" fill="none" viewBox="0 0 28 28">
          <path d="M14 7V14L18.6667 16.3333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1fa66600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      );
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-[#f5edda] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={() => window.location.hash = `#programs/${id}`}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Icon Badge */}
        <div
          className="absolute top-4 right-4 size-14 rounded-full shadow-lg flex items-center justify-center"
          style={{ backgroundColor: iconColor }}
        >
          {getIcon(iconColor)}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-['Poppins'] text-[#232e43] text-2xl md:text-[28px]">
            {title}
          </h3>
          <span className="bg-white font-['Poppins'] text-[#1e7872] text-sm px-5 py-1 rounded-full">
            {ageRange}
          </span>
        </div>
        <p className="font-['Poppins'] text-[#1e7872] leading-relaxed">
          {description}
        </p>
        <div className="inline-block font-['Poppins'] text-[#149496] group-hover:text-[#1e7872] transition-colors pt-2">
          Learn More →
        </div>
      </div>
    </motion.div>
  );
}