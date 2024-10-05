import {
  javascript,
  typescript,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
} from "../assets";

import reactIcon from "../assets/reactIcon.png"
import nextIcon from "../assets/nextIcon.png"
import workflow from "../assets/workflow.png"
import issLogo from "../assets/issLogo.png"
import lacecoLogo from "../assets/lacecoLogo.png"
import code from "../assets/code.png"
import sqlserver from "../assets/sqlserver.png"
import mysql from "../assets/mysql.png"
import csharp from "../assets/csharp.png"
import python from "../assets/python.png"
import html from "../assets/html.png"
import nodejs from "../assets/nodejs.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
    isOnHome: true
  },
  {
    id: "work",
    title: "Work",
    isOnHome: true
  },
  {
    id: "contact",
    title: "Contact",
    isOnHome: true
  },
  {
    id: "spam-detection",
    title: "Spam Detection",
    isOnHome: false
  },

];

const services = [
  {
    title: "React.JS",
    icon: reactIcon,
  },
  {
    title: "Next.JS",
    icon: nextIcon,
  },
  {
    title: "Node.JS",
    icon: nodejs,
  },
  {
    title: "Automation Developer",
    icon: workflow,
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
    name: "C#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Miscrosoft SQL Server",
    icon: sqlserver,
  },

];

const experiences = [
  {
    title: "Software Solution Engineer",
    company_name: "LACECO",
    icon: lacecoLogo,
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "Built a web-based intranet portal to digitalize the company’s internal processes using NextJS v14.",
      "Built a comprehensive HR portal to streamline and centralize all HR operations.",
      "Built a modern Project Management portal for planning administrators and project managers to effectively plan and track progress of company projects.",
      "Built a sophisticated Project Financing Portal which enables the finance department to effectively and intuitively manage and forecast company expenses and revenue.",
      "Built an integrated employee attendance system to track employee attendance in accordance to each assigned project"
    ],
  },
  {
    title: "Automation Developer",
    company_name: "International Software Solutions (ISS)",
    icon: issLogo,
    iconBg: "#E6DEDD",
    date: "September 2021 - Present",
    points: [
      "Developed efficient and optimized data migration solutions in C#.",
      "Developed Business Process Automation systems automating redundant enterprise operations.",
      "Developed web interfaces and intranet portals using NextJS v14 and ASP.NET C#.",
      "Optimized existing APIs' latency by a factor of 1.7 using PHP & NodeJS.",
      "Optimized SQL queries by implementing caching & indexing to improve application performance",
      "Developed custom themes for new and existing apps using TailwindCSS & Bootstrap",
      "Developed SharePoint web parts using ASP.NET C#",
      "Developed SAP & Salesforce connectors for third-party app integration",
      "Developed SAP & Salesforce connectors for third-party app integration"
    ],
  },
  {
    title: "Web Development Tutor",
    company_name: "Freelance",
    icon: code,
    iconBg: "#E6DEDD",
    date: "June 2020 - Present",
    points: [
      "Teaching foundational web development skills, including HTML, CSS, and JavaScript, with an emphasis on modern ES6+ syntax.",
      "Guiding students through building and deploying full-stack web applications using technologies like React.js, Node.js, and Express.",
      "Providing in-depth tutorials on frontend frameworks like React.js and Next.js, covering component-based architecture, state management, and server-side rendering.",
      "Instructing on backend development with Node.js, Express, and MongoDB, including RESTful API design and integration.",
      "Offering personalized guidance on PHP development, including working with frameworks like Laravel for building robust backend systems.",
      "Teaching responsive design principles, CSS frameworks like Tailwind CSS and Bootstrap, and ensuring cross-browser compatibility.",
      "Explaining database management with SQL and NoSQL databases, including hands-on projects with MySQL and MongoDB.",
      "Providing mentorship on version control using Git, including branching strategies and collaborative workflows on GitHub.",
      "Assisting with debugging and troubleshooting, focusing on common issues in both frontend and backend development.",
      "Preparing students for real-world scenarios, such as deploying applications on cloud platforms like AWS or Vercel."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "Great attention to detail! Insightful suggestions were provided during the development process.",
    name: "Ismail Al Zaim",
    designation: "CEO",
    company: "Al Zaim Auto Parts"
  },
  {
    testimonial:
      "The project was delivered on time and the end result was even better than what we had planned.",
    name: "Ibrahim Al Khansa",
    designation: "General Manager",
    company: "Al Khansa Spare Parts"
  },
  {
    testimonial:
      "Juliano is a focused and insightful developer. I'm glad to be working with him.",
    name: "Nour Halwani",
    designation: "Organizational Performance Team Lead",
    company: "LACECO"
  },
  {
    testimonial:
      "I enrolled for Web Development sessions with Juliano 5 years afer I quit coding. Glad to say I am now back in the market and am familiar with all relevant technologies.",
    name: "Nour Al Jawhari",
    designation: "Web Development Student and ex-colleague",
    company: ""
  }
];

const projects = [
  {
    name: "Car Rental",
    description:
      "Cloud based internal system that allows car rental agencies to streamline all rental operations such as client management, rental dates management and others.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "LaceConnect",
    description:
      "Cloud-based Project Management portal for planning administrators and managers to effectively plan and track the progress of company projects",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "Al Zaim Intranet",
    description:
      "A comprehensive cloud-based internal system that allows the users to manage all car repairs, client checkup visits and issue automated invoices.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "Spam Detection",
    description:
      "This project highlights my work on the spam detection Machine Learning Model. It was trained on 90K records and can identify spam emails with over 90% accuracy.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    redirectsTo: "spam-detection"
  },
];

export { services, technologies, experiences, testimonials, projects };
