import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="reach-us" className="bg-[#083A7A] border-t border-[#0F4C9C]/50 px-6 md:px-12 lg:px-20 py-20 scroll-mt-20">
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
            <a href="mailto:nomadotravels@gmail.com" className="font-clash text-[12px] tracking-[0.1em] text-[#B6C6DD] hover:text-white transition-colors duration-300">
              nomadotravels@gmail.com
            </a>
            <a href="tel:+917006712010" className="font-clash text-[12px] tracking-[0.1em] text-[#B6C6DD] hover:text-white transition-colors duration-300">
              +91 7006712010
            </a>
            <p className="font-clash text-[12px] tracking-[0.1em] text-[#B6C6DD]">Srinagar, Jammu and Kashmir</p>
            <div className="flex gap-3 mt-2">
              <a href="https://www.instagram.com/nomado.travel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 border border-[#2A5599] hover:border-[#F59E0B]/50 flex items-center justify-center text-[#B6C6DD] hover:text-[#F59E0B] transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/nomado-travel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 border border-[#2A5599] hover:border-[#F59E0B]/50 flex items-center justify-center text-[#B6C6DD] hover:text-[#F59E0B] transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
