import style from "../style/Home.module.css";
import { Planets } from "./planets";
import { planetsDataType } from "./planetsData";

type dataType = {
  data: planetsDataType;
};

export const Orbits = ({ data }: dataType) => {
  const { size, orbitTime } = data;
  console.log(size);

  //orbit-animation -> GLOBAL CSS DOTOR ZARLAJ UGSUN tiimees shuud duudaj ashiglaj boloh ni :)
  return (
    <div
      // className={`w-[${size}px] h-[${size}px] border border-white border-dashed rounded-full  ${style["center-position"]}`}
      className={`border border-white border-dashed rounded-full  ${style.centerPosition}`}
      style={{
        width: `${size}`,
        height: `${size}`,
        animation: `orbit-animation ${orbitTime}s infinite linear`,
      }}
    >
      <Planets data={data} />
    </div>
  );
};
