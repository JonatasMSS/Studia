"use client";

import Link from "next/link";
import { InfoMSG } from "../Alerts/Info";

export const HeaderLayout = () => {
  return (
    <header className="w-full absolute top-0 p-3 flex ">
      <Link href={"/"} className="text-2xl text-white hover:scale-105 transition-all">
        Stud<span className="font-bold text-Iris">IA</span>
      </Link>
    </header>
  );
};
