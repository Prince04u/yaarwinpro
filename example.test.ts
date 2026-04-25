import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { ContentBlock, KeyPoints } from "@/components/ContentSection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { Gift, Sparkles, Clock, Repeat, Wallet, Bell } from "lucide-react";
import { LINKS } from "@/config/links";

const faqs = [
  { q: "Where do I find the latest YaarWin giftcode?", a: "Fresh YaarWin giftcodes are posted on this page, inside the app's promotions tab and across the official prediction community throughout the day. Bookmark this page and check it in the morning, afternoon and evening — the codes are time-sensitive and the earliest claimers always get the largest bonus values." },
  { q: "How do I redeem a YaarWin giftcode?", a: "Copy the code, log into your YaarWin account, open the wallet, tap the redeem giftcode option, paste the code and confirm. The bonus credit appears in your wallet within a second. The whole redemption flow takes about ten seconds once you know where the redeem button is." },
  { q: "Do YaarWin giftcodes expire?", a: "Yes. Most YaarWin free giftcodes expire within 6 to 24 hours of being posted, which is why we refresh this page multiple times a day. A few special tournament giftcodes have longer windows of three to seven days, but the normal daily codes should be redeemed the same day they appear." },
  { q: "Is there a limit on YaarWin giftcode redemption?", a: "Each unique giftcode can only be redeemed once per YaarWin account, but you can redeem an unlimited number of different giftcodes. Players who claim every code drop across the day frequently stack a meaningful bonus balance without depositing any of their own funds." },
  { q: "Why was my YaarWin giftcode rejected?", a: "The most common reasons are: the code has expired, you have already redeemed that specific code on your account, a typo crept in during pasting, or the code was account-restricted. Recopy carefully, confirm freshness on this page, and try again from your YaarWin wallet screen." },
  { q: "Can YaarWin giftcode credit be withdrawn directly?", a: "Giftcode bonus credit is wagering-eligible immediately, but withdrawal eligibility depends on the bonus terms. Most YaarWin free giftcode credit becomes withdrawable after a small playthrough, which the wallet shows clearly. Once the playthrough is met, withdrawals process exactly like normal balance." },
];

const codes = [
  { code: "YAAR-WIN-NEW", value: "₹25 Welcome", time: "Always live for new accounts" },
  { code: "YW-MORNING-VIBE", value: "₹10 Daily", time: "Drops every morning · 9 AM" },
  { code: "YW-LUCKY-NOON", value: "₹15 Daily", time: "Drops every afternoon · 2 PM" },
  { code: "YW-NIGHT-FORTUNE", value: "₹20 Daily", time: "Drops every evening · 8 PM" },
  { code: "YW-WEEKEND-BOOST", value: "₹50 Weekend", time: "Live Saturday & Sunday" },
];

const Giftcode = () => (
  <>
    <SEO
      title="YaarWin Giftcodes — Verified Codes & Redemption Information"
      description="Editorial overview of the YaarWin giftcodes programme: how codes work, how to redeem responsibly and what to expect from the published terms."
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Giftcodes", url: "/yaarwin-giftcode" }]}
      jsonLd={faqJsonLd(faqs)}
    />
    <PageHero
      eyebrow="Daily Drops"
      title="YaarWin Giftcode"
      description="The official home of every live YaarWin giftcode. Fresh codes posted three times a day, completely free, redeemable in seconds from your wallet."
      breadcrumb={[{ label: "YaarWin Giftcode" }]}
    />

    <section className="section pt-4">
      <div className="container-tight max-w-4xl">
        <div className="space-y-3">
          {codes.map((c, i) => (
            <div key={c.code} className="card-elev flex items-center justify-between gap-4 flex-wrap animate-rise" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Gift className="text-primary-glow" size={20} />
                </div>
                <div>
                  <div className="font-mono font-bold text-lg text-foreground tracking-wider">{c.code}</div>
                  <div className="text-xs text-muted-foreground">{c.time}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-primary-glow">{c.value}</span>
                <a href={LINKS.giftcode} className="btn-primary !py-2 !px-4 text-xs">Redeem</a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-6">Codes refresh continuously. Reload this page or check the in-app promotions tab for newly posted YaarWin giftcodes.</p>
      </div>
    </section>

    <ContentBlock>
      <h2>YaarWin giftcodes — what they are and why they matter</h2>
      <p>
        A <strong>YaarWin giftcode</strong> is a short alphanumeric string that, when redeemed inside your wallet, instantly adds bonus credit to your <strong>YaarWin</strong> balance. Some are flat-value codes, some scale with your account level, and a few special tournament codes unlock bonus entries instead of cash credit. Whichever flavour you redeem, the result is the same: more playing capital without spending a rupee. For dedicated daily players, stacking giftcodes is one of the smartest, lowest-effort ways to grow effective bankroll over time on <strong>YaarWin</strong>.
      </p>

      <h2>How YaarWin free giftcodes are scheduled</h2>
      <p>
        The platform posts a fresh <strong>YaarWin free giftcode</strong> roughly three times a day on a predictable rhythm — morning around nine, afternoon around two, evening around eight. Weekend drops sit on top of the regular schedule, and special event codes appear during tournaments and seasonal celebrations. Knowing the rhythm lets you check in at the right times instead of refreshing constantly. Set three quiet phone reminders for the daily drop windows and you will rarely miss a code.
      </p>

      <h2>How to redeem a YaarWin giftcode in seconds</h2>
      <p>
        Redemption is intentionally simple. Copy the code from this page or from the in-app promotions tab. Open your <strong>YaarWin</strong> wallet. Tap the redeem giftcode option. Paste the code into the field. Confirm. The bonus credit lands in your wallet within a second and a confirmation toast appears. The whole flow takes ten seconds. Make it part of your routine — three quick redemptions a day adds up to a genuinely meaningful bankroll boost across a month of play.
      </p>

      <h2>Why YaarWin gives away free giftcodes</h2>
      <p>
        It might seem strange that a colour prediction platform actively gives players free credit, but the logic is straightforward. <strong>YaarWin</strong> wins when players play often and stay engaged for the long term. Daily giftcodes lower the cost of returning, deepen loyalty, and keep the community active even on days when individual sessions go red. From the platform's perspective it is a small cost that drives massive retention; from your perspective it is free playable balance that genuinely matters.
      </p>

      <h2>Stacking giftcode strategy for serious players</h2>
      <p>
        Top <strong>YaarWin</strong> players treat giftcode redemption as a non-negotiable daily ritual. Three codes a day, every day, across an average bonus value of around fifteen rupees works out to roughly 1,350 rupees of free monthly playing capital. That is a meaningful bankroll on its own, and when combined with disciplined gameplay it can easily fund weekly small withdrawals to your bank account. Skip the codes and you leave that money on the table — every single day.
      </p>

      <h2>Spotting fake YaarWin giftcodes</h2>
      <p>
        Because giftcodes are valuable, scammers occasionally try to distribute fake codes designed to phish for credentials or redirect users to look-alike sites. The rule is simple: only redeem codes posted on this official page or inside the official <strong>YaarWin</strong> app promotions tab. Never click a third-party link claiming to give you a code. Never share your password to claim a code. Real <strong>YaarWin giftcode</strong> redemption never asks for your password — only the code itself, pasted into your already-logged-in wallet.
      </p>

      <h2>Bonus terms and playthrough requirements</h2>
      <p>
        Most <strong>YaarWin free giftcode</strong> credit becomes wagering-eligible immediately, which means you can stake it in any game from the moment it lands. Withdrawal eligibility may have a small playthrough requirement — typically your bonus must be wagered once or twice across any of the games before it converts to withdrawable balance. The wallet screen shows the current playthrough status clearly, so you always know exactly how close you are to unlocking direct withdrawal.
      </p>

      <h2>Combining giftcodes with welcome bonuses</h2>
      <p>
        New <strong>YaarWin signup</strong> users get the most generous starting position because the welcome giftcode stacks on top of the regular daily drops on day one. If you time your registration to coincide with the morning code window, your starting balance gets a triple boost — welcome credit, morning code credit, and any active weekend or event code. It is a smart way to begin your <strong>YaarWin</strong> journey with maximum playing room.
      </p>

      <h2>Notifications — never miss another code</h2>
      <p>
        Inside your account settings you can switch on push notifications specifically for new giftcode drops. The notification fires the moment a code goes live, which is the difference between catching the early high-value redemption window and arriving after the cap is reached. For dedicated players, this single setting is one of the highest-value toggles on the entire <strong>YaarWin</strong> platform.
      </p>
    </ContentBlock>

    <KeyPoints
      items={[
        { icon: <Sparkles size={18} />, title: "3 daily drops", text: "Fresh YaarWin free giftcodes posted morning, afternoon and evening — a predictable rhythm worth scheduling." },
        { icon: <Clock size={18} />, title: "Ten-second redemption", text: "Copy, paste, confirm. The whole YaarWin giftcode flow takes ten seconds inside the wallet." },
        { icon: <Repeat size={18} />, title: "Stack everything", text: "Combine welcome credit, daily drops and weekend boosts to grow effective bankroll without depositing." },
        { icon: <Wallet size={18} />, title: "Wagering-friendly", text: "Most YaarWin giftcode credit is playable instantly across every game on the platform." },
        { icon: <Bell size={18} />, title: "Push for new codes", text: "Switch on giftcode notifications inside YaarWin to catch every drop the moment it goes live." },
        { icon: <Gift size={18} />, title: "Tournament codes", text: "Special event giftcodes unlock free entry to weekend tournaments — a quiet edge for active players." },
      ]}
    />

    <FAQ items={faqs} />
  </>
);

export default Giftcode;
