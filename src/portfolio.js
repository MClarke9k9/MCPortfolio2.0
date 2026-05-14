/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "",
  title2: "Mark Clarke",
  logo_name: "mark.C()",
  nickname: "AI / Kobe",
  full_name: "Mark Clarke",
  subTitle: "IT professional thats always learning.",
  resumeLink: "",
  mail: "MClarke9k9@yahoo.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/mclarke9k9",
  linkedin: "https://www.linkedin.com/in/mark-clarke-05135a1a8/",
  gmail: "MClarke9k9@yahoo.com",
  gitlab: "",
  facebook: "",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Design, deploy, and manage scalable cloud infrastructure using platforms like Microsoft Azure.",
        "⚡ Automate infrastructure provisioning with tools like Terraform and CI/CD pipelines",
        "⚡ Secure cloud environments by implementing identity, access control, and network security best practices.",
        "⚡ Monitor, troubleshoot, and optimize cloud resources for performance, reliability, and cost efficiency.",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#7B42BC",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "logos:google-cloud",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "Software Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Design and build backend systems and APIs using languages like Typescript, Python and Java.",
        "⚡ Develop and maintain clean, modular, and reusable code following software engineering best practices.",
        "⚡ Debug, test, and optimize code to ensure performance, scalability, and reliability.",
        "⚡ Integrate third-party services and APIs to build full, production-ready applications.",
      ],
      softwareSkills: [
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
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
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-light",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Springboot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
      ],
    },
    {
      title: "Technical Support",
      fileName: "TechnicalSupportImg",
      skills: [
        "⚡ Troubleshoot customer issues across applications, APIs, integrations, and cloud environments.",
        "⚡ Analyze logs, reproduce defects, and document clear resolution paths for technical and non-technical users.",
        "⚡ Partner with engineering teams to escalate bugs, validate fixes, and improve product reliability.",
        "⚡ Build knowledge base articles and support workflows that reduce repeat issues and improve response time.",
      ],
      softwareSkills: [
        {
          skillName: "Active Directory",
          fontAwesomeClassname: "logos:microsoft-azure",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "logos:slack-icon",
          style: {
            color: "#4A154B",
          },
        },
        {
          skillName: "Microsoft Teams",
          fontAwesomeClassname: "logos:microsoft-teams",
          style: {
            color: "#5059C9",
          },
        },
        {
          skillName: "Zendesk",
          fontAwesomeClassname: "simple-icons:zendesk",
          style: {
            color: "#03363D",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Miami",
      subtitle: "Full Stack Web Development",
      logo_path: "um.png",
      alt_name: "sdr",
      duration: "",
      descriptions: ["lorum", "lorum", "lorum"],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CompTIA A+",
      subtitle: "IT Support and Technical Operations",
      logo_path: "compA+.png",
      certificate_link:
        "https://www.credly.com/badges/c5f0bd27-1ddc-4ece-bca0-ce7c8bea4157/public_url",
      alt_name: "CompTIA A+ certification",
      color_code: "#C8102E",
    },
    {
      title: "CompTIA Network+",
      subtitle: "Networking Concepts and Infrastructure",
      logo_path: "compnetwork+.jpg",
      certificate_link:
        "https://www.credly.com/badges/e62ec5d3-8063-438c-8d90-3ff9ceb87f5c/public_url",
      alt_name: "CompTIA Network+ certification",
      color_code: "#C8102E",
    },
    {
      title: "CompTIA Security+",
      subtitle: "Security Concepts and Best Practices",
      logo_path: "compsecurity+.png",
      certificate_link:
        "https://www.credly.com/badges/4c3ffebd-b3fd-414a-9fda-1cd149e01396/public_url",
      alt_name: "CompTIA Security+ certification",
      color_code: "#C8102E",
    },
    {
      title: "ITIL Foundation v4",
      subtitle: "IT Service Management",
      logo_path: "ITIL-4-Certification.webp",
      certificate_link: "",
      alt_name: "ITIL Foundation v4 certification",
      color_code: "#653279",
    },
    {
      title: "Google Cloud Engineer Associate",
      subtitle: "Google Cloud Platform Administration",
      logo_path: "gcpcert.png",
      certificate_link:
        "https://www.credly.com/badges/f0a5e9d6-ce64-4790-89ce-04f7c2299b6b/public_url",
      alt_name: "Google Cloud Engineer Associate certification",
      color_code: "#4285F4",
    },
    {
      title: "Microsoft Certified: Identity and Access Administrator",
      subtitle: "Microsoft Entra Identity and Access",
      logo_path: "azIAM.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/28990258/363A8AF82D6734EA?sharingId=FFD22D8E1DF2A9AC",
      alt_name: "Microsoft Identity and Access Administrator certification",
      color_code: "#0078D4",
    },
    {
      title: "Microsoft Certified: Endpoint Administrator",
      subtitle: "Microsoft Intune and Endpoint Management",
      logo_path: "azendpoint.webp",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/28990258/D640E9DA44BADB8E?sharingId=FFD22D8E1DF2A9AC",
      alt_name: "Microsoft Endpoint Administrator certification",
      color_code: "#0078D4",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "Microsoft Azure Cloud Fundamentals",
      logo_path: "azurefun.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/28990258/749A25CFB519F081?sharingId=FFD22D8E1DF2A9AC",
      alt_name: "Microsoft Azure Fundamentals certification",
      color_code: "#0078D4",
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      subtitle: "Microsoft Azure Administration",
      logo_path: "azadmin.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/28990258/D99E7D2C4B7AB492?sharingId=FFD22D8E1DF2A9AC",
      alt_name: "Microsoft Azure Administrator Associate certification",
      color_code: "#0078D4",
    },
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      subtitle: "Microsoft Azure Architecture",
      logo_path: "azexpert.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/28990258/FD673BB35D2B4F39?sharingId=FFD22D8E1DF2A9AC",
      alt_name: "Microsoft Azure Solutions Architect Expert certification",
      color_code: "#0078D4",
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle: "AWS Cloud Fundamentals",
      logo_path: "awscloudprac.png",
      certificate_link:
        "https://www.credly.com/badges/21195751-4b7f-4de3-b8f8-bdf17a9bdac3/public_url",
      alt_name: "AWS Cloud Practitioner",
      color_code: "#FFA500",
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "",
  description:
    "Hands-on experience supporting enterprise platforms, troubleshooting complex technical issues, and building reliable software solutions across cloud, support, and engineering environments.”",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Technical Support Engineer",
          company: "ServiceNow",
          company_url: "https://servicenow.com/",
          logo_path: "servicenow.jpg",
          duration: "",
          location: "Remote",
          description: "",
          color: "#0071C5",
        },
        {
          title: "Back End Engineer",
          company: "undefined.ai",
          company_url: "",
          logo_path: "undefiniedai.jpg",
          duration: "",
          location: "Remote",
          description: "",
          color: "#ee3c26",
        },
        {
          title: "Software Engineer II",
          company: "snapIoT (LabCorp)",
          company_url: "https://snapiot.com/",
          logo_path: "snapiot.jpg",
          duration: "",
          location: "Remote",
          description: "",
          color: "#0071C5",
        },
        {
          title: "Software Engineer Intern",
          company: "Incluvie",
          company_url: "https://www.incluvie.com/",
          logo_path: "incluvie.jpg",
          duration: "",
          location: "Remote",
          description: "",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mark.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently, but when I do something awesome I document it so it can be helpful to others. I write on Dev.to.",
    link: "https://dev.to/mclarke9k9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "3",
      name: "Cloud Issue Tracker API",
      url: "https://github.com/MClarke9k9/Cloud-Issue-Tracker-API",
      description:
        "A cloud-focused issue tracking API for managing tickets, workflows, and support operations.",
      languages: [
        { name: "TypeScript", iconifyClass: "logos-typescript-icon" },
        { name: "PostgreSQL", iconifyClass: "logos-postgresql" },
        { name: "Docker", iconifyClass: "logos-docker-icon" },
        { name: "GitHub Actions", iconifyClass: "logos-github-actions" },
        { name: "Prisma", iconifyClass: "logos-prisma" },
      ],
    },
    {
      id: "4",
      name: "Airline Data Pipeline",
      url:
        "https://github.com/MClarke9k9/Airline-Data-Pipeline-with-Automated-monitoring-and-notification-system",
      description:
        "An automated airline data pipeline with monitoring and notification workflows.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Azure",
          iconifyClass: "logos-microsoft-azure",
        },
        {
          name: "Terraform",
          iconifyClass: "simple-icons:terraform",
        },
        {
          name: "Terminal",
          iconifyClass: "logos-terminal",
        },
      ],
    },
    {
      id: "5",
      name: "Azure Start and Stop VM",
      url: "https://github.com/MClarke9k9/Azure-Start-and-Stop-VM",
      description:
        "Azure automation scripts for starting and stopping virtual machines to manage cost and operations.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Azure",
          iconifyClass: "logos-microsoft-azure",
        },
        {
          name: "Terraform",
          iconifyClass: "simple-icons:terraform",
        },
        {
          name: "Terminal",
          iconifyClass: "logos-terminal",
        },
      ],
    },
    {
      id: "6",
      name: "Translator Using Azure AI and Python",
      url: "https://github.com/MClarke9k9/Translator-using-Azure-AI-and-Python",
      description:
        "A Python translator app that uses Azure AI services for language translation.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Azure AI",
          iconifyClass: "logos-microsoft-azure",
        },
        {
          name: "Terraform",
          iconifyClass: "simple-icons:terraform",
        },
      ],
    },
    {
      id: "7",
      name: "Migrate Data to Cloud with Azure",
      url: "https://github.com/MClarke9k9/Migrate-data-to-cloud-with-Azure",
      description:
        "A project focused on migrating data into Azure cloud services and validating the transfer process.",
      languages: [
        {
          name: "Azure",
          iconifyClass: "logos-microsoft-azure",
        },
        {
          name: "Terraform",
          iconifyClass: "simple-icons:terraform",
        },
      ],
    },
    {
      id: "8",
      name: "Working with WAF in Azure",
      url: "https://github.com/MClarke9k9/Working-with-WAF-in-Azure",
      description:
        "Azure Web Application Firewall configuration and security practice for protecting web workloads.",
      languages: [
        {
          name: "Azure",
          iconifyClass: "logos-microsoft-azure",
        },
        {
          name: "Terraform",
          iconifyClass: "simple-icons:terraform",
        },
      ],
    },
    {
      id: "9",
      name: "Microsoft Active Directory Entra ID",
      url: "https://github.com/MClarke9k9/Microsoft-Active-Directory-Entra-ID",
      description:
        "Identity and access management practice using Microsoft Active Directory and Entra ID.",
      languages: [
        {
          name: "Microsoft Azure",
          iconifyClass: "logos-microsoft-azure",
        },
        {
          name: "Microsoft",
          iconifyClass: "logos-microsoft-icon",
        },
        {
          name: "PowerShell",
          iconifyClass: "logos-terminal",
        },
      ],
    },
    {
      id: "10",
      name: "Network Security",
      url: "https://github.com/MClarke9k9/Network-Security",
      description:
        "Network security labs and configurations focused on secure infrastructure operations.",
      languages: [
        {
          name: "PowerShell",
          iconifyClass: "logos-terminal",
        },
        {
          name: "Windows",
          iconifyClass: "logos-microsoft-windows",
        },
      ],
    },
    {
      id: "11",
      name: "Windows SysAdmin Scripts",
      url: "https://github.com/MClarke9k9/Windows-SysAdminScripts",
      description:
        "Windows system administration scripts for automation, troubleshooting, and operational support.",
      languages: [
        {
          name: "PowerShell",
          iconifyClass: "logos-terminal",
        },
        {
          name: "Windows",
          iconifyClass: "logos-microsoft-windows",
        },
      ],
    },
    {
      id: "2",
      name: "My K-means",
      url: "https://mclarke9k9.github.io/My-Kmeans/",
      description:
        "This is my front-end development, visualization, and understanding of the K-means Algorithm.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
