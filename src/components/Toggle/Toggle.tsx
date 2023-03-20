import { Switch } from "@mui/material";

export const Toggle = ({
  label,
  checked,
  setChecked,
}: {
  label: string;
  checked: boolean;
  setChecked: Function;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      {label}
      <Switch checked={checked} onChange={handleChange} />
    </div>
  );
};
