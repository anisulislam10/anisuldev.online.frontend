import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Deployment from './components/Deployment';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services/>
        <Projects/>
        <Blogs/>
        <Contact/>
        <Footer/>
        {/* <Deployment/> */}
        {/* Other sections will be added here */}
      </main>
    </div>
  );
}

export default App;