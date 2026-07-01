export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  token: string;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}
