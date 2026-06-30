import type { User } from "../types/user";

export const authService = {
  async login(
    email: string,
    password: string
  ): Promise<User> {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    if (
      email === "admin@freshmeat.com" &&
      password === "password"
    ) {
      return {
        id: "1",
        fullName: "Farooq Sheikh",
        email,
        phone: "9876543210",
        token: "mock-jwt-token",
      };
    }

    throw new Error("Invalid email or password");
  },
};