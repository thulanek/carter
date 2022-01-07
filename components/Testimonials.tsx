import React, { useState } from "react";

interface TestimonialPropsI {
  name: string;
  img: string;
  testimonial: string;
}

// bg-[#1A1A1A]

const Testimonial: React.FC<TestimonialPropsI> = ({
  name,
  img,
  testimonial,
}) => {
  const [fullyOpen, setFullyOpen] = useState(false);

  const testimonialStyle: React.CSSProperties = fullyOpen
    ? {
        transition: "all cubic-bezier(0.4, 0, 0.2, 1) 500ms",
      }
    : {
        maxHeight: "5000px",
      };

  return (
    <div
      style={testimonialStyle}
      onClick={() => setFullyOpen((prev) => !prev)}
      className={
        "relative max-h-[200px] md:max-w-2xl transition-all duration-500 w-6/12 overflow-hidden sm:w-4/12 max-w-xl bg-white dark:bg-[#1A1A1A] p-3 pb-6 px-4 rounded-md self-start shadow-sm"
      }
    >
      <div className="flex gap-3 items-center">
        <img
          src={img}
          alt="customer"
          className="w-9 h-9 object-cover rounded-full"
        />
        <h4 className="font-medium text-blue-500">{name}</h4>
      </div>
      <p className="text-sm">{testimonial}</p>
      <div className="flex absolute bottom-0 w-full py-2 gap-[2px] bg-white dark:bg-[#1A1A1A] mt-2 z-10">
        {[1, 2, 3, 4, 5].map((_) => (
          <img
            key={_}
            src="/images/star.png"
            alt="rating stars"
            className="w-3 h-3 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = ({}) => {
  const testimonial =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate, ullam iure nam et neque praesentium fugit minus recusandae, expedita voluptatum consectetur. Alias, ab magni.";

  return (
    <div className="">
      <h3 className="text-center my-3 text-2xl font-semibold">
        our customers can attest
      </h3>

      <div className="flex gap-2 sm:gap-6 justify-center">
        <Testimonial
          name="Thandeka Zulu"
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YQrqSwxkegxoDmVVlVo56gHaJ4%26pid%3DApi&f=1"
          testimonial={testimonial + testimonial}
        />
        <Testimonial
          name="Anne Smith"
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.JehliEutdzV_r7t4BrhRIAHaE8%26pid%3DApi&f=1"
          testimonial={testimonial}
        />
      </div>
    </div>
  );
};

export default Testimonials;
