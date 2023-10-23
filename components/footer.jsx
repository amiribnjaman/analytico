import React from "react";

export default function footer() {
  return (
    <footer className="footer items-center p-5 pt-10">
      <aside className="items-center grid-flow-col ">
        <p className="text-[16px] font-[400]">
          Copyright © 2023 - All right reserved
        </p>
      </aside>

      <nav className="grid-flow-col gap-4 text-[14px] md:place-self-center md:justify-self-end font-semibold">
        <a>About</a>
        <a>FAQ's</a>
        <a>Support</a>
        <a>Contact</a>
      </nav>
    </footer>
  );
}
