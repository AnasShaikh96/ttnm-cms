export const LoginForm = () => {
  return (
    <form>
      <div className="mb-7">
        {/* <Input title={'Email'} type="email" HandleChange={(e: any) => setFormData({ ...formData, email: e.target.value })} /> */}
      </div>
      <div className="mb-10">
        {/* <Input title={'Password'} type="password" HandleChange={(e: any) => setFormData({ ...formData, password: e.target.value })} /> */}
      </div>
      <div className="grid grid-cols-2 gap-x-4 ">
        {/* <Button title="Login" variant="primary" btnType="submit" classProps="order-last" /> */}
        {/* <Button title="Sign Up" variant="secondary" onClick={() => navigate('/register')} /> */}
      </div>
    </form>
  );
};
