import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/nomado-logo.jpg"
      alt="Nomado"
      width={40}
      height={40}
      className={className}
    />
  );
}
