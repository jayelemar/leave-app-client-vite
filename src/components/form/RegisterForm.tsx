import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
// UI
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { toast } from "react-toastify";
import { RegisterSchema } from '@/schema/authSchema';
// import { useNavigate } from "react-router-dom";
type FormData = z.infer<typeof RegisterSchema>;
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const navigate = useNavigate();
  const form = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  async function onSubmit(data: FormData) {
    console.log({ data });

    // try {
    //   // const result = await registerUser(user)
    //   toast.success("User registered successfully.Please login.")
    //   navigate("/")
    // } catch (error) {
    //   toast.error("Something went wrong.")
    //   console.log(error);
    // }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-3/4 flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="basis-1/2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative mb-4 flex flex-col items-start justify-center">
                  <FormLabel className="relative top-1 mr-10">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} autoComplete="off" className="w-full" />
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
                  <FormItem className="relative flex flex-col items-start justify-center ">
                    <FormLabel className="relative top-1 mr-4 mt-2">Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type={showPassword ? 'text' : 'password'}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="w-full"
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
            </div>
          </div>
          <div className="basis-1/2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative mb-4 flex flex-col items-start justify-center">
                  <FormLabel className="relative top-1 mr-10">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} autoComplete="off" className="w-full" />
                  </FormControl>
                  <FormMessage className="absolute -bottom-5 left-0 text-[8px]" />
                </FormItem>
              )}
            />

            <div className="relative ">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="relative mb-12 flex flex-col items-start justify-center ">
                    <FormLabel className="relative top-1 mr-4 mt-2">Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5 left-0 text-[8px]" />
                  </FormItem>
                )}
              />
              {showConfirmPassword ? (
                <EyeOff
                  className="absolute right-2 top-10 cursor-pointer text-gray-300"
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <Eye
                  className="absolute right-2 top-10 cursor-pointer text-gray-300"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* <div className="h-12"/> */}
        <Button type="submit" className="basis-1">
          Register
        </Button>
      </form>
    </Form>
  );
};
export default RegisterForm;
