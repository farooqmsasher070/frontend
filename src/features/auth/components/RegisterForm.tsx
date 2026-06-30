import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";

import Button from "../../../components/common/Button";
import { authService } from "../services/authService";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"register" | "confirm">("register");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const result = await authService.register({
        fullName,
        email,
        phone,
        password,
      });

      if (result.needsConfirmation) {
        setStep("confirm");
        toast.success("A verification code was sent to your email.");
        return;
      }

      toast.success("Account created successfully. Please sign in.");
      navigate("/login");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to create account"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await authService.confirmRegister(email, code);
      toast.success("Account confirmed. You can sign in now.");
      navigate("/login");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to confirm account"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      <div className="space-y-6">
        {step === "register" ? (
          <>
            <AuthInput
              label="Full Name"
              value={fullName}
              placeholder="Enter your full name"
              onChange={setFullName}
            />

            <AuthInput
              label="Email"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={setEmail}
            />

            <AuthInput
              label="Phone"
              value={phone}
              placeholder="Enter your phone number"
              onChange={setPhone}
            />

            <PasswordInput
              label="Password"
              value={password}
              placeholder="Create a password"
              onChange={setPassword}
            />

            <PasswordInput
              label="Confirm Password"
              value={confirmPassword}
              placeholder="Confirm your password"
              onChange={setConfirmPassword}
            />

            <Button onClick={handleRegister}>
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </>
        ) : (
          <>
            <AuthInput
              label="Confirmation Code"
              value={code}
              placeholder="Enter the code from your email"
              onChange={setCode}
            />

            <Button onClick={handleConfirm}>
              {loading ? "Verifying..." : "Verify Account"}
            </Button>
          </>
        )}

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-red-700">
            Sign In
          </Link>
        </div>
      </div>
    </AuthCard>
  );
}
