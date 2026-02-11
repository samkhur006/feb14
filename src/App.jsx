import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const yesImages = [
    "https://drive.google.com/file/d/1-B0-x25lzXqluV67ZheA27WyOSedppty/view?usp=sharing",
    "https://drive.google.com/file/d/1Kov_27pIqvhSjQGJRAW1_q4WpykC3G6m/view?usp=sharing",
    "https://drive.google.com/file/d/18gojHPzd-IgpatS5i-KjdnFchXQlzN59/view?usp=drive_link",

  ];

  const noImages = [
    "https://drive.google.com/file/d/1P1qBZGxTKkNZ8qzBFw9ybzsAvZlutUOJ/view?usp=sharing",
    "https://drive.google.com/file/d/12AybA85ARslA2Yr4TVtfaGTnkai5S9Eg/view?usp=sharing",
    "https://drive.google.com/file/d/1NFPo7iqs8dHXTcs4VqZKyIq8u8LnYWRE/view?usp=drive_link",
    "https://drive.google.com/file/d/1TXE2jjwa-vL21MoGmHpygP_bzCcYNQQq/view?usp=drive_link",
    "https://drive.google.com/file/d/1xKJFlg3SIdjGcCR-nnX_VQyC60_KoZ1Q/view?usp=drive_link",
    "https://drive.google.com/file/d/1gXu5F09opaM33wJ8WHyCslDVMlpz6917/view?usp=sharing",
  ];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [shuffledYesImages] = useState(() => shuffleArray(yesImages));
  const [shuffledNoImages] = useState(() => shuffleArray(noImages));

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!!
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6 max-w-4xl">
            {shuffledYesImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`yes-${index}`}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-rose-300"
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
          {noCount > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mt-6 max-w-4xl">
              {shuffledNoImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`no-${index}`}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg border-4 border-blue-300"
                />
              ))}
            </div>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
