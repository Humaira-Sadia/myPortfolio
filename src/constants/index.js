import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  sumz,
  sudoku,
  codeSoft,
  sparks,
  ardent,
  Quiz,
  resume,
  netflix,
  zudio,
  feastfi,
} from "../assets";

import news from "../assets/news.png";

import { ImLinkedin2, ImFacebook, ImGithub, ImYoutube } from "react-icons/im";

import { TbMailFilled } from "react-icons/tb";

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
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Mern Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const socialLinks = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/humaira786/",
    icon: ImLinkedin2,
    color: "#1da1f2",
  },
  {
    id: 2,
    link: "https://github.com/Humaira-Sadia",
    icon: ImGithub,
    color: "#007C00",
  },
  {
    id: 3,
    link: "https://www.youtube.com/@code_encoded",
    icon: ImYoutube,
    color: "#ff0000",
  },
  {
    id: 4,
    link: "#",
    icon: ImFacebook,
    color: "#1877f2",
  },

  {
    id: 5,
    link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlKFrjfLfcfRDVXpcGpZQvZDXkRPxJWccXDpSbNwkPFxmVLnzWPvXGTdcBtFhVkVcHvCrg",
    icon: TbMailFilled,
    color: "#c70000",
  },
];

const experiences = [
  {
    title: "Hybrid Flutter Application Developer",
    company_name: "Ardent Computech pvt. ltd",
    icon: ardent,
    iconBg: "#E6DEDD",
    date: "Jul-2024 - Aug-2024",
    points: [
      "User authentication with secure login and sign-up processes.",
      "Integrated payment gateway for smooth transactions.",
      "Flutter, Firebase, Tailwind CSS, Dart.",
    ],
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    github: "https://github.com/Humaira-Sadia/Ardent_Humaira_Sadia",
  },
  {
    title: "Android App Developement Intern",
    company_name: "CodSoft",
    icon: codeSoft,
    iconBg: "#E6DEDD",
    date: "Jul-2023 - Aug-2023",
    points: [
      "Used a weather data API (e.g., OpenWeatherMap or Weather API) to fetch weather information.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Integrated with a service like Firebase Cloud Messaging (FCM).",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "Firebase Cloud Messaging (FCM)",
        color: "pink-text-gradient",
      },
    ],
    github: "https://github.com/Humaira-Sadia/CODSOFT-Currency-Exchange-App",
  },
  {
    title: "Web Developement and Design Intern",
    company_name: "Sparks Foundation",
    icon: sparks,
    iconBg: "#E6DEDD",
    date: "Nov-2022 - Dec-2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Managed and optimised dataBase faciliated Payment Gateway Integration.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Razorpay",
        color: "green-text-gradient",
      },
      {
        name: "Payment Integration",
        color: "pink-text-gradient",
      },
    ],
    github: "https://github.com/Humaira-Sadia/Payment_Gateway",
  },
];

const projects = [
  {
    name: "FeastFi",
    description:
      "FeastFi is a food delivery app built with Flutter and Firebase, offering a seamless, intuitive, and delightful ordering experience.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: feastfi,
    source_code_link: "https://github.com/Humaira-Sadia/Ardent_Humaira_Sadia",
    liveDemo: "https://github.com/Humaira-Sadia/Ardent_Humaira_Sadia",
  },
  {
    name: "Zudio_Reimagined",
    description:
      "Create a stunning Zudio frontend replica to master React and Tailwind CSS, exploring eCommerce and seamless UX.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: zudio,
    source_code_link:
      "https://github.com/Humaira-Sadia/API-Alchemists-Reimagine-Round1",
    liveDemo: "https://api-alchemists-reimagine-round1.vercel.app/",
  },
  {
    name: "Netflix_Reimagined",
    description:
      "Master React and Tailwind CSS by building a stunning Netflix frontend replica for seamless UX.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link:
      "https://github.com/Humaira-Sadia/API-Alchemists-Reimagine-Round2",
    liveDemo: "https://api-alchemists-reimagine-round2.vercel.app/",
  },
  {
    name: "Sumz",
    description:
      "Sumz summarizes articles from URLs into concise, informative three-paragraph summaries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    source_code_link: "https://github.com/Humaira-Sadia/Summarizer.git",
    liveDemo: "https://humaira-sadia.github.io/Summarizer/",
  },
  {
    name: "NewsApp",
    description:
      "Stay updated with the latest daily news across various categories, including technology, sports, entertainment, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NEWSAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/Humaira-Sadia/NewsApp",
    liveDemo: "https://news-app-indol-sigma.vercel.app/",
  },
  {
    name: "Sudoku",
    description:
      "Interactive Sudoku game site for fun, challenge, and brain exercise.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: sudoku,
    source_code_link: "https://github.com/Humaira-Sadia/Sudoku-Game..git",
    liveDemo: "https://humaira-sadia.github.io/Sudoku-Game./",
  },
  {
    name: "ResuBuild",
    description:
      "Online platform to create and format professional resumes effortlessly.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: resume,
    source_code_link: "https://github.com/Humaira-Sadia/Resume-Builder.git",
    liveDemo: "https://humaira-sadia.github.io/Resume-Builder/",
  },
  {
    name: "MindMaze",
    description:
      "Android app: Quiz app developed in Android Studio using Java for interactive learning.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Android Studio",
        color: "pink-text-gradient",
      },
    ],
    image: Quiz,
    source_code_link: "https://github.com/Humaira-Sadia/Quiz-App.git",
    liveDemo: "https://github.com/Humaira-Sadia/Quiz-App.git",
  },
];

export { services, technologies, experiences, projects, socialLinks };
