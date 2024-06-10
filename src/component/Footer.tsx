import React from 'react';

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="p-6 bg-gray-800 text-white">
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
