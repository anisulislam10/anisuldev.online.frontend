import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div style={{ background: '#050508', minHeight: '100vh' }}>
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
