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

/** Single source for Anukriti URLs (portfolio, MVP, AWS Builder Center). */
export const ANUKRITI_URLS = {
  portfolio: "https://anukritiai.abhimanyurb.com/",
  mvp: "https://anukriti.abhimanyurb.com/",
  builderProjectArticle:
    "https://builder.aws.com/content/3A22NGhiEao2qxdd2Np4qCzahUV/aideas-predicting-drug-risks-before-clinical-trials-project-anukriti",
  top50FinalistsAnnouncement:
    "https://builder.aws.com/content/3BtudZ22UtOmORU4ii1Mgw0qyEI/aideas-our-50-finalists-announced",
  top300Semifinals:
    "https://builder.aws.com/content/3BEgQfoDlTFgf6mEH53H9KPrAXR/aideas-top-300-moving-to-the-judging-round",
} as const;

export const PROJECTS: Project[] = [
  {
    title: "Anukriti — Predicting Drug Risks Before Clinical Trials",
    description:
      "Anukriti is an AI-powered drug risk prediction system that identifies potential failures in drug candidates before clinical trials. It leverages machine learning and biological data to reduce cost, time, and risk in drug discovery.",
    highlights: [
      "Built for AWS 10,000 AI Ideas Challenge",
      "Selected among Top 50 global finalists",
      "Focused on early-stage drug safety prediction",
      "Combines AI and bioinformatics concepts",
    ],
    impactLine:
      "Aiming to reduce billion-dollar drug failures by identifying risks early in the pipeline.",
    tags: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "AWS",
      "Bioinformatics",
      "Data processing",
      "APIs",
    ],
    featured: true,
    link: ANUKRITI_URLS.portfolio,
    mvpLink: ANUKRITI_URLS.mvp,
    caseStudyLink: ANUKRITI_URLS.builderProjectArticle,
    pressLinks: [
      {
        label: "Top 50 finalists announced — AWS Builder Center",
        href: ANUKRITI_URLS.top50FinalistsAnnouncement,
      },
      {
        label: "Top 300 semifinalists — judging round",
        href: ANUKRITI_URLS.top300Semifinals,
      },
    ],
  },
  {
    title: "Chitti Pay",
    description:
      "Chitti Pay is a cross-platform mobile product for small chit-fund operators. Organizers sign in with Firebase, create groups, manage members, track monthly payments, and record auction outcomes. The app includes a dashboard and ledger-style views for collection status. A 7-day trial transitions to a monthly Razorpay subscription; payment secrets stay on a small Express backend while Firestore holds operational data. The codebase is a pnpm monorepo with TypeScript, Expo (React Native), shared OpenAPI → Orval client code, and Zod validation.",
    highlights: [
      "Chit group lifecycle: create groups, members, payments, and auction records",
      "Firebase Auth + Firestore for identity and real-time-friendly data",
      "Razorpay subscription flow with server-side order creation and verification",
      "Expo Router UI: dashboard, groups, ledger, profile, subscription paywall",
      "Typed API surface: OpenAPI spec, generated client hooks, shared Zod schemas",
      "Expo Application Services (EAS) for native iOS and Android builds",
    ],
    tags: [
      "TypeScript",
      "pnpm",
      "Expo",
      "React Native",
      "Firebase",
      "Firestore",
      "Express",
      "Razorpay",
      "OpenAPI",
      "Orval",
      "Zod",
      "TanStack Query",
    ],
  },
  {
    title: "Chitrakatha — Story operating system for solo novelists",
    description:
      "Chitrakatha is a canon-first story workspace: world bible, scenes, POV-locked novel drafts, and EPUB export for writers who care about continuity. A full-stack web app that treats continuity as a product feature, not an afterthought. Writers build a structured World Bible (setting + categorized rules), characters, and chapters/scenes in one place; AI generation is canon-aware using assembled project and scene context instead of repeated copy-paste prompts.",
    highlights: [
      "World Bible & characters — CRUD for world rules and character sheets; context flows into scene and project-level AI prompts.",
      "Scene workflow — TipTap-based scene editor with autosave, metadata (location, time, mood), and character mentions synced to the backend.",
      "Novel drafts — Prose from scenes with global POV modes (third-limited, first-person, omniscient third) and optional focal character; compare, regenerate from canon, and reconcile back into source scenes.",
      "Publish path — EPUB export with chapter structure and navigation.",
      "Stack — Next.js App Router, Prisma + PostgreSQL, TanStack Query, NextAuth; provider-agnostic AI with structured prompts.",
    ],
    impactLine:
      "For serious self-publishers and worldbuilders who want consistent canon, controllable AI, and a clean EPUB—without juggling Docs, Notion, and chat threads.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
      "NextAuth",
      "TipTap",
      "EPUB",
      "AI",
    ],
  },
  {
    title: "DevContext — AI-Powered Developer Context Engine",
    description:
      "A full-stack developer productivity tool that eliminates the \"wait, where was I?\" problem. Developers connect their GitHub account, select repositories and branches, and instantly receive AI-generated summaries of recent commits — complete with semantic diff analysis, smart next-step suggestions, and daily standup drafts.",
    highlights: [
      "GitHub OAuth with repository and branch selection",
      "Deep commit analysis: file-level diffs, addition/deletion stats, and cross-repo comparison mode",
      "AI briefings via GPT-4o (streaming API): Next Steps and Standup Update modes",
      "Dependency health: staleness detection across package.json, requirements.txt, go.mod, and Cargo.toml",
      "Freemium tiers (Free / Pro / Team) with monthly AI usage tracking and upgrade gates",
      "Workspace persistence and multi-repo compare (up to 3 repos)",
      "Admin dashboard: analytics, grant management, and live plan controls",
      "Stack — React 18 + Vite, Express 5, PostgreSQL + Drizzle, GitHub REST API, OpenAI, pnpm monorepo, Tailwind CSS, Framer Motion",
    ],
    impactLine:
      "Brings repo context, diffs, and standup-ready narratives into one flow so you spend less time reconstructing what changed.",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "GitHub API",
      "OpenAI",
      "GPT-4o",
      "pnpm",
      "Tailwind CSS",
      "Framer Motion",
    ],
    link: "https://devcontext.abhimanyurb.com/",
  },
  {
    title: "BlinkGuard",
    description: "An open-source browser extension and API service that pre-validates Solana Blinks (Blockchain Links) directly within Twitter/X. Provides real-time transaction simulation, community registry of malicious URLs, and visual safety indicators to protect users from drainers and suspicious contracts.",
    tags: ["Browser Extension", "Solana", "Web3", "TypeScript", "React", "Next.js", "PostgreSQL", "Security"],
    link: "https://blinkguard.abhimanyurb.com/",
    github: "https://github.com/Abm32/BlinkGuard",
    chromeStore: "https://chromewebstore.google.com/detail/bfdpibejhkfociohbnldkkmbbjbhgabj",
    images: [
      "/blinkguard/ss1.png",
      "/blinkguard/ss2.png",
      "/blinkguard/ss3.png",
      "/blinkguard/ss4.png",
      "/blinkguard/ss5.png"
    ]
  },
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
    title: "ETHMumbai Maxi Checker",
    description: "A maxi checker tool for ETHMumbai that measures the closeness and engagement of participants with the ETHMumbai community.",
    tags: ["Web3", "Community", "ETHMumbai", "Analytics"],
    link: "https://ethmumbai.maxichecker.abhimanyurb.com/"
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
    role: "Global Finalist — AWS 10,000 AI Ideas Challenge",
    organization: "Amazon Web Services",
    description:
      "Selected as a Top 50 global finalist in the AWS 10,000 AI Ideas Challenge for building Anukriti, an AI-driven solution for predicting drug risks before clinical trials.",
    icon: "emoji_events",
    tags: ["Top 50 worldwide", "AI × Healthcare", "Drug discovery"],
  },
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