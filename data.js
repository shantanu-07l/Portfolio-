const PORTFOLIO_DATA = {
  personal: {
    name: 'Shantanu Sapkal',
    role: 'Full Stack Developer',
    eyebrow: "Hello, I'm",
    bio: 'Passionate about building scalable applications with the MERN stack. Strong foundation in Java, DSA, and clean code principles.',
    email: 'shantanusapkal07@gmail.com',
    phone: '+91-8080554708',
    linkedin: 'https://linkedin.com/in/shantanusapkal',
    github: 'https://github.com/shantanu-07l',
    leetcode: 'https://leetcode.com/u/Shantanu00713'
  },
  about: {
    paragraphs: [
      { text: "I'm a motivated Information Technology undergraduate with strong fundamentals in", highlights: ['Java', 'Data Structures & Algorithms'] },
      { text: "I have hands-on experience in full-stack development using the", highlights: ['MERN stack'], rest: ". I'm passionate about building scalable applications, writing clean backend logic, and continuously improving my problem-solving skills." },
      { text: "Currently seeking a Software Engineering / Full Stack Intern role where I can contribute to real-world projects and grow as a developer.", highlights: [] }
    ],
    education: {
      degree: 'Bachelor of Engineering in Information Technology',
      institute: "PCET's Nutan Maharashtra Institute of Engineering and Technology",
      location: 'Pune, India',
      duration: 'Aug 2023 – May 2027',
      membership: { tag: 'ISTE Member', detail: 'Indian Society for Technical Education (2025–2027)' }
    },
    stats: [
      { value: '8.81', label: 'CGPA' },
      { value: '2027', label: 'Graduation' }
    ]
  },
  skills: [
    { category: 'Programming Languages', icon: 'code', items: ['Java', 'JavaScript', 'SQL'] },
    { category: 'Frontend', icon: 'layout', items: ['React.js', 'HTML', 'CSS'] },
    { category: 'Backend', icon: 'server', items: ['Node.js', 'Express.js', 'MongoDB'] },
    { category: 'Core CS', icon: 'cpu', items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Computer Networks'] },
    { category: 'Tools', icon: 'wrench', items: ['Git', 'GitHub', 'VS Code'] }
  ],
  certifications: [
    { title: 'Data Structures and Algorithms using Java', issuer: 'Apna College' },
    { title: 'Full Stack Web Development', issuer: 'Apna College' },
    { title: 'Learn JavaScript', issuer: 'IBM SkillsBuild' },
    { title: 'Artificial Intelligence Fundamentals', issuer: 'IBM SkillsBuild' },
    { title: 'AWS Solutions Architecture Job Simulation', issuer: 'Amazon Web Services' },
    { title: 'Software Engineering Job Simulation', issuer: 'Accenture Nordics' }
  ],
  projects: [
    {
      title: 'Bodhi AI',
      icon: 'brain',
      github: 'https://github.com/shantanu-07l/bodhi-ai',
      live: 'https://bodhi-ai-eight.vercel.app',
      date: 'Mar 2026',
      description: 'Full-stack AI-powered conversational platform built with the MERN stack, featuring real-time AI conversations and voice interactions.',
      tech: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OpenAI API', 'Sarvam AI'],
      highlights: [
        'JWT authentication with Access Token + HttpOnly Refresh Tokens, bcrypt hashing, protected routes',
        'Integrated OpenAI API for real-time conversations and Sarvam Speech-to-Text API for voice interactions',
        'Secured APIs with authorization middleware, Express Validator, rate limiting, and error handling',
        'RESTful APIs (Express.js, MongoDB, MVC architecture) for auth and chat-thread management',
        'Responsive React UI with chat history, Markdown rendering, syntax highlighting'
      ]
    },
    {
      title: 'NivasZone',
      icon: 'home',
      github: 'https://github.com/shantanu-07l/nivaszone',
      live: 'https://nivaszone.onrender.com',
      date: 'Dec 2025',
      description: 'Full-stack Airbnb-style property listing and booking application with interactive maps and secure payments.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Mapbox API', 'Cloudinary', 'Passport.js'],
      highlights: [
        'Session-based auth via Passport.js with OTP email verification (Brevo)',
        'Mapbox API integration for interactive, location-based listings',
        'Booking, payment, review, and profile modules',
        'RESTful APIs (MVC architecture) for users, listings, bookings, reviews, payments',
        'Cloudinary + Multer for image uploads with authorization middleware'
      ]
    },
    {
      title: 'Personal Portfolio Website',
      icon: 'layout',
      github: 'https://github.com/shantanu-07l/Portfolio-',
      live: 'https://shantanuportfolio-six.vercel.app',
      date: 'Jul 2026',
      description: 'A sleek, code-themed personal developer portfolio built to showcase project work, skills, and experience with rich micro-animations.',
      tech: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'data.js'],
      highlights: [
        'Built a pixel-perfect responsive single-page layout matching custom visual design specifications',
        'Engineered a completely data-driven structure via global configurations for effortless content updates',
        'Implemented smooth scrolling, scroll-reveal transitions, and dynamic active navigation tab highlighting',
        'Optimized for high performance, accessibility, SEO metadata, and fluid cross-device navigation'
      ]
    }
  ],
  experience: [
    {
      role: 'MERN Stack Developer Intern',
      company: 'Codec Technologies Pvt. Ltd.',
      duration: 'Dec 2025 – Jan 2026',
      badge: 'AICTE ICAC Approved',
      responsibilities: [
        'Worked on full-stack web development using MongoDB, Express.js, React.js, and Node.js',
        'Developed RESTful APIs and integrated them with frontend components',
        'Implemented user authentication and authorization using JWT',
        'Gained hands-on experience in backend logic, database design, and debugging',
        'Collaborated in an internship environment following real-world development practices'
      ]
    }
  ]
};
