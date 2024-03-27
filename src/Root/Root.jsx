import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Root = () => {
  
  return (
    <div>
      <div className="lg:mx-[135px] mx-[10px] lg:mt-10 mt-4 font-work">
        <div className="min-w-[calc(100vw-260px)] mx-auto z-10">
          <Nav />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
