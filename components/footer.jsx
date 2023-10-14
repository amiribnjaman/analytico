import React from "react";

export default function footer() {
  return (
    <footer className="footer items-center p-4 ">
      <aside className="items-center grid-flow-col ">
        <p className="text-[17px]">
          Copyright © 2023 - All right reserved by Amir
        </p>
      </aside>

      <nav className="grid-flow-col gap-4 text-[15px] md:place-self-center md:justify-self-end">
        <a>About</a>
        <a>FAQ's</a>
        <a>Support</a>
        <a>Contact</a>
      </nav>
    </footer>
  );
}
