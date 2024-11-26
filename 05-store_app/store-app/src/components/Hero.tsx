// Components
import { Link } from 'react-router-dom';
import HeroCarousel from './HeroCarousel';
import { Button } from './ui/button';

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id officiis
          magni consequatur! Minima accusamus excepturi, illo saepe autem
          dolores, omnis quae obcaecati beatae magni quaerat quam
          necessitatibus. Porro, aperiam laborum.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link to="/products">Our products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
