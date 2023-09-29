import { desktop__galleryBg, mobile__galleryBg } from "@/assets/images";
import { Link } from "react-router-dom";

interface Props {}

const MediaGallery = (props: Props) => {
  return (
    <section className="overflow-hidden section">
      <img
        className="w-full h-full lg:hidden"
        src={mobile__galleryBg}
        alt="bg"
      />
      <img
        className="absolute hidden object-cover w-full h-full lg:block"
        src={desktop__galleryBg}
        alt="bg"
      />
      <div className="container pt-8 flex flex-col items-center h-[500px] mx-auto max-w-hd lg:flex-row lg:pt-0 lg:h-screen absolute top-0 left-0 lg:static">
        <div className="relative z-10 flex flex-col items-center flex-shrink-0 lg:items-start lg:ml-auto">
          <h2 className="SectionHeading whitespace-nowrap">
            MEDIA
            <br className="hidden lg:block" /> GALLERY
          </h2>
          <Link
            to={"/gallery"}
            className="mt-4 uppercase Button--fullfiled lg:w-64 lg:h-16"
          >
            discover
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
