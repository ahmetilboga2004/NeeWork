import { getAllUser } from "./test.js";

const socialMediaIcon = () => {
  return {
    socialMediaLink: "",
    selectedIcon: "",
    icons: [
      {
        name: "Instagram",
        icon: "fa-instagram",
        adress: "icons8-instagram.png",
      },
      {
        name: "Facebook",
        icon: "fa-facebook",
        adress: "icons8-facebook-32.png",
      },
      {
        name: "Twitter",
        icon: "fa-x-twitter",
        adress: "icons8-twitterx-32.png",
      },
      {
        name: "Stack Overflow",
        icon: "fa-stack-overflow",
        adress: "icons8-stack-overflow-32.png",
      },
      { name: "Github", icon: "fa-github", adress: "icons8-github-32.png" },
      {
        name: "Linkedin",
        icon: "fa-linkedin",
        adress: "icons8-linkedin-32.png",
      },
      {
        name: "Telegram",
        icon: "fa-telegram",
        adress: "icons8-telegram-app-32.png",
      },
      { name: "Youtube", icon: "fa-youtube", adress: "icons8-youtube-32.png" },
    ],
    consoleLog(text) {
      console.log(text);
    },
    socialMediaAdd() {},
  };
};

console.log("bu script dosyasıdır.");
getAllUser();
