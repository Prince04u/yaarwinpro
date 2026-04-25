import { useEffect, useState } from "react";

// R = Red, G = Green, V = Violet, Y = Yellow — the four prediction outcomes.
// Premium showcase: live result tape with subtle motion, no casino glow.
const COLORS = [
  { k: "R", label: "Red", hex: "#dc2626", accent: "#ef4444" },
  { k: "G", label: "Green", hex: "#10b981", accent: "#34d399" },
  { k: "V", label: "Violet", hex: "#8b5cf6", accent: "#a78bfa" },
  { k: "Y", label: "Yellow", hex: "#eab308", accent: "#facc15" },
] as const;

const initialTape: string[] = ["G", "G", "R", "V", "G", "Y", "G", "R", "G", "V", "G", "G"];

export const WinnerModule = () => {
  const [tape, setTape] = useState(initialTape);
  const [winners, setWinners] = useState(184);

  useEffect(() => {
    const i = setInterval(() => {
      setTape((t) => {
        const next = COLORS[Math.floor(Math.random() * COLORS.length)].k;
        return [next, ...t.slice(0, 11)];
      });
      setWinners((w) => w + Math.floor(Math.random() * 3));
    }, 3200);
    return () => clearInterval(i);
  }, []);

  const counts = COLORS.map((c) => ({ ...c, n: tape.filter((t) => t === c.k).length }));
  const top = [...counts].sort((a, b) => b.n - a.n)[0];

  return (
    <div className="card-elev shadow-elevated p-6 md:p-7 max-w-md w-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Today's winners</div>
          <div className="font-serif text-3xl md:text-4xl text-foreground mt-1 tabular-nums" key={winners}>
            <span className="animate-count-flip inline-block">+{winners.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
            <span className="relative rounded-full w-2 h-2 bg-primary" />
          </span>
          Live
        </div>
      </div>

      {/* Result tape */}
      <div className="mb-5">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-2.5">Recent results</div>
        <div className="flex gap-1.5 overflow-hidden">
          {tape.map((k, i) => {
            const c = COLORS.find((x) => x.k === k)!;
            return (
              <div
                key={`${i}-${k}`}
                className="w-7 h-9 rounded-md flex items-center justify-center text-[11px] font-bold text-white shrink-0 transition-all duration-500"
                style={{
                  background: `linear-gradient(180deg, ${c.accent}, ${c.hex})`,
                  opacity: 1 - i * 0.06,
                  transform: i === 0 ? "scale(1.05)" : "scale(1)",
                  boxShadow: i === 0 ? `0 4px 12px ${c.hex}55` : "none",
                }}
                aria-label={c.label}
              >
                {c.k}
              </div>
            );
          })}
        </div>
      </div>

      {/* Color distribution */}
      <div className="space-y-2.5">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Distribution · last 12</div>
        {counts.map((c) => {
          const pct = Math.round((c.n / 12) * 100);
          const isTop = c.k === top.k && c.n > 0;
          return (
            <div key={c.k} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-bold text-white" style={{ background: c.hex }}>
                {c.k}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-[12px] mb-1">
                  <span className="text-muted-foreground">{c.label}{isTop && <span className="ml-2 text-primary-glow font-semibold">· trending</span>}</span>
                  <span className="text-foreground font-semibold tabular-nums">{c.n}</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${c.hex}, ${c.accent})` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 pt-4 border-t border-border text-[11px] text-muted-foreground leading-relaxed">
        Indicative result data · Updated continuously · Past patterns do not guarantee future outcomes.
      </div>
    </div>
  );
};
