import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="home-page">
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
