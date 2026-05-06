const Contact = () => {
  return (
    <section id="contact" className="px-8 py-20 max-w-4xl mx-auto text-center">
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
  );
};

export default Contact;
