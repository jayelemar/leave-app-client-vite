import RegisterForm from '@/components/form/auth/RegisterForm'
import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <section className="relative">
      <div className="item-center container mx-auto flex w-screen justify-center">
        <div className="flex flex-row items-center justify-center gap-4 pt-8">
          <Card className="flex w-[800px] max-w-[300px] flex-col items-center justify-center  shadow-lg sm:max-w-[600px] md:max-w-[650px]">
            <CardHeader>
              <Label className="flex items-center justify-center text-2xl">Register</Label>
            </CardHeader>
            <RegisterForm />
            <Link to="/login" className="mb-6 mt-4 text-xs font-normal text-muted-foreground">
              Login to existing account
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
export default RegisterPage
