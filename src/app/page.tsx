import { Orbits } from "@/components/orbits";
import style from "../style/Home.module.css";
import { planetsData } from "@/components/planetsData";

export default function Home() {
  return (
    <div className="bg-[url(/image/galaxy.webp)] w-[100vw] h-[100vh] bg-cover bg-center relative">
      <img
        src="/image/sun.png"
        alt=""
        className={`w-[100px] h-[100px] ${style.centerPosition}`}
      />

     {planetsData.map((data,i) => <Orbits data={data} key={i}/>) }
    </div>
  );
}
