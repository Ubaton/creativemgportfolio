import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <nav className="my-16 text-center">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              href="/about"
              className="text-sm duration-500 text-zinc-500 hover:text-amber-500 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-sm duration-500 text-zinc-500 hover:text-amber-500 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm duration-500 text-zinc-500 hover:text-amber-500 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
