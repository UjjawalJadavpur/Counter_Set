"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const decreaseHandler = () => setCount(count - 1);
  const increaseHandler = () => setCount(count + 1);
  const resetHandler = () => setCount(0);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#344151] px-4">
      <h1 className="text-[#0398d4] text-4xl font-bold tracking-wide mb-8">
        Increment & Decrement
      </h1>

      <div className="bg-white px-10 py-6 rounded-xl shadow-lg flex items-center gap-10 text-[#344151] mb-6">
        <button
          onClick={decreaseHandler}
          className="w-16 h-16 rounded-full bg-[#e2e8f0] hover:bg-[#cbd5e1] active:scale-95 text-4xl font-bold transition duration-200"
        >
          -
        </button>

        <div className="text-5xl font-extrabold w-20 text-center">{count}</div>

        <button
          onClick={increaseHandler}
          className="w-16 h-16 rounded-full bg-[#e2e8f0] hover:bg-[#cbd5e1] active:scale-95 text-4xl font-bold transition duration-200"
        >
          +
        </button>
      </div>

      <button
        onClick={resetHandler}
        className="bg-[#0398d4] hover:bg-[#027bb0] active:scale-95 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-200"
      >
        Reset
      </button>
    </div>
  );
}
