import { Outlet } from 'react-router-dom';
// Components
import { Header } from '@/components';

function HomeLayout() {
  return (
    <>
      <Header />
      <nav>navbar</nav>
      <div className="align-element py-20">
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
