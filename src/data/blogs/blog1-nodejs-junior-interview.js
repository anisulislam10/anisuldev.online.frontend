const blog1 = {
  id: 1,
  slug: "nodejs-expressjs-junior-interview-questions",
  title: "Node.js & Express.js Interview Questions for Junior Developers",
  description: "Essential Node.js and Express.js interview questions covering fundamentals, middleware, routing, and basic concepts every junior developer should know.",
  excerpt: "Master the fundamentals of Node.js and Express.js with these essential interview questions for junior backend developers.",
  author: {
    name: "Anisul Islam",
    role: "Software Engineer",
    bio: "I craft beautiful, performant web applications using modern technologies. Passionate about React.js, Node.js, Next.js, Express.js, MongoDB and the entire JavaScript ecosystem. Turning complex problems into simple, beautiful designs.",
    avatar: "/favico.png"
  },
  date: "Mar 15, 2025",
  updatedDate: "Mar 20, 2025",
  readTime: "12 min read",
  category: "Fundamentals",
  difficulty: "Beginner",
  icon: "Code",
  featured: true,
  image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  tags: ["Node.js", "Express.js", "Interview", "Junior", "Fundamentals", "JavaScript", "Backend"],
  
  // Main content
  content: {
    introduction: `As a junior backend developer, mastering Node.js and Express.js is crucial for your career growth. 
    This comprehensive guide covers essential interview questions that will help you stand out in technical interviews. 
    We'll cover everything from basic concepts to practical coding challenges.`,
    
    sections: [
      {
        id: "core-concepts",
        title: "1. Core Node.js Concepts",
        content: "Understanding these fundamental concepts is key to acing your Node.js interview:",
        points: [
          "Explain Node.js architecture and how it differs from traditional server-side technologies like Apache",
          "What is the Event Loop and how does it work? Describe the phases",
          "Difference between blocking and non-blocking I/O operations",
          "How does Node.js handle concurrent requests?",
          "What are Streams in Node.js and their types?",
          "Explain Buffer class and its purpose",
          "Difference between process.nextTick() and setImmediate()",
          "What is the purpose of the cluster module?"
        ],
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "express-fundamentals",
        title: "2. Express.js Fundamentals",
        content: "Express.js questions you should be prepared for:",
        points: [
          "What is middleware and how do you create custom middleware?",
          "Difference between app.use() and app.get()/app.post()",
          "How to handle different types of route parameters?",
          "What are route handlers and how do they work?",
          "Explain error handling middleware in Express",
          "How to serve static files in Express?",
          "What is body-parser and why is it needed?",
          "How to implement CORS in Express application?"
        ],
        codeExample: `// Basic Express Server Setup
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
      },
      {
        id: "practical-coding",
        title: "3. Practical Coding Questions",
        content: "Be prepared to write code for these common scenarios:",
        points: [
          "Create a simple REST API with CRUD operations",
          "Implement authentication middleware",
          "Write error handling middleware",
          "Create a file upload endpoint",
          "Implement rate limiting",
          "Write a custom logger middleware"
        ]
      },
      {
        id: "tips",
        title: "4. Tips for Junior Developers",
        content: "Additional advice for your interview preparation:",
        points: [
          "Understand the basics thoroughly before moving to advanced topics",
          "Practice coding questions on platforms like LeetCode and HackerRank",
          "Build small projects to apply your knowledge",
          "Be honest about what you don't know",
          "Ask questions about the company's tech stack and challenges"
        ]
      }
    ],
    
    conclusion: `Remember, interview success comes from consistent practice and understanding concepts deeply. 
    Start with these basics, build projects, and gradually move to more complex topics. 
    Good luck with your interviews!`,
    
    resources: [
      {
        title: "Official Node.js Documentation",
        url: "https://nodejs.org/docs/",
        type: "documentation"
      },
      {
        title: "Express.js Guide",
        url: "https://expressjs.com/",
        type: "documentation"
      },
      {
        title: "Node.js Design Patterns",
        url: "https://github.com/nodejs/node",
        type: "github"
      },
      {
        title: "JavaScript.info - Modern JavaScript Tutorial",
        url: "https://javascript.info/",
        type: "tutorial"
      }
    ],
    
    faqs: [
      {
        question: "How much Node.js knowledge is required for a junior position?",
        answer: "For a junior position, focus on understanding the event loop, asynchronous programming, basic Express.js routing, and REST API concepts."
      },
      {
        question: "Should I learn both SQL and NoSQL databases?",
        answer: "Yes, understand the basics of both. Most interviews will ask about database concepts and basic queries."
      }
    ],
    
    metadata: {
      views: 1245,
      likes: 89,
      shares: 45,
      comments: 23
    }
  }
};

export default blog1;