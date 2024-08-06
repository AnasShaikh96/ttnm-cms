import { AuthLayout } from '../../../components/layouts/auth-layout';
import { LoginForm } from '../../../features/auth/login-form';

export function LoginRoute() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
