import React, { useState } from 'react'
import { Wheel } from "react-wheel-of-prizes";

const Wheel2 = () => {
     const [result, setResult] = useState(null);

      const tokenHolders = [
        "0xAddress1",
        "0xAddress2",
        "0xAddress3",
        "0xAddress4",
        "0xAddress5",
      ];

    const handleFinished = (winner) => {
      setResult(winner);
      alert(`The winner is: ${winner}`);
    };
  return (
    <div className="w-full">
      <Wheel
        mustStartSpinning={true} // Set this to `true` when you want to spin
        prizeNumber={Math.floor(Math.random() * tokenHolders.length)} // Random winner index
        data={tokenHolders} // Array of token holders
        backgroundColors={["#3e3e3e", "#df3428"]} // Alternate segment colors
        textColors={["#ffffff"]}
        onStopSpinning={handleFinished} // Callback when the wheel stops
      />

      {result && (
        <div className="mt-6 text-xl font-semibold text-green-600">
          Winner: {result}
        </div>
      )}
      <button
        onClick={() => setResult(null)} // Reset winner state
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Spin Again
      </button>
    </div>
  );
}

export default Wheel2