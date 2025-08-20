"use client";
import { Bonheur_Royale } from "next/font/google";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

const br = Bonheur_Royale({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const notify = () => toast("Absoultely right...");
  const [q, setQ] = useState("");
  const [i, setI] = useState(0);
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
  return (
    <div className=" h-screen w-screen">
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
      </main>
    </div>
  );
}
