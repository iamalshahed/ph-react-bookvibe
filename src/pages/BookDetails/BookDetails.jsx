import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookid = parseInt(id);
  const booksData = useLoaderData();
  const targetedBook = booksData.find((book) => book.bookId === bookid);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = targetedBook;

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-12 mt-2 space-y-10 lg:space-y-0 pb-10">
      {/* left */}
      <div className="lg:bg-neutral-900/5 rounded-2xl lg:p-16 lg:col-span-6">
        <img
          src={image}
          className="w-full h-[564px] object-contain mx-auto"
          alt="Book"
        />
      </div>

      {/* right content */}
      <div className="lg:col-span-6">
        {/* head and author */}
        <div className="space-y-4">
          <h1 className="text-neutral-900 text-3xl sm:text-4xl font-bold">{bookName}</h1>
          <p className="text-neutral-900/80 text-xl font-medium">
            By : {author}
          </p>
        </div>

        {/* devider */}
        <div className="my-6 py-4 border-y border-y-neutral-900/20">
          <span className="text-neutral-900/80 text-xl font-medium">
            {category}
          </span>
        </div>

        {/* review and tags */}
        <div className="space-y-6 pb-6 border-b border-b-neutral-900/20">
          {/* review */}
          <div className="">
            <p>
              <strong className="text-neutral-900 text-base font-bold">
                Review :{" "}
              </strong>
              <span className="text-neutral-900/70 text-base font-normal text-justify hyphens-auto">
                {review}
              </span>
            </p>
          </div>

          {/* tags */}
          <div className="flex items-center gap-4">
            <div className="">
              <strong>Tag: </strong>
            </div>

            <div className="flex items-center gap-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-green-600/5 rounded-full text-green-600 text-base font-medium"
                >
                  #<span>{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* table of contents */}
        <div className="mt-6 flex items-center gap-14">
          {/* left */}
          <div className="space-y-3">
            <div className="">
              <span className="tbl_cntnt">Number of Pages:</span>
            </div>

            <div className="">
              <span className="tbl_cntnt">Publisher:</span>
            </div>

            <div className="">
              <span className="tbl_cntnt">Year of Publishing:</span>
            </div>

            <div className="">
              <span className="tbl_cntnt">Rating:</span>
            </div>
          </div>

          {/* right */}
          <div className="space-y-3">
            <div className="">
              <span className="tbl_rght_cnt">{totalPages}</span>
            </div>

            <div className="">
              <span className="tbl_rght_cnt">{publisher}</span>
            </div>

            <div className="">
              <span className="tbl_rght_cnt">{yearOfPublishing}</span>
            </div>

            <div className="">
              <span className="tbl_rght_cnt">{rating}</span>
            </div>
          </div>
        </div>

        {/* bottom btns */}
        <div className="mt-8 flex items-center gap-4">
          {/* read */}
          <button className="read_wishlisht_btn text-neutral-900 border border-neutral-900/30 hover:bg-gray-200">
            Read
          </button>

          {/* Wishlist */}
          <button className="read_wishlisht_btn bg-teal-400 text-white hover:bg-teal-600">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
