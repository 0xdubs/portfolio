import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Daniel Warren. All Rights Reserved.`,
  author: {
    name: "Daniel Warren",
    accounts: [
      {
        url: "https://github.com/danielw1534",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/dubbssz",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/danielw1534",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/daniel-william-warren",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:danielw1534@gmail.com",
        label: "Daniel Warren",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
