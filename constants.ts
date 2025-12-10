import { Experience, Project, SkillCategory, Certification, Achievement } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: "Full Stack Developer & DevOps Engineer",
    company: "KDISC",
    date: "Apr 2025 - Sep 2025",
    description: [
      "Specialized in Full-Stack Development and DevOps operations using AWS (EFS, EC2, S3, RDS).",
      "Managed Nginx configurations, PostgreSQL databases, and performed data migration.",
      "Ensured code quality through rigorous testing and unit testing.",
      "Technologies: AWS, PostgreSQL, Nginx, DevOps"
    ],
    tags: ["AWS", "DevOps", "PostgreSQL", "Full Stack"]
  },
  {
    role: "Full Stack Developer",
    company: "Confident Group",
    date: "Nov 2024 - Aug 2025",
    description: [
      "Internship focusing on Front-End and Back-End Web Development.",
      "Built scalable applications with Node.js, Express.js, and React.js.",
      "Handled DevOps tasks and Web Hosting management."
    ],
    tags: ["React.js", "Node.js", "DevOps", "Web Hosting"]
  },
  {
    role: "App Developer",
    company: "Brainspired Labs",
    date: "Dec 2024 - Jun 2025",
    description: [
      "Internship focused on Android App Development using Kotlin.",
      "Developed and optimized mobile applications."
    ],
    tags: ["Android", "Kotlin", "Mobile App"]
  },
  {
    role: "Campus Lead",
    company: "TinkerHub CEKnpy",
    date: "Jul 2024 - May 2025",
    description: [
      "Awarded 'Lead of the Year 2024-25' for active contributions.",
      "Led initiatives to build a maker culture on campus, promoting diversity and interest-based learning.",
      "Promoted building projects around personal interests using technology."
    ],
    tags: ["Leadership", "Community", "Management"]
  },
  {
    role: "App Lead",
    company: "GDSC CEKNPY",
    date: "Nov 2024 - May 2025",
    description: [
      "Led mobile app development initiatives and guided student developers.",
      "Collaborated on club projects and technical workshops."
    ],
    tags: ["Leadership", "App Dev", "Mentoring"]
  },
  {
    role: "Founder",
    company: "To ByaaG",
    date: "May 2024 - Present",
    description: [
      "Building a platform to turn your 'to be' into a resounding 'I am'.",
      "Focused on Start-up Leadership, Start-up Ventures, and Program Creation."
    ],
    tags: ["Founder", "Startup", "Leadership"]
  },
  {
    role: "Tech Lead",
    company: "Mulearn.KNP",
    date: "May 2024 - Mar 2025",
    description: [
      "Guided learning circles and facilitated technical skill development.",
      "Fostored a peer-learning environment for students."
    ],
    tags: ["Tech Leadership", "Peer Learning"]
  },
  {
    role: "CFO",
    company: "IEDC-CEK",
    date: "Aug 2024 - Jan 2025",
    description: [
      "Managed financial operations and budget planning for the Innovation and Entrepreneurship Development Cell."
    ],
    tags: ["Finance", "Management", "Operations"]
  },
  {
    role: "Tech Lead",
    company: "FOSS Club CEKNPY",
    date: "Aug 2024 - Jan 2025",
    description: [
      "Led technical initiatives, promoting Free and Open Source Software culture.",
      "Organized technical sessions and collaborative coding events."
    ],
    tags: ["FOSS", "Leadership", "Tech"]
  },
  {
    role: "Innovation Coordinator",
    company: "IIC CEKnpy",
    date: "Mar 2024 - Nov 2024",
    description: [
      "Coordinated innovation activities and startup initiatives on campus."
    ],
    tags: ["Innovation", "Coordination"]
  },
  {
    role: "Web Developer",
    company: "ELDII",
    date: "Aug 2023 - Sep 2024",
    description: [
      "Developed web applications using React.js, Node.js, and Bootstrap.",
      "Collaborated with cross-functional teams to deliver scalable solutions."
    ],
    tags: ["React.js", "Node.js", "Bootstrap"]
  },
  {
    role: "Tech Lead",
    company: "TinkerHub CEKnpy",
    date: "Apr 2023 - Jul 2024",
    description: [
      "Upskilled fellow peers in campus and organized several programmes.",
      "Mentored students over their journey giving them a boost on their professional career."
    ],
    tags: ["Mentoring", "React.js", "Front-End"]
  },
  {
    role: "Operations Lead",
    company: "FOSS Club CEKNPY",
    date: "Sep 2023 - Jul 2024",
    description: [
      "Managed club operations and event logistics.",
      "Facilitated smooth execution of club activities."
    ],
    tags: ["Operations", "Teamwork"]
  },
  {
    role: "Tech Lead",
    company: "GDSC CEKNPY",
    date: "Aug 2023 - May 2024",
    description: [
      "Introduced peers to Google developer technologies.",
      "Organized sessions and workshops, connecting students with opportunities."
    ],
    tags: ["Google Tech", "Mentoring", "Management"]
  },
  {
    role: "IPR & Research Lead",
    company: "IEDC-CEK",
    date: "Nov 2023 - Aug 2024",
    description: [
      "Led Intellectual Property Rights awareness and research initiatives."
    ],
    tags: ["Research", "IPR"]
  },
  {
    role: "Start Up Coordinator",
    company: "IIC CEKnpy",
    date: "Sep 2023 - Mar 2024",
    description: [
      "Coordinated startup-related events and ecosystem building activities."
    ],
    tags: ["Startup", "Ecosystem"]
  },
  {
    role: "Savvy Fellow",
    company: "Savvy",
    date: "Dec 2022 - Dec 2023",
    description: [
      "Participated in the Savvy Fellowship program for aspiring entrepreneurs."
    ],
    tags: ["Entrepreneurship", "Fellowship"]
  },
  {
    role: "Webmaster",
    company: "IEDC-CEK",
    date: "Jan 2023 - Nov 2023",
    description: [
      "Maintained and developed web presence for the cell.",
      "Skills: Bootstrap, JavaScript, React.js."
    ],
    tags: ["Web Dev", "React.js"]
  },
  {
    role: "Tech Intern",
    company: "GDSC CEKNPY",
    date: "Jan 2023 - Aug 2023",
    description: [
      "Assisted in technical workshops and learnt modern web technologies.",
      "Skills: Angular, React.js."
    ],
    tags: ["Internship", "Angular", "React"]
  },
  {
    role: "YIP 5.0 Intern",
    company: "KDISC",
    date: "Jun 2023 - Jul 2023",
    description: [
      "Worked on innovation development, evangelism, and public speaking.",
      "Contributed to YIP initiatives."
    ],
    tags: ["Innovation", "Public Speaking"]
  },
  {
    role: "Volunteer Leader",
    company: "National Service Scheme",
    date: "Nov 2020 - May 2022",
    description: [
      "Took an active role in 'Break the Chain' campaign.",
      "Active in COVID help desk initiatives."
    ],
    tags: ["Volunteering", "Social Service"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "ContribProof",
    description: "A decentralized stake-to-learn platform where students stake ETH to enroll in courses. Features AI validation of contributions to mint soulbound tokens (SBTs) for onchain CVs.",
    tags: ["Next.js", "Solidity", "Wagmi", "Python", "AI", "Web3"],
    link: "https://stake-learn.vercel.app/",
    github: "https://github.com/Abm32/stake_learn"
  },
  {
    title: "StarQuest",
    description: "An on-chain GameFi backend for Hedera EVM implementing a location-based treasure hunt with stake-to-play mechanics, HTS payouts, and HCS anchoring.",
    tags: ["Hedera", "Solidity", "Node.js", "GameFi", "IPFS"],
    link: "https://ethglobal.com/showcase/starquest-wme20",
    github: "https://github.com/Parsh06/eth_global_2025"
  },
  {
    title: "YIP 8.0 Portal",
    description: "Official portal for YIP 8.0 built from scratch, handling 5L+ users. Features idea tracking, approval workflows, and admin privileges. Hosted on AWS.",
    tags: ["Next.js", "AWS", "PostgreSQL", "Node.js", "Scalability"],
    link: "https://yip.kerala.gov.in"
  },
  {
    title: "Confident Group IMS",
    description: "Internal Indent Management System for Confident Group. Tracks orders for 1000+ users with admin privileges and high-performance CRUD operations.",
    tags: ["React", "Node.js", "MySQL", "Enterprise"],
    link: "https://confidentproject.in"
  },
  {
    title: "Research Quest",
    description: "A platform to facilitate research learning and collaboration through interactive features, gamification, and structured guidance for citizen scientists.",
    tags: ["Research", "Gamification", "Collaboration", "EdTech"],
    link: "https://research-quest.vercel.app/",
    github: "https://github.com/Abm32/research_quest"
  },
  {
    title: "Samanwaya '26",
    description: "Official website for the National Conference on Synergistic Advances in Engineering and Technology (SAMANWAYA '26).",
    tags: ["Web Design", "Event", "Frontend"],
    link: "https://www.samanwaya26.in/"
  },
  {
    title: "Febuiary",
    description: "A responsive website created for Eldii startup's UI challenge month 'Febuiary', designed to showcase daily UI challenges.",
    tags: ["React", "Frontend", "Responsive Design", "UI/UX"],
    link: "https://feb-ui-ary.vercel.app/"
  },
  {
    title: "Glitch Service Hub",
    description: "A tech-powered platform bridging the gap between skilled job seekers (plumbers, electricians, etc.) and customers, addressing unemployment issues.",
    tags: ["Web App", "Marketplace", "Social Impact"],
    github: "https://github.com/Abm32/Glitch-Service-Hub"
  },
  {
    title: "Arambh Hackathon",
    description: "Official website for the Arambh Hackathon built with React, facilitating event information and updates.",
    tags: ["React", "Firebase", "Hackathon", "Web Design"],
    link: "https://arambh-hackathon.web.app/",
    github: "https://github.com/Abm32/Arambh-Hackathon"
  },
  {
    title: "Global Fire Safety System",
    description: "An ML-powered system for early fire detection using real-time data analysis.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"]
  },
  {
    title: "OTD (Online Threat Detector)",
    description: "An innovative tool for detecting and flagging potential online threats using machine learning algorithms.",
    tags: ["Machine Learning", "Scikit-learn", "Python", "API"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "MERN Stack",
    items: "MongoDB, Express.js, React, Node.js, JavaScript, TypeScript"
  },
  {
    name: "Django Stack",
    items: "Django, Django REST Framework, Python, PostgreSQL"
  },
  {
    name: "Cloud & BaaS",
    items: "AWS (EC2, S3, RDS, Amplify), Firebase, Docker, Vercel"
  },
  {
    name: "Web3 & Blockchain",
    items: "Solidity, Hedera, Ethereum, Hardhat, Wagmi, IPFS"
  },
  {
    name: "Mobile Dev",
    items: "React Native, Kotlin, Android Development"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Advanced Python", issuer: "Credential from Coursera", icon: "code" },
  { title: "JavaScript Algorithms", issuer: "Credential from freeCodeCamp", icon: "javascript" },
  { title: "Modern C++", issuer: "Credential from Udemy", icon: "data_object" },
  { title: "Blockchain Basics", issuer: "Credential from University at Buffalo", icon: "hub" },
  { title: "Electron.js Masterclass", issuer: "Credential from Skillshare", icon: "desktop_windows" },
  { title: "Intro to Machine Learning", issuer: "Credential from Kaggle", icon: "psychology" },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    role: "Volunteer",
    organization: "U&I Trust",
    description: "Contributing to educational initiatives for underprivileged children since Sep 2024.",
    icon: "volunteer_activism",
    tags: ["Education", "Volunteering"]
  },
  {
    role: "Mentor @ TinkerHub",
    organization: "",
    description: "Mentored 50+ students in Web Development at Maker Station and Tink-her-hack 2.0. Guided projects to completion.",
    icon: "school",
    tags: ["Mentoring", "Teaching"]
  },
  {
    role: "Organizer @ FOSSFest",
    organization: "FOSS Club CEK",
    description: "Contributed to the organization and smooth execution of a major open-source hackathon.",
    icon: "event",
    tags: ["Organizing", "FOSS"]
  },
  {
    role: "Finalist @ ETHGlobal",
    organization: "",
    description: "Achieved finalist status for ContribProof, a decentralized stake-to-learn platform.",
    icon: "emoji_events",
    tags: ["Hackathon Winner", "Web3"]
  },
  {
    role: "Volunteer",
    organization: "ScaleUp Conclave",
    description: "Collaborated with IEDC chapter to run the event.",
    icon: "diversity_3",
    tags: ["Volunteering", "Events"]
  }
];