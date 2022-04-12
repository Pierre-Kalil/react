import { AuthProvider } from "./auth";
import { AuthProviderProps } from "./auth/types";
import { RecordProvider } from "./record";

export const Providers = ({ children }: AuthProviderProps) => {
  return (
    <>
      <AuthProvider>
        <RecordProvider>{children}</RecordProvider>
      </AuthProvider>
    </>
  );
};
