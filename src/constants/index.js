export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [
    {
      title: 'Fullstack Chat Application',
      desc: 'A Chat application built using MERN-stack(Mongodb, Express, React.js and node.js). A very user-friendly application with modern features, helping users to have a complete experience of communication.',
      href: 'https://chat-app-3-y3qm.onrender.com/',
      texture: '/textures/project/chat.mp4',
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Mongo db',
          path: '/assets/mongodb.svg',
        },
        {
          id: 2,
          name: 'Express.js',
          path: 'assets/expressjs.svg',
        },
        {
          id: 3,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 4,
          name: 'Node js',
          path: '/assets/nodejs.svg',
        },
      ],
    },
    {
      title: 'MovieApp',
      desc: 'A complete react-app project, which helps users see a list of trending movies with reviews and ratings, making it easy for the user to narrow down the movie recommendations. The app also has a trending section, which shows the top-searched latest movies.',
      href: 'https://movieapp-silk-alpha.vercel.app/',
      texture: '/textures/project/movie.mp4',
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
      ],
    },
    {
      title: 'thrustMIT-subscale website',
      desc: 'Created a captivating space-themed website for the thrustMIT subscale. Crafted engaging sections such as homepage, about us, and team information section, to attract and inform visitors. Implemented interactive elements like mouse-effects to enhance user engagement.Ensured seamless navigation and intuitive user experience across different sections of the website.',
      href: 'https://subscale.vercel.app/',
      texture: '/textures/project/subscale.mp4',
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
      ],
    },
    {
      title: 'Apple clone Website',
      desc: "Developed an advanced clone of the iPhone 15 Pro official website utilizing React, Three.js, and GSAP. Created an interactive 3D model with smooth animations and responsive design. Integrated videos showcasing the phone’s features for a dynamic user experience. Optimized for performance and responsiveness across devices",
      href: 'https://apple-clone-chi-bice.vercel.app/',
      texture: '/textures/project/apple.mp4',
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Three.js',
          path: '/assets/three.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];