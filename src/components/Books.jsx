import { useEffect, useState } from 'react';
import Book from './Book';

const Books = ({ allBooks }) => {
  return (
    <div>
      <h4 className="text-[#131313] font-play text-[32px] lg:text-[40px] font-bold mb-3 lg:mb-9 text-center">
        Books
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {allBooks.map((singleBook, idx) => (
          <Book key={idx} singleBook={singleBook}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
