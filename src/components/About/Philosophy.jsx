import React from 'react';

const Philosophy = () => (
  <div className="text-center">
    <div className="group relative bg-gradient-to-r from-[#020618] to-[#050235] rounded-3xl p-12 border border-purple-500/30 overflow-hidden hover:border-purple-500/50 transition-all duration-300">

      <h2 className="p-1 text-4xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
        My Theory
      </h2>

      <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
        The best doesn't just work, It tells a story, solves meaningful problems, and creates lasting impact.
        Ultimate goal is to build products that exceed the expectations and make a the developer's life better. <br />
        <b>Born to Contribute.</b>
      </p>

      {/* Sliding Bar Inside */}
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#00c496] group-hover:w-full transition-all duration-300 rounded-full" />
    </div>
  </div>
);

export default Philosophy;
