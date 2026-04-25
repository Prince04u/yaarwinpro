import { ReactNode } from "react";

export const ContentBlock = ({ children }: { children: ReactNode }) => (
  <section className="section">
    <div className="container-tight max-w-3xl">
      <article className="prose-content animate-rise">{children}</article>
    </div>
  </section>
);

export const KeyPoints = ({ items, title }: { items: { title: string; text: string; icon?: ReactNode }[]; title?: string }) => (
  <section className="section pt-0">
    <div className="container-tight max-w-5xl">
      {title && <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">{title}</h2>}
      <div className="grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
        {items.map((it, i) => (
          <div key={i} className="bg-card p-6 hover:bg-secondary/40 transition-colors">
            {it.icon && <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center text-primary-glow mb-4">{it.icon}</div>}
            <h3 className="text-base font-semibold mb-2 text-foreground">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
