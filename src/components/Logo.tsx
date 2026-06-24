export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Nomado">
      <circle cx="50" cy="50" r="50" fill="#163A52" />
      {/* Location pin */}
      <path
        d="M50 24c-10 0-18 7.8-18 17.6C32 53 50 76 50 76s18-23 18-34.4C68 31.8 60 24 50 24z"
        fill="#F5D14A"
      />
      {/* Pin hole */}
      <circle cx="50" cy="41.5" r="6.6" fill="#163A52" />
      {/* Comet / journey slash — navy cut then yellow stroke for the gap effect */}
      <line x1="30" y1="74" x2="80" y2="24" stroke="#163A52" strokeWidth="12" strokeLinecap="round" />
      <line x1="30" y1="74" x2="80" y2="24" stroke="#F5D14A" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
