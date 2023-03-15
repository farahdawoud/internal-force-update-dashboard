import { Toggle } from "../../Toggle/Toggle";
import useStyles from "./TogglesContainer.styles";

export const TogglesContainer = ({
  data,
  setData,
}: {
  data: any;
  setData: any;
}) => {
  const styles = useStyles();

  return (
    <div className={styles.togglesContainer}>
      <div>
        <Toggle
          checked={data.forceUpgrade}
          setChecked={(val: any) => setData({ ...data, forceUpgrade: val })}
          label="Force Update"
        />
      </div>
      <div>
        <Toggle
          checked={data.flexibleUpgrade}
          setChecked={(val: any) => setData({ ...data, flexibleUpgrade: val })}
          label="Flexible Update"
        />
      </div>
    </div>
  );
};
