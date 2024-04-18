import AccessCodeForm from '@/components/form/auth/AccessCodeForm'
import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@radix-ui/react-label'
import { Link } from 'react-router-dom'
const AccessCodePage = () => {
  return (
    <section className="relative">
      <div className="item-center container mx-auto flex flex-col justify-center">
        <div className="flex h-screen flex-col items-center justify-center">
          <Card className="relative flex w-full max-w-[400px] flex-col items-center justify-center shadow-lg ">
            <CardHeader>
              <Label className="mb-4 flex items-center justify-center text-2xl">Enter Access Code</Label>
            </CardHeader>
            <AccessCodeForm />
            <Link to="/" className="absolute right-16 top-24 text-xs font-normal text-muted-foreground">
              Resend Code
            </Link>
            <Link to="/" className="mb-4 mt-8 text-xs font-normal text-muted-foreground">
              Return to Home Page
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
export default AccessCodePage
