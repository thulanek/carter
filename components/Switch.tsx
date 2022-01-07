import React from "react";

interface SwitchProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Switch: React.FC<SwitchProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div
      className="cursor-pointer bg-black dark:bg-white w-4 h-4 rounded-full flex justify-center items-center"
      onClick={toggleDarkMode}
    >
      {/* <h3 className="text-sm font-medium invert">{darkMode ? "L" : "D"}</h3> */}
    </div>
  );
};

export default Switch;
