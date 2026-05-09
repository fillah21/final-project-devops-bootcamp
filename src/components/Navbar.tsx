"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Menu, X } from "lucide-react";

type Props = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ dark, setDark }: Props) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-50
      backdrop-blur-xl bg-white/70 dark:bg-black/30
      border-b border-black/10 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold tracking-[0.2em] text-lg">FZA Portfolio</h1>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-cyan-500 transition"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-lg border border-black/20 dark:border-white/20 hover:scale-110 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-6
          flex flex-col gap-4
          bg-white/90 dark:bg-black/90
          backdrop-blur-xl"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="hover:text-cyan-500 transition"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="w-fit px-3 py-1 rounded-lg border border-black/20 dark:border-white/20"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
