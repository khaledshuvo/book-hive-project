import React, { useContext } from 'react';
import { BookContext } from './ListedBooks';
import ReadBook from './ReadBook';

const ReadBooks = () => {
  const books = useContext(BookContext);
  
       return (
         <div className="flex flex-col gap-6">
           {books.map(book => (
             <ReadBook key={book.bookId} book={book}></ReadBook>
           ))}
         </div>
       );
};

export default ReadBooks;
