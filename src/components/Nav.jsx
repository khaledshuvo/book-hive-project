import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl lg:text-3xl">
          <h3 className="font-bold text-[#131313]">Book Vibe</h3>
        </a>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal text-lg font-normal text-[#131313CC]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">Listed Books</Link>
          </li>
          <li>
            <Link to="/pages">Pages to Read</Link>
          </li>
        </ul>
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
