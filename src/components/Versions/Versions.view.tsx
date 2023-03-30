import { FormControl } from "@mui/material";
import EnvironmentDropDown from "../EnvironmentDropDown";
import { HighlightedText } from "../HighlightedText/HighlightedText";
import { PlatformIcon } from "../PlatformIcon/PlatformIcon";
import EditAndDeleteIconsContainer from "./EditAndDeleteIconsContainer";
import "./Versions.css";

export type versionItem = {
  appName: string;
  version: string;
  environment: string;
  forceUpgrade: boolean;
  flexibleUpgrade: boolean;
  platform: string;
  id: number;
  updateMessage: string;
};

export const VersionsView = ({
  versions,
  onPressDelete,
  onPressEdit,
  filterEnvironment,
}: {
  versions: Array<versionItem>;
  onPressDelete: Function;
  onPressEdit: Function;
  filterEnvironment: Function;
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
                <EnvironmentDropDown filterEnvironment={filterEnvironment} />
              </FormControl>
            </th>
            <th>Force Upgrade</th>
            <th>Flexible Upgrade</th>
            <th className="last-header" />
          </tr>
        </thead>
        <tbody>
          {versions.map((item: versionItem) => (
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
