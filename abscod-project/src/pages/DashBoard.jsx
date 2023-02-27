import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Routing from "./Routing";

const DashBoard = () => {
  return (
    <>
      <Header />
      <div className="flex ">
        <div className="p-2  " >
          <Sidebar />
        </div>
        <div className="w-5/6 ">
          <Routing />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
