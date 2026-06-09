import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className=" h-[10vh] w-[100vw] px-[5%] bg-[#F5F5F5]">
      <div className=" h-full  border-t border-t-[#FFFFFF1A] flex items-center justify-center">
        <p className=" text-[14px] max-sm:text-[12px] text-center text-[#00000099]">Built by <Link className=" underline hover:text-black text-[#A87F3D] duration-500" to={"https://oluwatimilehin-eportfolio.vercel.app"} target="_blank">Zyren Solutions</Link> © 2026 Jay's Gift Basket. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Copyright;
