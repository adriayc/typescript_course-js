import { type ActionFunction, Form, Link } from 'react-router-dom';
// Components (Shadcn/ui)
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// Components
import { FormInput } from '@/components';

// Action
export const action: ActionFunction = async ({ request }): Promise<null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return null;
};

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput type="text" name="username" defaultValue="test" />
            <FormInput type="email" name="email" defaultValue="test@test.com" />
            <FormInput type="password" name="password" defaultValue="secret" />
            {/* Button */}
            <Button type="submit" className="w-full mt-4">
              Submit
            </Button>
            <p className="text-center mt-4">
              Already a member?
              <Button type="button" asChild variant="link">
                <Link to="/login">Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Register;
