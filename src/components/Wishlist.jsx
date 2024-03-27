import React, { useContext } from 'react';
import { BookContext } from '../pages/ListedBooks';
import WishedBook from './WishedBook';

const Wishlist = () => {
  const books = useContext(BookContext);

  return (
    <div className="flex flex-col gap-6 min-h-[calc(100vh-350px)] lg:min-h-[calc(100vh-545px)]">
      {books.map(book => (
        <WishedBook key={book.bookId} book={book}></WishedBook>
      ))}
    </div>
  );
};

export default Wishlist;
