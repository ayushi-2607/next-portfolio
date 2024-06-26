import { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

export interface Social {
  icon: IconType;
  path: string;
  color: string;
}

export const socials: Social[] = [
  { icon: FaGithub, path: "https://github.com/ayushi-2607", color: "text-black" },
  { icon: FaLinkedinIn, path: "https://www.linkedin.com/in/ayushi-2607/", color: "text-blue-700" },
  { icon: FaYoutube, path: "https://youtube.com", color: "text-red-600" },
  { icon: FaTwitter, path: "https://twitter.com", color: "text-blue-400" },
];