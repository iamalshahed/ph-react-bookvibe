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

  return (
    <div>
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
