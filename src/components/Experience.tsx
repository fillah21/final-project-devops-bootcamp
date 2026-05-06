const Experience = () => {
  return (
    <section id="experience" className="px-8 py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 text-center bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
        Work Experience
      </h2>

      <div className="relative border-l border-black/20 dark:border-white/20">
        {/* ITEM 1 */}
        <div className="mb-14 ml-6 relative group">
          {/* DOT */}
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 dark:bg-cyan-400 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition" />

          {/* CARD */}
          <div className="ml-4 p-6 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 hover:shadow-xl hover:shadow-cyan-400/10 transition">
            <h3 className="text-lg font-semibold">
              PT Pertamina Bina Medika IHC
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Junior Software Engineer • Juni 2024 – September 2024
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
              <li>Pengembangan sistem manajemen user dengan 7 role</li>
              <li>Pencatatan keluhan pasien & tindakan medis</li>
              <li>Sistem distribusi stok dari unit ke klinik</li>
            </ul>

            <div className="mt-4">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                Laravel • jQuery
              </span>
            </div>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="ml-6 relative group">
          {/* DOT */}
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 dark:bg-cyan-400 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition" />

          {/* CARD */}
          <div className="ml-4 p-6 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 hover:shadow-xl hover:shadow-cyan-400/10 transition">
            <h3 className="text-lg font-semibold">RSU Sakina Idaman</h3>

            <p className="text-sm text-gray-500 mt-1">
              IT Programmer • Maret 2025 – Sekarang
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
              <li>Pengembangan SIM RS dari nol bersama tim</li>
              <li>Fitur antrian pasien RJ & monitoring bed RI</li>
              <li>Medical Chart (SOAP, SOAPIE, ADIME, SBAR)</li>
              <li>Resume medis & sistem NERS</li>
              <li>Billing system & integrasi BPJS (E-Klaim)</li>
            </ul>

            <div className="mt-4">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                Laravel • jQuery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
