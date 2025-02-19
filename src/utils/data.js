import {
  FaBriefcase,
  FaLaptopCode,
  FaTools,
  FaCode,
  FaCloud,
  FaAws,
  FaTerminal,
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
  SiAsana,
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
    title: "admin dashboard",
    image: adminImage,
    link: "https://jakuzzibubbles.github.io/admin-dashboard/",
    description: "making friends with html and css",
  },
];

export const SKILLS = [
  {
    id: "01",
    type: "experience",
    title: "web designer & developer",
    icon: FaBriefcase,
    description: `
      Naturheilpraxis Daniel Brunner (Oct 2024 - Dec 2024 | freelance): 
      designed and developed a user-friendly website layout using website builder tools, reflecting the client’s brand identity and values. customized page structures and navigation for seamless usability and accessibility. edited and optimized images to enhance visual appeal and improve website performance. implemented SEO strategies to increase organic traffic.
    `,
  },
  {
    id: "02",
    type: "experience",
    title: "it project assistant",
    icon: FaBriefcase,
    description: `
      dreistrom.land AG (Apr 2023 - Jun 2023 | freelance): 
      worked closely with application engineers to streamline and optimize task completion timelines. supported agile web portal development for public institutions, improving task timelines by 13%. collaborated with product owners and stakeholders to enhance communication and align project goals.
    `,
  },
  {
    id: "03",
    type: "experience",
    title: "online project manager",
    icon: FaBriefcase,
    description: `
      xtraz digital UG (Jul 2022 - Sep 2022 | Freelance): 
      introduced daily team stand-ups, increasing team productivity by 25% by adding automation in task boards. facilitated stakeholder communication to ensure alignment with deliverables and timelines.
    `,
  },
  {
    id: "04",
    type: "experience",
    title: "business development",
    icon: FaBriefcase,
    description: `
      Matok V'Kal Ltd (Jun 2022 - Nov 2022 | Freelance): 
      conducted comprehensive competitive analyses to identify market opportunities and understand the confectionery industry landscape in the DACH region. generated high-quality leads through targeted outreach and networking, securing the company’s market presence. facilitated meetings with key decision-makers, aligning with company objectives and driving business growth.
    `,
  },
  {
    id: "05",
    type: "experience",
    title: "operations",
    icon: FaBriefcase,
    description: `
      XWECAN (Dec 2021 - May 2022 | Freelance): 
      worked closely with the DACH account team and CEO, facilitating cross-team communication to ensure seamless workflows. supported the team with data-driven content creation, contributing to PR and marketing efforts. responsible for tools, tool integrations, and onboarding new members on the technical side.
    `,
  },
  {
    id: "06",
    type: "experience",
    title: "sales manager",
    icon: FaBriefcase,
    description: `
      Zeitgold GmbH (Aug 2019 - Feb 2020 | Fulltime): 
      managed sales operations, driving revenue growth and customer acquisition. developed and implemented sales strategies to meet company targets.
    `,
  },
  {
    id: "07",
    type: "experience",
    title: "event manager",
    icon: FaBriefcase,
    description: `
      Gast Art Restaurations GmbH (Sep 2016 - Jul 2019 | Fulltime): 
      planned and executed events, ensuring smooth operations and client satisfaction. coordinated with vendors, managed budgets, and oversaw event logistics.
    `,
  },
  {
    id: "08",
    type: "experience",
    title: "archivist/project manager",
    icon: FaBriefcase,
    description: `
      CFA Berlin (Sep 2013 - Aug 2016 | Fulltime): 
      managed archival projects, ensuring accurate documentation and preservation of historical records. coordinated with teams to meet project deadlines and deliverables.
    `,
  },
  {
    id: "09",
    type: "experience",
    title: "gallery assistant",
    icon: FaBriefcase,
    description: `
      ALEXANDER OCHS PRIVATE (Beijing assignment) (Jul 2012 - Aug 2013 | Fulltime): 
      supported gallery operations, including exhibition setup, client relations, and administrative tasks. assisted in the coordination of international art exhibitions.
    `,
  },
  {
    id: "10",
    type: "achievements",
    title: "improved task timelines",
    icon: GiInfinity,
    description:
      "reduced task completion timelines by 15% for a public institution web portal by implementing agile methodologies and optimizing team workflows. this involved breaking down tasks into smaller, manageable sprints, improving communication between teams, and using tools like JIRA to track progress. the result was faster delivery of features and improved client satisfaction.",
  },
  {
    id: "11",
    type: "achievements",
    title: "increased team productivity",
    icon: GiInfinity,
    description:
      "boosted team productivity by 25% by introducing daily stand-ups and task boards, improving task visibility and accountability across cross-functional teams. this structured approach helped identify bottlenecks early, streamline workflows, and ensure alignment on project goals. as a result, the team delivered projects faster and with fewer errors.",
  },
  {
    id: "12",
    type: "achievements",
    title: "generated high-quality leads",
    icon: GiInfinity,
    description:
      "identified and generated 50+ high-quality leads through targeted outreach and competitive analysis, securing a strong market presence for Matok V'Kal Ltd. in the DACH region. this involved researching industry trends, identifying key decision-makers, and crafting personalized outreach strategies. the campaign resulted in a 20% increase in sales pipeline and strengthened the company’s market position.",
  },
  {
    id: "13",
    type: "achievements",
    title: "integrated tools and enhanced workflows",
    icon: GiInfinity,
    description:
      "streamlined PR and marketing workflows by integrating tools like asana, reducing task redundancy and improving cross-team collaboration. this involved mapping out existing processes, identifying inefficiencies, and implementing automation where possible. the result was faster campaign execution and improved alignment between teams.",
  },
  {
    id: "14",
    type: "skills",
    title: "digital project management",
    icon: FaLaptopCode,
    description:
      "guiding projects to success while keeping the team engaged and motivated. proficient in managing end-to-end digital projects, from planning and resource allocation to execution and delivery. skilled in agile methodologies and scrum , ensuring teams stay aligned, motivated, and focused on achieving project goals within budget and timelines.",
  },
  {
    id: "15",
    type: "skills",
    title: "aws cloud practitioner",
    icon: FaAws,
    description:
      "aws certified cloud practitioner (july 2024) with hands-on experience in deploying and managing cloud infrastructure on aws. fluency in core services, including ec2, s3, and iam, enabling scalable and secure cloud solutions for businesses.",
  },
  {
    id: "16",
    type: "skills",
    title: "linux essentials",
    icon: FaTools,
    description:
      "Linux Professional Institute - LPI (January 2024). certified in linux essentials with practical knowledge of linux systems, including ubuntu. skilled in shell scripting, system administration, and troubleshooting, enabling efficient management of server environments.",
  },
  {
    id: "17",
    type: "skills",
    title: "scrum master",
    icon: GiSprint,
    description:
      "project management with scrum - IBB (november 2021) with expertise in facilitating agile teams, removing impediments, and ensuring smooth sprint cycles. proven track record of improving team productivity by 25% through effective scrum practices and stakeholder communication.",
  },
  {
    id: "18",
    type: "technologies",
    title: "javaScript",
    icon: SiJavascript,
    description:
      "modern web development, powering interactive and dynamic features on websites. still getting the hang of it, but already making buttons do more than just sit there!",
  },
  {
    id: "19",
    type: "technologies",
    title: "react",
    icon: SiReact,
    description:
      "powerful library for building user interfaces, enabling reusable components and efficient rendering. building UIs one component at a time—because who doesn’t love a good reusable piece of code?",
  },
  {
    id: "20",
    type: "technologies",
    title: "node.js",
    icon: IoLogoNodejs,
    description:
      "node.js allows developers to build scalable and efficient server-side applications using javaScript. a way to use javaScript on the backend without feeling guilty about it.",
  },
  {
    id: "21",
    type: "technologies",
    title: "mongodb",
    icon: SiMongodb,
    description:
      "noSQL database that stores data in flexible, JSON-like documents, making it ideal for modern applications. where all my data lives—organized, flexible, and always ready for a quick query.",
  },
  {
    id: "22",
    type: "technologies",
    title: "html",
    icon: SiHtml5,
    description:
      "html provides the structure for modern web applications, with support for multimedia and semantic elements. the skeleton of every website.",
  },
  {
    id: "23",
    type: "technologies",
    title: "css",
    icon: SiCss3,
    description:
      "css brings style to the web with advanced features like animations, transitions, and responsive design. like when a lady puts makeup on her face.",
  },
  {
    id: "24",
    type: "technologies",
    title: "tailwind css",
    icon: SiTailwindcss,
    description:
      "tailwind css is a utility-first css framework that speeds up ui development with pre-designed classes. the cheat code for styling—my superhero!",
  },
  {
    id: "25",
    type: "technologies",
    title: "git & gitHub",
    icon: SiGit,
    description:
      "git is a version control system that tracks changes in code, while gitHub is a platform for collaboration and code sharing. where I save my code and my sanity—one commit at a time.",
  },
  {
    id: "26",
    type: "technologies",
    title: "vs code",
    icon: FaTerminal,
    description:
      "my all-time-favourite code editor with built-in support for debugging, extensions, and git integration. my coding playground - where bugs come to die - eventually.",
  },
  {
    id: "27",
    type: "technologies",
    title: "postman",
    icon: SiPostman,
    description:
      "testing APIs, making it easier to debug and document backend services. the only mail I enjoy delivering—API requests, on time and error-free.",
  },
  {
    id: "28",
    type: "technologies",
    title: "jira",
    icon: SiJirasoftware,
    description:
      "project management and issue tracking for agile development and teams, helping track issues, sprints, and workflows. where tasks go to get organized—because even projects need a to-do list.",
  },
  {
    id: "29",
    type: "technologies",
    title: "asana",
    icon: SiAsana,
    description:
      "Task management and team collaboration platform. The ultimate checklist for keeping projects on track.",
  },
  {
    id: "30",
    type: "technologies",
    title: "testing",
    icon: FaCode,
    description:
      "writing and maintaining unit tests for code reliability. implementing and analyzing a/b tests for feature optimization. ensuring different parts of the application work together seamlessly.",
  },
  {
    id: "31",
    type: "technologies",
    title: "linux/ubuntu",
    icon: SiUbuntu,
    description:
      "linux is an open-source operating system, and ubuntu is one of its most popular distributions, known for its ease of use and stability. where I feel like a hacker 🥷",
  },
  {
    id: "32",
    type: "technologies",
    title: "cloud services",
    icon: FaCloud,
    description:
      "Working with aws and gpc cloud platforms and services, that provide scalable infrastructure, storage, and computing power. Wwere my data lives—safe, scalable, and always ready for action.",
  },
  {
    id: "33",
    title: "express",
    type: "technologies",
    icon: SiExpress,
    description:
      "building powerful web servers that deliver smooth, real-time experiences! minimal and flexible Node.js web application framework, designed for building APIs and web applications.",
  },
];

export const SKILLS_TABS = [
  { id: "01", label: "all", value: "all" },
  { id: "02", label: "experience", value: "experience" },
  { id: "03", label: "achievements", value: "achievements" },
  { id: "04", label: "skills", value: "skills" },
  { id: "05", label: "technologies", value: "technologies" },
];