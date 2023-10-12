import type { NextPage } from 'next';
import Navbar from './components/navbar';
import Section_1 from './components/about/section_1';
import Section_2 from './components/about/section_2';

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 gap-4 p-4 pr-64 max-w-full">
        <div className="h-screen flex items-center justify-center overflow-y-scroll">
          <Section_1 />
        </div>
        <div className="h-screen overflow-y-scroll">
          <Section_2 />
        </div>
      </div>
    </>
  )
}

export default About;
