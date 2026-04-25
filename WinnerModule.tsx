import logo from "@/assets/yaarwin-mark.png";
import { Link } from "react-router-dom";

export const Logo = ({ className = "", showWordmark = true }: { className?: string; showWordmark?: boolean }) => (
  <Link to="/" aria-label="YaarWin — return to homepage" className={`inline-flex items-center gap-2.5 group ${className}`}>
    <span className="relative inline-flex">
      <span className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img
        src={logo}
        alt="YaarWin official logo"
        width={40}
        height={40}
        loading="eager"
        decoding="async"
        className="relative h-9 w-9 md:h-10 md:w-10 rounded-full ring-1 ring-primary/20"
      />
    </span>
    {showWordmark && (
      <span className="font-serif text-lg md:text-[19px] font-bold tracking-tight text-foreground leading-none">
        Yaar<span className="text-primary-glow">Win</span>
      </span>
    )}
  </Link>
);
