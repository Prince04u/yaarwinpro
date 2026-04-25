import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FAQItem { q: string; a: string; }

export const FAQ = ({ items, title = "Frequently asked questions" }: { items: FAQItem[]; title?: string }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section border-t border-border/60">
      <div className="container-tight max-w-3xl">
        <div className="mb-10">
          <span className="eyebrow mb-3">FAQ</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3 text-foreground">{title}</h2>
        </div>
        <div className="divide-y divide-border">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="py-1">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground text-base md:text-[17px] leading-snug pr-4 group-hover:text-primary-glow transition-colors">{it.q}</span>
                  <span className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground transition-colors">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div className={`grid transition-all duration-400 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed text-[15px] pr-8">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const faqJsonLd = (items: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
});
