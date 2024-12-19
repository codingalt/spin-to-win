import React from "react";
import { toast } from "wc-toast";
import Modal from "react-modal";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const AddressCopyModal = ({ showModal, closeModal, data, prizeNumber }) => {
  const dummyAddress = "5xc3o7sWTVxERGRzxskhh8uz1FeEiotQLvBiPs9dpump";
  return (
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
        contentLabel="Win Modal"
        className="fixed z-50 inset-0 transition-all flex items-center justify-center px-3 py-4 md:p-4"
        overlayClassName="fixed transition-all inset-0 bg-black bg-opacity-75"
        ariaHideApp={false}
      >
        <div className="bg-[#0A0B3B] relative border-1 border-primary rounded-lg py-8 px-5 md:p-8 max-w-lg w-[95%] md:w-full">
          <div className="absolute right-4 top-2">
            <div
              onClick={closeModal}
              className="w-9 h-9 cursor-pointer rounded-full hover:bg-gray-800 flex items-center justify-center bg-opacity-50 transition-all"
            >
              <X className="w-5 h-5 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Congratulations!
          </h2>
          {/* <p className="text-white mb-4">
            You've won {data[prizeNumber].option} tokens!
          </p> */}
          <p className="text-white mb-2 mt-12">Your token holder address:</p>
          <div className="bg-[#1A1B4B] py-2 px-3 md:px-4 rounded-md flex justify-between items-center mb-4">
            <span className="text-primary truncate pr-3 md:pr-4">
              {dummyAddress}
            </span>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(dummyAddress);
                toast.success("Copied to clipboard!");
              }}
              className="bg-primary text-[#0A0B3B] hover:bg-[#FFA500]"
            >
              Copy
            </Button>
          </div>
          {/* <Button
            onClick={closeModal}
            className="w-full bg-primary text-[#0A0B3B] hover:bg-[#FFA500]"
          >
            Close
          </Button> */}
        </div>
      </Modal>
    </>
  );
};

export default AddressCopyModal;
