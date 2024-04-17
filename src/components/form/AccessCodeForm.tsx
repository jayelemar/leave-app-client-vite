import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AccessCodeSchema } from '@/schema/auth/AccessCodeSchema';
//UI
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';

type FormData = z.infer<typeof AccessCodeSchema>;
const AccessCodeForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(AccessCodeSchema),
    defaultValues: {
      loginCode: '',
    },
  });
  async function onSubmit(data: FormData) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-2 w-2/3 space-y-3">
        <FormField
          control={form.control}
          name="loginCode"
          render={({ field }) => (
            <FormItem className="relative flex flex-col items-start justify-center">
              <FormLabel className="mr-10 mt-2" />
              <FormControl>
                <Input placeholder="" {...field} autoComplete="off" />
              </FormControl>
              <FormMessage className="absolute -bottom-4 left-0 text-[8px]" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Proceed to Login
        </Button>
      </form>
    </Form>
  );
};
export default AccessCodeForm;
