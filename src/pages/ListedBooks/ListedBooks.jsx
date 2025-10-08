import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredDB } from "../../utility/addToDB";
import SingleBook from "../SingleBook/SingleBook";

const ListedBooks = () => {
  /**
   * worst case🙂🙂🙂
   */
  const allData = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const sotoredBookData = getStoredDB();
    const convertedStoredBooks = sotoredBookData.map((bookId) =>
      parseInt(bookId)
    );
    const myReadList = allData.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [allData]);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "pages") {
      const sortedByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPages);
    }
    if (sortType === "ratings") {
      const sortByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setSort(sortByRatings);
    }
  };

  return (
    <div>
      <div className="mb-10">
        <select
          name="sortBy"
          id="sortBy"
          style={{ WebkitAppearance: "none", cursor: "pointer" }}
        >
          <option defaultValue="sortBySelected" hidden>
            Sort by : {sort ? sort : ""}
          </option>
          <option value="pages" onClick={() => handleSort("pages")}>
            Pages
          </option>
          <option value="ratings" onClick={() => handleSort("ratings")}>
            Ratings
          </option>
        </select>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readList.map((booitem, index) => (
              <SingleBook key={index} bookItem={booitem} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
