import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#07192A] border-t border-[#1E4060] px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col leading-none">
                <span className="font-clash text-2xl font-700 text-[#F5F9FD]" style={{ letterSpacing: "0.18em" }}>NOMADO</span>
                <span className="font-clash text-[9px] font-500 text-[#F2D24E] mt-1" style={{ letterSpacing: "0.55em" }}>TRAVEL</span>
              </div>
            </div>
            <p className="font-cormorant text-base italic text-[#6E879E] leading-relaxed max-w-xs">
              Curating immersive journeys through the many layers of Kashmir — its people, traditions, landscapes, and stories.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <span className="font-clash text-[11px] tracking-[0.3em] uppercase text-[#F2D24E] mb-2">Navigate</span>
            {["Experiences", "About", "Journal", "Plan Your Journey"].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                className="font-clash text-[12px] tracking-[0.15em] uppercase text-[#6E879E] hover:text-[#F5F9FD] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="font-clash text-[11px] tracking-[0.3em] uppercase text-[#F2D24E] mb-2">Reach Us</span>
            <a href="mailto:hello@nomadotravel.com" className="font-clash text-[12px] tracking-[0.1em] text-[#6E879E] hover:text-[#F5F9FD] transition-colors duration-300">
              hello@nomadotravel.com
            </a>
            <p className="font-clash text-[12px] tracking-[0.1em] text-[#6E879E]">Srinagar, Kashmir</p>
            <div className="flex gap-4 mt-2">
              {["IG", "TW", "YT"].map(s => (
                <a
                  key={s}
                  href="#"
                  className="font-clash text-[11px] tracking-[0.2em] text-[#6E879E] hover:text-[#F2D24E] transition-colors duration-300 border border-[#25496A] hover:border-[#F2D24E]/40 w-9 h-9 flex items-center justify-center"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1E4060] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-clash text-[11px] tracking-[0.2em] uppercase text-[#3A597A]">
            © 2025 Nomado Travel. All rights reserved.
          </span>
          <span className="font-cormorant text-sm italic text-[#3A597A]">
            Travel slowly. Travel meaningfully.
          </span>
        </div>
      </div>
    </footer>
  );
}
