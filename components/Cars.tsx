import React from "react";

interface CarI {
  id: string;
  name: string;
  engine: string;
  price: string;
  img: string;
}

const Cars: React.FC = ({}) => {
  const cars: CarI[] = [
    {
      id: "1",
      name: "Renault Triber",
      engine: "1.0 Expression",
      price: "from R2599 or R190 000",
      img: "https://images.heycarter.com/x2/WebP/10-Renault_Kiger_Side-Scenic-Intens--2021.09-za.webp",
    },
    {
      id: "2",
      name: "Renault Triber",
      engine: "1.0 Expression",
      price: "from R2599 or R190 000",
      img: "https://images.heycarter.com/x2/WebP/renault-triber_side-552313--Renault-Triber-Prestige--2020.02-ZA.webp",
    },
    {
      id: "3",
      name: "Renault Triber",
      engine: "1.0 Expression",
      price: "from R2599 or R190 000",
      img: "https://images.heycarter.com/x2/WebP/Mitsubishi-XPANDER_153--2021.06-za.webp",
    },
    {
      id: "4",
      name: "Renault Triber",
      engine: "1.0 Expression",
      price: "from R2599 or R190 000",
      img: "https://images.heycarter.com/x2/WebP/Mitsubishi-Eclipse-Cross_259--facelift--2021.07-za.webp",
    },
    {
      id: "5",
      name: "Renault Triber",
      engine: "1.0 Expression",
      price: "from R2599 or R190 000",
      img: "https://images.heycarter.com/x2/WebP/renault_kwid-dynamique-city-street--Renault-Kwid-Dynamique-facelift--1911-ZA.webp",
    },
    {
      id: "6",
      name: "Renault Triber",
      engine: "1.0 Expression",
      price: "from R2599 or R190 000",
      img: "https://images.heycarter.com/x2/WebP/dsc_5108s-552336--Mitsubishi-ASX-facelift--2020.02-ZA.webp",
    },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-center my-3 text-2xl font-semibold">
        top deals of the month
      </h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 px-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="">
            <img
              src={car.img}
              alt="car"
              className="rounded-lg object-cover min-w-full min-h-[100px]"
            />
            <h3 className="font-medium text-lg">{car.name}</h3>
            <h4 className="">{car.engine}</h4>
            <h3 className="font-medium text-lg">{car.price}</h3>
            <button className="bg-[#67c96a] text-white w-full my-2 py-2 rounded-md">
              view car
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

export default Cars;
