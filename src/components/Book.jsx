import React from 'react';
import { Link } from 'react-router-dom';
import ratingImg from '../assets/rating.svg';
const Book = ({ singleBook }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = singleBook;
  return (
    <Link
      to={`/book/${bookId}`}
      className="rounded-2xl border border-[#13131326] p-6 flex flex-col transition hover:scale-105 border-opacity-30 border-primary hover:border-secondary  group hover:no-underline focus:no-underline"
    >
      <div className="rounded-2xl bg-[#F3F3F3] flex justify-center items-end py-8">
        <img className="w-[134px] h-[180px]" src={image} alt="" />
      </div>
      <div className="flex gap-3 mt-6 mb-4">
        <h3 className="rounded-[30px] bg-[#23BE0A0D] py-[7px] px-4 text-[#23BE0A] text-base font-medium">
          {tags[0]}
        </h3>
        <h3 className="rounded-[30px] bg-[#23BE0A0D] py-[7px] px-4 text-[#23BE0A] text-base font-medium">
          {tags[1]}
        </h3>
      </div>
      <h3 className="text-[#131313] font-play text-2xl font-bold flex-grow">
        {bookName}
      </h3>
      <h3 className="text-[#131313CC] text-base font-medium pt-4 pb-5 mb-5 border-b-2 border-dashed">
        By: {author}
      </h3>
      <div className="flex justify-between">
        <h3 className="text-[#131313CC] text-base font-medium">{category}</h3>
        <div className="flex gap-2">
          <h3 className="text-[#131313CC] text-base font-medium">{rating}</h3>
          <img src={ratingImg} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Book;
