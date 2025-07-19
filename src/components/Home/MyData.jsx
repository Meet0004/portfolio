import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Tagline from './Tagline';
import Experience from './Experience';
import Philosophy from './Philosophy';
import CallToAction from './CallToAction';

const MyData = () => {
  return (
    <div className=' w-full max-w-4xl order-2 lg:order-1'>
      <motion.div
        className="  w-full mx-auto p-1 md:p-4 bg-gradient-to-br from-slate-950 to-slate-950"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-2 text-slate-300">
          <Header />
          <Tagline />
          <Experience />
          <Philosophy />
          <CallToAction />
        </div>
      </motion.div>
    </div>
  );
};

export default MyData;
