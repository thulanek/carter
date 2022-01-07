import React from "react";

const Footer: React.FC = ({}) => {
  const links: string[] = ["Privacy Policy", "Ts & Cs", "Blog", "FAQs"];

  return (
    <div className="mt-20">
      <div className="flex justify-center mt-8 gap-1 dark:invert">
        <img
          src="/images/facebook.png"
          alt="facebook icon"
          className="w-5 h-5 object-contain"
        />
        <img
          src="/images/linkedin.png"
          alt="linked in icon"
          className="w-5 h-5 object-contain"
        />
      </div>

      <div className="flex gap-2 w-fit mx-auto">
        {links.map((link) => (
          <p
            key={link + "fdzcxv"}
            className="cursor-pointer underline decoration-[#67c96a] mt-2 text-xs"
          >
            {link}
          </p>
        ))}
      </div>

      <p className="text-xs sm:text-sm text-center mt-1">
        Copyright 2022 HeyCarter Pty Ltd | All Rights Reserved | HeyCarter
        Dealerships (Pty) Ltd is an Authorised Financial Services Provider. FSP:
        51498
      </p>
    </div>
  );
};

export default Footer;
