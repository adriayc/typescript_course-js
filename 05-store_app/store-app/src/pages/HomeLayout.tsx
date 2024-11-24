import { Outlet } from 'react-router-dom';
// Components
import { Header } from '@/components';

function HomeLayout() {
  return (
    <>
      <Header />
      <nav>navbar</nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
