import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { getReadBooks, getWishedBooks } from '../Utils/Utils';
import { createContext } from 'react';

export const BookContext = createContext();

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);
  const [showBooks, setShowBooks] = useState([]);

  useEffect(() => {
    const readBooksId = getReadBooks();
    const readBooks = allBooks.filter(book =>
      readBooksId.includes(book.bookId)
    );
    setShowBooks(readBooks);
  }, [allBooks]);

  const handleWishedBooks = () => {
    setTabIndex(1);
    const wishedBooksId = getWishedBooks();
    const wishedBooks = allBooks.filter(book =>
      wishedBooksId.includes(book.bookId)
    );
    setShowBooks(wishedBooks);
  };

  const handleReadBooks = () => {
    setTabIndex(0);
    const readBooksId = getReadBooks();
    const readBooks = allBooks.filter(book =>
      readBooksId.includes(book.bookId)
    );
    setShowBooks(readBooks);
  };
 
  const sortBooks = property => {
    setShowBooks(prevData => {
      return [...prevData].sort((a, b) => {
        if (a[property] > b[property]) return -1;
        if (a[property] < b[property]) return 1;
        return 0;
      });
    });
  };


  const sortByRating = () => {
    sortBooks('rating');
  };

  const sortByIdYear = () => {
    sortBooks('yearOfPublishing');
  };
  const sortByPage = () => {
    sortBooks('totalPages');
  };



  return (
    <div className="text-center">
      <h4 className="text-[#131313] text-2xl lg:text-3xl font-bold text-center rounded-2xl bg-[#1313130D] my-3 lg:my-8 py-3 lg:py-8">
        Books
      </h4>
      <details className="dropdown mb-5 lg:mb-14">
        <summary className="m-1 btn text-white texy-sm lg:text-lg font-semibold py-1 lg:py-3 px-2 lg:px-5 rounded-lg bg-[#23BE0A] hover:bg-slate-800 ">
          Sort By <RiArrowDropDownLine />
        </summary>
        <ul className="p-1 lg:p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={sortByRating}>
            <a>Rating</a>
          </li>
          <li onClick={sortByPage}>
            <a>Number Of Pages</a>
          </li>
          <li onClick={sortByIdYear}>
            <a>Published Year</a>
          </li>
        </ul>
      </details>
      <div className="flex items-center justify-center mb-8 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
        <Link
          to={``}
          onClick={handleReadBooks}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? 'border border-b-0' : 'border-b'
          }  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={handleWishedBooks}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? 'border border-b-0' : 'border-b'
          }  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>
      <BookContext.Provider value={showBooks}>
        <Outlet />
      </BookContext.Provider>
    </div>
  );
};

export default ListedBooks;
