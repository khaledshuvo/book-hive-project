import React, { useState } from 'react';
import { useLocation, useLoaderData } from 'react-router-dom';
import {readBook, wishBook } from '../Utils/Utils';

const BookDetails = () => {
  const allBooks = useLoaderData();
  const location = useLocation();
  const id = parseInt(location.pathname.split('book/')[1]);
  // const book = allBooks.filter(book => book.bookId === id)[0];
  const book = allBooks.find(book => book.bookId === id);

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="grid grid-cols-2 gap-12 mt-[52px]">
      <div className="p-[75px] rounded-2xl bg-[#1313130D]">
        <img className="w-[425px] h-[565px]" src={image} alt="" />
      </div>
      <div>
        <h3 className="text-[#131313] font-play text-[40px] font-bold">
          {bookName}
        </h3>
        <h3 className="text-[#131313CC] text-xl font-medium my-4 pb-6 border-b">
          By: {author}
        </h3>
        <h3 className="text-[#131313CC] text-xl font-medium mb-4 pb-6 border-b">
          {category}
        </h3>
        <h3 className="text-[#131313] text-base font-bold">
          Review: <span className="text-[#131313B2] font-normal">{review}</span>
        </h3>
        <div className="flex items-center gap-4 py-7 border-b mb-6">
          <h3 className="text-[#131313] text-base font-bold">Tag</h3>
          <h3 className="rounded-[30px] bg-[#23BE0A0D] py-[7px] px-4 text-[#23BE0A] text-base font-medium">
            {tags[0]}
          </h3>
          <h3 className="rounded-[30px] bg-[#23BE0A0D] py-[7px] px-4 text-[#23BE0A] text-base font-medium">
            {tags[1]}
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3">
            <h4 className="text-[#131313B2] text-base font-normal">
              Number of Pages:
            </h4>
            <div className="col-span-2">
              <h3 className="text-[#131313] text-base font-semibold">
                {totalPages}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <h4 className="text-[#131313B2] text-base font-normal">
              Publisher:
            </h4>
            <div className="col-span-2">
              <h3 className="text-[#131313] text-base font-semibold">
                {publisher}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <h4 className="text-[#131313B2] text-base font-normal">
              Year of Publishing:
            </h4>
            <div className="col-span-2">
              <h3 className="text-[#131313] text-base font-semibold">
                {yearOfPublishing}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <h4 className="text-[#131313B2] text-base font-normal">Rating:</h4>
            <div className="col-span-2">
              <h3 className="text-[#131313] text-base font-semibold">
                {rating}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={()=> readBook(book)} className="text-[#131313] text-lg font-semibold py-[18px] px-[28px] rounded-lg border">
            Read
          </button>
          <button onClick={()=> wishBook(book)} className="text-white bg-[#50B1C9] text-lg font-semibold py-[18px] px-[28px] rounded-lg border">
            WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
