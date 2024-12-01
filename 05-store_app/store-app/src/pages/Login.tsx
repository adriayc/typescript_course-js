import { Form, Link } from 'react-router-dom';
// Components (Shadcn/ui)
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// Components
import { FormInput, SubmitBtn } from '@/components';

function Login() {
  const loginAsGuestUser = () => {
    console.log('Guest user');
  };

  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput type="email" label="email" name="identifier" />
            <FormInput type="password" label="password" name="password" />
            {/* Buttons */}
            <SubmitBtn text="Login" className="w-full mt-4" />
            <Button
              type="button"
              variant="outline"
              className="w-full mt-4"
              onClick={loginAsGuestUser}
            >
              Guest User
            </Button>
            <p className="text-center mt-4">
              Not a member yet?
              <Button type="button" asChild variant="link">
                <Link to="/register">Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Login;
