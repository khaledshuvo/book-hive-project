import { Link } from 'react-router-dom';
import bookImg from '../assets/3.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="grid grid-cols-3 bg-[#1313130D] rounded-3xl px-[20px] lg:px-[120px] py-[20px] lg:py-[80px] gap-5 lg:gap-20 mb-16 lg:mb-24">
        <div className="col-span-2 flex flex-col justify-center items-start gap-5 lg:gap-12">
          <h4 className="font-play text-[#131313] text-[25px] lg:text-[56px] font-bold">
            Books to freshen up your bookshelf
          </h4>
          <Link to="/listed-books">
            <button className="text-white text-sm lg:text-xl font-bold rounded-lg bg-[#23BE0A] py-2 lg:py-5 px-3 lg:px-7">
              View The List
            </button>
          </Link>
        </div>
        <img className="w-[318px]" src={bookImg} alt="" />
      </div>
    </div>
  );
};
export default Hero;
