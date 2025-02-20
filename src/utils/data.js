import {
  FaBriefcase,
  FaLaptopCode,
  FaTools,
  FaCode,
  FaCloud,
  FaAws,
  FaTerminal,
  FaRobot,
  FaBuilding,
  FaHandshake,
  FaBullhorn,
  FaTasks,
  FaCat,
  FaUmbrellaBeach,
  FaHouseUser,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiJirasoftware,
  SiUbuntu,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { GiSprint, GiInfinity } from "react-icons/gi";
import { IoLogoNodejs } from "react-icons/io5";
import mushroomsImage from "../assets/mushrooms.png";
import valentineImage from "../assets/valentine.png";
import paralaxImage from "../assets/paralax.png";
import portfolio1Image from "../assets/portfolio1.png";
import memoryImage from "../assets/memory-card.png";
import taskImage from "../assets/task.png";
import adminImage from "../assets/admin.png";
import brunnerImage from "../assets/brunner.png";
import travelstoryImage from "../assets/travelstory.png";

export const projects = [
  {
    title: "five shrooms",
    image: mushroomsImage,
    link: "https://shrooms.vercel.app/",
    description: "tic-tac-toe with a twist",
  },
  {
    title: "food coma",
    image: memoryImage,
    link: "https://the-odin-project-mu.vercel.app/",
    description: "learning react",
  },
  {
    title: "be my valentine",
    image: valentineImage,
    link: "https://jakuzzibubbles.github.io/be-my-valentine/",
    description: "a message for your date",
  },
  {
    title: "webdesign&development",
    image: brunnerImage,
    link: "https://www.hp-brunner.de/",
    description: "more jobs like this please",
  },
  {
    title: "portfolio paralax",
    image: paralaxImage,
    link: "https://portfolio-linh.vercel.app/",
    description: "experimenting with threejs",
  },
  {
    title: "portfolio react",
    image: portfolio1Image,
    link: "https://jakuzzibubbles-portfolio.vercel.app/",
    description: "built using react and tailwindcss",
  },
  {
    title: "collecting ideas",
    image: taskImage,
    link: "https://jakuzzibubbles.github.io/taskmanager/",
    description: "just another to-do list",
  },
  {
    title: "collecting memories",
    image: travelstoryImage,
    link: "https://github.com/jakuzzibubbles/TravelStory-App",
    description: "fullstack app - staging",
  },
  {
    title: "admin dashboard",
    image: adminImage,
    link: "https://jakuzzibubbles.github.io/admin-dashboard/",
    description: "making friends with html and css",
  },
];

export const SKILLS = [
  {
    type: "experience",
    title: "webdesign & developement",
    icon: FaBriefcase,
    description: `
      Naturheilpraxis Daniel Brunner (oct 2024 - dec 2024 | freelance): 
      designed and developed a user-friendly website layout using website builder tools, reflecting the client’s brand identity and values. customized page structures and navigation for seamless usability and accessibility. edited and optimized images to enhance visual appeal and improve website performance. implemented SEO strategies to increase organic traffic.
    `,
  },
  {
    type: "experience",
    title: "technical project assistant",
    icon: FaBriefcase,
    description: `
      dreistrom.land AG (apr 2023 - jun 2023 | freelance): 
      worked closely with application engineers to streamline and optimize task completion timelines. supported agile web portal development for public institutions, improving task timelines by 13%. collaborated with product owners and stakeholders to enhance communication and align project goals.
    `,
  },
  {
    type: "experience",
    title: "online marketing",
    icon: FaBriefcase,
    description: `
      xtraz digital UG (jul 2022 - sep 2022 | freelance): 
      introduced daily team stand-ups, increasing team productivity by 25% by adding automation in task boards. facilitated stakeholder communication to ensure alignment with deliverables and timelines.
    `,
  },
  {
    type: "experience",
    title: "business development",
    icon: FaBriefcase,
    description: `
      Matok V'Kal Ltd (jun 2022 - nov 2022 | freelance): 
      conducted comprehensive competitive analyses to identify market opportunities and understand the confectionery industry landscape in the DACH region. generated high-quality leads through targeted outreach and networking, securing the company’s market presence. facilitated meetings with key decision-makers, aligning with company objectives and driving business growth.
    `,
  },
  {
    type: "experience",
    title: "operations",
    icon: FaBriefcase,
    description: `
      XWECAN (dec 2021 - may 2022 | freelance): 
      worked closely with the DACH account team and CEO, facilitating cross-team communication to ensure seamless workflows. supported the team with data-driven content creation, contributing to PR and marketing efforts. responsible for tools, tool integrations, and onboarding new members on the technical side.
    `,
  },
  {
    type: "experience",
    title: "sales manager",
    icon: FaBuilding,
    description: `
      Zeitgold GmbH (aug 2019 - feb 2020 | fulltime): 
      managed sales operations, driving revenue growth and customer acquisition. developed and implemented sales strategies to meet company targets.
    `,
  },
  {
    type: "experience",
    title: "event manager",
    icon: FaBuilding,
    description: `
      Gast Art Restaurations GmbH (sep 2016 - jul 2019 | fulltime): 
      planned and executed events, ensuring smooth operations and client satisfaction. coordinated with vendors, managed budgets, and oversaw event logistics.
    `,
  },
  {
    type: "experience",
    title: "archivist",
    icon: FaBuilding,
    description: `
      CFA Berlin (sep 2013 - aug 2016 | fulltime): 
      managed archival projects, ensuring accurate documentation and preservation of historical records. coordinated with teams to meet project deadlines and deliverables.
    `,
  },
  {
    type: "experience",
    title: "gallery assistant",
    icon: FaBuilding,
    description: `
      ALEXANDER OCHS PRIVATE (beijing assignment) (jul 2012 - aug 2013 | fulltime): 
      supported gallery operations, including exhibition setup, client relations, and administrative tasks. assisted in the coordination of international art exhibitions.
    `,
  },
  {
    type: "achievements",
    title: "improved task timelines",
    icon: FaTasks,
    description:
      "reduced task completion timelines by 15% for a public institution web portal by implementing agile methodologies and optimizing team workflows. this involved breaking down tasks into smaller, manageable sprints, improving communication between teams, and using tools like JIRA to track progress. the result was faster delivery of features and improved client satisfaction.",
  },
  {
    type: "achievements",
    title: "increased team productivity",
    icon: FaHandshake,
    description:
      "boosted team productivity by 25% by introducing daily stand-ups and task boards, improving task visibility and accountability across cross-functional teams. this structured approach helped identify bottlenecks early, streamline workflows, and ensure alignment on project goals. as a result, the team delivered projects faster and with fewer errors.",
  },
  {
    type: "achievements",
    title: "generated high-quality leads",
    icon: FaBullhorn,
    description:
      "identified and generated 50+ high-quality leads through targeted outreach and competitive analysis, securing a strong market presence for Matok V'Kal Ltd. in the DACH region. this involved researching industry trends, identifying key decision-makers, and crafting personalized outreach strategies. the campaign resulted in a 20% increase in sales pipeline and strengthened the company’s market position.",
  },
  {
    type: "achievements",
    title: "integrated tools and enhanced workflows",
    icon: GiInfinity,
    description:
      "streamlined PR and marketing workflows by integrating tools like asana, reducing task redundancy and improving cross-team collaboration. this involved mapping out existing processes, identifying inefficiencies, and implementing automation where possible. the result was faster campaign execution and improved alignment between teams.",
  },
  {
    type: "skills",
    title: "digital project management",
    icon: FaLaptopCode,
    description:
      "guiding projects to success while keeping the team engaged and motivated. proficient in managing end-to-end digital projects, from planning and resource allocation to execution and delivery. skilled in agile methodologies and scrum , ensuring teams stay aligned, motivated, and focused on achieving project goals within budget and timelines.",
  },
  {
    type: "skills",
    title: "aws cloud practitioner",
    icon: FaAws,
    description:
      "aws certified cloud practitioner (july 2024), with hands-on experience in deploying and managing cloud infrastructure on aws. fluency in core services, including ec2, s3, and iam, enabling scalable and secure cloud solutions for businesses.",
  },
  {
    type: "skills",
    title: "linux essentials",
    icon: FaTools,
    description:
      "Linux Professional Institute - LPI (January 2024). certified in linux essentials with practical knowledge of linux systems, including ubuntu. skilled in shell scripting, system administration, and troubleshooting, enabling efficient management of server environments.",
  },
  {
    type: "skills",
    title: "agile exlorer",
    icon: GiSprint,
    description:
      "project management with scrum - IBB (november 2021), with expertise in facilitating agile teams, removing impediments, and ensuring smooth sprint cycles. proven track record of improving team productivity by 25% through effective scrum practices and stakeholder communication.",
  },
  {
    type: "technologies",
    title: "javascript",
    icon: SiJavascript,
    description:
      "modern web development, powering interactive and dynamic features on websites. still getting the hang of it, but already making buttons do more than just sit there!",
  },
  {
    type: "technologies",
    title: "react",
    icon: SiReact,
    description:
      "powerful library for building user interfaces, enabling reusable components and efficient rendering. building UIs one component at a time — because who doesn’t love a good reusable piece of code?",
  },
  {
    type: "technologies",
    title: "node.js",
    icon: IoLogoNodejs,
    description:
      "node.js allows developers to build scalable and efficient server-side applications using javascript. a way to use javascript on the backend without feeling guilty about it.",
  },
  {
    type: "technologies",
    title: "mongodb",
    icon: SiMongodb,
    description:
      "nosql database that stores data in flexible, json-like documents, making it ideal for modern applications. where all my data lives — organized, flexible, and always ready for a quick query.",
  },
  {
    type: "technologies",
    title: "html",
    icon: SiHtml5,
    description:
      "html provides the structure for modern web applications, with support for multimedia and semantic elements. the skeleton of every website.",
  },
  {
    type: "technologies",
    title: "css",
    icon: SiCss3,
    description:
      "css brings style to the web with advanced features like animations, transitions, and responsive design. like when a lady puts makeup on 💄",
  },
  {
    type: "technologies",
    title: "tailwindcss",
    icon: SiTailwindcss,
    description:
      "tailwind css is a utility-first css framework that speeds up ui development with pre-designed classes. the cheat code for styling - my superhero!",
  },
  {
    type: "technologies",
    title: "git & github",
    icon: SiGit,
    description:
      "git is a version control system that tracks changes in code, while gitHub is a platform for collaboration and code sharing. where I save my code and my sanity—one commit at a time.",
  },
  {
    type: "technologies",
    title: "vs code",
    icon: FaTerminal,
    description:
      "my all-time-favourite code editor with built-in support for debugging, extensions, and git integration. my coding playground - where bugs come to die - eventually🤞",
  },
  {
    type: "technologies",
    title: "postman",
    icon: SiPostman,
    description:
      "testing APIs, making it easier to debug and document backend services. the only mail I enjoy delivering — api requests, on time and error-free.",
  },
  {
    type: "technologies",
    title: "jira",
    icon: SiJirasoftware,
    description:
      "project management and issue tracking for agile development and teams, helping track issues, sprints, and workflows. where tasks go to get organized—because to-do lists are always a good idea.",
  },
  {
    type: "technologies",
    title: "testing",
    icon: FaCode,
    description:
      "writing and maintaining unit tests for code reliability. implementing and analyzing a/b tests for feature optimization. ensuring different parts of the application work together seamlessly.",
  },
  {
    type: "technologies",
    title: "linux/ubuntu",
    icon: SiUbuntu,
    description:
      "linux is an open-source operating system, and ubuntu is one of its most popular distributions, known for its ease of use and stability. where I feel like a hacker 🥷",
  },
  {
    type: "technologies",
    title: "cloud computing",
    icon: FaCloud,
    description:
      "Working with aws and gpc cloud platforms and services, that provide scalable infrastructure, storage, and computing power. where my data lives—safe, scalable, and always ready for action.",
  },
  {
    title: "express",
    type: "technologies",
    icon: SiExpress,
    description:
      "building powerful web servers that deliver smooth, real-time experiences! minimal and flexible node.js web application framework, designed for building APIs and web applications.",
  },
  {
    type: "technologies",
    title: "ai & machine learning",
    icon: FaRobot,
    description:
      "foundational knowledge in generative ai and machine learning, exploring the potential of ai-driven solutions and models.",
  },
  {
    type: "",
    title: "cat mom",
    icon: FaCat,
    description:
      "servant to my feline overlords. they allow me to feed them and clean their litter boxes.",
  },
  {
    type: "",
    title: "happy by the beach",
    icon: FaUmbrellaBeach,
    description: "this goes without comment 👙",
  },
  {
    type: "",
    title: "love home-made food",
    icon: FaHouseUser,
    description:
      "no fancy hotel or restaurant will ever beat home-made food AND vietnamese street food.",
  },
];

export const SKILLS_TABS = [
  { label: "all", value: "all" },
  { label: "experience", value: "experience" },
  { label: "achievements", value: "achievements" },
  { label: "skills", value: "skills" },
  { label: "technologies", value: "technologies" },
];