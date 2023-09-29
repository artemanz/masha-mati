import { useEffect } from "react";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section className="pt-12 md:pt-8 section lg:pt-0">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/_3FozqE-rgg?si=361M2NIjzXSaW2q7"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Hero;
