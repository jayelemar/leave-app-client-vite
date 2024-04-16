import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

import ForgotPasswordForm from '@/components/form/ForgotPasswordForm';

const ForgetPassword = () => {
  return (
    <section className="relative">
      <div className="item-center container mx-auto flex w-screen justify-center">
        <div className="flex flex-row items-center justify-center gap-4">
          <Card className="flex w-[300px] flex-col items-center  justify-center shadow-lg">
            <CardHeader className="px-9">
              <Label className="mb-2 flex items-center justify-start text-2xl">Forgot Password</Label>
              <CardDescription className="text-xs font-normal text-muted-foreground">
                Enter your email below to recieve a password reset link
              </CardDescription>
            </CardHeader>
            <ForgotPasswordForm />
            <Link to="/" className="mb-8 mt-4 text-xs font-normal text-muted-foreground">
              Back to Login
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
