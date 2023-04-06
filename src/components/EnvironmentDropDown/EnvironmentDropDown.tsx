import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

export const EnvironmentDropDown = ({
  filterEnvironment,
}: {
  filterEnvironment: Function;
}) => {
  return (
    <Select
      defaultValue="placeholder"
      sx={{
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
      }}
      style={{ width: "100%", height: 40 }}
      onChange={(event: SelectChangeEvent) => {
        filterEnvironment(event.target.value as string);
      }}
    >
      <MenuItem disabled value="placeholder">
        Environment
      </MenuItem>
      <MenuItem value={"All"}>
        <em>All</em>
      </MenuItem>
      <MenuItem value={"PROD"}>PROD</MenuItem>
      <MenuItem value={"DEV"}>DEV</MenuItem>
      <MenuItem value={"UAT"}>UAT</MenuItem>
      <MenuItem value={"QA"}>QA</MenuItem>
      <MenuItem value={"PPROD"}>PPROD</MenuItem>
      <MenuItem value={"SIT"}>SIT</MenuItem>
    </Select>
  );
};
