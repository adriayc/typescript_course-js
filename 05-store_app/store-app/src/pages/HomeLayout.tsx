import { Outlet, useNavigation } from 'react-router-dom';
// Components
import { Header, Navbar, Loading } from '@/components';

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading'; // Loading state

  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        {isPageLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}

export default HomeLayout;
