"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <main className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      {/* BACKGROUND */}
      <div
        className="fixed inset-0 -z-10 
        bg-[radial-gradient(circle_at_top,rgba(0,150,255,0.15),transparent_50%)] 
        dark:bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_50%)]"
      ></div>

      {/* NAVBAR */}
      <nav
        className="flex justify-between items-center px-8 py-6 
        backdrop-blur-md bg-white/70 dark:bg-white/5 
        border-b border-black/10 dark:border-white/10 sticky top-0 z-50"
      >
        <h1 className="text-xl font-bold tracking-widest">MY PORTFOLIO</h1>

        <div className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-cyan-500">
            About
          </a>
          <a href="#experience" className="hover:text-cyan-500">
            Experience
          </a>
          <a href="#projects" className="hover:text-cyan-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-500">
            Contact
          </a>

          {/* TOGGLE */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-lg border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-8 py-24 max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-6xl font-extrabold 
          bg-linear-to-r from-blue-600 to-cyan-500 
          dark:from-cyan-400 dark:to-blue-500 
          text-transparent bg-clip-text"
        >
          Fillah Zaki Alhaqi
        </h1>

        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Saya adalah seorang Web Developer dengan fokus utama pada Laravel.
          Saya juga memiliki pengalaman menggunakan Next.js serta tertarik
          mendalami berbagai teknologi seperti DevOps dan Mobile Development
          menggunakan Flutter.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com/fillah21"
            target="_blank"
            className="px-6 py-3 border border-blue-600 rounded-lg hover:bg-blue-600/10 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-cyan-400">
          About Me
        </h2>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Saya telah menekuni dunia web development selama beberapa tahun dengan
          fokus pada pengembangan aplikasi berbasis Laravel. Saya juga memiliki
          pengalaman dalam membangun aplikasi modern menggunakan Next.js serta
          memiliki ketertarikan untuk terus belajar teknologi baru seperti
          DevOps dan Flutter.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-blue-600 dark:text-cyan-400">
          Work Experience
        </h2>

        <div className="space-y-8">
          <div className="p-6 rounded-xl border border-black/20 dark:border-white/20 bg-white/50 dark:bg-white/5 backdrop-blur-md">
            <h3 className="text-xl font-semibold">
              PT Pertamina Bina Medika IHC
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Web Developer • Juni 2024 – September 2024
            </p>

            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm space-y-1">
              <li>Mengembangkan sistem manajemen user dengan 7 role</li>
              <li>Fitur pencatatan keluhan pasien dan tindakan medis</li>
              <li>Sistem distribusi stok dari unit ke klinik</li>
            </ul>

            <span className="text-blue-600 dark:text-cyan-400 text-sm mt-3 inline-block">
              Laravel • jQuery
            </span>
          </div>

          <div className="p-6 rounded-xl border border-black/20 dark:border-white/20 bg-white/50 dark:bg-white/5 backdrop-blur-md">
            <h3 className="text-xl font-semibold">RSU Sakina Idaman</h3>
            <p className="text-sm text-gray-500 mb-3">
              Fullstack Web Developer • Maret 2025 – Sekarang
            </p>

            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm space-y-1">
              <li>Pengembangan SIM RS dari nol bersama tim</li>
              <li>Fitur antrian pasien RJ & monitoring bed RI</li>
              <li>Medical Chart: SOAP, SOAPIE, ADIME, SBAR</li>
              <li>Fitur Resume Medis & NERS</li>
              <li>Billing system & integrasi BPJS (E-Klaim)</li>
            </ul>

            <span className="text-blue-600 dark:text-cyan-400 text-sm mt-3 inline-block">
              Laravel • jQuery
            </span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 py-20 bg-gray-100 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600 dark:text-cyan-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-black/20 dark:border-white/20 
              backdrop-blur-md bg-white dark:bg-white/5 
              hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">SIM Klinik Onsite</h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Sistem informasi klinik onsite yang digunakan oleh berbagai
                kantor client di seluruh Indonesia untuk mengelola data pasien
                dan layanan kesehatan secara efisien.
              </p>

              <span className="text-blue-600 dark:text-cyan-400 text-sm">
                Laravel • jQuery
              </span>
            </div>

            <div
              className="p-6 rounded-xl border border-black/20 dark:border-white/20 
              backdrop-blur-md bg-white/50 dark:bg-white/5 
              hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">SIM RS</h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Sistem informasi rumah sakit untuk manajemen operasional, mulai
                dari registrasi pasien hingga integrasi dengan BPJS dan
                SatuSehat.
              </p>

              <span className="text-blue-600 dark:text-cyan-400 text-sm">
                Laravel • jQuery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-8 py-20 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-cyan-400">
          Contact
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Tertarik bekerja sama atau ingin berdiskusi? Hubungi saya:
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:fillah.alhaqi11@gmail.com"
            className="hover:text-blue-600"
          >
            Email
          </a>

          <a
            href="https://github.com/fillah21"
            target="_blank"
            className="hover:text-blue-600"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/fillah-zaki-alhaqi"
            target="_blank"
            className="hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-black/10 dark:border-white/10">
        © {new Date().getFullYear()} Fillah Zaki Alhaqi
      </footer>
    </main>
  );
}
