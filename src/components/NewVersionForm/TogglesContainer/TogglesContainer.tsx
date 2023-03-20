import { Toggle } from "../../Toggle/Toggle";
import useStyles from "./TogglesContainer.styles";

export const TogglesContainer = ({
  data,
  setData,
}: {
  data: { [key: string]: any };
  setData: Function;
}) => {
  const styles = useStyles();

  return (
    <div className={styles.togglesContainer}>
      <div>
        <Toggle
          checked={data.forceUpgrade}
          setChecked={(val: boolean) => setData({ ...data, forceUpgrade: val })}
          label="Force Update"
        />
      </div>
      <div>
        <Toggle
          checked={data.flexibleUpgrade}
          setChecked={(val: boolean) =>
            setData({ ...data, flexibleUpgrade: val })
          }
          label="Flexible Update"
        />
      </div>
    </div>
  );
};
