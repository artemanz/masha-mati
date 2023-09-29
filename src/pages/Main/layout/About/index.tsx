import {
  facebook,
  instagram,
  logo,
  mobile__aboutGradient,
  telegram,
  whatsapp,
} from "@/assets/images";
import { socials } from "@/data/socials";

interface Props {}

const About = (props: Props) => {
  return (
    <section className="section lg:h-screen lg:min-h-[1000px] flex items-center">
      <img
        className="absolute -translate-x-1/2 left-1/2"
        src={mobile__aboutGradient}
        alt="bg"
      />
      <div className="container flex flex-col items-center justify-center h-full max-w-sm gap-6 py-10 mx-auto lg:gap-10 lg:max-w-4xl">
        <img className="max-w-[50%]" src={logo} alt="Logo" />
        <h2 className="text-4xl font-horizon">Masha Mati</h2>
        <p className="mx-auto text-center w-72 lg:w-[600px]">
          Her original tracks, "Dance" and "Bailar," co-written with American
          and Cuban artists, are playing on the airwaves of Kan Reka Radio,
          Ostrov Radio, and Nahariya Radio in Israel, while the music video is
          being broadcasted on television.
        </p>

        <p className="mx-auto mt-8 text-center w-72 font-corinthia lg:w-[840px] lg:text-[40px] lg:leading-none">
          I actively travel the world for tours and appear on TV shows. Jazz,
          Blues, Soul, and Latino music are my love and passion! The music is
          infused with light, love for the world, and nature.
        </p>

        <div className="grid grid-cols-2 gap-8 mx-auto mt-8 lg:flex lg:gap-20 max-w-fit">
          <a href={socials.telegram}>
            <img src={telegram} alt="social" />
          </a>
          <a href={socials.facebook}>
            <img src={facebook} alt="social" />
          </a>
          <a href={socials.instagram}>
            <img src={instagram} alt="social" />
          </a>
          <a href={socials.whatsapp}>
            <img src={whatsapp} alt="social" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
