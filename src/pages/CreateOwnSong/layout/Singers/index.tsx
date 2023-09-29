import {
  cosp__desktop__decor,
  singer1,
  singer2,
  singer3,
} from "@/assets/images";

interface Props {}

const singers = [
  {
    image: singer1,
    name: "liza mur",
    subtitle:
      "The song has been played 1042 times in 71 restaurants and cafes across the CIS region",
    text: (
      <>
        In the evening, my mom sends me a girl's Instagram profile who sings
        jazz beautifully, and she asks if I like her. I reply that it's simply
        incredible and I'm amazed by how talented she is. Then my mom tells me
        that this girl is a vocal teacher, and I immediately say that I want to
        learn from her. We started taking lessons with Masha, and I really liked
        her teaching style. She opened my eyes to many aspects of this art form
        that I didn't know before.
        <br />
        <br />
        And on my birthday, I asked my mom to arrange a vocal lesson for me
        because I really enjoy it and I wanted to sing. The lesson goes on as
        usual, working on a song, when suddenly, 10 minutes before the end,
        Masha asks if I would like to write my own song.
        <br />
        <br />
        I said yes and mentioned that I had even tried before. Then my mom and
        dad come out with a frame in their hands and say, "Read this." It was a
        certificate for recording my own signature song in a studio!
        <br />
        <br />
        I was insanely happy and surprised by such an incredible birthday gift.
        In the following and all subsequent lessons, Masha and I only worked on
        my song. We had real chemistry, with the same images and stories in our
        heads as we were writing. It was as if we could read each other's
        thoughts.
        <br />
        <br />
        Masha immediately understood my essence, what style would suit me, and
        everything I loved. This all came together in the song we wrote. Ever
        since we wrote the song's lyrics, everything went smoothly. Even in the
        recording studio, Masha accurately guided all my desires and helped
        bring them to life, and I understood exactly what Masha wanted.
        <br />
        <br />
        Yesterday, Masha sent me the finished song after the mixing process, and
        I've been listening to it on repeat without stopping. I love it so much!
        Tears of joy well up because I can't believe that this song is my own,
        as it sounds like those of the greatest stars from Hollywood. I want to
        express my immense gratitude to Masha for this wonderful, unique, and
        unforgettable journey that we've been through🙏. It truly is an amazing
        feeling.
      </>
    ),
    youtube: "https://www.youtube.com/watch?v=oL0D2pGHqTE",
    track: "https://zvonko.link/164EEB8",
  },
  {
    image: singer2,
    name: "STELLA ZOLOTUSHKO",
    subtitle:
      "The song has received 3456780 plays on the zaycev.net platform since its release.",
    text: (
      <>
        Initially, I came to Masha just to take vocal lessons and sing for my
        own pleasure. I was very lucky to find a good teacher who lives in my
        small town and is also very close to me.I have been involved in singing
        my whole life, so I immediately noticed Masha's professionalism and
        passion for her work. <br />
        <br />
        The first song we learned together was Amy Winehouse's "Friends," which
        is quite challenging in itself. However, the lessons with Masha were
        conducted in a comfortable environment, and it was truly interesting to
        dissect and learn such a complex song.After polishing the song, Masha
        and I decided to go to a recording studio to record it. <br />
        <br />
        When the recording went very successfully, Masha casually said to me,
        "Would you like to record your own song?"At first, we laughed about it,
        but then I seriously considered the idea and agreed to the project.
        Moreover, I had a clear vision of what I wanted, and I wanted it to be
        in English. <br />
        <br />
        I approached Masha with this idea, and what's valuable is that Masha
        helped me shape and articulate the concept. Since I don't speak English
        fluently, Masha also assisted me in writing the lyrics in English, for
        which I am very grateful! <br />
        <br />
        And today, my song has already been released. It has become the dearest
        and most beautiful song I have ever heard. It is an excellent investment
        in which I have no doubts. This project carries a piece of my soul, and
        it can be felt. Masha and I have done an enormous amount of work, and I
        wholeheartedly thank her for being a wonderful vocal teacher and a
        person who devotes herself to her craft with all her heart! ❤️
      </>
    ),
    youtube: "https://youtu.be/6pwfvFW7HPE",
    track: "https://zvonko.link/16051A2",
  },
  {
    image: singer3,
    name: "KSENIA PINSKI",
    subtitle:
      "The song was released on the Amazon Music platform, reaching a vast audience of music enthusiasts",
    text: (
      <>
        I love singing very much and have always dreamed of singing my own song!
        I searched for a teacher who could not only teach me proper singing
        technique but also had experience in teaching songwriting.
        <br />
        <br />
        I saw an advertisement on Instagram and decided to take the "Create Your
        Own Song" course with Masha Mati. Masha is a very friendly and genuine
        person, and we immediately found understanding on where to start and
        where to go. We began by working on vocals.
        <br />
        <br />
        Previously, I sang intuitively without any knowledge of the importance
        of singing technique. In a short period of time, Masha taught me to
        control my breathing and pointed out my main mistakes. It's always very
        comfortable to work with her. Over the course of 2 months of lessons, my
        technique improved significantly, and singing high notes became easier.
        <br />
        <br />
        That's when we decided to start working on creating my own song. It's a
        multi-stage process, and at each stage, Masha involves her entire
        professional team. We worked on the lyrics, music, tempo, and
        professional musicians worked with Masha. It is thanks to their
        tremendous work that we achieved a beautiful and full sound of the song.
        <br />
        <br />
        The result was an incredibly beautiful melody, for which we later
        recorded my vocal performance in a recording studio. The mixing was done
        by top professionals from London, whom Masha has known for many years.
        The song turned out to be very beautiful, exactly the one I had dreamed
        of! You can fully trust Masha - she won't stop until she achieves the
        best result!
        <br />
        <br />
        She will always be there for you! I am very satisfied with the project!!
        I wholeheartedly recommend Masha. Listen to the song "You Are the One,"
        and you will see for yourself. ❤️
      </>
    ),
    youtube: "https://m.youtube.com/channel/UCzzOYIKhlyjZcD5vMVeuI8A/playlists",
    track:
      "https://www.dropbox.com/s/yxl7bzgakowrcu5/You%20Are%20the%20One.mp3?dl=0",
  },
];

const Singers = (props: Props) => {
  return (
    <section className="section">
      <div className="container max-w-screen-xl px-0 mx-auto">
        {singers.map((singer) => (
          <div
            className="relative pb-20 lg:flex lg:pb-0 lg:items-start xl:items-stretch"
            key={singer.name}
          >
            <img
              className="lg:max-w-[40%] xl:max-w-[45%]"
              src={singer.image}
              alt={singer.name}
            />
            <div className="px-10 py-10 lg:max-w-4xl">
              <p className="mt-8 text-xl text-center uppercase font-horizon lg:text-left lg:text-4xl xl:text-6xl">
                {singer.name}
              </p>
              <p className="mt-8 font-bold lg:text-2xl xl:text-4xl">
                {singer.subtitle}
              </p>
              <div className="mt-8 max-h-[31.5rem] overflow-y-auto pr-8 xl:text-xl">
                {singer.text}
              </div>
              <div className="flex flex-col items-center gap-5 mt-8 lg:flex-row">
                <a
                  href={singer.youtube}
                  target="_blank"
                  className="w-[16rem] Button--fullfiled text-center"
                >
                  visit youtube
                </a>
                <a
                  href={singer.track}
                  target="_blank"
                  className="Button--outlined w-[16rem] text-center"
                >
                  PLAY TRACK
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Singers;
