import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { ContentBlock, KeyPoints } from "@/components/ContentSection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { Heart, Users, ShieldCheck, Award, Globe, Sparkles } from "lucide-react";

const faqs = [
  { q: "Who is behind YaarWin?", a: "YaarWin is operated by an independent team of product designers, security engineers and gameplay specialists with years of experience building user-loved digital products. The platform is run with a player-first philosophy that puts speed, fairness and trust ahead of short-term metrics." },
  { q: "Where is YaarWin available?", a: "YaarWin currently focuses on the Indian market and supports UPI and IMPS payouts as the primary withdrawal rails. The platform is fully responsive across mobile and desktop, and the dedicated Android app delivers the most polished experience for daily players." },
  { q: "Is YaarWin a registered platform?", a: "YaarWin operates in compliance with the applicable digital gaming and consumer-protection norms of the regions it serves. Player wallets are segregated, transactions are logged, and the platform's policies are published openly across the legal pages of this site." },
  { q: "How does YaarWin make money?", a: "YaarWin earns through standard platform mechanics common to colour prediction games — small house margins on round outcomes and optional tournament entry fees. The platform never charges hidden fees on deposits or withdrawals, and the giftcode programme deliberately returns value to active players." },
  { q: "How do I contact YaarWin support?", a: "The fastest path is the support tab inside your YaarWin account, where you can open a ticket and get a typed response usually within a few hours. The official prediction community also shares updates and lightly moderated peer support during peak hours." },
  { q: "Does YaarWin promote responsible play?", a: "Yes. Every page of the platform encourages bankroll discipline, pre-set session limits and stop-loss habits. The design itself emphasises small stakes and short rounds precisely so players can practice safely. Anyone who feels their play is becoming compulsive can request an account cool-down through support." },
];

const About = () => (
  <>
    <SEO
      title="About YaarWin — Editorial Team, Mission & Trust Standards"
      description="Meet the YaarWin Editorial Team, learn how we review published material and understand the principles that guide the platform."
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]}
      jsonLd={[
        { "@context": "https://schema.org", "@type": "AboutPage", name: "About YaarWin", url: "https://yaarwin.com/about" },
        faqJsonLd(faqs),
      ]}
    />
    <PageHero
      eyebrow="Our Story"
      title="About YaarWin"
      description="A player-first colour prediction platform built on speed, fairness and a stubborn belief that online gaming should respect the people who play it."
      breadcrumb={[{ label: "About Us" }]}
    />

    <ContentBlock>
      <h2>The story behind YaarWin</h2>
      <p>
        <strong>YaarWin</strong> began with a simple frustration. Online colour prediction had become a category full of slow withdrawals, opaque results and aggressive marketing that treated players as numbers rather than people. The team behind <strong>YaarWin</strong> believed the category deserved better — a platform that loaded quickly, paid quickly, told the truth about how its games worked, and rewarded loyalty with real value instead of empty promises. From that frustration the YaarWin product was designed, line by line, to be the colour prediction platform we ourselves wanted to play on. Everything you see on the site, from the unified wallet to the daily giftcode drops to the transparent result history, exists because we believe a player-first product is also the best product.
      </p>

      <h2>What YaarWin stands for</h2>
      <p>
        Three principles guide every decision at <strong>YaarWin</strong>. The first is speed — every screen, every action and every payout should feel instant, because real money platforms have no excuse for friction. The second is fairness — every result must be generated transparently and verifiable wherever possible, which is why our Trx Hash game anchors outcomes to a public blockchain. The third is respect for the player — daily giftcodes, small minimum stakes, clear bonus terms and accessible support are not marketing tactics, they are the floor of decent product design. If any feature on <strong>YaarWin</strong> ever strays from these three principles, we change it.
      </p>

      <h2>The team behind the platform</h2>
      <p>
        <strong>YaarWin</strong> is built and operated by a small, independent team of product designers, software engineers, security specialists and gameplay experts. We are intentionally lean because lean teams ship faster, listen more directly to players, and keep operating costs low enough that we can keep returning value through giftcodes rather than absorbing margin. Several of our team members come from consumer fintech and gaming backgrounds, and that combined DNA shapes how the platform approaches both the wallet experience and the gameplay loop. We do not have a hundred employees and we do not need them — what <strong>YaarWin</strong> needs is a tight team that cares about the details, and that is exactly what we are.
      </p>

      <h2>How YaarWin is built</h2>
      <p>
        Under the hood, <strong>YaarWin</strong> runs on a modern, security-first stack. All connections use HTTPS with strong cipher suites. Wallet balances are stored in segregated databases with continuous backups. Authentication supports two-factor verification, biometric unlock on the mobile app and adaptive risk scoring on every login attempt. Game outcomes are generated through audited algorithms that are reviewed periodically, and the Trx Hash family of games anchors each result to a public blockchain hash so anyone can independently verify the outcome after the round closes. The infrastructure is invisible to players, which is exactly how it should be — but the work behind the scenes is what makes the front-end feel as smooth and trustworthy as it does.
      </p>

      <h2>Our promise on payouts</h2>
      <p>
        Withdrawals are the single most important moment in any real-money platform. <strong>YaarWin</strong> is engineered around the belief that a withdrawal request is a promise the platform must keep, fast. UPI and IMPS payouts settle in five to fifteen minutes for the overwhelming majority of requests. Larger amounts may take a little longer during peak windows, but our success rate sits above ninety-nine percent and our average payout time is one of the fastest in the category. We never throttle withdrawals to encourage continued play, never bury the cash-out flow, and never invent fees that did not exist when you deposited.
      </p>

      <h2>The YaarWin community</h2>
      <p>
        Around the platform sits a friendly, growing community of players who share daily reads, screenshot wins, and discuss patterns across every game in the YaarWin library. The community has its own rhythm, its own inside jokes, and its own informal mentors who love helping new players find their feet. We support the community lightly rather than directing it heavily — we believe player-led communities are more honest, more useful and more enjoyable than corporate-led ones. New players are welcome at any time, and the community channel is linked from inside your <strong>YaarWin</strong> account.
      </p>

      <h2>How we think about responsible play</h2>
      <p>
        Real money games carry real responsibility. <strong>YaarWin</strong> is designed from the ground up to encourage discipline rather than chase. Minimum stakes are deliberately tiny so practice is always cheap. Round timers are short so sessions end naturally rather than dragging on. Daily giftcodes mean you can play without depositing if you choose to. Account-level limits and cool-down requests are available through support for anyone who wants to step back. We never glamorise loss-chasing behaviour in our marketing, and we believe long-term player wellbeing is the same thing as long-term platform health.
      </p>

      <h2>Where we are headed</h2>
      <p>
        Our roadmap is full of small improvements rather than big disruptions, because that is what disciplined product teams do. Faster app launches, deeper history visualisations, richer in-app community features, more provably fair game variants, smarter notification controls and a steadily growing tournament programme are all on the way. We will keep listening to players, keep shipping weekly, and keep returning value through giftcodes and feature improvements rather than splashy ad campaigns. The <strong>YaarWin</strong> you play on a year from now will be measurably better than the one you play on today, and that compound improvement is the heart of how we operate.
      </p>

      <h2>Get in touch</h2>
      <p>
        The fastest way to reach the <strong>YaarWin</strong> team is the support tab inside your account, which routes your message directly to the right specialist and almost always gets a response within a few hours. Feedback is genuinely welcomed — many of our most-loved features started as a single player suggestion that the team agreed made the product better for everyone. If you have an idea, a question, or just want to say hello after a great session, the door is open.
      </p>
    </ContentBlock>

    <KeyPoints
      items={[
        { icon: <Heart size={18} />, title: "Player-first by design", text: "Every YaarWin feature exists because it makes the player experience faster, fairer or more rewarding." },
        { icon: <ShieldCheck size={18} />, title: "Security at the core", text: "HTTPS, 2FA, segregated wallets and adaptive risk scoring protect every YaarWin account by default." },
        { icon: <Award size={18} />, title: "Audited fairness", text: "Game outcomes are auditable; Trx Hash rounds are anchored to a public blockchain for full transparency." },
        { icon: <Sparkles size={18} />, title: "Value back to players", text: "Daily giftcodes return real value to active YaarWin members — by design, not by accident." },
        { icon: <Users size={18} />, title: "Real community", text: "A genuine, player-led community sits around YaarWin and welcomes new members at any time." },
        { icon: <Globe size={18} />, title: "Always shipping", text: "Small weekly improvements compound into a noticeably better YaarWin every quarter." },
      ]}
    />

    <FAQ items={faqs} />
  </>
);

export default About;
