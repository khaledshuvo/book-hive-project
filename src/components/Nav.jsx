import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <Link to="/">
          <button className="font-bold text-xs lg:text-3xl text-[#131313]">
            Book Vibe
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-3 lg:gap-8">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-[#23BE0A] hover:text-black hover:bg-[#23BE0A] text-xs lg:text-lg font-normal lg:font-semibold py-[4px] lg:py-[10px] px-[7px] lg:px-[15px] border-2 border-[#23BE0A] rounded-lg hidden lg:flex'
              : 'text-[#131313CC] text-xs lg:text-lg font-normal hidden lg:flex'
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-[#23BE0A] hover:text-black hover:bg-[#23BE0A] text-xs lg:text-lg font-normal lg:font-semibold py-[4px] lg:py-[10px] px-[7px] lg:px-[15px] border-2 border-[#23BE0A] rounded-lg'
              : 'text-[#131313CC] text-xs lg:text-lg font-normal'
          }
          to="/listed-books"
        >
          Listed Books
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-[#23BE0A] hover:text-black hover:bg-[#23BE0A] text-xs lg:text-lg font-normal lg:font-semibold py-[4px] lg:py-[10px] px-[7px] lg:px-[15px] border-2 border-[#23BE0A] rounded-lg'
              : 'text-[#131313CC] text-xs lg:text-lg font-normal'
          }
          to="/pages-to-read"
        >
          Pages to Read
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-[#23BE0A] hover:text-black hover:bg-[#23BE0A] text-xs lg:text-lg font-normal lg:font-semibold py-[4px] lg:py-[10px] px-[7px] lg:px-[15px] border-2 border-[#23BE0A] rounded-lg'
              : 'text-[#131313CC] text-xs lg:text-lg font-normal'
          }
          to="/terms"
        >
          Terms
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-[#23BE0A] hover:text-black hover:bg-[#23BE0A] text-xs lg:text-lg font-normal lg:font-semibold py-[4px] lg:py-[10px] px-[7px] lg:px-[15px] border-2 border-[#23BE0A] rounded-lg'
              : 'text-[#131313CC] text-xs lg:text-lg font-normal'
          }
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </div>
      <div className="">
        <div className="hidden lg:flex gap-4">
          <button className="rounded-lg px-3 lg:px-7 py-2 lg:py-4 bg-[#23BE0A] text-white text-xs lg:text-lg font-normal lg:font-semibold">
            Sign In
          </button>
          <button className="rounded-lg px-3 lg:px-7 py-2 lg:py-4 bg-[#59C6D2] text-white text-xs lg:text-lg font-normal lg:font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
