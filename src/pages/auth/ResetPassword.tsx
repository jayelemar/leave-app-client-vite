import ResetPasswordForm from '@/components/form/auth/ResetPasswordForm'
import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <section className="relative">
      <div className="item-center container mx-auto flex w-screen justify-center">
        <div className="flex flex-row items-center justify-center gap-4">
          <Card className="flex w-[300px] flex-col items-center  justify-center shadow-lg">
            <CardHeader className="mx-3">
              <Label className="mb-2 flex items-center justify-start text-2xl">Reset Password</Label>
              <CardDescription className="text-xs font-normal text-muted-foreground">
                Enter your new password below to reset your password
              </CardDescription>
            </CardHeader>
            <ResetPasswordForm />
            <Link to="/" className="mb-6 mt-4 text-xs font-normal text-muted-foreground">
              Return to Home Page
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
export default RegisterPage
