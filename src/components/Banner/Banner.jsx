import React from "react";
import bookHero from "./../../assets/book_hero.png";

const Banner = () => {
  return (
    <div className="px-28 py-20 bg-neutral-900/5 rounded-3xl hidden items-center justify-between gap-8">
      {/* left content */}
      <div className="w-1/2">
        <div className="mb-12">
          <h1 className="text-neutral-900 text-6xl font-medium leading-snug">
            Books to freshen up your bookshelf
          </h1>
        </div>

        <div className="">
          <button className="px-7 py-5 bg-green-600 rounded-lg text-white text-xl font-light">
            View The List
          </button>
        </div>
      </div>

      {/* right image */}
      <div className="w-1/3">
        <img src={bookHero} className="w-full" alt="Book" />
      </div>
    </div>
  );
};

export default Banner;
