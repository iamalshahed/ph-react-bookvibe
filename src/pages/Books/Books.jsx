import React, { Suspense } from "react";
import SingleBook from "../SingleBook/SingleBook";

const Books = ({ booksData }) => {
  return (
    <div className="my-20">
      {/* title */}
      <div className="">
        <h1 className="text-neutral-900 text-4xl font-bold mb-9 text-center">
          Books
        </h1>
      </div>

      {/* books card */}
      <Suspense fallback={<span>loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booksData.map((bookItem, index) => (
            <SingleBook bookItem={bookItem} key={index} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
