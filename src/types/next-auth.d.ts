// src/types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface CustomUser {
  id: string;
  name?: string | null | undefined;
  userName: string;
  role: string[];
  permissions: string[];
}

declare module "next-auth" {
  interface Session {
    user?: CustomUser & DefaultSession["user"];
  }

  interface User extends CustomUser {}
}

declare module "next-auth/jwt" {
  interface JWT extends CustomUser {
    exp: number;
    token: string;
    invalid?: boolean;
  }
}
