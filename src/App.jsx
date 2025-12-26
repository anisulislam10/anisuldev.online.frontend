// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/AllBlogs';
import BlogDetailsPage from './Pages/BlogsDetails'; // Make sure this import is correct
import Navbar from './components/Navbar';
import UnderConstructionModal from './components/nderConstructionModal';
import NotFound from './components/NotFound';
import { About } from './Pages/About';
function App() {
  return (
    <><BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogsDetails" element={<BlogDetailsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<UnderConstructionModal />} />
        <Route path="/docs" element={<UnderConstructionModal />} />
         <Route path="/contact" element={<UnderConstructionModal />} />
        <Route path="*" element={<NotFound/>} /> 
        <Route path="/blogs" element={<BlogPage />} />
        {/* Add this route for individual blog posts */}
        <Route path="/blog/:title" element={<BlogDetailsPage />} />
        {/* Keep this if you still need it */}
        
      </Routes>
    </BrowserRouter></>
    
  );
}

export default App;