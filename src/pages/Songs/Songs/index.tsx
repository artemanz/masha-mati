import {
  desktop__videoBg,
  songs__song1,
  songs__song2,
  songs__song3,
  songs__song4,
} from "@/assets/images";
import { useEffect, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import bailar from "../assets/Masha Mati feat. MK Zulu, Yasniel Navarro - Bailar.mp3";
import akapella from "../assets/Masha_Mati_-_Akapella.mp3";
import tanci from "../assets/Masha Mati, MK Zulu - tanci.mp3";
import miAmor from "../assets/Masha Mati feat. MK Zulu - Mi Amor.mp3";

interface Props {}

const songs = [
  { id: 1, src: new Audio(bailar), img: songs__song1 },
  { id: 2, src: new Audio(akapella), img: songs__song2 },
  { id: 3, src: new Audio(tanci), img: songs__song3 },
  { id: 4, src: new Audio(miAmor), img: songs__song4 },
];

const SongsList = (props: Props) => {
  const [activeSong, setActiveSong] = useState<(typeof songs)[number] | null>(
    null
  );

  useEffect(() => {
    if (activeSong) {
      activeSong.src.play();
    }
  }, [activeSong]);

  return (
    <section className="py-20 section xl:py-60">
      {/* <img
        className="absolute inset-0 w-full h-full"
        src={desktop__videoBg}
        alt="bg"
      /> */}
      <div className="relative flex flex-col items-center gap-20 mx-auto xl:container">
        <div className="relative w-full max-w-[90rem] flex flex-col items-center">
          <ul className="grid max-w-6xl grid-cols-1 gap-8 px-4 lg:grid-cols-2">
            {songs.map((song) => (
              <li
                className="relative p-5 border shadow- rounded-xl border-accent glow-accent"
                key={song.id}
              >
                <img src={song.img} alt="Song thumbnail" />
                <button
                  onClick={() => {
                    if (activeSong) activeSong.src.pause();
                    if (activeSong && activeSong.id === song.id)
                      setActiveSong(null);
                    else setActiveSong(song);
                  }}
                  className="absolute flex items-center justify-center w-12 h-12 p-0 rounded-full bottom-5 right-5 Button--fullfiled lg:w-16 lg:h-16 max-w-none"
                >
                  {activeSong && song.id == activeSong.id ? (
                    <BsPauseFill className="text-3xl lg:text-4xl" />
                  ) : (
                    <BsPlayFill className="text-3xl lg:text-4xl" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SongsList;
