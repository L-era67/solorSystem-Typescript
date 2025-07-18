export type planetsDataType = {
    size:string,
    orbitTime:number,
    planet:string,
    img:string,
    planetTime:number
}

export const planetsData:planetsDataType[] = [
  {
    size: "150px",
    orbitTime: 8.8,
    planet: "15px",
    img: "/image/mercury.png",
    planetTime:5.86
  },
  {
    size: "200px",
    orbitTime: 22.5,
    planet: "20px",
    img: "/image/venus.png",
    planetTime:24.3
  },
  {
    size: "300px",
    orbitTime: 36.5,
    planet: "23px",
    img: "/image/earth.png",
    planetTime:1
  },
  {
    size: "400px",
    orbitTime: 68.7,
    planet: "17px",
    img: "/image/mars.png",
    planetTime:1.025
  },
  {
    size: "550px",
    orbitTime: 118.6,
    planet: "45px",
    img: "/image/jupiter.png",
    planetTime:0.41
  },
  {
    size: "650px",
    orbitTime: 294.6,
    planet: "40px",
    img: "/image/saturn.png",
    planetTime:0.445
  },
  {
    size: "750px",
    orbitTime: 840,
    planet: "35px",
    img: "/image/uranus.png",
    planetTime:0.717
  },
  {
    size: "850px",
    orbitTime: 1648,
    planet: "33px",
    img: "/image/neptune.png",
    planetTime:0.671
  },
];
