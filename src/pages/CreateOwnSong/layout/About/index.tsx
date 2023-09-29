import {
  appleMusic,
  cosp__desktop__masha,
  itunes,
  spotify,
  tiktok,
  vkMusic,
  yandexMusic,
  yt,
  ytMusic,
} from "@/assets/images";

interface Props {}

const About = (props: Props) => {
  return (
    <section className="py-16 section lg:pb-0">
      <div className="container flex flex-col items-center max-w-screen-xl mx-auto">
        <h2 className="text-center SectionHeading lg:whitespace-nowrap">
          Create your <br className="xl:hidden" /> own song
        </h2>
        <div className="flex">
          <div className="flex-shrink-0 xl:ml-60 lg:ml-20 lg:pb-16">
            <div className="flex justify-center gap-4 mt-8 text-xl lg:justify-start">
              <p>from ₪5.555</p>
              <p>|</p>
              <p>6 weeks</p>
            </div>

            <ul className="flex flex-col gap-2 mt-8 lg:text-xl">
              <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4">
                Songwriting
              </li>
              <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4">
                Arrangement Creating
              </li>
              <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4">
                Studio Voice Recording
              </li>
              <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4">
                Cover and Logo Design
              </li>
              <li className="flex items-start before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4 before:mt-2.5">
                Distribution on global online platforms: <br />
                Spotify, TikTok, YouTube, and more
              </li>
            </ul>

            <ul className="grid grid-cols-4 gap-4 mt-8 lg:gap-8">
              <li className="w-10 lg:w-20">
                <img src={itunes} alt="social icon" />
              </li>
              <li className="w-10 lg:w-20">
                <img src={vkMusic} alt="social icon" />
              </li>
              <li className="w-10 lg:w-20">
                <img src={ytMusic} alt="social icon" />
              </li>
              <li className="w-10 lg:w-20">
                <img src={tiktok} alt="social icon" />
              </li>
              <li className="w-10 lg:w-20">
                <img src={yandexMusic} alt="social icon" />
              </li>
              <li className="w-10 lg:w-20">
                <img src={appleMusic} alt="social icon" />
              </li>
              <li className="w-10 lg:w-20">
                <img src={spotify} alt="social icon" />
              </li>
              <li className="w-10 lg:w-20">
                <img src={yt} alt="social icon" />
              </li>
            </ul>

            <a href="https://t.me/mashamati" target="_blank" className="block mx-auto mt-12 Button--fullfiled lg:mx-0">
              Submit a Request
            </a>
          </div>
          <img
            className="hidden max-w-4xl lg:block"
            src={cosp__desktop__masha}
            alt="Masha Mati"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
