import { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

export interface Social {
  icon: IconType;
  path: string;
}

export const socials: Social[] = [
  { icon: FaGithub, path: "https://github.com/ayushi-2607"},
  { icon: FaLinkedinIn, path: "https://in.linkedin.com/in/ayushi-lonkar-470357179" },
  { icon: FaYoutube, path: "https://www.youtube.com/@ayushilonkar6460" },
  { icon: FaTwitter, path: "https://twitter.com" },
];