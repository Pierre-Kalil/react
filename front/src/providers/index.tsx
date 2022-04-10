import { AuthProvider } from "./auth";
import { AuthProviderProps } from "./auth/types";

export const Providers = ({ children }: AuthProviderProps) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};
