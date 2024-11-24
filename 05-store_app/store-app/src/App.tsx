// Custom hooks (RTK)
import { useAppSelector } from './hooks';
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
// Components (Shadcn/ui)
import { Button } from '@/components/ui/button';

function App() {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);

  return (
    <div>
      <h1 className="text-7xl font-bold">App</h1>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log('it worked!!!')}
      >
        Click me
      </Button>
      <Cart />
    </div>
  );
}

export default App;
