import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#083A7A] border-t border-[#0F4C9C]/50 px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col leading-none">
                <span className="font-clash text-2xl font-700 text-[#F5F9FD]" style={{ letterSpacing: "0.18em" }}>NOMADO</span>
                <span className="font-clash text-[9px] font-500 text-[#F59E0B] mt-1" style={{ letterSpacing: "0.55em" }}>TRAVEL</span>
              </div>
            </div>
            <p className="font-cormorant text-base italic text-[#B6C6DD] leading-relaxed max-w-xs">
              Curating immersive journeys through the many layers of Kashmir — its people, traditions, landscapes, and stories.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <span className="font-clash text-[11px] tracking-[0.3em] uppercase text-[#F59E0B] mb-2">Navigate</span>
            {["Experiences", "About", "Journal", "Plan Your Journey"].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                className="font-clash text-[12px] tracking-[0.15em] uppercase text-[#B6C6DD] hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="font-clash text-[11px] tracking-[0.3em] uppercase text-[#F59E0B] mb-2">Reach Us</span>
            <a href="mailto:hello@nomadotravel.com" className="font-clash text-[12px] tracking-[0.1em] text-[#B6C6DD] hover:text-white transition-colors duration-300">
              hello@nomadotravel.com
            </a>
            <p className="font-clash text-[12px] tracking-[0.1em] text-[#B6C6DD]">Srinagar, Kashmir</p>
            <div className="flex gap-3 mt-2">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 border border-[#2A5599] hover:border-[#F59E0B]/50 flex items-center justify-center text-[#B6C6DD] hover:text-[#F59E0B] transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X (Twitter)" className="w-9 h-9 border border-[#2A5599] hover:border-[#F59E0B]/50 flex items-center justify-center text-[#B6C6DD] hover:text-[#F59E0B] transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="w-9 h-9 border border-[#2A5599] hover:border-[#F59E0B]/50 flex items-center justify-center text-[#B6C6DD] hover:text-[#F59E0B] transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#0F4C9C]/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-clash text-[11px] tracking-[0.2em] uppercase text-[#7E97BE]">
            © 2025 Nomado Travel. All rights reserved.
          </span>
          <span className="font-cormorant text-sm italic text-[#7E97BE]">
            Travel slowly. Travel meaningfully.
          </span>
        </div>
      </div>
    </footer>
  );
}
