import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const VerifyPage = () => {
  return (
    <section className="relative">
      <div className="item-center container mx-auto flex flex-col justify-center">
        <div className="flex h-[75vh] w-screen flex-col items-center justify-center">
          <Card className="flex w-full max-w-[400px] flex-col items-center justify-center  p-4 shadow-lg">
            <CardHeader>
              <Label className="flex items-center justify-center text-2xl">Verify Account</Label>
              <CardDescription>To verify your account, click the button below.</CardDescription>
            </CardHeader>
            <Button className="my-4 w-40">Verify Account</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VerifyPage;
