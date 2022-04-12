export interface UserProps {
  filterUser: (id: string) => void;
  patient: {
    id: string;
    name: string;
    email: string;
    password: string;
  };
}
