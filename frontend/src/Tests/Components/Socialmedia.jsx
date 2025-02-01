import React from 'react';
import { Github, Mail, Linkedin, Instagram } from 'lucide-react';

const Socialmedia = ({ icon, text, url }) => {
  let IconComponent;

  switch (icon) {
    case 'Github':
      IconComponent = Github;
      break;
    case 'Gmail':
      IconComponent = Mail;
      break;
    case 'Linkedin':
      IconComponent = Linkedin;
      break;
    case 'Instagram':
      IconComponent = Instagram;
      break;
    default:
      IconComponent = null;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
      {IconComponent && <IconComponent className="w-5 h-5" />}
      <span>{text}</span>
    </a>
  );
};

export default Socialmedia;