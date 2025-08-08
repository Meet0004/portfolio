import { motion } from 'framer-motion';

const CallToAction = () => (
  <motion.div
    className="pt-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    <p className="text-lg md:text-xl font-medium text-white mb-4">
      If you're looking for someone who:
    </p>
    <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
      <span className="px-3 md:px-4 py-2 bg-slate-800 rounded-full text-teal-300 text-sm md:text-base">
        Codes like a founder
      </span>
      <span className="px-3 md:px-4 py-2 bg-slate-800 rounded-full text-emerald-300 text-sm md:text-base">
        Thinks like a team player
      </span>
      <span className="px-3 md:px-4 py-2 bg-slate-800 rounded-full text-cyan-300 text-sm md:text-base">
        Builds with purpose
      </span>
    </div>
  </motion.div>
);

export default CallToAction;
