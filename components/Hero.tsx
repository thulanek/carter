import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 mt-5 sm:mt-10">
      <div className="w-full min-h-[100px] flex justify-end bg-slate-300 bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffarm3.staticflickr.com%2F2357%2F2516643521_2c33144d43_b.jpg&f=1&nofb=1')] bg-center"></div>

      <div className="w-full max-w-lg">
        <h1 className="font-extrabold text-3xl sm:text-4xl">
          find your perfect companion for the journey ahead.
        </h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          cupiditate, ullam iure nam et neque praesentium fugit minus
          recusandae, expedita voluptatum consectetur. Alias, ab magni.
        </p>

        <div className="flex gap-3 mt-4 sm:mt-6">
          <button className="italic font-medium text-[#FF9100]">
            find out more
          </button>
          <button className="bg-black dark:bg-[#ff9100] dark:text-black text-white px-3 py-1 rounded-full font-medium">
            browse cars
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
