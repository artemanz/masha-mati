import {
  Hero,
  About,
  OwnSong,
  MediaGallery,
  Celebrity,
  Studio,
  Songs,
} from "./layout";

interface Props {}

const MainPage = (props: Props) => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <OwnSong />
      <MediaGallery />
      <Celebrity />
      <Studio />
      <Songs />
    </main>
  );
};

export default MainPage;
