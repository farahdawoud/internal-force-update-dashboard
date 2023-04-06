import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import colors from "../../../ui/theme/colors";
import useStyles from "../NewVersionForm.styles";

export const DropDownsContainer = ({
  data,
  setData,
}: {
  data: any;
  setData: Function;
}) => {
  const styles = useStyles();
  return (
    <div className={styles.horizontalDiv}>
      <Select
        defaultValue={data.platform ? data.platform : "placeholder"}
        style={{
          flex: 1,
          marginInlineEnd: 18,
          color: data.platform === "" ? colors.textFieldGray : colors.black,
        }}
        onChange={(event: SelectChangeEvent) => {
          setData({
            ...data,
            platform: event.target.value.toUpperCase(),
          });
        }}
      >
        <MenuItem
          disabled
          style={{ color: colors.textFieldGray }}
          value="placeholder"
        >
          Platform
        </MenuItem>
        <MenuItem value={"IOS"}>IOS</MenuItem>
        <MenuItem value={"ANDROID"}>Android</MenuItem>
      </Select>
      <Select
        defaultValue={data.environment ? data.environment : "placeholder"}
        style={{
          flex: 1,
          color: data.environment === "" ? colors.textFieldGray : colors.black,
        }}
        placeholder="Environment"
        onChange={(event: SelectChangeEvent) => {
          setData({
            ...data,
            environment: event.target.value.toUpperCase(),
          });
        }}
      >
        <MenuItem disabled value="placeholder">
          Environment
        </MenuItem>
        <MenuItem value={"PROD"}>PROD</MenuItem>
        <MenuItem value={"UAT"}>UAT</MenuItem>
        <MenuItem value={"DEV"}>DEV</MenuItem>
        <MenuItem value={"QA"}>QA</MenuItem>
        <MenuItem value={"PPROD"}>PPROD</MenuItem>
        <MenuItem value={"SIT"}>SIT</MenuItem>
      </Select>
    </div>
  );
};
