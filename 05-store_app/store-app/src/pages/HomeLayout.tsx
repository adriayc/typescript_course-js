import { Outlet } from 'react-router-dom';
// Components
import { Header, Navbar } from '@/components';

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
