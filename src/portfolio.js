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
  resumeLink:
    "https://docs.google.com/document/d/1OS-0p5zoaT1HHUy0wJeq8jvsqs3fD652uYxpF5yKXao/edit?usp=sharing",
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
        // "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Node, Express & Flask",
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
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
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
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
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
      title: "",
      subtitle: "",
      logo_path: "",
      alt_name: "",
      duration: "",
      descriptions: ["", "", ""],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "",
    //   subtitle: "",
    //   logo_path: "",
    //   certificate_link:
    //     "",
    //   alt_name: "",
    //   // color_code: "#2AAFED",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "",
    //   subtitle: "",
    //   logo_path: "",
    //   certificate_link:
    //     "",
    //   alt_name: "",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "",
    //   subtitle: "",
    //   logo_path: "",
    //   certificate_link:
    //     "",
    //   alt_name: "",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "",
    //   subtitle: "",
    //   logo_path: "",
    //   certificate_link:
    //     "",
    //   alt_name: "",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "",
    //   subtitle: "",
    //   logo_path: "",
    //   certificate_link:
    //     "",
    //   alt_name: "",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "",
    //   subtitle: "",
    //   logo_path: "",
    //   certificate_link:
    //     "",
    //   alt_name: "",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "",
    //   subtitle: "",
    //   logo_path: "",
    //   certificate_link:
    //     "",
    //   alt_name: "",
    //   // color_code: "",
    //   color_code: "#fffbf3",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for work. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer (Intern)",
          company: "Incluvie",
          company_url: "https://www.incluvie.com/",
          logo_path: "incluvie.jpg",
          duration: "Apr 2021 - Jun 2021",
          location: "Remote",
          description:
            "My time as Software Engineer Intern for Incluvie really helped me get better in a team environment and taught on how to fix bugs and implement different changes in a large codebase. Also gave me a better understanding of a product with many users and creating solutions to enhance the users experience. ",
          color: "#0071C5",
        },
        {
          title: "Web Developer (Contract)",
          company: "DNA Masks and More",
          company_url: "",
          logo_path: "dna.jpg",
          duration: "Jan 2021 - Apr 2021",
          location: "Remote",
          description:
            "Being the only Web Developer on contract for DNA Masks and More truly increase my ability to critical think of fast and effective solutions. This role also improve my understanding of many  different third party software's being used in one companies codebase.",
          color: "#ee3c26",
        },
        {
          title: "Web Developer (Contract)",
          company: "HQD Tech USA",
          company_url: "",
          logo_path: "hqd.jpg",
          duration: "Jan 2021 - Apr 2021",
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
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, REST APIs, and React Projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
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
      id: "1",
      name: "GetFit",
      url: "https://getfit2.herokuapp.com/",
      description:
        "A MERN Stack Application that helps you track your fitness goals day by day with User Authentication",
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
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
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
      id: "3",
      name: "Old Portfolio",
      url: "https://marksweetportfolio.herokuapp.com/",
      description: "This my MERN stack Portfolio.",
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
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
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
      id: "3",
      name: "Subtrack",
      url: "https://glacial-shore-36326.herokuapp.com/",
      description:
        "This applications intention was to help people keep track of their subscriptions along with how much it was costing them per month to help them with their budgeting.",
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
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
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
      id: "5",
      name: "Hava-Burger",
      url: "https://fast-retreat-55192.herokuapp.com/",
      description:
        "This application helped me learn how to use ORMs such as Sequelize and software design patterns like MVC.",
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
          iconifyClass: "logos-nodejs",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-sequelize",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
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
