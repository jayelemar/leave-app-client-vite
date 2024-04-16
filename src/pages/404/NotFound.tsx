import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <section>
      <div className="container flex min-h-[82vh] flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-xl">Oops! Page Not Found</h2>
          <p className="text-sm">Sorry, the page you were looking doesn&apos;t exist.</p>
          <Link to="/">
            <Button className="mt-10 w-full px-4 py-2">Back to Home</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
