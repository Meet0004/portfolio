import { motion } from 'framer-motion';

const Philosophy = () => (
  <motion.div
    className="w-fit p-5 bg-slate-800/50 rounded-xl border border-slate-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
  >
    <p className="text-base md:text-lg italic text-slate-200 mb-3">
      I don't just code. I ship fast, iterate smarter, and practice
      deliberately.
    </p>
    <p className="text-slate-400">
      Focused on delivering value, not just features.
      <br /> I can code 4+ hours a day.
    </p>
  </motion.div>
);

export default Philosophy;
