export function Select({ options, name, ...rest }: any) {
  return (
    <select name={name} {...rest}>
      {options.map((value: string, index: number) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
