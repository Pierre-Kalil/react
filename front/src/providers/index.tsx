import { AuthProvider } from "./auth";
import { AuthProviderProps } from "./auth/types";
import { RecordProvider } from "./record";
import { UserProvider } from "./user";

export const Providers = ({ children }: AuthProviderProps) => {
  return (
    <>
      <AuthProvider>
        <RecordProvider>
          <UserProvider>{children}</UserProvider>
        </RecordProvider>
      </AuthProvider>
    </>
  );
};
