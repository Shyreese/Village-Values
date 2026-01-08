import svgPaths from "../imports/svg-n15349y8je";
import { motion } from "motion/react";
import { useInView } from "./useInView";

const socialPosts = [
  {
    image: "https://images.unsplash.com/photo-1650504149601-f9fdd445c187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXljYXJlJTIwY2hpbGRyZW4lMjBwYWludGluZ3xlbnwxfHx8fDE3NjYxNzgzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Creative play time with our toddler group! 🎨",
  },
  {
    image: "https://images.unsplash.com/photo-1544772711-57da9c7368fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBsZWFybmluZyUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzY2MTc4MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Learning letters through fun activities 📚",
  },
  {
    image: "https://images.unsplash.com/photo-1647627611823-d08fa901678e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBvdXRkb29yc3xlbnwxfHx8fDE3NjYwNjgyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Sweet moments with our littlest villagers 💕",
  },
  {
    image: "https://images.unsplash.com/flagged/photo-1570319725055-d163350105a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXljYXJlJTIwc3RvcnklMjB0aW1lfGVufDF8fHx8MTc2NjE3ODMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Family fun day celebration! 🎉",
  },
];

export function SocialFeed() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="relative bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="flex items-center justify-center gap-5">
            <div className="bg-[#E5795B] rounded-lg p-2">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p1eb47e80} stroke="#E5795B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                <path d={svgPaths.p189e3480} stroke="#E5795B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                <path d="M23.3333 8.66667H23.3467" stroke="#E5795B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
              </svg>
            </div>
            <h2 className="font-['Poppins'] text-[#232e43] text-2xl md:text-[28px]">
              Follow Our Journey
            </h2>
          </div>
          <p className="font-['Poppins'] text-[#1e7872]">
            See daily moments and updates from our Village Values family
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(35,46,67,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-['Poppins'] text-white text-sm leading-snug">
                  {post.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/villagevalues_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-['Poppins'] text-[#149496] hover:text-[#1e7872] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p4b98700} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p2b0d6500} stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M14.5833 5.41667H14.5917" stroke="#149496" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            @Villagevalues_
          </a>
        </motion.div>
      </div>
    </section>
  );
}