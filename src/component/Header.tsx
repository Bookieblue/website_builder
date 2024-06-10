import React from 'react';

interface Link {
  name: string;
  url: string;
}

interface HeaderProps {
  title: string;
  logo: string;
  links: Link[];
  backgroundColor: string;
  textColor: string;
}

const Header: React.FC<HeaderProps> = ({ title, logo, links, backgroundColor, textColor }) => {
  return (
    <header className={`p-6 ${backgroundColor} text-${textColor}`}>
      {/* Logo */}
      {logo && <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />}

      {/* Title */}
      <h1 className="text-4xl font-bold">{title}</h1>

      {/* Links */}
      <nav className="ml-auto">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="ml-4">{link.name}</a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
