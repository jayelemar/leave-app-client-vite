import { FC } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { ForgotPasswordSchema } from '@/schema/auth/ForgotPasswordSchema'
import { useNavigate } from 'react-router-dom'
// UI

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'

type FormData = z.infer<typeof ForgotPasswordSchema>

const ForgotPasswordForm: FC = () => {
  const navigate = useNavigate()

  const form = useForm<FormData>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(data: FormData) {
    console.log(data)
    navigate('/')
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
        <div className="h-2" />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default ForgotPasswordForm
