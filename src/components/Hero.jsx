import { Link } from 'react-router-dom';
import bookImg from '../assets/3.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="grid grid-cols-3 bg-[#1313130D] rounded-3xl px-[120px] py-[80px] gap-20 mb-24">
        <div className="col-span-2 flex flex-col justify-center items-start gap-12">
          <h4 className="font-play text-[#131313] text-[56px] font-bold">
            Books to freshen up your bookshelf
          </h4>
          <Link rel="stylesheet" to="/listed-books">
            <button className="text-white text-xl font-bold rounded-lg bg-[#23BE0A] py-5 px-7">
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
