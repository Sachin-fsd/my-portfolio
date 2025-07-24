
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,

  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  expressjs,
  shadui
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Python",
    icon: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Shad Ui",
    icon: shadui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: expressjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  }

];

const experiences = [
  {
    title: "B.Tech CSE (Full Stack Development)",
    company_name: "KR Mangalam University",
    icon: "https://www.krmangalam.edu.in/wp-content/uploads/2023/10/cropped-image-54-270x270.webp",
    iconBg: "#004080",
    date: "Aug 2023 - present",
    points: [
      "Specialized in Full Stack Development with hands-on projects.",
      "Learned core computer science fundamentals and modern web technologies.",
      "Collaborated on team-based assignments and hackathons.",
      "Developed scalable web applications using React, Node.js, and MongoDB.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Edunet Foundation",
    icon: "https://media.licdn.com/dms/image/v2/C4E0BAQEA0V9yzn_dPg/company-logo_200_200/company-logo_200_200/0/1646199475973/edunetfoundation_logo?e=2147483647&v=beta&t=MwYNZQ_L6QvU9npy6rBiZvU7ZrsqQmcZ2kuRxam10WM",
    iconBg: "#2e7d32",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Developed interactive web modules for educational platforms.",
      "Collaborated with mentors to enhance user experience and accessibility.",
      "Implemented responsive design and optimized site performance.",
      "Participated in team meetings and contributed to project planning.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Labmentix",
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQE1z-sCXQ3Ikg/company-logo_200_200/company-logo_200_200/0/1736056454221/labmentix_logo?e=2147483647&v=beta&t=R5hm__7G244RwMFV74Wck2C7krKsAfDSP3XfYRAt2TM", // Replace with actual logo if available
    iconBg: "#283593",
    date: "Jun 2025 - Dec 2025",
    points: [
      "Worked on full-stack web solutions for laboratory management.",
      "Integrated third-party APIs and managed backend services.",
      "Improved UI components for better usability and efficiency.",
      "Engaged in agile development and regular code reviews.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sachin proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sachin does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Sachin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Orbit - Task Management Tool",
    description:
      "Engineered a real-time collaborative platform using the MERN stack and Pusher for live updates.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "Pusher",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: "https://github.com/Sachin-fsd/all-images/blob/main/orbit-home-page.png?raw=true",
    source_code_link: "https://github.com/Sachin-fsd/Orbit-Project-Management",
    site_link: "https://orbit-agile.vercel.app/"
  },
  {
    name: "Universe - Full Stack Unified University Ecosystem",
    description:
      "Built a secure user authentication module with Express.js for streamlined, role-based access control.",
    tags: [
      {
        name: "HTML/CSS/HBS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "white-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: "https://github.com/Sachin-fsd/all-images/blob/main/conference-home.png?raw=true",
    source_code_link: "https://github.com/sachin-fsd/conference",
    site_link: "https://conference-pkoe.onrender.com/"
  },
  {
    name: "Musica - Modern Music Streaming App",
    description:
      "Developed and launched a full-stack music app, acquiring over 100+ active users.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "white-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "SupabaseDB",
        color: "pink-text-gradient",
      },
    ],
    image: "https://github.com/Sachin-fsd/all-images/blob/main/musica-home-page.png?raw=true",
    source_code_link: "https://github.com/Sachin-fsd/musica",
    site_link: "https://musica-steel.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
