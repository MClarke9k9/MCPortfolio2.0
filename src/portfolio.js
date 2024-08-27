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
  subTitle: "Software Engineer, REST API Expert. Always learning.",
  resumeLink: "https://bold.pro/my/mark-clarke-240228141826",
  mail: "MClarke9k9@yahoo.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/mclarke9k9",
  linkedin: "https://www.linkedin.com/in/mark-clarke-05135a1a8/",
  gmail: "MClarke9k9@yahoo.com",
  gitlab: "https://gitlab.com/MClarke9k9",
  facebook: "https://www.facebook.com/MClarke9k9/",
  twitter: "https://twitter.com/MarkCla30731083",
  instagram: "https://www.instagram.com/captianclarke/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express, Java & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS / Google Cloud",
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
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon:nodejs-wordmark",
          style: {
            backgroundColor: "",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
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
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
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
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
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
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
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
    {
      title: "University of Central Florida",
      subtitle: "Bachelor's degree, Communications",
      logo_path: "ucf.png",
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
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Fondational Level Certifcation",
      logo_path: "awstry.png",
      certificate_link: "",
      alt_name: "segrers",
      // color_code: "#2AAFED",
      color_code: "#FFA500",
    },
    {
      title: "LSU DevOps Engineer Certifcation",
      subtitle: "DevOps College Certification",
      logo_path: "lsutry.png",
      certificate_link: "",
      alt_name: "segrers",
      // color_code: "#2AAFED",
      color_code: "#A020F0",
    },
    {
      title: "Java React Native",
      subtitle: "Cognizant Certification",
      logo_path: "smudallas_logo.png",
      certificate_link: "",
      alt_name: "segrers",
      // color_code: "#2AAFED",
      color_code: "#0000FF",
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: "Associate Level Certifcation",
      logo_path: "awstry.png",
      certificate_link: "",
      alt_name: "segrers",
      // color_code: "#2AAFED",
      color_code: "#FFA500",
    },
    {
      title: "University of Miami",
      subtitle: "Full Stack Web Development",
      logo_path: "um.png",
      certificate_link: "",
      alt_name: "segrers",
      // color_code: "#2AAFED",
      color_code: "#008000",
    },
    {
      title: "University of Central Florida",
      subtitle: "Bachelor's Degree in Communications",
      logo_path: "ucf.png",
      certificate_link: "",
      alt_name: "segrers",
      // color_code: "#2AAFED",
      color_code: "#FFD700",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've worked as a software engineer intern and a web developer on several projects. Besides this, I also work my own projects, and I'm actively looking for new opportunities. I love organizing workshops and sharing my knowledge with others.",
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
          duration: "Aug 2022 - Feb 2024",
          location: "Remote",
          description:
            "• Demonstrated fluid ability to troubleshoot, resolve and provide code level analysis for complex technical issues.\n• In-depth understanding of how SaaS products work – possess a deep technical understanding as well as a basic understanding of integrated systems.\n• Working knowledge of the components in a web applications stack.\n• Demonstrated ownership and coordinated successfully with engineering and escalation teams to achieve resolution of customer issues and requests.\n• Experience in several development projects coding in Java and troubleshooting large applications built on Java.\n• Proven ability to maintain focus and work effectively with uncompromising attention to detail.\n• Ability to work closely with high-value customer administrators and developers that have a variety of experience and skillset.\n• Excellent time management skills and able to work independently to provide workable solutions.\n• Performed thorough research to successfully resolve or quickly escalate customer inquiries for quick solution.\n• Ability to work with other teams to resolve cases.\n• Excellent technical and communication skills for research and discovery to clearly articulate solutions to complex technical problems.\n•Identified and helped resolve trends with application issues and knowledge gaps within the organization.",
          color: "#0071C5",
        },
        {
          title: "Back End Engineer",
          company: "undefined.ai",
          company_url: "",
          logo_path: "undefiniedai.jpg",
          duration: "Mar 2022 - May 2022",
          location: "Remote",
          description:
            "Work in the entire lifecycle of the code, from user stories to tests to code to release.\n•Troubleshoot and debug code and back end issues.\n•Write unit and integration tests with a TDD approach (red, green, refactor).\n•Implement various third-party APIs and services in the backend to further advance the user experience.",
          color: "#ee3c26",
        },
        {
          title: "Software Engineer II",
          company: "snapIoT (LabCorp)",
          company_url: "https://snapiot.com/",
          logo_path: "snapiot.jpg",
          duration: "Oct 2021 - Mar 2022",
          location: "Remote",
          description:
            "•Developed software solutions using company software\n•Designed, coded, and debugged applications in various software languages.\n•Worked with project manager and product owners to meet specific needs.\n•Collaborated with other developers to design and optimize software used.\n•Followed software development lifecycle.\n•Documented and maintained software functionality.\n•Gained knowledge of professional software engineering and best practices for full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.\n•Experienced in Scrum/Agile development methodologies.\n•Acquired familiarity with continuous integration and deployment processes.\n•Used strong analytical and critical thinking skills•Developed software solutions using company software •Designed, coded, and debugged applications in various software languages •Worked with project manager and product owners to meet specific needs •Collaborated with other developers to design and optimize software used •Followed software development lifecycle •Documented and maintained software functionality •Gained knowledge of professional software engineering and best practices for full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations •Experienced in Scrum/Agile development methodologies •Acquired familiarity with continuous integration and deployment processes •Used strong analytical and critical thinking skills.",
          color: "#0071C5",
        },
        {
          title: "Software Engineer Intern",
          company: "Incluvie",
          company_url: "https://www.incluvie.com/",
          logo_path: "incluvie.jpg",
          duration: "Apr 2021 - Jun 2021",
          location: "Remote",
          description:
            "•Worked in a team-oriented environment to fix bugs and implement different changes in a large codebase.\n•Developed a better understanding of a product with many users and create solutions to enhance the user's experience.\n•Helped implement software to further the site's performance on the Podcast page.\n•Refactored code to raise the Progressive Web App score.\n•Improved the site's semantics, helping it become more accessible for users.",
          color: "#ee3c26",
        },
        {
          title: "Web Developer (Contract)",
          company: "DNA Masks and More",
          company_url: "",
          logo_path: "dna.jpg",
          duration: "Jan 2021 - Apr 2021",
          location: "Remote",
          description:
            "•Increased my ability to critically think of fast and effective solutions.\n•Improved my understanding of many different third-party software's being used in one company's codebase.\n•Implemented software to sort multiple items, improving customer order retrieval time by 43%.  \n•Improved UX problems the company faced, increasing the customer return rate by 16%.",
          color: "#0071C5",
        },
        {
          title: "Web Developer (Contract)",
          company: "HQD Tech USA",
          company_url: "",
          logo_path: "hqd.jpg",
          duration: "Nov 2021 - Apr 2021",
          location: "Remote",
          description:
            "Becoming a Junior Web Developer for HQD Tech USA gave me my first insight on web development for multiple different vendors. This role taught me to importance of testing and running my software before I deployed it for the customer, also helped me learn how to communicate with Lead Developers and the customers.",
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description: "",
    //       color: "#196acf",
    //     },
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //       "",
    //       color: "#040f26",
    //     },
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "#5a900f",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of the latest technologies, utilizing a variety of cutting edge tools to produce the best results possible. I have extensive experience with Backend Projects, REST APIs, and React Projects. Below are some of my projects.",
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
      id: "0",
      name: "AlgoSorter",
      url: "https://mclarke9k9.github.io/AlgoSorter/",
      description:
        "This Application showcases my front-end development skills & my understanding of Sorting Algorithms.",
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
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
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
    {
      id: "4",
      name: "Weather Dashboard 2.0",
      url: "https://mclarke9k9.github.io/WeatherDashboard2.0/",
      description:
        "This is React Version of my previous WeatherDashboard Application.",
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
          name: "Sass",
          iconifyClass: "logos-sass",
        },
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "User Directory",
      url: "https://mclarke9k9.github.io/UserDirectory/",
      description:
        "This Application showcases my skills on importing data from third party API, also implement a search bar in order to filter through the Users.",
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
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "6",
      name: "README Generator",
      url: "https://github.com/MClarke9k9/README-For-You",
      description:
        "A NodeJS script that generates a README markdown file through the command prompt automatically.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "7",
      name: "GridHighlighter",
      url: " https://mclarke9k9.github.io/GridHighlighter/",
      description:
        "This is a quick project I created to boost my vanilla Javascript skills, Enjoy!",
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
          name: "JavaScript",
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
