"use client";

import Image from "next/image";
import Uparrow from "@/assets/uil_arrow-up.svg";
import { NavLinks } from "@/components/NavLinks";
import Link from "next/link";
import logo from "@/assets/Logo.svg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 backdrop-blur-md bg-[#0A0A0A]/80 border-b border-white/5 z-30 w-full">
      <div className="flex justify-between items-center h-[10vh] px-6 md:px-32 w-full">
        <div className="flex gap-3 items-center">
          <Image src={logo} alt="Logo" width={35} height={35} className="rounded-lg" />
          <Link
            href="/"
            className="font-semibold text-[1.2rem] md:text-[1.5rem] text-white hover:text-[#1e40af] transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            CORODO
          </Link>
        </div>

        <div className="hidden md:flex font-medium">
          <NavLinks />
        </div>

        {/* Mobile Menu Button (visible on small screens) */}
        <div className="flex md:hidden">
          <button className="text-white hover:text-[#1e40af] transition-colors">
            <Image src={Uparrow} alt="mobile-menu" width={30} height={30} />
          </button>
        </div>
      </div>
    </nav>
  );
}
