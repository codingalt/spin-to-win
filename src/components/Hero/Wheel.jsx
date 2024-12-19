import React, { useCallback, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Button } from "../ui/button";
import "./wheel.scss";
import AddressCopyModal from "./AddressCopyModal";
import ConfettiExplosion from "react-confetti-explosion";

const data = [
  { option: "0xAddress1" },
  { option: "0xAddress2" },
  { option: "0xAddress3" },
  { option: "0xAddress4" },
  { option: "0xAddress6" },
  { option: "0xAddress7" },
];

const WheelWrapper = ({holders}) => {
  const [lastWin, setLastWin] = useState(null);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  console.log("holders-----", holders);
  
  // Format holders data for the wheel
  const wheelData = holders.map((holder) => ({
    option: holder.address, 
  }));

  console.log("------------", wheelData);
  

  const onSpinEnd = (value) => {
    setLastWin(value);
  };

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * wheelData?.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleSpinStop = useCallback(() => {
    setShowModal(true);
    setShowConfetti(true);
    onSpinEnd?.(parseInt(wheelData[prizeNumber].option));
    setTimeout(() => setShowConfetti(false), 6000);
    setMustSpin(false);
  }, [onSpinEnd, prizeNumber, wheelData]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="w-full">
        <div
          style={{
            transformOrigin: "center",
          }}
          className="scale-105 md:scale-110"
        >
          <div align="center" className="roulette-container relative">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={wheelData}
              spinDuration={0.2}
              onStopSpinning={handleSpinStop}
              backgroundColors={[
                "#E62E2D",
                "#8213E7",
                "#57ACFF",
                "#F2BB13",
                "#98FB98",
                "#FF1493",
                "#FFA500",
                "#40E0D0",
                "#DDA0DD",
              ]}
              radiusLineColor={["tranparent"]}
              radiusLineWidth={[1]}
              textColors={["#FFF"]}
              outerBorderColor="#FFD700"
              outerBorderWidth={2}
              innerRadius={0}
              fontSize={[16]}
            />

            <button
              className="button roulette-button"
              onClick={handleSpinClick}
              disabled={mustSpin || wheelData.length === 0}
            >
              SPIN
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <Button
              onClick={handleSpinClick}
              disabled={mustSpin || wheelData.length === 0}
              className="mt-5 py-5 w-full max-w-[200px] mx-auto bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0A0B3B] hover:from-[#FFA500] hover:to-[#FFD700]"
            >
              SPIN
            </Button>
          </div>
        </div>

        {/* Token Address Copy Modal  */}
        {showConfetti && (
          <div className="confetti-container" style={{ zIndex: 9999 }}>
            <ConfettiExplosion
              width={2500}
              height={2000}
              particleCount={250}
              force={0.6}
              zIndex={999}
              duration={5500}
            />
          </div>
        )}
      </div>

      <AddressCopyModal
        showModal={showModal}
        data={wheelData}
        prizeNumber={prizeNumber}
        closeModal={closeModal}
      />
    </>
  );
};

export default WheelWrapper;
