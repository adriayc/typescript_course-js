import { Form, Link, useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { AxiosResponse } from 'axios';
// Custom hooks (RTK)
import { useAppDispatch } from '@/hooks';
// Actions (RTK)
import { loginUser } from '@/features/user/userSlice';
// Utils
import { customFetch } from '@/utils';
// Components (Shadcn/ui)
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// Components
import { FormInput, SubmitBtn } from '@/components';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      // Dispatch
      dispatch(loginUser({ username, jwt }));
      // Navigate
      navigate('/');
    } catch (error) {
      console.log(error);
      // Toast
      toast({ description: 'Login Failed' });
    }
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
