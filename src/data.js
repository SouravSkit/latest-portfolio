// ---------------------------------------------------------------------------
// Portfolio content — sourced from Sourav Kumar's CV (Sk_CV.pdf).
//
// NOTE: The "Kushals" job bullets in the original PDF were encoded with a font
// that could not be extracted, so the bullets below are conservative placeholders
// based on the rest of the CV. Replace them with your actual responsibilities.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Sourav Kumar',
  firstName: 'Sourav',
  role: 'React Native & React.js Developer',
  roles: [
    'React Native Developer',
    'React.js Developer',
    'Full-Stack Developer',
    'Frontend Engineer',
    'Mobile App Specialist',
  ],
  location: 'Bengaluru, India',
  phone: '+91 89712 01410',
  email: 'souravhere1999@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sourav-kumar-7ba1181b0',
  github: 'https://github.com/SouravSkit',
  cv: '/cv/Sourav_Kumar_ATS.pdf',
  summary:
    'Driven and detail-oriented Software Engineer with 5+ years of experience in React Native and React.js development, specialising in building high-performing, user-centric mobile and web applications. Hands-on full-stack experience designing and developing scalable backend services with Node.js and Express.js — RESTful APIs, CRUD operations, authentication/authorisation, database schema design and query optimisation. Proficient in Redux, TypeScript and API integrations, with a track record of delivering production-ready apps, skilled in UI/UX optimisation, state management and cross-platform compatibility, and always looking to build impactful, innovative products.',
  stats: [
    { value: 5, suffix: '+', label: 'Years of Experience' },
    { value: 3, suffix: '', label: 'Companies' },
    { value: 8, suffix: '+', label: 'Projects Shipped' },
    { value: 4, suffix: '', label: 'Certifications' },
  ],
};

export const focusAreas = [
  {
    title: 'Mobile Development',
    text: 'Cross-platform apps for iOS & Android with React Native, animated and native-feeling experiences.',
  },
  {
    title: 'Web Development',
    text: 'Responsive, high-performance web applications with React.js, Node.js and modern tooling.',
  },
  {
    title: 'State Management',
    text: 'Predictable data flows with Redux Toolkit, Redux Saga and Context API at any scale.',
  },
  {
    title: 'API Integration',
    text: 'RESTful API design and development, backend services with Node.js/Express, third-party integrations (Stripe, Firebase, AWS) and robust error handling.',
  },
];

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Kushals Fashion & Jewellery',
    location: 'Bengaluru',
    period: 'Nov 2024 — Present',
    current: true,
    // Replace with your real bullets — the originals were unreadable in the PDF.
    bullets: [
      'Building and maintaining cross-platform mobile applications with React Native.',
      'Developing e-commerce features for the company\'s fashion and jewellery platform.',
      'Collaborating with product and design teams to ship production-ready features.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'FPLE Technology Private Limited',
    location: 'Bengaluru',
    period: 'Jan 2024 — Oct 2024',
    bullets: [
      'Designed and implemented scalable UI/UX solutions for cross-platform mobile applications using React Native and React.js.',
      'Optimised performance by reducing API response times by 30%, ensuring seamless experiences across iOS and Android.',
      'Developed and deployed complex components for production, increasing customer retention by 25% through user-focused designs.',
      'Integrated React Native frontends with RESTful backend services, implementing authentication/authorisation flows and CRUD data layers for production features.',
      'Enhanced app stability by identifying and resolving 50+ critical bugs using debugging tools like Postman and Swagger.',
      'Collaborated with cross-functional teams, ensuring on-time delivery of 3+ client-facing projects with zero post-launch escalations.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    company: 'Spurtree Technologies Private Limited',
    location: 'Bengaluru',
    period: 'Aug 2021 — Dec 2023',
    bullets: [
      'Built and maintained reusable React Native components, improving project delivery efficiency by 15%.',
      'Executed complex Redux logic for data-driven applications, streamlining workflows and reducing API call errors by 20%.',
      'Created responsive web and mobile app UIs, achieving 99% cross-browser compatibility across platforms.',
      'Spearheaded integration of third-party APIs and backend services, reducing manual intervention by 40%.',
      'Designed and developed scalable RESTful APIs using Node.js and Express.js, implementing CRUD operations, JWT authentication, and database schema design, improving backend data processing speed by 25%.',
    ],
  },
];

export const projects = [
  {
    title: 'E-Commerce Application',
    icon: 'cart',
    description:
      'Dynamic shopping experience with deep linking, Stripe payments and custom animations that lifted user experience by 30%. Cart and checkout built with Context API and Redux Saga.',
    tags: ['React Native', 'Redux Saga', 'Stripe', 'REST APIs'],
  },
  {
    title: 'Entertainment App',
    icon: 'play',
    description:
      'Registration and login flows with Firebase Crashlytics & Analytics for performance monitoring, powered by Redux Toolkit and smooth RESTful data flow.',
    tags: ['React Native', 'Redux Toolkit', 'Firebase', 'REST APIs'],
  },
  {
    title: 'Child Development App',
    icon: 'baby',
    description:
      'Complete navigation setup — drawer and bottom tabs — in TypeScript, plus personalised development programs via RESTful API integration that improved retention by 15%.',
    tags: ['React Native', 'TypeScript', 'Navigation', 'Firebase'],
  },
  {
    title: 'Maternal Health App',
    icon: 'heart',
    description:
      'Modular UI components and diet dashboards supporting 500+ users across conceiving, expecting and parenting stages, with AWS S3 & Lambda backend.',
    tags: ['React Native', 'AWS S3', 'AWS Lambda', 'REST APIs'],
  },
  {
    title: 'E-Commerce for Kids',
    icon: 'store',
    description:
      'Responsive marketplace for 200+ vendors and buyers, secured with JWT authentication and RESTful APIs for seamless product uploads and pricing.',
    tags: ['React.js', 'Node.js', 'JWT', 'HTML5 / CSS3'],
  },
  {
    title: 'Face Recognizer · Security Authentication',
    icon: 'face',
    description:
      'Python face recognition with OpenCV analysing 68 facial landmarks, enabling secure login with 95% authorisation accuracy.',
    tags: ['Python', 'OpenCV', 'Face Recognition'],
  },
  {
    title: 'Drowsiness Detector · Road Safety',
    icon: 'eye',
    description:
      'OpenCV-based detection system that plays media alerts when eyes remain closed for more than 5 seconds — reducing road mishaps by 15%.',
    tags: ['Python', 'OpenCV', 'Computer Vision'],
  },
  {
    title: 'Object Detection Using AI & ML',
    icon: 'target',
    description:
      'AI system using YOLOv5 to detect and classify 10+ object types with 90% precision, with a scalable Python architecture for real-time recognition.',
    tags: ['Python', 'YOLOv5', 'AI / ML'],
  },
];

export const skillGroups = [
  {
    category: 'Programming Languages',
    icon: 'code',
    skills: ['React Native', 'React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Node.js (Express)', 'Core Java'],
  },
  {
    category: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'Cassandra DB', 'Schema Design', 'Query Optimisation'],
  },
  {
    category: 'Development Expertise',
    icon: 'layers',
    skills: ['Redux Toolkit', 'Redux Saga', 'RESTful APIs', 'Express.js', 'JWT Authentication', 'API Testing (Postman, Swagger)', 'Firebase (Crashlytics, Analytics)', 'Bootstrap', 'VS Code'],
  },
  {
    category: 'Other Skills',
    icon: 'sparkles',
    skills: ['UI/UX Design', 'Stripe Integration', 'State Management', 'Animation (Lottie, Custom)', 'Navigation (Drawer, Bottom Tab, Side Bar)', 'AWS (Lambda, S3)', 'API Development'],
  },
  {
    category: 'Operating Systems',
    icon: 'monitor',
    skills: ['macOS', 'Windows', 'Linux'],
  },
  {
    category: 'Soft Skills',
    icon: 'users',
    skills: ['Problem-Solving', 'Team Collaboration', 'Time Management', 'Communication', 'Adaptability', 'Attention to Detail', 'Critical Thinking'],
  },
];

export const certifications = [
  {
    title: 'React Native Certification',
    issuer: 'Meta',
    platform: 'Coursera',
  },
  {
    title: 'React JS Certification',
    issuer: 'Scala',
    platform: 'Online',
  },
  {
    title: 'Web Development Certification',
    issuer: 'Eduonix Learning Solutions',
    platform: 'Online',
  },
  {
    title: 'Python for Data Science & Analysis',
    issuer: 'Udemy',
    platform: 'Udemy',
  },
];

export const achievements = [
  {
    metric: '-30%',
    title: 'Performance Optimization',
    text: 'Reduced API response times by 30%, enhancing user experience and overall app performance.',
  },
  {
    metric: '+15%',
    title: 'Efficiency Enhancement',
    text: 'Improved project delivery efficiency by 15% through reusable React Native components.',
  },
  {
    metric: '+25%',
    title: 'Backend Efficiency',
    text: 'Improved backend data processing speed by 25% with optimised Node.js and Express.js REST APIs.',
  },
  {
    metric: '+25%',
    title: 'Customer Retention Boost',
    text: 'Increased customer retention rates by 25% with user-focused, performance-driven designs.',
  },
];

export const education = {
  degree: 'Bachelor of Engineering — Computer Science',
  school: 'Sri Krishna Institute of Technology',
  location: 'Bengaluru',
  period: '2017 — 2021',
};

export const languages = ['English', 'Hindi'];

export const passions = ['Building Scalable Applications', 'Exploring Emerging Technologies'];
