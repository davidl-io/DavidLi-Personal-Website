import type { NextPage } from 'next';
import Hero from './components/about/hero';
import Interest from './components/about/interest';
import Timeline from './components/about/timeline';
import Contact from './components/about/contact';

const About: NextPage = () => {
  return (
    <div className="flex h-full">
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-auto p-4 bg-gray-50">
        
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center">
          <Hero />
        </section>

        {/* Interest Section */}
        <section className="flex-grow flex items-center justify-center">
          <Interest />
        </section>

        {/* Timeline Section */}
        <section className="flex-grow flex items-center justify-center">
          <Timeline />
        </section>

        {/* Contact Section */}
        <section className="flex-grow flex items-center justify-center">
          <Contact />
        </section>

      </main>
    </div>
  );
}

export default About;
