import { FC, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/schema/authSchema';
import { Link, useNavigate } from 'react-router-dom';

// UI
// import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

type FormData = z.infer<typeof LoginSchema>;

const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: FormData) {
    console.log(data);
    navigate('/');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-2 w-3/4 space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative flex flex-col items-start justify-center">
              <FormLabel className="relative top-1 mr-10">Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} autoComplete="off" />
              </FormControl>
              <FormMessage className="absolute -bottom-5 left-0 text-[8px]" />
            </FormItem>
          )}
        />
        <div className="relative">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative mb-12 flex flex-col items-start justify-center">
                <FormLabel className="relative top-1 mr-4 mt-2">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    type={showPassword ? 'text' : 'password'}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage className="absolute -bottom-5 left-0 text-[8px]" />
              </FormItem>
            )}
          />
          {showPassword ? (
            <EyeOff
              className="absolute right-2 top-10 cursor-pointer text-gray-300"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Eye
              className="absolute right-2 top-10 cursor-pointer text-gray-300"
              onClick={() => setShowPassword(true)}
            />
          )}
          <Link
            to="/forgot-password"
            className="absolute right-0 top-2 text-[10px] text-muted-foreground underline underline-offset-2"
          >
            forgot password?
          </Link>
        </div>
        <div className="h-4" />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
