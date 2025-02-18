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
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiJirasoftware,
  SiAsana,
  SiUbuntu,
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
    title: "Web Designer & Developer",
    icon: FaBriefcase,
    description: `
      Naturheilpraxis Daniel Brunner (Oct 2024 - Dec 2024 | Freelance): 
      Designed and developed a user-friendly website layout using Website Builder tools, reflecting the client’s brand identity and values. Customized page structures and navigation for seamless usability and accessibility. Edited and optimized images to enhance visual appeal and improve website performance. Implemented SEO strategies to increase organic traffic.
    `,
  },
  {
    id: "02",
    type: "experience",
    title: "IT Project Assistant",
    icon: FaBriefcase,
    description: `
      dreistrom.land AG (Apr 2023 - Jun 2023 | Freelance): 
      Worked closely with application engineers to streamline and optimize task completion timelines. Supported agile web portal development for public institutions, improving task timelines by 15%. Collaborated with product owners and stakeholders to enhance communication and align project goals.
    `,
  },
  {
    id: "03",
    type: "experience",
    title: "Online Project Manager",
    icon: FaBriefcase,
    description: `
      xtraz digital UG (Jul 2022 - Sep 2022 | Freelance): 
      Introduced daily team stand-ups and specialized task boards, increasing team productivity by 25%. Facilitated stakeholder communication to ensure alignment with deliverables and timelines.
    `,
  },
  {
    id: "04",
    type: "experience",
    title: "Business Development DACH",
    icon: FaBriefcase,
    description: `
      Matok V'Kal Ltd (Jun 2022 - Nov 2022 | Freelance): 
      Conducted comprehensive competitive analyses to identify market opportunities and understand the confectionery industry landscape in the DACH region. Generated high-quality leads through targeted outreach and networking, securing the company’s market presence. Facilitated meetings with key decision-makers, aligning with company objectives and driving business growth.
    `,
  },
  {
    id: "05",
    type: "experience",
    title: "Operations DACH",
    icon: FaBriefcase,
    description: `
      XWECAN (Dec 2021 - May 2022 | Freelance): 
      Worked closely with the DACH account team and CEO, facilitating cross-team communication to ensure seamless workflows. Supported the team with data-driven content creation, contributing to PR and marketing efforts. Responsible for tools, tool integrations, and onboarding new members on the technical side.
    `,
  },
  {
    id: "06",
    type: "experience",
    title: "Sales Manager",
    icon: FaBriefcase,
    description: `
      Zeitgold GmbH (Aug 2019 - Feb 2020 | Fulltime): 
      Managed sales operations, driving revenue growth and customer acquisition. Developed and implemented sales strategies to meet company targets.
    `,
  },
  {
    id: "07",
    type: "experience",
    title: "Event Manager",
    icon: FaBriefcase,
    description: `
      Gast Art Restaurations GmbH (Sep 2016 - Jul 2019 | Fulltime): 
      Planned and executed events, ensuring smooth operations and client satisfaction. Coordinated with vendors, managed budgets, and oversaw event logistics.
    `,
  },
  {
    id: "08",
    type: "experience",
    title: "Archivist/Project Manager",
    icon: FaBriefcase,
    description: `
      CFA Berlin (Sep 2013 - Aug 2016 | Fulltime): 
      Managed archival projects, ensuring accurate documentation and preservation of historical records. Coordinated with teams to meet project deadlines and deliverables.
    `,
  },
  {
    id: "09",
    type: "experience",
    title: "Gallery Assistant",
    icon: FaBriefcase,
    description: `
      ALEXANDER OCHS PRIVATE (Beijing assignment) (Jul 2012 - Aug 2013 | Fulltime): 
      Supported gallery operations, including exhibition setup, client relations, and administrative tasks. Assisted in the coordination of international art exhibitions.
    `,
  },
  {
    id: "10",
    type: "achievements",
    title: "Improved Task Timelines",
    icon: GiInfinity,
    description:
      "Reduced task completion timelines by 15% for a public institution web portal by implementing Agile methodologies and optimizing team workflows, ensuring timely project delivery.",
  },
  {
    id: "11",
    type: "achievements",
    title: "Increased Team Productivity",
    icon: GiInfinity,
    description:
      "Boosted team productivity by 25% by introducing daily stand-ups and task boards, improving task visibility and accountability across cross-functional teams.",
  },
  {
    id: "12",
    type: "achievements",
    title: "Generated High-Quality Leads",
    icon: GiInfinity,
    description:
      "Identified and generated 50+ high-quality leads through targeted outreach and competitive analysis, securing a strong market presence for Matok V'Kal Ltd. in the DACH region.",
  },
  {
    id: "13",
    type: "achievements",
    title: "Integrated Tools and Enhanced Workflows",
    icon: GiInfinity,
    description:
      "Streamlined PR and marketing workflows by integrating tools like JIRA and Asana, reducing task redundancy and improving cross-team collaboration by 20%.",
  },
  {
    id: "14",
    type: "skills",
    title: "Digital Project Management",
    icon: FaLaptopCode,
    description:
      "Guiding projects to success while keeping the team engaged and motivated. Proficient in managing end-to-end digital projects, from planning and resource allocation to execution and delivery. Skilled in Agile and Scrum methodologies, ensuring teams stay aligned, motivated, and focused on achieving project goals within budget and timelines.",
  },
  {
    id: "15",
    type: "skills",
    title: "AWS Cloud Practitioner",
    icon: FaAws,
    description:
      "AWS Certified Cloud Practitioner (July 2024) with hands-on experience in deploying and managing cloud infrastructure on AWS. Fluency in core AWS services, including EC2, S3, and IAM, enabling scalable and secure cloud solutions for businesses.",
  },
  {
    id: "16",
    type: "skills",
    title: "Linux Essentials",
    icon: FaTools,
    description:
      "Linux Professional Institute - LPI (January 2024). Certified in Linux Essentials with practical knowledge of Linux systems, including Ubuntu. Skilled in shell scripting, system administration, and troubleshooting, enabling efficient management of server environments.",
  },
  {
    id: "17",
    type: "skills",
    title: "Scrum Master",
    icon: GiSprint,
    description:
      "Project Management with Scrum - IBB (November 2021) with expertise in facilitating Agile teams, removing impediments, and ensuring smooth sprint cycles. Proven track record of improving team productivity by 25% through effective Scrum practices and stakeholder communication.",
  },
  {
    id: "18",
    type: "technologies",
    title: "JavaScript",
    icon: SiJavascript,
    description:
      "Mastering JavaScript—transforming ideas into interactive, dynamic features!",
  },
  {
    id: "19",
    type: "technologies",
    title: "React",
    icon: SiReact,
    description:
      "Building interactive UIs that keep users engaged—like a good book!",
  },
  {
    id: "20",
    type: "technologies",
    title: "Node.js",
    icon: IoLogoNodejs,
    description:
      "Creating efficient backends that handle requests with ease and speed!",
  },
  {
    id: "21",
    type: "technologies",
    title: "MongoDB",
    icon: SiMongodb,
    description:
      "Managing data like a pro—keeping everything organized and efficient!",
  },
  {
    id: "22",
    type: "technologies",
    title: "HTML5",
    icon: SiHtml5,
    description:
      "Building structured, semantic markup for modern web applications.",
  },
  {
    id: "23",
    type: "technologies",
    title: "CSS3",
    icon: SiCss3,
    description:
      "Styling web applications with modern CSS features and animations.",
  },
  {
    id: "24",
    type: "technologies",
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    description:
      "Building UI components with ease—using utility-first CSS framework.",
  },
  {
    id: "25",
    type: "technologies",
    title: "Git & GitHub",
    icon: SiGit,
    description:
      "Version control and collaborative development using Git and GitHub.",
  },
  {
    id: "26",
    type: "technologies",
    title: "VS Code",
    icon: FaTerminal,
    description: "Primary IDE for efficient code development and debugging.",
  },
  {
    id: "27",
    type: "technologies",
    title: "Postman",
    icon: SiPostman,
    description: "API testing and documentation tool for backend development.",
  },
  {
    id: "28",
    type: "technologies",
    title: "JIRA",
    icon: SiJirasoftware,
    description: "Project management and issue tracking for agile development.",
  },
  {
    id: "29",
    type: "technologies",
    title: "Asana",
    icon: SiAsana,
    description: "Task management and team collaboration platform.",
  },
  {
    id: "30",
    type: "technologies",
    title: "Testing",
    icon: FaCode,
    description:
      "Writing and maintaining unit tests for code reliability. Implementing and analyzing A/B tests for feature optimization. Ensuring different parts of the application work together seamlessly.",
  },
  {
    id: "31",
    type: "technologies",
    title: "Linux/Ubuntu",
    icon: SiUbuntu,
    description:
      "Working with Linux systems, particularly Ubuntu distribution.",
  },
  {
    id: "32",
    type: "technologies",
    title: "Cloud Services",
    icon: FaCloud,
    description: "Working with AWS and GCP cloud platforms and services.",
  },
  {
    id: "33",
    title: "Express",
    type: "technologies",
    icon: SiExpress,
    description:
      "Building powerful web servers that deliver smooth, real-time experiences!",
  },
];

export const SKILLS_TABS = [
  { id: "01", label: "all", value: "all" },
  { id: "02", label: "experience", value: "experience" },
  { id: "03", label: "achievements", value: "achievements" },
  { id: "04", label: "skills", value: "skills" },
  { id: "05", label: "technologies", value: "technologies" },
];