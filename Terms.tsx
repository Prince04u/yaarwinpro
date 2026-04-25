import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { ContentBlock, KeyPoints } from "@/components/ContentSection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { Dice5, Timer, Coins, Layers, Hash, Shuffle, Trophy, Brain } from "lucide-react";
import { LINKS } from "@/config/links";

const faqs = [
  { q: "Which YaarWin game has the best winning odds?", a: "Win Go on the 30-second timer offers the most balanced experience for new players because outcomes resolve quickly and stakes can stay small while you learn patterns. Experienced players often gravitate toward 5D Lottery for the bigger payout multipliers, while strategists prefer K3 Lotre for its richer combination logic." },
  { q: "Can I switch between YaarWin games freely?", a: "Yes. Your YaarWin wallet works across every game on the platform. Move from Win Go to 5D Lottery to Trx Hash without any transfer fees, waiting times or extra verification steps. The single-wallet design is one of the things that makes YaarWin so smooth to play." },
  { q: "What is the minimum and maximum stake on YaarWin games?", a: "Minimums start as low as ₹1 on most rounds, which is intentional so beginners can practice without risking much. Maximum stakes scale up significantly for verified accounts and tend to be highest on 5D Lottery rounds where the prize pools are bigger." },
  { q: "Are the YaarWin game results random and fair?", a: "Every round result is generated through an audited algorithm and posted publicly the moment the timer hits zero. Trx Hash takes fairness one step further by anchoring the outcome to a public blockchain hash, so the result is independently verifiable by anyone." },
  { q: "Do YaarWin giftcodes work on every game?", a: "Yes. Once a YaarWin giftcode is redeemed it lands as wallet credit, and that credit can be used on Win Go, 5D Lottery, K3 Lotre or Trx Hash without restriction. Promo-locked codes are clearly labeled and only appear during specific tournaments." },
  { q: "How do I learn the patterns of a colour prediction game?", a: "Start with low stakes on the 30-second Win Go round and watch the result history without betting. Track streaks, alternations and runs for at least fifty rounds, then begin placing small predictions to test your read. The history view inside YaarWin makes this kind of pattern study straightforward." },
];

const games = [
  { icon: Timer, name: "Win Go", tag: "Most Popular", time: "30s · 1m · 3m · 5m", desc: "The flagship YaarWin colour prediction round. Pick a colour, pick a number, and let the timer decide your win. Multiple round lengths mean you set the pace.", color: "from-emerald-500 to-green-500" },
  { icon: Dice5, name: "5D Lottery", tag: "Big Wins", time: "Every 5 minutes", desc: "Predict five digits and unlock layered payouts. Hit the right combination and the multiplier on your stake explodes — the favourite of YaarWin's high rollers.", color: "from-green-500 to-teal-500" },
  { icon: Layers, name: "K3 Lotre", tag: "Strategy", time: "Every 1 minute", desc: "A triple-dice prediction game with deeper strategic layers. Bet on totals, combinations or single dice to craft your own risk profile on YaarWin.", color: "from-teal-500 to-cyan-500" },
  { icon: Hash, name: "Trx Hash", tag: "Provably Fair", time: "30s · 1m · 3m", desc: "Blockchain-verified colour prediction. Outcomes are anchored to a public Tron hash, so every round on YaarWin Trx is independently auditable.", color: "from-cyan-500 to-emerald-500" },
];

const Games = () => (
  <>
    <SEO
      title="Platform Games — Editorial Overview of YaarWin Game Library"
      description="An editorially reviewed overview of every game family on the YaarWin platform: formats, mechanics and how to choose the right one for your style."
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Games", url: "/games" }]}
      jsonLd={faqJsonLd(faqs)}
    />
    <PageHero
      eyebrow="Game Library"
      title="Every YaarWin game in one place"
      description="From the lightning-fast Win Go to the strategic K3 Lotre, the YaarWin library is engineered for players who want quick rounds, real payouts and uncompromising fairness."
      breadcrumb={[{ label: "Games" }]}
    />

    <section className="section pt-4">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-6">
          {games.map((g, i) => (
            <div key={g.name} className="card-elev group animate-rise" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center shadow-glow`}>
                  <g.icon className="text-primary-foreground" size={26} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-primary/10 text-primary-glow border border-primary/20">{g.tag}</span>
              </div>
              <h2 className="text-2xl font-bold mb-1">{g.name}</h2>
              <p className="text-xs text-primary-glow mb-3">{g.time}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{g.desc}</p>
              <a href={LINKS.login} className="btn-secondary !py-2 !px-4 text-xs">Play on YaarWin</a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContentBlock>
      <h2>The complete YaarWin game library, explained</h2>
      <p>
        <strong>YaarWin</strong> brings together every flavour of colour prediction under a single, unified wallet so you can hop between games without friction. Whether you are after a thirty-second adrenaline hit, a five-minute strategic puzzle or a provably fair blockchain round, the YaarWin library has a table built for the way you want to play. Below is the deep-dive for every game on the platform — what it is, how it works, and how to get the most out of each round when you log into your <strong>YaarWin</strong> account.
      </p>

      <h2>Win Go — the heartbeat of YaarWin</h2>
      <p>
        Win Go is the game most players associate with the <strong>YaarWin</strong> brand, and for good reason. The format is simple, the rounds are fast, and the rules are easy to grasp in the first thirty seconds you spend on the platform. Each round you predict either a colour outcome — green, red, or violet — or a specific number between zero and nine. When the timer expires the result is generated and your winning prediction multiplies your stake instantly inside your wallet. Win Go is offered in four timers: 30 seconds, 1 minute, 3 minutes and 5 minutes. The shorter rounds suit players who love rapid-fire decisions, while the longer rounds give you breathing room to study the result history, scan for patterns and place a more deliberate prediction. New <strong>YaarWin signup</strong> users almost always start here because the small minimum stake means you can learn the rhythm of the game without burning through your welcome bonus.
      </p>

      <h2>5D Lottery — bigger pools, bigger payouts</h2>
      <p>
        If Win Go is the heartbeat, 5D Lottery is the lungs — slower, deeper, and capable of pushing serious volume. Every five minutes a new 5D round opens on <strong>YaarWin</strong>, asking you to predict combinations across five separate digit positions. You can play conservatively by predicting the sum of the digits, or aggressively by trying to lock in specific positional outcomes. Because 5D rounds run on a longer cycle, the prize pools accumulate to noticeably larger payouts than the short Win Go rounds. Many of the biggest wins posted in the <strong>YaarWin</strong> community channel come from 5D Lottery rounds, especially when players combine a free <strong>YaarWin giftcode</strong> credit with a smartly diversified bet across multiple positions.
      </p>

      <h2>K3 Lotre — for the strategists</h2>
      <p>
        K3 Lotre is the game that rewards players who like to think a few moves ahead. Built on a three-dice mechanic with a one-minute timer, it offers a wide menu of prediction types: total dice value, sum range, triples, doubles, single dice outcomes and several combination bets. The variety means K3 has the richest skill ceiling of any game in the YaarWin library. Beginners can stick with simple high or low total predictions, while seasoned players design layered bet combinations that hedge risk while keeping a multiplier upside. If you enjoy poker, blackjack or any game where reading probability gives you an edge, K3 on <strong>YaarWin</strong> will feel right at home.
      </p>

      <h2>Trx Hash — provably fair colour prediction</h2>
      <p>
        Trx Hash is the most modern offering in the YaarWin library. Each round outcome is anchored to a public hash drawn from the Tron blockchain, which means no one — not even YaarWin itself — can influence the result after the round opens. Every player on the platform can independently verify the outcome, which is why Trx Hash has become the favourite of players who care most about transparency and provability. The format is identical to Win Go in spirit: pick your colour or number, wait for the timer, collect the multiplier on a winning prediction. Round lengths of 30 seconds, 1 minute and 3 minutes give you the same flexibility as the classic Win Go menu, with the added comfort of cryptographic fairness on every single result.
      </p>

      <h2>How to choose the right YaarWin game for you</h2>
      <p>
        With four distinct game families on the platform, picking the right one comes down to three questions: How fast do you want results? How much complexity do you enjoy? And how big a payout are you chasing? If you want speed, Win Go on the 30-second timer is unbeatable. If you want complexity, K3 Lotre will keep your brain engaged for hours. If you want maximum payout potential, 5D Lottery has the deepest pools. And if fairness is your priority above all else, Trx Hash is the obvious pick. Many of the most consistent winners on <strong>YaarWin</strong> rotate between two or three games depending on their mood and bankroll for the day, using the unified wallet to move freely without ever needing a transfer.
      </p>

      <h2>Bankroll discipline across every YaarWin game</h2>
      <p>
        No matter which game becomes your favourite, the same bankroll principles apply. Decide before you log in how much of your <strong>YaarWin</strong> wallet you are willing to play with that session, and stop the moment you hit the limit — win or lose. Use the smallest stake size that still keeps the game interesting, because variance is the silent killer of every prediction strategy. Stack <strong>YaarWin free giftcode</strong> drops onto your bankroll whenever they appear so your effective playing capital grows over time without depositing more. Most importantly, treat every loss as the cost of information; the more rounds you observe, the better your prediction reads will become.
      </p>

      <h2>Tournaments, leaderboards and seasonal events</h2>
      <p>
        Beyond the core game library, <strong>YaarWin</strong> regularly runs tournaments and leaderboard events where the top predictors over a defined window split a prize pool. Win Go tournaments are the most common and tend to run on weekends. 5D Lottery weekly leagues attract the high-stakes crowd, while K3 strategy challenges reward the most consistent profit margin rather than raw volume. The events page inside your account shows every active competition and the giftcodes that unlock entry, so check it before each session.
      </p>
    </ContentBlock>

    <KeyPoints
      items={[
        { icon: <Coins size={18} />, title: "Single wallet, every game", text: "Move freely between Win Go, 5D, K3 and Trx Hash without transfers or fees. One YaarWin balance powers everything." },
        { icon: <Shuffle size={18} />, title: "Multi-round flexibility", text: "Pick a 30-second sprint or a 5-minute strategic round — every YaarWin game offers timer options to suit your style." },
        { icon: <Trophy size={18} />, title: "Tournament-ready", text: "Weekend leagues, daily leaderboards and seasonal events keep the YaarWin game library always fresh." },
        { icon: <Brain size={18} />, title: "Skill rewarded", text: "Result history, hot-streak indicators and combination bet types give skilled players a real edge over time." },
      ]}
    />

    <FAQ items={faqs} />
  </>
);

export default Games;
