import AuthLayout from "../components/AuthLayout";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="We’ll send you a code to recover your account"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
