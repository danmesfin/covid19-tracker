/** @format */

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Newscard from "../Cards/Newscard";
// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ item }) {
  return (
    <>
      {item &&
        item.map((item) => (
          <Newscard
            key={item.url}
            href={item.url}
            Image={item.urlToImage}
            header={item.title}
            author={item.author}
            publishedAt={item.date}
          />
        ))}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage, items }) {
  // We start with an empty list of items.
  const [item, setitem] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setitem(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, items, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items item={item} />
      <ReactPaginate
        className="flex flex-row flex-wrap m-2 justify-center"
        containerClassName="font-semibold"
        breakLabel="..."
        breakLinkClassName="mx-1 px-1"
        nextClassName="font-semibold border rounded-sm mx-1 p-1 hover:bg-gray-200 dark:border-gray-700"
        previousClassName="font-semibold border rounded-sm mx-1 p-1 hover:bg-gray-200 dark:border-gray-700"
        pageClassName="font-semibold border rounded-md mx-1 px-2 hover:bg-gray-200 dark:text-red-600 dark:border-gray-700"
        activeClassName="bg-red-400 hover:bg-red-400 dark:border-gray-700"
        nextLabel="Next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<Prev"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
