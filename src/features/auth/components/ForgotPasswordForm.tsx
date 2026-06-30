import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";

import Button from "../../../components/common/Button";
import { authService } from "../services/authService";

export default function ForgotPasswordForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"request" | "confirm">("request");

  const handleRequestCode = async () => {
    try {
      setLoading(true);
      await authService.forgotPassword(email);
      setStep("confirm");
      toast.success("A reset code was sent to your email.");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to send reset code"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await authService.confirmForgotPassword(email, code, newPassword);
      toast.success("Password reset successfully. Please sign in.");
      navigate("/login");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to reset password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      <div className="space-y-6">
        {step === "request" ? (
          <>
            <AuthInput
              label="Email"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={setEmail}
            />

            <Button onClick={handleRequestCode}>
              {loading ? "Sending..." : "Send Reset Code"}
            </Button>
          </>
        ) : (
          <>
            <AuthInput
              label="Reset Code"
              value={code}
              placeholder="Enter the code from your email"
              onChange={setCode}
            />

            <PasswordInput
              label="New Password"
              value={newPassword}
              placeholder="Enter a new password"
              onChange={setNewPassword}
            />

            <PasswordInput
              label="Confirm New Password"
              value={confirmPassword}
              placeholder="Confirm your new password"
              onChange={setConfirmPassword}
            />

            <Button onClick={handleResetPassword}>
              {loading ? "Updating..." : "Reset Password"}
            </Button>
          </>
        )}

        <div className="text-center text-sm text-gray-600">
          Back to{" "}
          <Link to="/login" className="font-semibold text-red-700">
            Sign In
          </Link>
        </div>
      </div>
    </AuthCard>
  );
}
