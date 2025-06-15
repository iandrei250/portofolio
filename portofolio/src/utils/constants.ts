import cSharpIcon from "../assets/cSharpIcon.svg";
import fileIcon from "../assets/fileIcon.png";
import javaIcon from "../assets/javaIcon.svg";
import pdfIcon from "../assets/pdfIcon.png";
import vueIcon from "../assets/vueIcon.svg";
import type { IconConfig } from "./types/types";

export const icons: IconConfig[] = [
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
      "Job Tracker is a Java-based application that helps users manage their job applications. It allows users to track the status of their applications, store relevant documents, and set reminders for follow-ups.",
  },
  {
    name: "Readme",
    icon: fileIcon,
    link: "#",
  },
  {
    name: "CV",
    icon: pdfIcon,
    link: "#",
  },
  {
    name: "Fantasyze",
    icon: vueIcon,
    link: "https://github.com/iandrei250/Fantasyze",
    description:
      "Fantasyze is a web application that allows users to create, store, and update fictional characters. It is built with Vue.js and provides a user-friendly interface for managing character data.",
  },
];
