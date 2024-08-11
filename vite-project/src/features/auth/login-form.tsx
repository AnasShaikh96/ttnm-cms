import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/form/input';

export const LoginForm = () => {
  return (
    <form>
      <div className="mb-7">
        <Input type="email" label="Email" />
      </div>
      <div className="mb-10">
        <Input type="password" label="Password" />
      </div>
      <div className="grid grid-cols-2 gap-x-4 ">
        <Button type="button" variant={'default'}>
          Cancel
        </Button>
        <Button type="button" variant={'default'}>
          Submit
        </Button>
        {/* <Button title="Login" variant="primary" btnType="submit" classProps="order-last" /> */}
        {/* <Button title="Sign Up" variant="secondary" onClick={() => navigate('/register')} /> */}
      </div>
    </form>
  );
};
