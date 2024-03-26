import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <footer className="footer items-center p-5 pt-10">
      <aside className="items-center grid-flow-col ">
        <p className="text-[16px] font-[400]">
          Copyright © 2024 - All right reserved
        </p>
      </aside>

      <nav className="grid-flow-col gap-4 text-[14px] md:place-self-center md:justify-self-end font-semibold">
        <Link href='/'>About</Link>
        <Link href='/'>FAQ's</Link>
        <Link href='/'>Support</Link>
        <Link href='/'>Contact</Link>
      </nav>
    </footer>
  );
}
