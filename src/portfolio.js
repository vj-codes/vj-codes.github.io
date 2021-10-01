/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vaishnavi Joshi",
  description:
    "Hey! I am a self taught developer and freelancer from Pune, India who aims to solve real world problems. Also curious about UI/UX.",
  og: {
    title: "Vaishnavi Joshi",
    type: "website",
    url: "https://vj-codes.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Vaishnavi Joshi",
  logo_name: "Vaishnavi Joshi",
  subTitle:
    "Hey! I am Vaishnavi, a self taught developer and freelancer from Pune, India who aims to solve real world problems. Also curious about UI/UX. ",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/vj-codes",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vaishnavi-joshi-aaa7091a5/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vj.codes29@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/curious_wiki",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Medium",
    link: "https://medium.com/@vj_codes",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using HTML, CSS and Javascript",
        "⚡ Developing mobile applications using React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Python, Flask",
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
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "fa-android",
          style: {
            color: "#3DDC84",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing friendly user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Indian Certificate of Secondary Education (ICSE)",
      subtitle: "10th grade from St.Helena's High School,Pune",
      logo_path: "cisce-logo.png",
      duration: "2019",
      descriptions: ["⚡ Scored 92%"],
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      subtitle:
        "12th grade with Maths and Computer Science as majors from Pune",
      logo_path: "hsc-logo.png",
      duration: "2021",
      descriptions: ["⚡ //To be updated after results "],
    },
    {
      title: "Bachelor of Technology (B.tech)",
      subtitle: "//university name to be added here",
      logo_path: "iitb_logo.png",
      duration: "2025",
      descriptions: ["⚡ //To be updated after starting a university "],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle:
    "Volunteership, Programs I've Particpated in, Acheivements, Internships and Work ",
  description:
    "I am involved with tech communities like Facebook Developer Circle: Pune, Google Developer Groups: Pune, AnitaB.org Open Source and love to participate and volunteer for various programs and events. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Project Maintainer",
          company: "Anitab.org",
          company_url: "https://anitab.org/",
          logo_path: "anitab_logo.png",
          duration: "February 2021 - Present",
          location: "Remote",
          description:
            "Volunteering as a Project Maintainer for Mentorship Backend and Mentorship Android.",
          color: "#0C9D58",
        },
        {
          title: "Design Team",
          company: "Anitab.org",
          company_url: "https://anitab.org/",
          logo_path: "anitab_logo.png",
          duration: "April 2020 - Present",
          location: "Remote",
          description:
            "Volunteering as a member of the Design Team at Anitab.org which is responsible for the designing part of the community projects.",
          color: "#0C9D58",
        },
        {
          title: "Project Manager",
          company: "AnitaB.org",
          company_url: "https://anitab.org/",
          logo_path: "anitab_logo.png",
          duration: "April 2020 - February 2021",
          location: "Remote",
          description:
            "Volunteered as a Project Manager for two projects - Mentorship Backend and Mentorship Android. As a Project Manager I was responsible for traiging the issues and pull requests and validating them as well. ",
          color: "#0C9D58",
        },
      ],
    },
    {
      title: "Programs",
      experiences: [
        {
          title: "MLH INIT 2022",
          company: "Major Hacking League",
          company_url: "https://hacktoberfest.digitalocean.com/",
          logo_path: "hacktoberfest-logo.jpg",
          duration: "Oct 1,2020 - Oct 31,2020",
          location: "Remote",
          description:
            "Participated and completed my first Hacktoberfest in October 2020.",
          color: "#0071C5",
        },
        {
          title: "Hacktoberfest",
          company: "Digital Ocean",
          company_url: "https://hacktoberfest.digitalocean.com/",
          logo_path: "hacktoberfest-logo.jpg",
          duration: "Oct 1,2020 - Oct 31,2020",
          location: "Remote",
          description:
            "Participated and completed my first Hacktoberfest in October 2020.",
          color: "#0071C5",
        },
        {
          title: "Developer IPL - Hackathon",
          company: "Nimbella",
          company_url:
            "https://www.hackerearth.com/challenges/hackathon/developeripl-game/",
          logo_path: "nimbella-logo.png",
          duration: "Oct 09, 2020 - Oct 25,2020",
          location: "Remote",
          description:
            "Participated in my first Hackathon and developed a we application called growwPune which was selected as the 3rd best application after a public vote.",
          color: "#0071C5",
        },
        {
          title: "Open Source Hack",
          company: "Anitab.org",
          company_url: "https://anitab-org.github.io/events/open-source-hack/",
          logo_path: "anitab_logo.png",
          duration: "Sep 1,2020 - Sep 31,2020",
          location: "Remote",
          description:
            "Participated and completed Open Source Hack , organized by Anitab.org.",
          color: "#0071C5",
        },
        {
          title: "Facebook Open Source Immersion",
          company: "Facebook Developer Circles : Pune",
          company_url:
            "https://developers.facebook.com/developercircles/open-source-immersion/",
          logo_path: "fb-logo.png",
          duration: "Jul 15,2020 - Aug 15,2020",
          location: "Remote",
          description:
            "As a participant, I contributed to Facebook-Open-Source-Edu-Bot , a messenger chatbot that helps newcomers get familiar with Git, Github and Open Source. I was also one of the top 1000 contributors over the world and top contributor for my city,Pune. ",
          color: "#0071C5",
        },
        {
          title: "Google Code In - 2019",
          company: "Google",
          company_url: "https://codein.withgoogle.com/archive/",
          logo_path: "codeInLogo.png",
          duration: "Dec 2,2019 - January 21,2020",
          location: "Remote",
          description:
            "I was one of the top 10 participants for Systers Organization during GCI-2019.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Achievements",
      experiences: [
        {
          title: "Open Source Ninja",
          company: "Facebook Developer Circles : Pune",
          company_url: "https://developers.facebook.com/developercircles/",
          logo_path: "fb-logo.png",
          duration: "2020",
          location: "Pune",
          description:
            "Vaishnavi Joshi has been awarded the title of The Open Source Ninja of the year award for the consistent contributions to open source projects from the Facebook community. ",
          color: "#9b1578",
        },
        {
          title: "Advocate of Diversity",
          company: "Facebook Developer Circle : Pune",
          company_url: "https://developers.facebook.com/developercircles/",
          logo_path: "fb-logo.png",
          duration: "2020",
          location: "Pune",
          description:
            "Vaishnavi Joshi has been awarded the title of Advocate of Diversity of the year award in recognition to their remarkable community contributions that encouraged inclusive participation within the community.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "xyz",
          company: "abc",
          company_url: "https://developers.facebook.com/developercircles/",
          logo_path: "intel_logo.jpg",
          duration: "2021",
          location: "Work From Home",
          description: "//To be added after internships",
          color: "#ee3c26",
        },
        {
          title: "xyz",
          company: "abc",
          company_url: "https://developers.facebook.com/developercircles/",
          logo_path: "intel_logo.jpg",
          duration: "2021",
          location: "Work From Home",
          description: "//To be added after internships",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Work",
      experiences: [
        {
          title: "abc",
          company: "xyz",
          company_url: "https://developers.facebook.com/developercircles/",
          logo_path: "intel_logo.jpg",
          duration: "2021",
          location: "Pune",
          description: "//To be added after I start working",
          color: "#0879bf",
        },
        {
          title: "abc",
          company: "xyz",
          company_url: "https://developers.facebook.com/developercircles/",
          logo_path: "intel_logo.jpg",
          duration: "2021",
          location: "Pune",
          description: "//To be added after I start working",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I am available on almost every social media. You can ask me anything about React, Android, Backend, UI/UX and Opensource Development. In my free time I like to read books, play Minecreaft or teach cool tricks to my dogs! Contact me via email at vj.codes29@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  contactPageData,
};
