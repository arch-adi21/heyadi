/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aditya's Portfolio",
  description:
    "AI Visionary Leader & Data Research Engineer with 2+ years experience building enterprise AI solutions, production-grade LLM systems, and multimodal products at scale. LinkedIn Top Voice in Data Science recognized for pioneering work in LLM hallucination mitigation.",
  og: {
    title: "Aditya Siddharth Jyoti Portfolio",
    type: "website",
    // url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Aditya Siddharth Jyoti",
  logo_name: "Aditya Siddharth Jyoti",
  nickname: "Catachi",
  subTitle:
    "AI Visionary Leader & Data Research Engineer with 2+ years experience building enterprise AI solutions, production-grade LLM systems, and multimodal products at scale. LinkedIn Top Voice in Data Science recognized for pioneering work in LLM hallucination mitigation.",
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
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building scalable, production-ready LLM and AI agentic systems (CrewAI, LangChain)",
        "⚡ Architecting and optimizing RAG pipelines for clinical and financial data (2M+ daily queries)",
        "⚡ Implementing hallucination detection layers using BERT and custom classifiers",
        "⚡ Data lake engineering with Apache Hudi, Dremio, and SEC Filing Analysis",
        "⚡ Compliance: HIPAA, GDPR, and Financial Data Governance",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Flask, Vue.js, ReactJS frameworks",
        "⚡ Created scalable backend (Flask, Celery, Redis), integrated Vue.js frontend, and automated task scheduling",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Implemented database integrity and validation with SQLite, PostgreSQL, and Data Lake frameworks",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vue-dot-js",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS (EC2, S3, EKS, Lambda, Neptune, OpenSearch), Docker, Kubernetes",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
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
    "AI leader & data engineer with 2+ years of experience: CTO at MedEvidences (RAG, LLM, AWS), MLOps Intern at A2B (LSTM, Hudi, Dremio), Software Engineer Intern at BACUTI (KAN/CNN, async APIs), and Python Tutor. Led teams, optimized cloud costs, and delivered production-grade AI systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Co-Founder & CTO",
          company: "MedEvidences Corporation",
          company_url: "https://www.medevidences.com/",
          logo_path: "medevidences.png",
          duration: "Feb 2024 - Present",
          location: "remote",
          description:
            "Leading the technical team in deep-tech development of AI-powered evidence-based platform for medical professionals. Led team deploying AWS-based AI solutions (Neptune, OpenSearch) handling 2M+ daily queries. Implemented hallucination detection layer with 92.3% accuracy using custom BERT classifiers.",
          color: "#000000",
        },
        {
          title: "MLOps Intern",
          company: "A2B (Adyar Ananda Bhawan)",
          company_url: "#",
          logo_path: "a2b.png",
          duration: "Feb 2025 - June 2025",
          location: "remote",
          description:
            "Spearheaded forecasting AI engine for 1000+ item-store pairs using advanced LSTM and Apache Hudi. Delivered scalable, production-grade predictions with AWS deployment.",
          color: "#000000",
        },
        {
          title: "Software Engineer Intern",
          company: "BACUTI",
          company_url: "https://www.bacuti.com/",
          logo_path: "bacuti.png",
          duration: "May 2024 - Jan 2025",
          location: "remote",
          description:
            "Developed KAN/CNN-based carbon emission predictor (97% accuracy), engineered async APIs, optimized Dockerized AWS EKS deployments, and contributed to Vue.js frontend.",
          color: "#000000",
        },
        {
          title: "Python Tutor (Freelance)",
          company: "Indian Institute of Technology Madras",
          company_url: "https://www.delhivery.com/",
          logo_path: "iitm_logo.svg.webp",
          duration: "2022 - Present",
          location: "Chennai, India",
          description:
            "Taught 50+ students in Python, Flask, and ML basics with a project-based approach.",
          color: "#ee3c26",
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
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
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
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React ,Cloud and Opensource Development.",
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
