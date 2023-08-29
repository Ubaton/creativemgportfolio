import React from "react";
import Link from "next/link";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  return (
    <div>
      <nav className="my-16 text-center">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-700 text-zinc-500 hover:text-red-600 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
