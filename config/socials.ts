import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@lokesh1jha",
    icon: Icons.gitHub,
    link: "https://github.com/lokesh1jha",
  },
  {
    name: "LinkedIn",
    username: "Lokesh Jha",
    icon: Icons.linkedin,
    link: "https://linkedin.com/in/lokesh-jha-088549136/",
  },
  {
    name: "Twitter",
    username: "@Lokesh1jha",
    icon: Icons.twitter,
    link: "https://x.com/Lokesh1jha",
  },
  {
    name: "Gmail",
    username: "lokesh1jha",
    icon: Icons.gmail,
    link: "mailto:lokesh1jha@gmail.com",
  },
];
