import {
  desktop__section1bg,
  desktop__section2,
  desktop__section3,
  desktop__studio_hero,
  mobile__studio_hero,
} from "@/assets/images";

interface Props {}

const MusicStudioPage = (props: Props) => {
  return (
    <main>
      <section className="h-screen section">
        <img
          className="absolute inset-0 object-bottom w-full h-full lg:hidden"
          src={mobile__studio_hero}
          alt="CelebritySinger"
        />
        <img
          className="absolute inset-0 hidden object-bottom w-full h-full lg:block"
          src={desktop__studio_hero}
          alt="CelebritySinger"
        />
        <div className="relative z-10 pt-[25vh] lg:pt-0 lg:h-full lg:flex lg:items-center lg:justify-end">
          <div className="max-w-2xl lg:mx-0 lg:mr-[10vw] mx-auto">
            <h1 className="text-4xl text-center font-horizon lg:text-[4rem] lg:leading-none xl:text-[5rem] ">
              MUSIC <br /> STUDIO
            </h1>
            <p className="hidden mt-4 text-4xl text-center font-corinthia lg:block">
              I created the "Masha Mati" Vocal Studio for you to experience the
              freedom of creativity, self-expression, and to derive pleasure
              from both the process and the outcome
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-hd">
          {/* 1 */}
          <div className="flex flex-col items-center justify-center py-20 gap-x-8 gap-y-12 lg:flex-row">
            <div className="lg:px-8">
              <h2 className="text-2xl text-center font-horizon lg:text-4xl lg:text-left">
                CONCERT
              </h2>
              <p className="mt-12 text-xl font-bold text-center lg:text-2xl lg:text-left">
                Upon Request
              </p>
              <ul className="flex flex-col gap-2 px-8 mx-auto mt-12 lg:text-xl max-w-fit lg:px-0 ">
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4">
                  Russia, Israel, UAE
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4">
                  Professional performance of the songs
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4">
                  Energetic performance
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4">
                  Performance with a live band
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4">
                  Performance with dancers
                </li>
              </ul>

              <a
                href="https://t.me/mashamati"
                target="_blank"
                className="block mx-auto mt-20 Button--fullfiled lg:mx-0"
              >
                submit a request
              </a>
            </div>
            <div className="flex-auto w-full max-w-5xl lg:w-auto">
              <iframe
                className="w-full h-full aspect-video"
                src="https://www.youtube.com/embed/T41zjVG4lxc?si=Pz2W1JxoCq-aqate"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* 2 */}
          <div className="flex justify-center gap-x-8 gap-y-12 py-20 lg:mt-20 lg:py-0 lg:bg-gradient-to-r lg:from-[#251537] lg:to-[#38254d] lg:gap-0 flex-col lg:flex-row">
            <div className="lg:order-1 lg:px-12 lg:basis-1/2 lg:py-12">
              <h2 className="text-2xl text-center font-horizon lg:text-4xl lg:text-left">
                VOCAL CLASS
              </h2>
              <div className="flex justify-center gap-4 mt-8 text-xl lg:justify-start lg:text-2xl">
                <p>from $50</p>
                <p>|</p>
                <p>45 min</p>
              </div>
              <ul className="flex flex-col gap-2 px-8 mx-auto mt-12 lg:text-xl max-w-fit lg:px-0 lg:mx-0">
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4 lg:before:hidden">
                  Voice Training
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4 lg:before:hidden">
                  Fundamentals of Solfege
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4 lg:before:hidden">
                  Piano Practice
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4 lg:before:hidden">
                  Breathing Exercises
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4 lg:before:hidden">
                  Rhythm Training
                </li>
              </ul>

              <a
                href="https://t.me/mashamati"
                target="_blank"
                className="block mx-auto mt-20 Button--fullfiled lg:mx-0"
              >
                submit a request
              </a>
            </div>
            <div className="flex-auto max-w-5xl basis-1/2">
              <img className="w-full h-full" src={desktop__section2} alt="bg" />
            </div>
          </div>
          {/* 3 */}
          <div className="flex justify-center gap-x-8 gap-y-12 py-20 lg:py-0 lg:bg-gradient-to-r lg:to-[#251537] lg:from-[#38254d] lg:gap-0 flex-col lg:flex-row">
            <div className="lg:px-12 lg:basis-1/2 lg:py-12">
              <h2 className="text-2xl text-center font-horizon lg:text-4xl lg:text-right">
                PIANO CLASS
              </h2>
              <div className="flex justify-center gap-4 mt-8 text-xl lg:justify-end lg:text-2xl">
                <p>from $50</p>
                <p>|</p>
                <p>45 min</p>
              </div>
              <ul className="flex flex-col gap-2 px-8 mx-auto mt-12 lg:text-xl max-w-fit lg:px-0 lg:mx-0 lg:ml-auto lg:items-end">
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4 lg:before:hidden">
                  Fundamentals of Piano Playing
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4 lg:before:hidden">
                  Piano Technique{" "}
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4 lg:before:hidden">
                  Learning Popular Pieces
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4 lg:before:hidden">
                  Musical Ear Training
                </li>
                <li className="flex items-center before:inline-block before:w-1 before:h-1 before:bg-white before:rounded-full before:mr-4 lg:before:hidden">
                  Improvisation and Composition
                </li>
              </ul>

              <a
                href="https://t.me/mashamati"
                target="_blank"
                className="block mx-auto mt-20 Button--fullfiled lg:mx-0 lg:ml-auto"
              >
                submit a request
              </a>
            </div>
            <div className="flex-auto max-w-5xl basis-1/2">
              <img className="w-full h-full" src={desktop__section3} alt="bg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MusicStudioPage;
