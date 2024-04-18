import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
// UI
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ResetPasswordSchema } from '@/schema/auth/ResetPasswordSchema'
import TogglePasswordIcon from '../../common/TogglePasswordIcon'

type FormData = z.infer<typeof ResetPasswordSchema>
const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const togglePassword = () => setShowPassword((prev) => !prev)
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev)

  const form = useForm<FormData>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })
  async function onSubmit(data: FormData) {
    console.log({ data })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-3/4 flex-col gap-4">
        <div className="flex flex-col gap-4">
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

        {/* <div className="h-12"/> */}
        <Button type="submit" className="basis-1">
          Submit
        </Button>
      </form>
    </Form>
  )
}
export default ResetPasswordForm
