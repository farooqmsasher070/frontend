import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

import Button from "../../../components/common/Button";

import { authService } from "../services/authService";
import { useAuthStore } from "../store/authStore";

export default function LoginForm() {
  const navigate = useNavigate();

  const login = useAuthStore(
    (state) => state.login
  );

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const user =
        await authService.login(
          email,
          password
        );

      login(user);

      toast.success(
        `Welcome ${user.fullName}!`
      );

      navigate("/");
    } catch (error) {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>

      <div className="space-y-6">

        <AuthInput
          label="Email"
          value={email}
          placeholder="Enter email"
          onChange={setEmail}
        />

        <PasswordInput
          label="Password"
          value={password}
          placeholder="Enter password"
          onChange={setPassword}
        />

        <div className="flex justify-end">

          <Link
            to="/forgot-password"
            className="text-sm text-red-700"
          >
            Forgot Password?
          </Link>

        </div>

        <Button
          onClick={handleLogin}
        >
          {loading
            ? "Signing In..."
            : "Login"}
        </Button>

        <SocialLogin />

        <div className="text-center">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-semibold text-red-700"
          >
            Register
          </Link>

        </div>

      </div>

    </AuthCard>
  );
}