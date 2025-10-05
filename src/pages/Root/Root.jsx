import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Header />

      {/* main */}
      <main className="max-w-[1240px] w-full mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
