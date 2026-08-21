import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "GetCollab",
    username: "getcollab.in",
    icon: Icons.globe,
    link: "https://www.getcollab.in",
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
    name: "Github",
    username: "@lokesh1jha",
    icon: Icons.gitHub,
    link: "https://github.com/lokesh1jha",
  },
  {
    name: "Email",
    username: "lokesh.jha@getcollab.in",
    icon: Icons.gmail,
    link: "mailto:lokesh.jha@getcollab.in",
  },
];
