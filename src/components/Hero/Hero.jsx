import React, { useEffect, useState } from "react";
import css from "./Hero.module.scss";
import WheelWrapper from "./Wheel";
import HoldersList from "./HoldersList";
import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(
  "https://orbital-little-crater.solana-mainnet.quiknode.pro/5548eba5891b5d2d28ba778785bef4a311a0fa9f"
); // Solana Mainnet RPC
const tokenMintAddress = "5xc3o7sWTVxERGRzxskhh8uz1FeEiotQLvBiPs9dpump";

const Hero = () => {
  const [holders, setHolders] = useState([]);
  useEffect(() => {
    async function fetchTokenHolders() {
      try {
        const mintPublicKey = new PublicKey(tokenMintAddress);
        const tokenAccounts = await connection.getTokenLargestAccounts(
          mintPublicKey
        );

        const holders = tokenAccounts.value.map((account) => ({
          address: truncateAddress(account.address.toString()),
          amount: account.uiAmount,
        }));

        setHolders(holders ? holders.slice(0,7) : []);
      } catch (error) {
        console.error("Error fetching token holders:", error);
      }
    }

    // Helper function to truncate addresses
    const truncateAddress = (address) => {
      if (typeof address !== "string") {
        return address; 
      }
      return `${address.slice(0, 6)}...${address.slice(-6)}`;
    };

    fetchTokenHolders();
  }, []);

  console.log("Token Holders:", holders);

  return (
    <div className={css.wrapper} data-scroll data-scroll-speed="0.5">
      {/* Background Blurred Shapes */}
      <div className={css.shape1}></div>
      <div className={css.shape2}></div>

      {/* Content  */}
      <div className={css.content}>
        <div className="pt-0.5 md:pt-28 lg:pt-28 2xl:pt-36 max-w-screen-xl 3xl:max-w-screen-2xl mx-auto px-5 sm:px-9 2xl:px-0 3xl:px-5">
          <div className="flex flex-col lg:flex-row w-full gap-28 md:gap-32 xl:gap-48 items-center justify-between">
            {/* Wheel | Left Side */}
            <div
              className=""
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="700"
            >
              {holders && holders.length > 0 && <WheelWrapper holders={holders} />}
            </div>

            {/* Right Side  */}
            <div
              className="flex-1 w-[100%] md:w-full -mt-5 md:-mt-12"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="700"
            >
              <h2 className="text-3xl text-center md:text-left lg:text-3xl xl:text-4xl max-w-md font-bold text-[#FFD700] mb-8">
                Top Meme Coin Holders
              </h2>
              <div className="bg-background bg-opacity-60 shadow-lg border border-[#FFD700]/25 rounded-lg px-6 py-8">
                <HoldersList holders={holders} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
