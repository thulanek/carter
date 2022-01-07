import React from "react";

const CarsSkeletons: React.FC = () => {
  return (
    <div className="mt-10">
      <h3 className="text-center my-3 text-2xl font-semibold">
        top deals of the month
      </h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 px-3 gap-6">
        {Array.from(Array(6).keys()).map((key) => (
          <div key={key} className="flex flex-col gap-1">
            <div className="w-full h-48 dark:bg-[#212121] rounded-lg"></div>
            <div className="bg-gray-300 dark:bg-[#212121]  w-full h-3 rounded-full"></div>
            <div className="bg-gray-300 dark:bg-[#212121] w-full h-3 rounded-full"></div>
            <div className="bg-gray-300 dark:bg-[#212121] w-full h-3 rounded-full"></div>
            <button className="bg-gray-300 dark:bg-[#212121] dark:text-black text-white w-full my-2 py-2 rounded-md">
              loading
            </button>
          </div>
        ))}
      </div>
      <h4 className="text-sm font-medium italic text-gray-500 text-center my-3">
        see all cars
      </h4>
    </div>
  );
};

export default CarsSkeletons;
