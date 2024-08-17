import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import dahsboardSvg from "@/assets/dashboard-svg.svg"

const Dashboard = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex flex-col gap-2 items-center justify-center md:pt-1 pb-10 md:pb-0">
        <div className="w-52">
          <img src={dahsboardSvg} alt="" />
        </div>
        <div className="mt-5 font-semibold text-lg ">User Dashboard</div>
      </div>
    </>
  );
};

export default Dashboard;
