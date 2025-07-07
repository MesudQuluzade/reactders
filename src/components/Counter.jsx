import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(10);
  
  const inc = () => setCounter(counter + 1);
  const dec = () => setCounter(counter - 1);
  const res = () => setCounter(0);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-4 mb-6">
        <h1 className="text-3xl font-semibold">Counter App</h1>
      </div>

      <div className="text-5xl font-bold mb-10">{counter}</div>

      <div className="flex gap-6">
        <button
          onClick={inc}
          className="w-14 h-14 rounded-full bg-[#1C2735] text-white text-2xl hover:scale-105 transition"
        >
          +
        </button>
        <button
          onClick={dec}
          className="w-14 h-14 rounded-full bg-[#1C2735] text-white text-2xl hover:scale-105 transition"
        >
          -
        </button>
        <button
          onClick={res}
          className="w-14 h-14 rounded-full bg-[#1C2735] text-white text-2xl hover:scale-105 transition"
        >
          0
        </button>
      </div>
    </div>
  );
};

export default Counter;
