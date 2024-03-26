import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl lg:text-3xl">
          <h3 className="font-bold text-[#131313]">Book Vibe</h3>
        </a>
      </div>
      <div className="navbar-center flex justify-center gap-8">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-[#23BE0A] hover:text-black hover:bg-[#23BE0A] text-lg font-semibold py-[10px] px-[15px] border-2 border-[#23BE0A] rounded-lg'
              : 'text-[#131313CC] text-lg font-normal '
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-[#23BE0A] hover:text-black hover:bg-[#23BE0A] text-lg font-semibold py-[10px] px-[15px] border-2 border-[#23BE0A] rounded-lg'
              : 'text-[#131313CC] text-lg font-normal '
          }
          to="/listed-books"
        >
          Listed Books
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-[#23BE0A] hover:text-black hover:bg-[#23BE0A] text-lg font-semibold py-[10px] px-[15px] border-2 border-[#23BE0A] rounded-lg'
              : 'text-[#131313CC] text-lg font-normal '
          }
          to="/pages-to-read"
        >
          Pages to Read
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-[#23BE0A] hover:text-black hover:bg-[#23BE0A] text-lg font-semibold py-[10px] px-[15px] border-2 border-[#23BE0A] rounded-lg'
              : 'text-[#131313CC] text-lg font-normal '
          }
          to="/terms"
        >
          Terms
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-[#23BE0A] hover:text-black hover:bg-[#23BE0A] text-lg font-semibold py-[10px] px-[15px] border-2 border-[#23BE0A] rounded-lg'
              : 'text-[#131313CC] text-lg font-normal '
          }
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex gap-4">
          <button className="rounded-lg px-7 py-4 bg-[#23BE0A] text-white text-lg font-semibold">
            Sign In
          </button>
          <button className="rounded-lg px-7 py-4 bg-[#59C6D2] text-white text-lg font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
