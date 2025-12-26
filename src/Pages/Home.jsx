import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
