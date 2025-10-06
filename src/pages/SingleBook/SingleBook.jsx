import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const SingleBook = ({ bookItem }) => {
  /**
   * destructuring bookItem
   */
  const { bookId, image, tags, bookName, author, category, rating } = bookItem;

  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="p-6 flex flex-col justify-between h-full bg-white rounded-2xl border border-neutral-900/20">
        {/* image */}
        <div className="bg-zinc-100 rounded-2xl py-8 px-4 mb-6">
          <img
            className="h-40 object-contain mx-auto"
            src={image}
            alt="Book"
          />
        </div>

        {/* tags */}
        <div className="flex items-center gap-3">
          {tags.map((tagItem, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-green-600/5 rounded-full text-green-600 text-base font-medium"
            >
              {tagItem}
            </span>
          ))}
        </div>

        {/* title and author */}
        <div className="mt-4 space-y-4">
          <h2 className="text-neutral-900 text-2xl font-bold leading-relaxed">
            {bookName}
          </h2>
          <p className="text-neutral-900/80 text-base font-medium">
            By : {author}
          </p>
        </div>

        {/* bottom */}
        <div className="mt-5 border-t border-dashed pt-5 border-t-neutral-900/20 flex items-center justify-between">
          <div className="">
            <p className="text-neutral-900/80 text-base font-medium">
              {category}
            </p>
          </div>

          <div className="flex items-center gap-2 text-neutral-900/80 text-base font-medium">
            <p>
              <span>{rating}</span>
            </p>
            <span>
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
