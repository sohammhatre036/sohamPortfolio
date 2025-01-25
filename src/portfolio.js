/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Soham Mhatre",
  title: "Hi all, I'm Soham",
  subTitle: emoji(
    "A passionate Data Analyst with expertise in Big Data Analytics and experience in building insights through data visualization and statistical modeling. Skilled in Python, SQL, and cloud technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sohammhatre036",
  linkedin: "https://www.linkedin.com/in/soham-mhatre-03618cs",
  gmail: "sohammhatre036@gmail.com",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA ANALYST WHO LOVES UNCOVERING INSIGHTS AND BUILDING STRATEGIES",
  skills: [
    emoji(
      "⚡ Develop and automate data pipelines to process and analyze large datasets"
    ),
    emoji("⚡ Create interactive dashboards and visualizations using Tableau and Power BI"),
    emoji(
      "⚡ Perform statistical analysis and predictive modeling to uncover actionable insights"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 softwareSkills: [
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Power BI",
    fontAwesomeClassname: "fas fa-chart-pie"
  },
  {
    skillName: "Tableau",
    fontAwesomeClassname: "fas fa-chart-bar"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "R",
    fontAwesomeClassname: "fab fa-r-project"
  },
  {
    skillName: "Excel",
    fontAwesomeClassname: "fas fa-file-excel"
  },
  {
    skillName: "Big Data (Hadoop Ecosystem)",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-leaf"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "AI/ML",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "Data Modeling",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "DAX",
    fontAwesomeClassname: "fas fa-code"
  }
],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jai Hind College",
      logo: require("./assets/images/jaihind.jpg"),
      subHeader: "Master of Science in Big Data Analytics",
      duration: "2024 - 2026",
      desc: "GPA 8.9 / 10",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "SIES , University Of Mumbai",
      logo: require("./assets/images/sies.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2021 - 2024",
      desc: "GPA 9.59 / 10",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "75%"
    },
    {
      Stack: "Big Data Technologies",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section, defaults to false
};

// Work experience section

const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: "Software Engineer",
//       company: "Facebook",
//       companylogo: require("./assets/images/facebookLogo.png"),
//       date: "June 2018 – Present",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       role: "Front-End Developer",
//       company: "Quora",
//       companylogo: require("./assets/images/quoraLogo.png"),
//       date: "May 2017 – May 2018",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       role: "Software Engineer Intern",
//       company: "Airbnb",
//       companylogo: require("./assets/images/airbnbLogo.png"),
//       date: "Jan 2015 – Sep 2015",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
//   ]
 };

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
//   showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
//   display: true // Set false to hide this section, defaults to true
 };

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "Some of my notable projects and contributions",
  projects: [
    {
      // image: require("./assets/images/netflixDashboardLogo.webp"), // Replace with a relevant image
      projectName: "Netflix Analysis",
      projectDesc:
        "Conducted an in-depth analysis of user behavior on Netflix using Power BI to uncover patterns and insights for content creation and platform optimization.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/sohammhatre036/Netflix_analysis"
        }
      ]
    },
    {
      // image: require("./assets/images/quizAppLogo.webp"), // Replace with a relevant image
      projectName: "Quiz App",
      projectDesc:
        "Developed a MongoDB-backed Quiz App using Streamlit for the frontend. The app allows users to take quizzes and displays scores upon submission.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/sohammhatre036/Mongo-based-Quiz-App"
        }
      ]
    },
    {
      // image: require("./assets/images/salesDashboardLogo.webp"), // Replace with a relevant image
      projectName: "Sales Dashboard",
      projectDesc:
        "Created an interactive Power BI dashboard to visualize key sales metrics, enabling businesses to make data-driven decisions.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/sohammhatre036/Sales-Dashboard-Power-BI"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements, Certifications, Award Letters, and Other Cool Stuff!",

  achievementsCards: [
    {
      title: "SQL and Relational Databases",
      subtitle: "Completed certification from Cognitive Classes.",
      image: require("./assets/images/sql.jpg"), // Replace with an appropriate image
      imageAlt: "SQL Certification Logo",
      footerLink: []
    },
    // {
    //   title: "Data Visualization with Power BI",
    //   subtitle: "Certification course by Great Learning.",
    //   image: require("./assets/images/powerBICertificationLogo.webp"), // Replace with an appropriate image
    //   imageAlt: "Power BI Certification Logo",
    //   footerLink: []
    // },
    {
      title: "Big Data Computing",
      subtitle: "Completed NPTEL online course.",
      image: require("./assets/images/nptel.jpg"), // Replace with an appropriate image
      imageAlt: "Big Data Certification Logo",
      footerLink: []
    },
    // {
    //   title: "Python for Data Analysis",
    //   subtitle: "Certification course by Great Learning.",
    //   image: require("./assets/images/pythonCertificationLogo.webp"), // Replace with an appropriate image
    //   imageAlt: "Python Certification Logo",
    //   footerLink: []
    // }
  ],
  display: true // Set false to hide this section
};

// Blogs Section

const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
 };

// Podcast Section

const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8779302342",
  email_address: "sohammhatre036@gmail.com"
};

const twitterDetails = {
  // userName: "twitter", //Replace "twitter" with your twitter username without @
  // display: true // Set true to display this section, defaults to false
};
 



const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
   illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
