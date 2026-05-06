import { Dispatch, SetStateAction } from "react";

type Props = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ dark, setDark }: Props) => {
  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];
  return (
    <nav
      className="flex justify-between items-center px-8 py-6 
      backdrop-blur-xl bg-white/60 dark:bg-white/5 
      border-b border-black/10 dark:border-white/10 sticky top-0 z-50"
    >
      <h1 className="font-bold tracking-widest text-lg">FZA Portfolio</h1>

      <div className="flex items-center gap-6 text-sm">
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
    </nav>
  );
};

export default Navbar;
