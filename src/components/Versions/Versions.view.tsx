import { HighlightedText } from "../HighlightedText/HighlightedText";
import { PlatformIcon } from "../PlatformIcon/PlatformIcon";
import EditAndDeleteIconsContainer from "./EditAndDeleteIconsContainer";
import "./Versions.css";

export const VersionsView = ({
  versions,
  onPressDelete,
  onPressEdit,
}: {
  versions: any;
  onPressDelete: any;
  onPressEdit: any;
}) => {
  console.log("Versions", versions);
  return (
    <div>
      <table align="center">
        <thead>
          <tr className="top-row">
            <th>App Name</th>
            <th>App Version</th>
            <th>Platform</th>
            <th>Environment</th>
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
              <td align="center">{item.environment.toLowerCase()}</td>
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
