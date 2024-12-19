import Header from "@/components/Header/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
