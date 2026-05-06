"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useEffect, useState } from "react";

const Home = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main className="min-h-screen transition-colors duration-200 bg-white text-black dark:bg-black dark:text-white">
      <div
        className="fixed inset-0 -z-10 
        bg-[radial-gradient(circle_at_20%_20%,rgba(0,150,255,0.15),transparent_40%)]
        dark:bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.15),transparent_40%)]"
      />

      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
