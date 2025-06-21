import cSharpIcon from "../assets/cSharpIcon.svg";
import fileIcon from "../assets/fileIcon.png";
import javaIcon from "../assets/javaIcon.svg";
import vueIcon from "../assets/vueIcon.svg";
import githubIcon from "../assets/github.png";
import type { IconConfig } from "./types/types";

export const icons: IconConfig[] = [
  {
    name: "Readme",
    icon: fileIcon,
    description: "Welcome to my portfolio! This aplication serves as a showcase to my skills and ideas.Here you can find some of my projects.You can double-click on the icons to open a modal with more information about each project and with a button to visit the GitHub repository.",
  },
  {
    name: "Fantasyze API",
    icon: cSharpIcon,
    link: "https://github.com/iandrei250/FantasyzeAPI",
    description:
      "Fantasyze serves the purpose of providing a service for creating, storing and updating fictional characters. The limit is your imagination. It is a RESTful API built with C# and ASP.NET Core, designed to be used by the Fantasyze frontend application.",
  },
  {
    name: "Job Tracker",
    icon: javaIcon,
    link: "https://github.com/iandrei250/Job-Tracking-Application",
    description:
      "Job Tracker is a Java-based application that helps users manage their job applications. It allows users to track the status of their applications, store relevant documents, and set reminders for follow-ups. The application is built with Java Spring for backend, ensuring data exposure through CRUD operations and provides a user-friendly interface in React Typescript for managing job applications.",
  },
  {
    name: "Fantasyze",
    icon: vueIcon,
    link: "https://github.com/iandrei250/Fantasyze",
    description:
      "Fantasyze is a web application that allows users to create, store, and update fictional characters. It is built with Vue.js and provides a user-friendly interface for managing character data.",
  },

   {
    name: "Github Finder",
    icon: githubIcon,
    link: "https://github.com/iandrei250/github-finder",
    description:
      "Github Finder is a web application that allows users to search for GitHub users and view their profiles. It is built with React and provides a simple interface for finding GitHub users.",
  },
];
