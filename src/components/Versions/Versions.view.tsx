import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { HighlightedText } from "../HighlightedText/HighlightedText";
import { PlatformIcon } from "../PlatformIcon/PlatformIcon";
import EditAndDeleteIconsContainer from "./EditAndDeleteIconsContainer";
import "./Versions.css";

export const VersionsView = ({
  versions,
  onPressDelete,
  onPressEdit,
  filterEnvironment,
}: {
  versions: any;
  onPressDelete: any;
  onPressEdit: any;
  filterEnvironment: any;
}) => {
  return (
    <div>
      <table align="center">
        <thead>
          <tr className="top-row">
            <th>App Name</th>
            <th>App Version</th>
            <th>Platform</th>
            <th style={{ width: 130 }}>
              <FormControl fullWidth>
                <Select
                  inputProps={{
                    disableUnderline: true,
                    disableAnimation: true,
                  }}
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
              </FormControl>
            </th>
            <th>Force Upgrade</th>
            <th>Flexible Upgrade</th>
            <th className="last-header" />
          </tr>
        </thead>
        <tbody>
          {versions.map((item: any) => (
            <tr key={item.id}>
              <td align="center">{item.appName}</td>
              <td align="center">
                <HighlightedText text={item.version} />
              </td>
              <td align="center">
                <PlatformIcon platform={item.platform} />
              </td>
              <td align="center">{item.environment}</td>
              <td align="center">
                <HighlightedText
                  colored={item.forceUpgrade}
                  text={item.forceUpgrade ? "Yes" : "No"}
                />
              </td>
              <td align="center">
                <HighlightedText
                  colored={item.flexibleUpgrade}
                  text={item.flexibleUpgrade ? "Yes" : "No"}
                />
              </td>
              <td align="center">
                <EditAndDeleteIconsContainer
                  deleteVersion={() => onPressDelete(item.id)}
                  editVersion={() => {
                    console.log("first");
                    onPressEdit(item);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
