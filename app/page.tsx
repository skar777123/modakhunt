"use client";
import { Bonheur_Royale } from "next/font/google";
import { useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

const br = Bonheur_Royale({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const notify = () => toast("Absoultely right...");
  const [q, setQ] = useState("");
  const [i, setI] = useState(0);
  const [timeLeft, setTimeLeft] = useState(8 * 60); // Initialize with 8 minutes
  const [teamName, setTeamName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const clue = [
    { question: "Find what Ganesha Wrote?", answer: "siddhinath" },
    { question: "Find the Elephant?", answer: "gajanana" },
    { question: "Find the who gives solu􀆟ons?", answer: "vighnahartha" },
    { question: "How Ganpa􀆟 was born?", answer: "bhalchandra" },
    { question: "Everything ends at me?", answer: "dhumravarna" },
  ];

  const handleSubmit = () => {
    if (q.toLowerCase() === clue[i].answer) {
      setI(i + 1);
      notify();
    }
  };

  useEffect(() => {
    if (!gameStarted) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className=" h-screen w-screen">
      {!gameStarted ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className={`${br.className} text-orange-400 text-7xl mb-8`}>
            Modak Hunt
          </h1>
          <h2 className="font-mono text-orange-400 text-4xl mb-8">
            Techkshetra (Tech Club) - Technovinayak
          </h2>
          <input
            type="text"
            placeholder="Enter Team Name"
            className={`font-mono bg-amber-500 p-3 rounded-2xl text-2xl text-white text-center border-amber-400 mb-4`}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <button
            onClick={() => {
              setGameStarted(true);
              setTimeLeft(8 * 60);
            }}
            className={`font-mono cursor-pointer bg-amber-500 p-4 rounded-2xl text-2xl text-white border-amber-400 hover:bg-amber-600`}
          >
            Start Game
          </button>
        </div>
      ) : i === 5 ? (
        <>
          <h1 className="font-mono  text-orange-400 text-4xl text-center font-bold mt-72">
            🎉 Congratulations! 🎉
            <br /> You won the Modak Hunt!
            <br /> {teamName}
          </h1>
          <br />
          <br />
          <h1 className="font-mono  text-orange-400 text-4xl text-center font-bold">
            New Team Regsitration:
          </h1>
          <div className="text-center mt-2">
            <input
              type="text"
              placeholder="Enter the Team Name"
              className={`font-mono  bg-amber-500 p-2 rounded-2xl text-2xl text-white text-center border-amber-400`}
              onChange={(e) => {
                setTeamName(e.target.value);
                setI(0);
              }}
            />
            <input
              type="submit"
              value="Play Again"
              onClick={() => {
                setTimeLeft(8 * 60);
              }}
              className={`font-mono  cursor-pointer bg-amber-500 p-2 rounded-2xl text-2xl ml-2 text-white text-center border-amber-400`}
            />
          </div>
        </>
      ) : timeLeft === 0 ? (
        <>
          <h1 className="font-mono  text-orange-400 text-4xl text-center font-bold mt-72">
            Well Tried
            <br /> Better Luck Next Time
            <br /> {teamName}
          </h1>
          <br />
          <br />
          <h1 className="font-mono  text-orange-400 text-4xl text-center font-bold">
            New Team Regsitration:
          </h1>
          <div className="text-center mt-2">
            <input
              type="text"
              placeholder="Enter the Team Name"
              className={`font-mono  bg-amber-500 p-2 rounded-2xl text-2xl text-white text-center border-amber-400`}
              onChange={(e) => {
                setTeamName(e.target.value);
                setI(0);
              }}
            />
            <input
              type="submit"
              value="Try Again"
              onClick={() => {
                setTimeLeft(8 * 60);
              }}
              className={`font-mono  cursor-pointer bg-amber-500 p-2 rounded-2xl text-2xl ml-2 text-white text-center border-amber-400`}
            />
          </div>
        </>
      ) : (
        <main className="flex-col h-screen w-screen">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <div className="flex justify-center items-center bg-cover">
            <img
              className="bg-cover"
              src="/g-logo.png"
              alt="logo"
              width={150}
              height={100}
            />
          </div>
          <div className="text-center">
            <h1 className={` font-mono  text-orange-400 text-4xl`}>
              Techkshetra (Tech Club) - Technovinayak
            </h1>
            <h1 className={`font-mono font-bold text-orange-400 text-5xl`}>
              Modak Hunt
            </h1>
          </div>
          <>
            <div className="text-center mt-20">
              <h1 className={`${br.className}  text-orange-400 text-7xl`}>
                {clue[i].question}
              </h1>
              <h1 className={`font-mono  text-orange-400 text-2xl`}>
                (complete the task and enter the code!)
              </h1>
            </div>
            <div className="text-center mt-16">
              <input
                type="text"
                placeholder="Enter the Code"
                className={`font-mono  bg-amber-500 p-2 rounded-2xl text-2xl text-white text-center border-amber-400`}
                onChange={(e) => {
                  setQ(e.target.value);
                }}
              />
              <input
                type="submit"
                onClick={handleSubmit}
                className={`font-mono  cursor-pointer bg-amber-500 p-2 rounded-2xl text-2xl ml-2 text-white text-center border-amber-400`}
              />
            </div>
          </>

          {/* Timer at bottom */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="text-center">
              <div
                className={`font-mono text-6xl font-bold text-amber-500  px-8 py-4 rounded-xl `}
              >
                Timer-{formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
