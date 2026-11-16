import React from 'react';
import CodeEditor from '../components/Home/CodeEditor';
import MyData from '../components/Home/MyData';
import '../styles/index.css';

const Home = () => {
  return (
    <section
      id='logo'
      className='home-hero mx-auto w-full max-w-[1120px] px-4 md:px-0 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start'
    >
      <MyData />
      <CodeEditor />
    </section>
  );
};

export default Home;