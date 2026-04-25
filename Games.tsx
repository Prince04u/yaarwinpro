@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Premium dark palette — obsidian base, luminous emerald, warm champagne accent */
    --background: 168 28% 4%;
    --foreground: 42 30% 96%;

    --card: 170 24% 6.5%;
    --card-foreground: 42 30% 96%;

    --popover: 170 26% 5.5%;
    --popover-foreground: 42 30% 96%;

    --primary: 152 76% 46%;
    --primary-foreground: 168 28% 4%;
    --primary-glow: 150 88% 62%;

    --secondary: 168 20% 10%;
    --secondary-foreground: 42 30% 96%;

    --muted: 168 16% 9%;
    --muted-foreground: 42 14% 72%;

    --accent: 42 80% 70%; /* champagne gold for trust + premium accents */
    --accent-foreground: 168 28% 4%;

    --destructive: 0 72% 56%;
    --destructive-foreground: 42 30% 96%;

    --border: 168 16% 14%;
    --input: 168 16% 14%;
    --ring: 152 76% 46%;

    --radius: 0.7rem;

    --gradient-primary: linear-gradient(135deg, hsl(152 76% 42%) 0%, hsl(150 88% 56%) 100%);
    --gradient-hero: radial-gradient(ellipse 90% 70% at 50% 0%, hsl(152 70% 28% / 0.45) 0%, transparent 70%);
    --gradient-card: linear-gradient(180deg, hsl(170 24% 8%) 0%, hsl(168 26% 5%) 100%);
    --gradient-text: linear-gradient(135deg, hsl(42 30% 98%) 0%, hsl(150 80% 70%) 100%);
    --gradient-accent: linear-gradient(135deg, hsl(42 80% 70%) 0%, hsl(38 70% 60%) 100%);
    --gradient-mesh: radial-gradient(at 18% 20%, hsl(152 70% 30% / 0.32) 0px, transparent 45%),
                      radial-gradient(at 82% 10%, hsl(170 60% 24% / 0.28) 0px, transparent 50%),
                      radial-gradient(at 50% 95%, hsl(150 80% 35% / 0.18) 0px, transparent 55%);

    --shadow-glow: 0 0 36px hsl(150 88% 50% / 0.28);
    --shadow-card: 0 1px 0 hsl(42 30% 96% / 0.05) inset, 0 24px 60px -22px hsl(168 70% 2% / 0.8);
    --shadow-elevated: 0 40px 80px -28px hsl(168 70% 2% / 0.9), 0 0 0 1px hsl(152 50% 30% / 0.08);

    --transition-smooth: cubic-bezier(0.22, 1, 0.36, 1);
  }
}

@layer base {
  * { @apply border-border; }
  html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
  body {
    @apply bg-background text-foreground;
    font-family: 'Manrope', system-ui, -apple-system, sans-serif;
    font-feature-settings: "ss01", "cv11";
    background-image: var(--gradient-mesh);
    background-attachment: fixed;
  }
  h1, h2, h3, h4 { font-family: 'Manrope', sans-serif; @apply font-bold tracking-tight; letter-spacing: -0.02em; }
  .font-serif { font-family: 'Fraunces', Georgia, serif; font-feature-settings: "ss01"; }
  ::selection { background: hsl(156 64% 42% / 0.3); color: hsl(40 30% 96%); }
  img { @apply max-w-full h-auto; }
}

@layer components {
  .gradient-text {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .container-tight { @apply max-w-6xl mx-auto px-4 sm:px-6; }
  .container-wide { @apply max-w-7xl mx-auto px-4 sm:px-6; }

  /* Refined buttons — calmer, no spammy glow-pulse */
  .btn-primary {
    @apply relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-primary-foreground transition-all duration-300;
    background: var(--gradient-primary);
    box-shadow: 0 1px 0 hsl(40 30% 96% / 0.15) inset, 0 8px 24px -8px hsl(156 64% 42% / 0.5);
  }
  .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 1px 0 hsl(40 30% 96% / 0.2) inset, 0 12px 28px -8px hsl(156 64% 42% / 0.6); }
  .btn-secondary {
    @apply inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold transition-all duration-300 border;
    border-color: hsl(var(--border));
    color: hsl(var(--foreground));
    background: hsl(var(--card));
  }
  .btn-secondary:hover { border-color: hsl(var(--primary) / 0.5); background: hsl(var(--secondary)); }

  .card-elev {
    @apply rounded-xl p-6 transition-all duration-500 border;
    background: var(--gradient-card);
    border-color: hsl(var(--border));
    box-shadow: var(--shadow-card);
  }
  .card-elev:hover { border-color: hsl(var(--primary) / 0.35); transform: translateY(-2px); }

  .section { @apply py-16 md:py-24; }

  /* Editorial prose */
  .prose-content { @apply text-[15.5px] leading-[1.75]; }
  .prose-content p { @apply text-muted-foreground mb-5; }
  .prose-content h2 {
    @apply text-2xl md:text-[28px] mt-12 mb-4 text-foreground font-bold;
    font-family: 'Fraunces', Georgia, serif;
    letter-spacing: -0.02em;
  }
  .prose-content h3 { @apply text-xl mt-8 mb-3 text-foreground; }
  .prose-content strong { @apply text-foreground font-semibold; }
  .prose-content a { @apply text-primary-glow underline-offset-4 hover:underline; }
  .prose-content ul { @apply list-disc list-outside ml-5 mb-5 text-muted-foreground space-y-2; }
  .prose-content ol { @apply list-decimal list-outside ml-5 mb-5 text-muted-foreground space-y-2; }

  .eyebrow { @apply inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-glow; }
  .eyebrow::before { content: ''; @apply block w-6 h-px bg-primary-glow/60; }

  .divider-soft { @apply h-px bg-gradient-to-r from-transparent via-border to-transparent; }
}

@keyframes rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@keyframes shimmer-line { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
@keyframes count-flip { 0% { opacity: 0; transform: translateY(8px); } 100% { opacity: 1; transform: translateY(0); } }

.animate-rise { animation: rise 0.7s var(--transition-smooth) both; }
.animate-fade-in { animation: fade-in 0.6s ease-out both; }
.animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
.animate-count-flip { animation: count-flip 0.5s var(--transition-smooth) both; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
