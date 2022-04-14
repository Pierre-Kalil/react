export interface SelectProps {
  register: (name: string) => void;
  name: string;
  error?: string;
  value?: string;
  borderSchema?: boolean;
  options: string[];
  nameOption: string;
}
