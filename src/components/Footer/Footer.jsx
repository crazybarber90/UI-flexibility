const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0A0F0F] to-[#121818] text-gray-300 pt-10 pb-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between gap-8">
        {/* Contact section */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-[var(--primary)] font-poppins mb-3 text-lg">
            Contact
          </h4>
          <p className="text-gray-400 mb-1">Email: hello@digitalagency.com</p>
          <p className="text-gray-400 mb-1">Phone: +381 11 123 4567</p>
          <p className="text-gray-400">Address: Belgrade, Serbia</p>
        </div>

        {/* Section links */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-[var(--primary)] font-poppins mb-3 text-lg">
            Links
          </h4>
          <a
            href="/"
            className="block mb-1 hover:text-[var(--accent)] transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="block mb-1 hover:text-[var(--accent)] transition-colors"
          >
            About
          </a>
          <a
            href="/services"
            className="block mb-1 hover:text-[var(--accent)] transition-colors"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block mb-1 hover:text-[var(--accent)] transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Sociial networks */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-[var(--primary)] font-poppins mb-3 text-lg">
            Follow Us
          </h4>
          <div className="flex gap-3 mt-2">
            <a
              href="hhttps://www.linkedin.com/in/nikola-petrovic-468b7720b/"
              target="_blank"
              className="bg-[var(--primary)] text-black w-8 h-8 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              LN
            </a>
            <a
              href="https://github.com/crazybarber90"
              target="_blank"
              className="bg-[var(--primary)] text-black w-8 h-8 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              Git
            </a>
            <a
              href="https://www.facebook.com/nikola.p.petrovic.3"
              target="_blank"
              className="bg-[var(--primary)] text-black w-8 h-8 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              FB
            </a>
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-center mt-6 text-sm">
        © {new Date().getFullYear()} Digital Agency. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
