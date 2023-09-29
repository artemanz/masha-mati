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
          <a
            className="w-16 h-16 transition-transform lg:w-20 lg:h-20 hover:scale-110"
            href={socials.telegram}
          >
            <svg
              width="134"
              height="134"
              viewBox="0 0 134 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100.667 21.2052C94.1333 23.8718 65.0667 35.3385 20 52.9385C11.2 56.2718 8 58.8052 8 62.1385C8 67.2052 10.8 69.6052 20.9333 73.2052C26.6667 75.3385 32 77.6052 32.8 78.4052C33.6 79.2052 36.8 86.1385 40 93.8718C43.0667 101.605 46.2667 108.672 46.9333 109.605C49.3333 112.405 53.4667 111.339 62.1333 105.872L70.6667 100.539L80.8 108.005C91.7333 116.272 96.9333 117.605 101.333 113.072C103.2 111.205 106 99.6052 112.533 67.2052C120.267 28.1385 120.933 23.6052 119.2 20.8052C116.667 16.9385 111.067 17.0718 100.667 21.2052ZM112 26.4052C112 27.2052 97.6 100.405 96.6667 104.139C96.2667 105.872 95.3333 107.205 94.5333 107.205C93.7333 107.205 85.8667 101.739 77.0667 94.9385L61.0667 82.6718L81.8667 62.1385C97.6 46.6718 102.667 40.8052 102.4 38.6718C101.467 32.2718 96 34.2718 65.3333 52.2718L35.8667 69.6052L27.3333 66.8052C22.5333 65.2052 18.6667 63.6052 18.6667 63.2052C18.6667 62.6718 34.4 56.1385 53.6 48.5385C72.9333 41.0718 93.4667 32.9385 99.3333 30.5385C110.267 26.0052 112 25.4718 112 26.4052ZM62.4 69.4718C51.7333 80.2718 49.4667 83.3385 49.0667 87.2052L48.5333 91.8718L44.9333 84.0052C42.9333 79.6052 41.4667 76.0052 41.6 75.8718C42.6667 74.9385 74.1333 56.5385 74.6667 56.5385C74.9333 56.5385 69.4667 62.4052 62.4 69.4718ZM61.3333 93.2052C62.8 94.9385 62.6667 95.6052 60.5333 97.2052C56.9333 99.8718 56 99.6052 56 96.1385C56 91.0718 58.4 89.7385 61.3333 93.2052Z"
                fill="url(#paint0_linear_5080_186)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5080_186"
                  x1="63.9946"
                  y1="115.641"
                  x2="63.9946"
                  y2="18.0018"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF00E6" />
                  <stop offset="0.995097" stopColor="#F49D84" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a
            className="w-16 h-16 transition-transform lg:w-20 lg:h-20 hover:scale-110"
            href={socials.facebook}
          >
            <svg
              width="134"
              height="134"
              viewBox="0 0 134 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.3307 13.1987C59.0641 16.132 51.0641 25.9987 49.7307 42.7987L48.9307 51.9987H44.3974C35.5974 51.9987 34.6641 53.332 34.6641 66.6654C34.6641 79.9987 35.5974 81.332 44.5307 81.332H49.3307V99.1987C49.3307 121.332 49.3307 121.332 63.9974 121.332C78.6641 121.332 78.6641 121.332 78.6641 99.1987V81.332H83.7307C90.7974 81.332 92.6641 79.332 95.1974 69.0654C99.0641 53.0654 98.5307 51.9987 85.8641 51.9987H78.6641V46.6654V41.332H85.8641C97.4641 41.332 97.3307 41.5987 97.3307 26.6654C97.3307 15.9987 96.9307 13.4654 95.1974 12.7987C92.5307 11.732 79.3307 11.9987 73.3307 13.1987ZM89.3307 26.6654C89.3307 31.8654 89.1974 31.9987 84.7974 31.9987C78.1307 31.9987 72.5307 34.3987 70.7974 38.132C69.9974 39.9987 69.3307 44.932 69.3307 49.332C69.3307 59.4654 71.1974 61.332 80.7974 61.332C84.7974 61.332 87.9974 61.8654 87.9974 62.532C87.9974 63.1987 87.5974 65.5987 87.1974 67.8654C86.3974 71.8654 85.9974 71.9987 79.8641 71.9987C69.8641 71.9987 69.3307 73.1987 69.3307 94.132V111.999H64.1307H59.0641L58.1307 101.732C57.7307 96.132 57.3307 87.5987 57.3307 82.6654C57.3307 72.532 56.7974 71.9987 47.8641 71.9987C42.6641 71.9987 42.6641 71.9987 42.6641 66.6654V61.332H48.3974C51.4641 61.332 54.6641 60.7987 55.4641 60.2654C56.2641 59.732 57.3307 54.132 57.5974 47.732C58.7974 28.6654 65.3307 21.332 80.7974 21.332H89.3307V26.6654Z"
                fill="url(#paint0_linear_5083_189)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5083_189"
                  x1="65.9974"
                  y1="121.332"
                  x2="65.9974"
                  y2="12.1305"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F600E8" />
                  <stop offset="1" stopColor="#F49980" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a
            className="w-16 h-16 transition-transform lg:w-20 lg:h-20 hover:scale-110"
            href={socials.instagram}
          >
            <svg
              width="134"
              height="134"
              viewBox="0 0 134 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.9302 16.0006C24.6635 18.1339 17.8635 25.7339 15.9969 38.9339C14.3969 49.8672 14.3969 83.6006 15.9969 94.5339C17.4635 104.534 21.9969 111.201 30.1302 115.334C34.5302 117.467 38.9302 118.001 59.9969 118.401C89.9969 119.067 101.197 117.601 107.73 112.267C116.664 105.201 117.73 101.201 118.397 74.1339C119.33 34.9339 116.664 25.0672 103.197 18.1339C98.5302 15.6006 95.3302 15.3339 70.6635 15.0672C55.5969 14.9339 40.3969 15.3339 36.9302 16.0006ZM101.064 26.0006C108.13 30.2673 109.597 35.3339 110.264 58.5339C110.664 70.0006 110.264 84.1339 109.597 89.8672C108.397 98.8006 107.597 100.934 104.13 104.401C99.1969 109.467 92.9302 110.534 66.6635 110.534C40.3969 110.534 34.1302 109.467 29.1969 104.401C23.7302 99.0672 22.1302 87.3339 22.9302 59.3339C23.9969 23.2006 24.7969 22.5339 71.3302 23.2006C93.4635 23.4672 97.3302 23.8672 101.064 26.0006Z"
                fill="url(#paint0_linear_5083_192)"
              />
              <path
                d="M90.7999 35.1987C89.8666 36.2654 89.3332 38.532 89.5999 40.2654C89.8666 42.6654 90.7999 43.332 93.8666 43.332C98.6666 43.332 101.333 39.732 99.1999 36.2654C97.3332 33.332 92.7999 32.6654 90.7999 35.1987Z"
                fill="url(#paint1_linear_5083_192)"
              />
              <path
                d="M58 42.0019C46.9334 45.8686 38.6667 59.6019 40.6667 70.5352C42.5334 80.8019 50.4 89.4686 60.1334 92.0019C81.6 97.8686 100.133 74.4019 90 54.5352C85.8667 46.8019 74.5334 39.8686 66 40.0019C64.5334 40.1352 60.9334 40.9352 58 42.0019ZM76.2667 51.6019C82.5334 54.6686 85.8667 63.7352 83.7334 71.4686C79.0667 88.6686 54.2667 88.8019 49.6 71.4686C46.9334 62.1352 51.6 53.2019 60.6667 50.0019C66.2667 48.1352 70.2667 48.5352 76.2667 51.6019Z"
                fill="url(#paint2_linear_5083_192)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5083_192"
                  x1="66.681"
                  y1="118.551"
                  x2="66.681"
                  y2="15.0417"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EF00E7" />
                  <stop offset="1" stopColor="#F49681" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_5083_192"
                  x1="94.7373"
                  y1="43.332"
                  x2="94.7373"
                  y2="33.631"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EF00E7" />
                  <stop offset="1" stopColor="#F49681" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_5083_192"
                  x1="66.608"
                  y1="92.918"
                  x2="66.608"
                  y2="40"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EF00E7" />
                  <stop offset="1" stopColor="#F49681" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a
            className="w-16 h-16 transition-transform lg:w-20 lg:h-20 hover:scale-110"
            href={socials.whatsapp}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="133"
              height="133"
              viewBox="0 0 133 133"
              fill="none"
            >
              <path
                d="M23.5881 91.9574C17.3998 81.5169 15.2354 69.1767 17.5008 57.2534C19.7662 45.3302 26.3059 34.6438 35.892 27.2006C45.4783 19.7573 57.4516 16.069 69.5644 16.8281C81.6773 17.5872 93.0965 22.7415 101.678 31.3233C110.26 39.9053 115.415 51.3244 116.174 63.4372C116.933 75.5501 113.244 87.5236 105.801 97.1097C98.3579 106.696 87.6716 113.236 75.7483 115.501C63.825 117.766 51.4848 115.602 41.0443 109.414L23.7959 114.297C23.0892 114.504 22.34 114.517 21.6267 114.334C20.9133 114.152 20.2623 113.781 19.7416 113.26C19.221 112.74 18.8499 112.088 18.6675 111.375C18.485 110.662 18.4979 109.913 18.7046 109.206L23.5881 91.9574Z"
                stroke="url(#paint0_linear_5077_1663)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M41.5625 74.8125L58.1875 58.1875L74.8125 74.8125L91.4375 58.1875"
                stroke="url(#paint1_linear_5077_1663)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5077_1663"
                  x1="66.4481"
                  y1="16.7305"
                  x2="66.4481"
                  y2="116.377"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F49681" />
                  <stop offset="1" stopColor="#EB00E6" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_5077_1663"
                  x1="66.5"
                  y1="58.1875"
                  x2="66.5"
                  y2="74.8125"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F49681" />
                  <stop offset="1" stopColor="#EB00E6" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
