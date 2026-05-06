const Hero = () => {
  return (
    <section className="text-center py-32 px-6 max-w-4xl mx-auto">
      <h1
        className="text-6xl font-extrabold 
          bg-linear-to-r from-blue-600 via-cyan-400 to-blue-500 
          dark:from-cyan-300 dark:to-blue-500
          text-transparent bg-clip-text"
      >
        Fillah Zaki Alhaqi
      </h1>

      <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
        Saya adalah seorang Web Developer dengan fokus utama pada Laravel. Saya
        juga memiliki pengalaman menggunakan Next.js serta tertarik mendalami
        berbagai teknologi seperti DevOps dan Mobile Development menggunakan
        Flutter.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-cyan-400 text-white hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="https://github.com/fillah21"
          target="_blank"
          className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;
