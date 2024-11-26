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
  Error,
} from './pages';
// Components
import { ErrorElement } from './components';

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
        // errorElement: <h2>there was an error...</h2>,
        errorElement: <ErrorElement />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  { path: '/login', element: <Login />, errorElement: <Error /> },
  { path: '/register', element: <Register />, errorElement: <Error /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
