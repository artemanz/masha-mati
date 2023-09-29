import {
  desktop__mediaGallery_hero,
  desktop__videoBg,
  gallery1,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery2,
  gallery20,
  gallery21,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  mobile__mediaGallery_hero,
} from "@/assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import type { Swiper as TSwiper } from "swiper";
interface Props {}

const videos = [
  {
    id: 1,
    element: (
      <iframe
        className="w-full aspect-square md:aspect-video"
        src="https://www.youtube.com/embed/-sCEgDZvvG8?si=U-GeqGY8dQK7XxYh"
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
        src="https://www.youtube.com/embed/ypBLSH4rCbY?si=9F2YSnKUUgW-_W1Y"
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
        src="https://www.youtube.com/embed/zMBAZvvgV3s?si=NRgwsi_eIuE3ZZGp"
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
        src="https://www.youtube.com/embed/2a6n5dEBmFI?si=HGkiMHQ-P_u3BRlH"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
  },
];

const photos = [
  { id: 1, src: gallery1 },
  { id: 2, src: gallery2 },
  { id: 3, src: gallery3 },
  { id: 4, src: gallery4 },
  { id: 5, src: gallery5 },
  { id: 6, src: gallery6 },
  { id: 7, src: gallery7 },
  { id: 8, src: gallery8 },
  { id: 9, src: gallery9 },
  { id: 10, src: gallery10 },
  { id: 11, src: gallery11 },
  { id: 12, src: gallery12 },
  { id: 13, src: gallery13 },
  { id: 14, src: gallery14 },
  { id: 15, src: gallery15 },
  { id: 16, src: gallery16 },
  { id: 17, src: gallery17 },
  { id: 18, src: gallery18 },
  { id: 19, src: gallery19 },
  { id: 20, src: gallery20 },
  { id: 21, src: gallery21 },
];

const GalleryPage = (props: Props) => {
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
          src={mobile__mediaGallery_hero}
          alt="CelebritySinger"
        />
        <img
          className="absolute inset-0 hidden object-bottom w-full h-full lg:block"
          src={desktop__mediaGallery_hero}
          alt="CelebritySinger"
        />
        <div className="relative z-10 pt-[25vh] lg:pt-0 lg:h-full lg:flex lg:items-center lg:justify-end">
          <h1 className="max-w-md mx-auto text-4xl text-center font-horizon lg:text-[4rem] lg:max-w-[70rem] lg:leading-none xl:text-[5rem] lg:mx-0 lg:mr-[10vw]">
            MEDIA <br /> GALLERY
          </h1>
        </div>
      </section>

      <section className="py-20 section xl:py-60">
        {/* <img
          className="absolute inset-0 w-full h-full"
          src={desktop__videoBg}
          alt="bg"
        /> */}
        <div className="relative flex flex-col items-center mx-auto gap-28 xl:container">
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
          {/* PHOTOS */}
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

export default GalleryPage;
