import { motion } from 'framer-motion';

const Tagline = () => (
  <motion.p
    className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
  >
    <span className="text-white font-semibold">Full Stack Developer</span> &{' '}
    <span className="text-emerald-300">Hardcoder</span>
  </motion.p>
);

export default Tagline;
