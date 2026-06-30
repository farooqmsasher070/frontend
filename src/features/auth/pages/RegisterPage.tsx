import AuthLayout from "../components/AuthLayout";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join FreshMeat and start shopping"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
