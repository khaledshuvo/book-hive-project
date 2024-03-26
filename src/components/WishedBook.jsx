
import locationIcon from '../assets/location.svg';
import pageIcon from '../assets/page.svg';
import publisherIcon from '../assets/publisher.svg';

const WishedBook = ({ book }) => {
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
    <div className="grid grid-cols-4 gap-6 p-6 rounded-2xl border border-[#13131326]">
      <div className="px-[50px] py-[30px] rounded-2xl bg-[#1313130D] flex justify-center items-center">
        <img className="h-[172px] w-[130px]" src={image} alt="" />
      </div>
      <div className="col-span-3 flex flex-col gap-4 items-start">
        <h3 className="text-[#131313] font-play text-2xl font-bold">
          {bookName}
        </h3>
        <h3 className="text-[#131313CC] text-base font-medium">By:{author}</h3>
        <div className="flex items-center gap-4">
          <h3 className="text-[#131313] text-base font-bold">Tag</h3>
          <h3 className="rounded-[30px] bg-[#23BE0A0D] py-[7px] px-4 text-[#23BE0A] text-base font-medium">
            {tags[0]}
          </h3>
          <h3 className="rounded-[30px] bg-[#23BE0A0D] py-[7px] px-4 text-[#23BE0A] text-base font-medium">
            {tags[1]}
          </h3>
          <img src={locationIcon} alt="" />
          <h3 className="text-[#131313CC] text-base font-normal">
            Year of Publishing: {yearOfPublishing}
          </h3>
        </div>
        <div className="flex items-center gap-4 pb-4 w-full border-b">
          <img src={publisherIcon} alt="" />
          <h3 className="text-[#13131399] text-base font-normal">
            Publisher: {publisher}
          </h3>
          <img src={pageIcon} alt="" />
          <h3 className="text-[#13131399] text-base font-normal">
            Page: {totalPages}
          </h3>
        </div>

        <div className="flex gap-3">
          <h3 className="text-[#328EFF] text-base font-normal py-[10px] px-5 rounded-[30px] bg-[#328EFF26]">
            Category: {category}
          </h3>
          <h3 className="text-[#FFAC33] text-base font-normal py-[10px] px-5 rounded-[30px] bg-[#FFAC3326]">
            Rating: {rating}
          </h3>
          <h3 className="text-white text-lg font-medium py-[10px] px-5 rounded-[30px] bg-[#23BE0A]">
            View Details
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WishedBook;
