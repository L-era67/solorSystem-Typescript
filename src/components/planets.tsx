import styles from "../style/Home.module.css";
import { planetsDataType } from "./planetsData";

type dataType = {
  data: planetsDataType;
};

export const Planets = ({ data }: dataType) => {
  const { planet, img, planetTime } = data;

  //orbit-animation -> GLOBAL CSS DOTOR ZARLAJ UGSUN

  return (
    <div
      className={styles.centerPosition}
      // className={`${styles["center-position"]}`}
      style={{
        top: 0,
        animation: `orbit-animation ${planetTime}s infinite linear`,
      }}
    >
      <img
        src={img}
        alt=""
        style={{ height: `${planet}`, width: `${planet}` }}
      />
    </div>
  );
};
