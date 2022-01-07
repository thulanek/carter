import React from "react";
import Switch from "./Switch";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const links: string[] = [
    "our dealerships",
    "book a service",
    "our cars",
    "contact",
    "blog",
  ];

  return (
    <div className="flex justify-between items-center font-openSans p-3">
      <div className="w-12 mr-5">
        <img src="/images/logo.png" alt="logo" className="w-full" />
      </div>

      <div className="flex w-full items-center gap-4 justify-end mr-6">
        <Switch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="relative w-full max-w-[500px]">
          <input
            type="text"
            placeholder="enter you dream car"
            className="rounded-full w-full px-2 py-2 pl-4 shadow-sm text-sm italic"
          />
          <img
            src="/images/search.png"
            alt="search"
            className="w-3 absolute top-3 right-4"
          />
        </div>
      </div>

      <div className="hidden lg:block justify-self-end min-w-fit">
        <div className="flex gap-6 text-xs items-center h-full mr-6">
          {links.map((link) => (
            <p className="font-medium" key={link}>
              {link}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1 lg:hidden w-8">
        <div className="w-full h-1 bg-black dark:bg-white rounded-t-full"></div>
        <div className="w-full h-1 bg-black dark:bg-white rounded-t-full"></div>
      </div>
    </div>
  );
};

export default Header;
