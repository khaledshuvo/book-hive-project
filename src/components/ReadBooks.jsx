import React, { useContext } from 'react';
import { BookContext } from '../pages/ListedBooks';
import ReadBook from './ReadBook';

const ReadBooks = () => {
  const books = useContext(BookContext);

  return (
    <div className="flex flex-col gap-6 min-h-[calc(100vh-350px)] lg:min-h-[calc(100vh-545px)]">
      {books.map(book => (
        <ReadBook key={book.bookId} book={book}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
