import {
  celebrity1,
  celebrity2,
  celebrity3,
  celebrity4,
  celebrity5,
  celebrity6,
  desktop__celebrity_hero,
  mobile__celebrity_hero,
} from "@/assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as TSwiper } from "swiper";
import { useState } from "react";

interface Props {}

const videos = [
  {
    id: 1,
    element: (
      <iframe
        className="w-full aspect-square md:aspect-video"
        src="https://www.youtube.com/embed/iD9K4r688A4?si=XJdiVSP29h11ML9t"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    id: 2,
    element: (
      <iframe
        className="w-full aspect-square md:aspect-video"
        src="https://www.youtube.com/embed/vf8LfJcRJHk?si=DfEF8NnU04VL9qKl"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    id: 3,
    element: (
      <iframe
        className="w-full aspect-square md:aspect-video"
        src="https://www.youtube.com/embed/GvhzZtAq3Mw?si=c3cfenZPrsKLBHW-"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    id: 4,
    element: (
      <iframe
        className="w-full aspect-square md:aspect-video"
        src="https://www.youtube.com/embed/vgxmSnlk4uo?si=EZkhGSkRPXiAwYt2"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    id: 5,
    element: (
      <iframe
        className="w-full aspect-square md:aspect-video"
        src="https://www.youtube.com/embed/SFjTGYpeNcE?si=Y_ibJnZK5mxmyEmG"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
  },
];

const photos = [
  { id: 1, src: celebrity1 },
  { id: 2, src: celebrity2 },
  { id: 3, src: celebrity3 },
  { id: 4, src: celebrity4 },
  { id: 5, src: celebrity5 },
  { id: 6, src: celebrity6 },
];

const CelebrityPage = (props: Props) => {
  const [videoSwiper, setVideoSwiper] = useState<TSwiper | null>(null);

  function stopVideos() {
    if (videoSwiper) {
      const currentIframe = videoSwiper.slides[videoSwiper.activeIndex]
        .children[0] as HTMLIFrameElement;

      document.querySelectorAll("iframe").forEach((iframe) => {
        if (iframe !== currentIframe) iframe.src = iframe.src;
      });
    }
  }
  return (
    <main>
      <section className="h-screen section">
        <img
          className="absolute inset-0 object-bottom w-full h-full lg:hidden"
          src={mobile__celebrity_hero}
          alt="CelebritySinger"
        />
        <img
          className="absolute inset-0 hidden object-bottom w-full h-full lg:block"
          src={desktop__celebrity_hero}
          alt="CelebritySinger"
        />
        <div className="relative z-10 pt-[25vh] lg:pt-0 lg:h-full lg:flex lg:items-center">
          <h1 className="max-w-md mx-auto text-3xl md:text-4xl text-center font-horizon lg:text-[4rem] lg:max-w-[70rem] lg:leading-none lg:text-left xl:text-[5rem] xl:max-w-hd lg:ml-[10vw] uppercase">
            Celebrity <br /> Partnerships
          </h1>
        </div>
      </section>

      <section className="py-20 section xl:py-60">
        {/* <img
          className="absolute inset-0 w-full h-full"
          src={desktop__videoBg}
          alt="bg"
        /> */}
        <div className="relative flex flex-col items-center gap-20 mx-auto xl:container">
          <h2 className="text-4xl uppercase font-horizon">video</h2>
          <div className="relative w-full max-w-[90rem] flex flex-col items-center">
            <Swiper
              onSlideChange={stopVideos}
              onSwiper={(swiper: any) => setVideoSwiper(swiper)}
              className="max-w-[75rem] w-full"
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                nextEl: "[data-selector=video-next-slide]",
                prevEl: "[data-selector=video-prev-slide]",
              }}
            >
              {videos.map((video) => (
                <SwiperSlide key={video.id}>{video.element}</SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center w-full gap-32 px-12 mt-4 xl:absolute xl:justify-between xl:mt-0 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
              <button data-selector="video-prev-slide">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="39.5" stroke="white" />
                  <path
                    d="M12 41L16.9717 43.9352L17.0278 38.1619L12 41ZM16.4949 41.5437L40.4938 41.7767L40.5035 40.7767L16.5046 40.5437L16.4949 41.5437ZM40.4938 41.7767L68.9925 42.0533L69.0022 41.0534L40.5035 40.7767L40.4938 41.7767Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button data-selector="video-next-slide">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="39.5" stroke="white" />
                  <path
                    d="M68.9993 40.8317L64.0275 37.8965L63.9715 43.6698L68.9993 40.8317ZM11.9971 40.7783L40.4958 41.055L40.5055 40.055L12.0068 39.7783L11.9971 40.7783ZM40.4958 41.055L64.4946 41.288L64.5043 40.288L40.5055 40.055L40.4958 41.055Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <a
              target="_blank"
              className="mt-10 Button--fullfiled"
              href="https://www.youtube.com/@mashamati"
            >
              More videos
            </a>
          </div>

          <h2 className="text-4xl uppercase font-horizon">photo</h2>
          <div className="relative w-full max-w-[90rem]">
            <Swiper
              loop
              className="max-w-[75rem] w-full"
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                nextEl: "[data-selector=next-slide]",
                prevEl: "[data-selector=prev-slide]",
              }}
            >
              {photos.map((photo) => (
                <SwiperSlide key={photo.id}>
                  <img
                    className="object-contain w-full aspect-square md:aspect-video"
                    src={photo.src}
                    alt="Gallery Photo"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center w-full gap-32 px-12 mt-4 xl:absolute xl:justify-between xl:mt-0 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
              <button data-selector="prev-slide">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="39.5" stroke="white" />
                  <path
                    d="M12 41L16.9717 43.9352L17.0278 38.1619L12 41ZM16.4949 41.5437L40.4938 41.7767L40.5035 40.7767L16.5046 40.5437L16.4949 41.5437ZM40.4938 41.7767L68.9925 42.0533L69.0022 41.0534L40.5035 40.7767L40.4938 41.7767Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button data-selector="next-slide">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="39.5" stroke="white" />
                  <path
                    d="M68.9993 40.8317L64.0275 37.8965L63.9715 43.6698L68.9993 40.8317ZM11.9971 40.7783L40.4958 41.055L40.5055 40.055L12.0068 39.7783L11.9971 40.7783ZM40.4958 41.055L64.4946 41.288L64.5043 40.288L40.5055 40.055L40.4958 41.055Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CelebrityPage;
