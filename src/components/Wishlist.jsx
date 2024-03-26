import React, { useContext } from 'react';
import { BookContext } from './ListedBooks';
import WishedBook from './WishedBook';

const Wishlist = () => {
  const books = useContext(BookContext);

  return (
    <div className="flex flex-col gap-6">
      {books.map(book => (
        <WishedBook key={book.bookId} book={book}></WishedBook>
      ))}
    </div>
  );
};

export default Wishlist;
