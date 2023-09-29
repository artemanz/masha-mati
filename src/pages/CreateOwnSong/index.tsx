import { useEffect } from "react";
import { About, Hero, Singers } from "./layout";

interface Props {}

const CreateOwnSongPage = (props: Props) => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Singers />
    </main>
  );
};

export default CreateOwnSongPage;
