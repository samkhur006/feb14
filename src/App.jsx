import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import yes1 from "./assets/yes1.jpeg";
import yes2 from "./assets/yes2.jpeg";
import yes3 from "./assets/yes3.jpeg";
import yes4 from "./assets/yes4.jpeg";
import yes5 from "./assets/yes5.jpeg";
import yes6 from "./assets/yes6.jpeg";
import yes7 from "./assets/yes7.jpeg";
import yes8 from "./assets/yes8.jpeg";

import no1 from "./assets/no1.jpeg";
import no2 from "./assets/no2.jpeg";
import no3 from "./assets/no3.jpeg";
import no4 from "./assets/no4.jpeg";
import no5 from "./assets/no5.jpeg";
import no6 from "./assets/no6.jpeg";
import no7 from "./assets/no7.jpeg";
import no8 from "./assets/no8.jpeg";
import no9 from "./assets/no9.jpeg";
import no10 from "./assets/no10.jpeg";
import no11 from "./assets/no11.jpeg";
import kopale from "./assets/kopale.png";

const TELEGRAM_BOT_TOKEN = "8217141714:AAH39_HK-VPKKqbSKe4nU9DIdO5WbqymSfU";
const TELEGRAM_CHAT_ID = "8127985637";

const sendTelegramMessage = async (message) => {
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });
  } catch (error) {
    console.error("Failed to send Telegram message:", error);
  }
};

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const yesImages = [yes1, yes2, yes3, yes4, yes5, yes6, yes7, yes8];

  const noImages = [no1, no2, no3, no4, no5, no6, no7, no8, no9, no10, no11];

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
    // if (noCount === 0) {
      sendTelegramMessage(`💔 Someone clicked NO on your Valentine's page, times: ${noCount + 1}!`);
    // }
  };

  const handleYesClick = () => {
    setYesPressed(true);
    sendTelegramMessage("💖 YES! Someone accepted your Valentine's invitation! 🎉");
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
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 animate-spin-slow">
            {shuffledYesImages.map((img, index) => {
              const angle = (index * 360) / shuffledYesImages.length;
              const radius = 40;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              
              return (
                <img
                  key={index}
                  src={img}
                  alt={`yes-${index}`}
                  className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-rose-400"
                  style={{
                    left: `calc(50% + ${x}vw - 8rem)`,
                    top: `calc(50% + ${y}vh - 8rem)`,
                  }}
                />
              );
            })}
          </div>
          <div className="relative z-10 text-center">
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" className="mx-auto mb-4" />
            <div className="text-4xl md:text-6xl font-bold">
              Ok Yayyyyy!!!
            </div>
          </div>
        </div>
      ) : (
        <>
          {noCount >= 10 && (
            <div className="fixed inset-0 grid grid-cols-3 md:grid-cols-4 gap-0 opacity-40 z-0">
              {Array.from({ length: 12 }).map((_, index) => (
                <img
                  key={index}
                  src={kopale}
                  alt="kopale"
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
          )}
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
          <div className="flex flex-wrap justify-center gap-2 items-center relative z-10">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
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
            <div className="absolute inset-0 animate-spin-slow pointer-events-none">
              {shuffledNoImages.map((img, index) => {
                const angle = (index * 360) / shuffledNoImages.length;
                const radius = 40;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <img
                    key={index}
                    src={img}
                    alt={`no-${index}`}
                    className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-blue-400"
                    style={{
                      left: `calc(50% + ${x}vw - 8rem)`,
                      top: `calc(50% + ${y}vh - 8rem)`,
                    }}
                  />
                );
              })}
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
