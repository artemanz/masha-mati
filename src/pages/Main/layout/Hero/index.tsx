import { desktop__hero, mobile__bg, mobile__hero } from "@/assets/images";
import { Link } from "react-router-dom";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section className="section lg:h-screen">
      <img className="absolute z-0 w-full h-full" src={mobile__bg} alt="bg" />
      <div className="container relative z-10 pt-32 pb-10 flex flex-col items-center max-w-sm mx-auto lg:max-w-[1400px] lg:flex-row lg:h-full">
        <div className="flex flex-col flex-shrink-0 lg:max-w-2xl">
          <div className="flex w-full gap-2 text-lg uppercase">
            <p>jazz</p>
            <p className="flex items-center before:block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-2">
              blues
            </p>
            <p className="flex items-center before:block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-2">
              soul
            </p>
            <p className="flex items-center before:block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-2">
              latino
            </p>
          </div>
          <h1 className="mt-4 text-2xl font-black font-horizon lg:text-5xl">
            MASHA MATI <br />
            BREATH OF MUSIC
          </h1>
          <div className="h-1 mt-4 bg-accent lg:hidden" />
          <p className="max-w-lg mt-4 lg:text-xl">
            Singer and actress, songwriter, music teacher, living and performing
            on the best stages of Israel
          </p>
          <div className="flex flex-col items-start self-start gap-4 mt-6 lg:flex-row lg:items-center">
            <a href="#ownSong" className="w-64 Button--fullfiled lg:h-16">
              Get to Know Me
            </a>
            <Link
              to={"/create-own-song"}
              className="w-64 Button--outlined lg:h-16"
            >
              Create a Song
            </Link>
          </div>
        </div>

        <img className="mt-4 lg:hidden" src={mobile__hero} alt="Masha Mati" />
        <img
          className="hidden lg:block w-[800px] xl:w-[1200px] absolute -z-10 top-1/2 -translate-y-1/2 -right-[250px]"
          src={desktop__hero}
          alt="Masha Mati"
        />
      </div>
    </section>
  );
};

export default Hero;
