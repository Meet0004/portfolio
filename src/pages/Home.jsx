import React from 'react'
import CodeEditor from '../components/Home/CodeEditor';
import MyData from '../components/Home/MyData';
import '../styles/index.css'; // Ensure styles are imported
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <div id='logo' className=' px-4 md:px-10 h-fit py-6 md:py-11 flex flex-col lg:flex-row gap-5 items-center justify-center  bg-slate-950 text-white'>
      <MyData />
	  <CodeEditor />
    
    </div>
  )
}

export default Home