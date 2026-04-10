/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aditya's Portfolio",
  description:
    "AI/ML Engineer & Co-Founder with 2+ years building production agentic systems, LLM orchestration pipelines, and enterprise data infrastructure across healthcare and fintech. LinkedIn Top Voice in Data Science.",
  og: {
    title: "Aditya Siddharth Jyoti Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Aditya Siddharth Jyoti",
  logo_name: "Aditya Siddharth Jyoti",
  nickname: "Catachi",
  subTitle:
    "AI/ML Engineer & Co-Founder with 2+ years building production agentic systems, LLM orchestration pipelines, and enterprise data infrastructure across healthcare and fintech. Co-founded two US-incorporated, production-deployed AI products. LinkedIn Top Voice in Data Science.",
  resumeLink:
    "https://drive.google.com/file/d/1gBUmy0LbS71Il_UoigdNIhW5nqW8A6Rq/view?usp=sharing",
  portfolio_repository: "https://github.com/arch-adi21/heyadi",
  githubProfile: "https://github.com/arch-adi21",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/arch-adi21",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aditya-siddharth-jyoti-51335324b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube",
  //   backgroundColor: "#FF0000",
  // },
  {
    name: "Gmail",
    link: "mailto:asj.reach@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ai.adi_kun",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

// Skills
const skills = {
  data: [
    {
      title: "AI / Agentic Systems",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building production agentic systems with LangGraph, LangChain, and Plan-Before-Action reasoning",
        "⚡ Hybrid tool retrieval (BM25 + dense embeddings) with tiered model routing for cost optimization",
        "⚡ RAG architectures with Knowledge Graph-powered reasoning for clinical and financial intelligence",
        "⚡ Multi-agent orchestration, MCP integration, and real-time token economy tracking",
        "⚡ Demand forecasting with Bidirectional LSTM, data lake engineering with Apache Hudi & Dremio",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos:tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            color: "#1C3C3C",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Async REST APIs with FastAPI, WebSocket streaming, and Vercel AI SDK integration",
        "⚡ React.js and Vue.js frontends with cinematic 3D landing pages (WebGL, Framer Motion)",
        "⚡ Backend systems with Node.js, Express, Flask, and Prisma ORM",
        "⚡ Database design with PostgreSQL, MongoDB, Redis, Snowflake, and Apache Hudi",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "logos:fastapi-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "logos:react",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ AWS (EC2, S3, EKS, Lambda, Neptune, OpenSearch, Data Lake) and GCP (VM, Secret Manager)",
        "⚡ Docker, Kubernetes, nginx reverse proxy, CI/CD with GitHub Actions",
        "⚡ MLOps: model versioning, embedding pipelines, incremental sync, schema caching",
        "⚡ SOC 2 Type II aligned security, RBAC, BYOK encryption, audit logging",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "logos:google-cloud",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "logos:github-actions",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Technology Madras",
      subtitle: "Bachelor's in Data Science and Applications",
      logo_path: "iitm_logo.svg.webp",
      alt_name: "IIT Madras",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ I have studied Advanced Data Science, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, and AI Ethics.",
        "⚡ Team Lead at Google Developer Students Club",
        "⚡ Secretary at Kanha House IIT Madras",
        "⚡ Design Lead at COSMOS Tech Society",
        "⚡ Founder of Quantum E-Design Club",
      ],
      website_link: "https://study.iitm.ac.in/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    // ... (all commented certifications remain untouched)
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "AI/ML engineer and co-founder with 2+ years building production agentic systems, LLM orchestration pipelines, and enterprise data infrastructure across healthcare and fintech. Currently SDE-I at Zenalyst.ai building agentic AI infrastructure.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Professional Experience",
      work: true,
      experiences: [
        {
          title: "SDE-I, MLOps / Agentic AI Infrastructure",
          company: "Zenalyst.ai",
          company_url: "https://zenalyst.ai/",
          logo_path: "zenalyst.png",
          duration: "Aug 2025 - Present",
          location: "Remote",
          description:
            "Built core agentic reasoning loop with Plan-Before-Action system cutting 15-step chains to 2-3. Hybrid tool retrieval (BM25 + dense embeddings), three-layer caching (Redis, embedding, MongoDB), tiered model routing with ~30% cost reduction. Seven domain meta-tools for P2P procurement. Full LangGraph state machine with WebSocket streaming.",
          color: "#000000",
        },
        {
          title: "Co-Founder & CTO",
          company: "MedEvidences Corporation",
          company_url: "https://www.medevidences.com/",
          logo_path: "medevidences.png",
          duration: "Feb 2024 - Present",
          location: "Remote",
          description:
            "AI co-pilot for doctors and practitioners. RAG-based architecture with Knowledge Graph-powered reasoning (Neptune + Gremlin) for real-time clinical intelligence. AWS stack: Neptune, OpenSearch, Lambda. Led cross-functional team from 0 to live production deployment.",
          color: "#000000",
        },
        {
          title: "Co-Founder & CTO",
          company: "Delligen",
          company_url: "https://delligen.com/",
          logo_path: "delligen.svg",
          duration: "2024 - Present",
          location: "Remote",
          description:
            "Enterprise due diligence platform. 370+ source files, 60+ database models, 6-level data hierarchy. Multi-agent AI system with tiered model routing, 64-metric financial calculator, Voice AI interview system, 15+ data source connectors. SOC 2 Type II aligned. DD types: Credit, Equity, M&A, Commercial, Restructuring, Tax.",
          color: "#000000",
        },
        {
          title: "MLOps Intern",
          company: "A2B (Adyar Ananda Bhawan)",
          company_url: "#",
          logo_path: "a2b.png",
          duration: "Feb 2025 - May 2025",
          location: "Remote",
          description:
            "Demand forecasting engine for 1,000+ SKU-store pairs using Bidirectional LSTM. Data architecture on Apache Hudi + AWS Data Lake with Dremio. Full MLOps ownership from data ingestion to AWS production deployment across 500+ stores.",
          color: "#000000",
        },
        {
          title: "Software Engineer Intern",
          company: "BACUTI",
          company_url: "https://www.bacuti.com/",
          logo_path: "bacuti.png",
          duration: "May 2024 - Jan 2025",
          location: "Remote",
          description:
            "Async REST APIs in FastAPI, optimized Dockerized microservice containers, PostgreSQL ETL pipelines with clean ORM patterns. React.js frontend features and custom automated test frameworks.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Developer Student Clubs IIT Chennai",
          company: "Google Developer Student Clubs",
          company_url:
            "https://gdsc.community.dev/indian-institute-of-technology-chennai-india/",
          logo_path: "google_logo.png",
          duration: "June 2023 - present",
          location: "Chennai, India",
          description:
            "Speaker and team lead for GenAI and startup talks. Promoted AI awareness and technical leadership.",
          color: "#4285F4",
        },
        {
          title: "Kanha House Secretary",
          company: "Kanha House IIT Madras",
          company_url: "https://kanha.iitmbs.org",
          logo_path: "Kanha_Logo.png",
          duration: "Sep 2022 - present",
          location: "Chennai, India",
          description:
            "Lead a team of 50+ people and managed 3k+ students under a democratic administration role",
          color: "#D83B01",
        },
        {
          title: "Founder of Quantum E-Design Club",
          company: "Quantum E-Design Club",
          company_url: "https://iitmtechsociety.org/",
          logo_path: "quant.jpeg",
          duration: "Sep 2023 - present",
          location: "Chennai, India",
          description:
            "Trained 100+ students on the AI aspect of designing contents, graphics, animations and prints",
          color: "#000000",
        },
        {
          title: "Design Lead at COSMOS Tech Society",
          company: "COSMOS Tech Society",
          company_url: "https://www.linkedin.com/company/iitmtechsociety/",
          logo_path: "cosmos.jpeg",
          duration: "Nov 2023 - present",
          location: "Chennai, India",
          description:
            "Started as a core member, created awareness about integration of AI tools in graphic design",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Co-founded two US-incorporated, production-deployed AI products. My projects span enterprise due diligence, clinical AI, agentic systems, and MLOps infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // ... (all commented publications remain untouched)
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "catachi.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with AI/ML, Agentic Systems, Full Stack Development, Cloud Infrastructure, and MLOps.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bhuvaneshwar, Odisha, India - 751024",
    locality: "Bhuvaneshwar",
    country: "India",
    postalCode: "751024",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Bhubaneswar,+Odisha/@20.3009762,85.664562,12z/data=!3m1!4b1!4m6!3m5!1s0x3a1909d2d5170aa5:0xfc580e2b68b33fa8!8m2!3d20.2960587!4d85.8245398!16zL20vMDNjenFz?entry=ttu",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91 7903281977",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
