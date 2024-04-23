import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}){
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#fff6ed] font-customfont">
        <div className="w-full md:w-4/5">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    );
}