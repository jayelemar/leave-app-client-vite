import LoginImg from '@/assets/login.svg';
import LoginForm from '@/components/form/LoginForm';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Home = () => {
  return (
    <section className="relative">
      <div className="item-center container mx-auto flex w-screen justify-center">
        <div className="flex flex-row items-center justify-center gap-4">
          <img src={LoginImg} alt="img1" width="430px" className="animate-slide-down hidden md:flex" />
          <Card className="flex w-[300px] flex-col items-center  justify-center shadow-lg">
            <CardHeader>
              <Label className="flex items-center justify-center text-2xl">Login</Label>
            </CardHeader>

            <LoginForm />

            <Button variant="ghost" className="flex w-3/4 gap-2 border border-foreground/15 text-sm">
              Login with Google <FcGoogle size={18} />
            </Button>
            <Link to="/register" className="mb-8 mt-4 text-xs font-normal text-muted-foreground">
              Don't have an account? Sign Up
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Home;
