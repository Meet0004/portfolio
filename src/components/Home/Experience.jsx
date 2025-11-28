import { motion } from 'framer-motion';

const Experience = () => (
  <motion.div
    className="z-[1002] py-3 border-t border-slate-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
  >
    <p className="  text-base md:text-lg lg:text-xl leading-relaxed mb-3">
      Over <span className="text-teal-300 font-medium">2000+ hours</span> of
      development experience creating tools that solve real-world problems.
      I've built multiple web apps and desktop applications including real time
      Collaborative Code editor, management systems, encryption tools, typing
      speed tester apps.
    </p>
  </motion.div>
);

export default Experience;
