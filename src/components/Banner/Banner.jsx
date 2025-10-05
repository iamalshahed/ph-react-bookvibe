import React from "react";
import bookHero from "./../../assets/book_hero.png";

const Banner = () => {
  return (
    <div className="lg:px-28 lg:py-20 my-10 lg:my-0 lg:bg-neutral-900/5 rounded-3xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
      {/* left content */}
      <div className="lg:w-1/2">
        <div className="mb-12">
          <h1 className="text-neutral-900 text-4xl sm:text-5xl text-center lg:text-start md:text-6xl font-medium leading-snug">
            Books to freshen up your bookshelf
          </h1>
        </div>

        <div className="">
          <button className="px-5 md:px-7 py-3 md:py-5 bg-green-600 rounded-lg text-white sm:text-xl font-light flex items-center lg:items-start justify-center lg:justify-start mx-auto lg:mx-0">
            View The List
          </button>
        </div>
      </div>

      {/* right image */}
      <div className="lg:w-1/3">
        <img src={bookHero} className="w-full" alt="Book" />
      </div>
    </div>
  );
};

export default Banner;
