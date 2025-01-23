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
    "https://drive.google.com/file/d/your-resume-link-here/view?usp=sharing", // Set to your resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SohamMhatre",
  linkedin: "https://www.linkedin.com/in/SohamMhatre/",
  gmail: "soham.mhatre@gmail.com",
  kaggle: "https://www.kaggle.com/SohamMhatre",
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

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "power-bi",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "XYZ University",
      logo: require("./assets/images/xyzUniversityLogo.png"),
      subHeader: "Master of Science in Big Data Analytics",
      duration: "September 2022 - April 2024",
      desc: "Specialized in cloud technologies, machine learning, and data visualization."
    },
    {
      schoolName: "ABC College",
      logo: require("./assets/images/abcCollegeLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2018 - April 2022",
      desc: "Ranked in the top 5% of the program with a focus on algorithms and data structures."
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
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst Intern",
      company: "Meri Skill",
      companylogo: require("./assets/images/meriSkillLogo.png"),
      date: "June 2024 – December 2024",
      desc: "Analyzed customer data to enhance user engagement, reducing churn rates by 20%."
    },
    {
      role: "Freelance Data Analyst",
      company: "Remote",
      companylogo: require("./assets/images/freelanceLogo.png"),
      date: "January 2023 – May 2024",
      desc: "Built automated dashboards and performed predictive modeling for client projects."
    }
  ]
};

// Big Projects Section

const bigProjects = {
  title: "Projects",
  subtitle: "SOME NOTEWORTHY PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/netflixAnalysisLogo.png"),
      projectName: "Netflix Data Analysis",
      projectDesc: "Explored trends and user preferences to improve content recommendations.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/SohamMhatre/netflix-analysis"
        }
      ]
    },
    {
      image: require("./assets/images/sleepAnalysisLogo.png"),
      projectName: "Sleep Deprivation Study",
      projectDesc: "Analyzed the correlation between mobile usage and sleep quality in young adults.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/SohamMhatre/sleep-study"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Contact Info Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-1234567890",
  email_address: "soham.mhatre@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "SohamMhatre", //Replace with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set true if you are looking for a job

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  contactInfo,
  twitterDetails,
  isHireable
};
