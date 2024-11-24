import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Pages
import {
  HomeLayout,
  Landing,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';

// Router
const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
