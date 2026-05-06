const Projects = () => {
  const projects = [
    {
      title: "SIM Klinik Onsite",
      desc: "Sistem informasi klinik onsite yang digunakan oleh berbagai kantor client di seluruh Indonesia untuk mengelola data pasien dan layanan kesehatan secara efisien.",
      tech: "Laravel • jQuery",
    },
    {
      title: "SIM RS",
      desc: "Sistem informasi rumah sakit untuk manajemen operasional, mulai dari registrasi pasien hingga integrasi dengan BPJS dan SatuSehat.",
      tech: "Laravel • jQuery",
    },
  ];

  return (
    <section id="projects" className="px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-px bg-linear-to-br from-blue-500/40 to-cyan-400/40 hover:from-cyan-400 hover:to-blue-500 transition"
            >
              {/* INNER CARD */}
              <div
                className="h-full rounded-2xl p-6 
                  bg-white/80 dark:bg-black/60 backdrop-blur-xl
                  border border-black/10 dark:border-white/10
                  group-hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
                  transition"
              >
                {/* HEADER */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <span
                    className="text-xs px-3 py-1 rounded-full 
                      bg-blue-100 text-blue-600 
                      dark:bg-cyan-400/10 dark:text-cyan-400"
                  >
                    Project
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-blue-600 dark:text-cyan-400">
                    {item.tech}
                  </span>

                  {/* <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition">
                    View →
                  </span> */}
                </div>
              </div>

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition blur-2xl bg-cyan-400/20 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
