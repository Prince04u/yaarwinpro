import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { ShieldCheck, Mail, Clock } from "lucide-react";

const platform = [
  { label: "Home", to: "/" },
  { label: "Games", to: "/games" },
  { label: "How to Play", to: "/how-to-play" },
  { label: "Download App", to: "/yaarwin-download" },
];
const account = [
  { label: "Login", to: "/yaarwin-login" },
  { label: "Register", to: "/yaarwin-register" },
  { label: "Giftcodes", to: "/yaarwin-giftcode" },
  { label: "Giftcodes Guide", to: "/giftcodes-guide" },
];
const company = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Editorial Team", to: "/about" },
];
const legal = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-conditions" },
  { label: "Disclaimer", to: "/disclaimer" },
];

export const Footer = () => (
  <footer className="mt-24 border-t border-border bg-card/40">
    <div className="container-wide py-16">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-5">
          <Logo />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            <span className="font-semibold text-foreground">YaarWin</span> is an independently operated platform offering secure account access, transparent product information and editorially reviewed updates. We publish quality, fact-checked content for users who value trust over hype.
          </p>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-primary" /> Verified platform with editorial oversight</div>
            <div className="flex items-center gap-2"><Mail size={14} className="text-primary" /> support&#64;yaarwin.com</div>
            <div className="flex items-center gap-2"><Clock size={14} className="text-primary" /> Support response within 24 hours</div>
          </div>
        </div>

        <FooterCol title="Platform" items={platform} />
        <FooterCol title="Account" items={account} />
        <FooterCol title="Company" items={company} />
        <FooterCol title="Legal" items={legal} />
      </div>

      <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} YaarWin. All rights reserved. Independently operated and editorially reviewed.</p>
        <p className="text-[11px]">Information published on this site is reviewed by the YaarWin Editorial Team.</p>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, items }: { title: string; items: { label: string; to: string }[] }) => (
  <div className="lg:col-span-2">
    <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4 text-foreground">{title}</h3>
    <ul className="space-y-2.5">
      {items.map((l) => (
        <li key={l.to + l.label}>
          <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);
