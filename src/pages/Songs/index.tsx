import Hero from "./Hero";
import SongsList from "./Songs";

interface Props {}

const SongsPage = (props: Props) => {
  return (
    <main>
      <Hero />
      <SongsList />
    </main>
  );
};

export default SongsPage;
