import React from "react";
import { HighlightedText } from "../HighlightedText/HighlightedText";
import { PlatformIcon } from "../PlatformIcon/PlatformIcon";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Versions.css";

const IconsContainer = () => {
  return (
    <div className="icons-container">
      <EditIcon />
      <DeleteIcon />
    </div>
  );
};

export const VersionsView = ({ versions }: { versions: any }) => {
  return (
    <div>
      <table align="center">
        <thead>
          <tr className="top-row">
            <th>App Name</th>
            <th>App Version</th>
            <th>Platform</th>
            <th>Force Upgrade</th>
            <th>Flexible Upgrade</th>
            <th className="last-header" />
          </tr>
        </thead>
        <tbody>
          {versions.map((item: any) => (
            <tr key={item.version}>
              <td align="center">{item.appName}</td>
              <td align="center">
                <HighlightedText text={item.version} />
              </td>
              <td align="center">
                <PlatformIcon platform={item.platform} />
              </td>
              <td align="center">{item.forceUpgrade ? "Yes" : "No"}</td>
              <td align="center">{item.flexibleUpgrade ? "Yes" : "No"}</td>
              <td align="center">
                <IconsContainer />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
