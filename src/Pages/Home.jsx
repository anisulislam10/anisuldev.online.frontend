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

      <a
        href="https://wa.me/923439275550?text=Hi%20Anisul%21%20%F0%9F%91%8B%20I%20found%20you%20through%20anisuldev.online%20and%20would%20love%20to%20connect.%20I%20have%20an%20idea%20or%20project%20I%27d%20like%20to%20discuss%20with%20you.%20Are%20you%20available%20for%20a%20quick%20chat%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with Anisul on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="whatsapp-wave whatsapp-wave-one" />
        <span className="whatsapp-wave whatsapp-wave-two" />
        <svg className="whatsapp-brand-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.44 14.9L2 22l5.23-1.54A9.9 9.9 0 1 0 12.04 2Zm0 17.98a8.08 8.08 0 0 1-4.12-1.13l-.3-.18-3.1.92.94-3.02-.2-.31a8.12 8.12 0 1 1 6.78 3.72Zm4.45-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21a7.33 7.33 0 0 1-1.35-1.68c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.55-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>
    </div>
  );
};

export default Home;
