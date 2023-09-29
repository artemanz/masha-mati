import { cosp__desktop_hero, cosp__mobile_hero } from "@/assets/images";
import { useEffect } from "react";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section className="h-screen section">
      <img
        className="absolute inset-0 object-bottom w-full h-full lg:hidden"
        src={cosp__mobile_hero}
        alt="CelebritySinger"
      />
      <img
        className="absolute inset-0 hidden object-bottom w-full h-full lg:block"
        src={cosp__desktop_hero}
        alt="CelebritySinger"
      />
      <div className="relative z-10 pt-[25vh] lg:pt-0 lg:h-full lg:flex lg:items-center">
        <h1 className="max-w-md mx-auto text-3xl md:text-4xl text-center font-horizon lg:text-[4rem] lg:max-w-[70rem] lg:leading-none lg:text-left xl:text-[5rem] xl:max-w-hd lg:ml-[10vw] uppercase">
          create your <br /> own song
        </h1>
      </div>
    </section>
  );
};

export default Hero;
