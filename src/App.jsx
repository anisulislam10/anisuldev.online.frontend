// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/AllBlogs';
import BlogDetailsPage from './Pages/BlogsDetails'; // Make sure this import is correct
import Navbar from './components/Navbar';
import UnderConstructionModal from './components/nderConstructionModal';
import NotFound from './components/NotFound';
import About  from './Pages/About';
import ContactPage from './Pages/Contact';
import Footer from './components/Footer';
import AllProjects from './Pages/AllProjects';
import { Tools } from './Pages/Tools';
import ReactNativePage from './Pages/ReactNative';
import WebApplicationsPage from './Pages/WebApplications';
import BackendDatabasesPage from './Pages/BackendDevelopment';
function App() {
  return (
    <><BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogsDetails" element={<BlogDetailsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/tools" element={<Tools/>} />
         <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<NotFound/>} /> 
        <Route path="/blogs" element={<BlogPage />} />
        {/* Add this route for individual blog posts */}
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        {/* Keep this if you still need it */}

        <Route path="/services/react-native-development" element={<ReactNativePage />} />
        <Route path="/services/web-app-development" element={<WebApplicationsPage />} />
        <Route path="/services/backend-development" element={<BackendDatabasesPage />} />


      </Routes>
              <Footer />

    </BrowserRouter></>
    
  );
}

export default App;