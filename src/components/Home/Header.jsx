import { motion } from 'framer-motion';

const Header = () => (
  <motion.div
    className="flex items-center gap-1 mb-8"
    initial={{ x: -20 }}
    animate={{ x: 0 }}
    transition={{ delay: 0.2 }}
  >
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
      I'm Meet Soni
    </h1>
  </motion.div>
);

export default Header;
