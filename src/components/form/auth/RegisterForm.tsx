import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { RegisterSchema } from '@/schema/auth/RegisterSchema'
// UI
import TogglePasswordIcon from '../../common/TogglePasswordIcon'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRegisterUser } from '@/hooks/auth/useRegisterUser'

type FormData = z.infer<typeof RegisterSchema>
const RegisterForm = () => {
  const { mutate: RegisterMutation } = useRegisterUser()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const togglePassword = () => setShowPassword((prev) => !prev)
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev)

  const form = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  async function onSubmit(data: FormData) {
    // console.log({ data });
    try {
      await RegisterMutation(data)
      console.log('User is Successfully Registered.')
    } catch (error) {
      console.log('registration failed', error)
    }
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
              <TogglePasswordIcon initialState={showPassword} onClick={togglePassword} />
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
              <TogglePasswordIcon initialState={showConfirmPassword} onClick={toggleConfirmPassword} />
            </div>
          </div>
        </div>

        {/* <div className="h-12"/> */}
        <Button type="submit" className="basis-1">
          Register
        </Button>
      </form>
    </Form>
  )
}
export default RegisterForm
