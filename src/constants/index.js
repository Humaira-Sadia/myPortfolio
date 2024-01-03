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
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  sumz,
  sudoku,
  
} from "../assets";


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
    color: "#32cd32",
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
    title: "Android App Developement Intern",
    company_name: "CodSoft",
    icon: tesla,
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
    icon: starbucks,
    iconBg: "#383E56",
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
    image: tripguide,
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
    image: tripguide,
    source_code_link: "https://github.com/Humaira-Sadia/Quiz-App.git",
    liveDemo: "https://github.com/Humaira-Sadia/Quiz-App.git",
  },
];

export { services, technologies, experiences, projects, socialLinks };
