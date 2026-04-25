import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; to?: string; }

export const PageHero = ({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  breadcrumb: Crumb[];
}) => (
  <section className="relative pt-10 pb-12 md:pt-16 md:pb-16 border-b border-border/60">
    <div className="container-tight max-w-5xl">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6 animate-fade-in">
        <Link to="/" className="hover:text-foreground">Home</Link>
        {breadcrumb.map((b, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <ChevronRight size={12} className="opacity-60" />
            {b.to ? <Link to={b.to} className="hover:text-foreground">{b.label}</Link> : <span className="text-foreground">{b.label}</span>}
          </span>
        ))}
      </nav>
      <div className="space-y-5 animate-rise">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.05] text-foreground max-w-4xl">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
      </div>
    </div>
  </section>
);
