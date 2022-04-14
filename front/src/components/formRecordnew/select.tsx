import { SelectProps } from "./types";

export function Select({
  register,
  options,
  name,
  nameOption,
  ...rest
}: SelectProps) {
  return (
    <select {...register(name)} {...rest}>
      <option value="" disabled selected>
        {nameOption}
      </option>
      {options.map((value) => (
        <option
          key={value}
          value={value}
          style={{ color: "var(--dark)", fontSize: "15px" }}
        >
          {value}
        </option>
      ))}
    </select>
  );
}
