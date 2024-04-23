"use client";
import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SideNav from "./SideNav";

function TopHearder() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };
  return (
    <div>
      <div className="flex p-5 border-b items-center justify-between md:justify-end">
        <AlignJustify className="md:hidden" onClick={toggleSideNav} />
        <Image
          src={"/logo.svg"}
          width={150}
          height={100}
          className="md:hidden"
        />
        <UserButton />
      </div>
      <div className="lg:hidden">{isSideNavOpen && <SideNav />}</div>
    </div>
  );
}

export default TopHearder;
