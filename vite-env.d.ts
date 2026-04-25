import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Clock, BadgeCheck, Users, FileText, Lock, Headphones, Sparkles, Award, Globe, TrendingUp } from "lucide-react";
import { SEO, articleJsonLd } from "@/components/SEO";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { LINKS } from "@/config/links";
import { WinnerModule } from "@/components/WinnerModule";
import logoMark from "@/assets/yaarwin-mark.png";

const faqs = [
  { q: "What is YaarWin and who runs the platform?", a: "YaarWin is an independently operated platform that provides secure account access, transparent product information, and editorially reviewed updates for users who want a quality experience instead of hype-driven marketing. The site is maintained by an in-house editorial team that publishes verified, fact-checked content, dates every update, and is responsible for the long-term accuracy of every guide we publish." },
  { q: "Is YaarWin a legitimate and trustworthy platform?", a: "Yes. The platform operates with documented policies, an accessible support team, transparent terms, and a published editorial process. Account access is protected with industry-standard security, our published policies are linked from every page, and our editorial team is identified by name and role on the About page so readers always know who is behind the work." },
  { q: "How do I create a YaarWin account safely?", a: "Visit the registration page, enter the requested information using the official link only, and complete the standard verification step. The full process is straightforward, secure, and documented in detail in our registration guide so users always know what to expect at each step, including how data is handled and how to enable two-factor authentication." },
  { q: "Where can I read your editorial, privacy and trust policies?", a: "Our About page describes the editorial team and our review process. The Privacy Policy, Terms & Conditions, and Disclaimer pages are linked from the footer of every page on the site and explain in plain language how the platform operates, how user information is handled, and the limits of what we publish." },
  { q: "How do I contact YaarWin support if I need help?", a: "Use the contact form on our Contact page or reach our editorial team at the published address. We aim to respond to every legitimate enquiry within one working day, and complex requests are escalated to a senior team member with the relevant subject expertise so users always get a substantive answer." },
  { q: "How often does YaarWin publish updates and new guides?", a: "Editorial content, platform information, and resource pages are reviewed on a regular cadence. Material changes are dated, archived where useful, and the editorial team is responsible for ensuring information remains accurate and useful over time. New long-form guides are added when there is a real need rather than to chase trends." },
  { q: "Does YaarWin store passwords or sensitive account data?", a: "No. YaarWin does not act as an authentication provider for third-party services and does not store credentials on your behalf. All account actions happen on the official destination platforms, and our role is to provide editorial guidance, secure links, and clear documentation so users can act with confidence." },
  { q: "How does YaarWin make money and stay independent?", a: "YaarWin operates as an editorial publisher. Where commercial relationships exist they are clearly disclosed in our policies, and they never influence the substance, tone, or recommendations of our published content. The editorial team maintains full control over what is published and how it is reviewed." },
];

const trustItems = [
  { icon: ShieldCheck, title: "Verified platform", text: "Documented policies, accessible support, and an editorial process you can review on our About page." },
  { icon: Lock, title: "Secure access", text: "Industry-standard authentication, encrypted sessions, and adaptive risk controls protect every login attempt." },
  { icon: FileText, title: "Editorial transparency", text: "Every guide on YaarWin is reviewed by a named editorial team and dated when it changes — no anonymous content." },
  { icon: Headphones, title: "Responsive support", text: "Real human support that aims to respond to every legitimate enquiry within one working day." },
];

const resources = [
  { title: "Account login guide", desc: "How to access your account securely, manage 2FA, and recover credentials safely.", to: "/yaarwin-login" },
  { title: "Registration walkthrough", desc: "Step-by-step instructions for creating a verified account on YaarWin.", to: "/yaarwin-register" },
  { title: "Official app download", desc: "Install instructions, system requirements, and security notes for the YaarWin app.", to: "/yaarwin-download" },
  { title: "Platform games overview", desc: "An editorial summary of every game family available on the YaarWin platform.", to: "/games" },
  { title: "How the platform works", desc: "A complete beginner guide covering accounts, controls, and responsible use.", to: "/how-to-play" },
  { title: "Giftcodes information", desc: "What our giftcodes programme is, how it works, and how to redeem responsibly.", to: "/yaarwin-giftcode" },
];

const Home = () => (
  <>
    <SEO
      title="YaarWin — Official Login, Register & Latest Platform Updates"
      description="YaarWin is the official platform for secure login, registration, and verified updates. Trusted access, transparent processes, and editorially reviewed information."
      breadcrumbs={[{ name: "Home", url: "/" }]}
      jsonLd={[
        articleJsonLd({
          headline: "YaarWin — Official Login, Register and Platform Updates",
          description: "Official information about the YaarWin platform, written and reviewed by the YaarWin Editorial Team.",
          url: "/",
        }),
        faqJsonLd(faqs),
      ]}
    />

    {/* HERO */}
    <section className="relative pt-12 md:pt-20 pb-12 md:pb-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-float-slow" />
                <img
                  src={logoMark}
                  alt="YaarWin official brand mark"
                  width={88}
                  height={88}
                  className="relative h-16 w-16 md:h-20 md:w-20 rounded-full ring-1 ring-primary/30 shadow-glow"
                />
              </div>
              <span className="eyebrow">Official YaarWin platform</span>
            </div>
            <h1 className="font-serif text-[40px] md:text-6xl lg:text-[68px] leading-[1.02] tracking-tight text-foreground">
              The official home for <span className="gradient-text">YaarWin</span> — secure access, verified updates.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              YaarWin is an independently operated platform offering trusted account access, editorially reviewed information, and a refined, modern experience for users who value substance over hype.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={LINKS.register} className="btn-primary">
                Create your account <ArrowRight size={16} />
              </a>
              <a href={LINKS.login} className="btn-secondary">Secure login</a>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors ml-2">Read our editorial mission →</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border max-w-xl">
              {[
                { icon: BadgeCheck, label: "Editorially reviewed" },
                { icon: ShieldCheck, label: "Secure platform" },
                { icon: Clock, label: "Updated regularly" },
                { icon: Users, label: "Trusted by readers" },
              ].map((s) => (
                <div key={s.label} className="space-y-1.5">
                  <s.icon className="text-primary-glow" size={16} />
                  <div className="text-[12px] text-muted-foreground leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <WinnerModule />
          </div>
        </div>
      </div>
    </section>

    <div className="divider-soft" />

    {/* TRUST */}
    <section className="section">
      <div className="container-wide">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow mb-3">Why readers trust YaarWin</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3 text-foreground">A platform built on transparency, not promises</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">Every claim on this site is supported by published policies, accessible documentation, and an editorial team that is publicly responsible for accuracy.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {trustItems.map((t) => (
            <div key={t.title} className="bg-card p-6 hover:bg-secondary/40 transition-colors">
              <t.icon className="text-primary-glow mb-4" size={20} />
              <h3 className="font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* LONG-FORM EDITORIAL — ~1900+ words across the page */}
    <section className="section pt-0">
      <div className="container-tight max-w-3xl">
        <article className="prose-content animate-rise">
          <span className="eyebrow mb-3">Editorial overview</span>
          <h2>What YaarWin is, and why we built it the way we did</h2>
          <p>
            YaarWin began with a simple observation: the modern web is full of pages that look polished from the outside but carry almost no substance underneath. Users are asked to trust a platform with their time, attention and personal details, yet are rarely told who is behind the words on the page or how the information is checked. We wanted to do the opposite. <strong>Yaarwin</strong> is built as an editorially led platform — a place where every recommendation is signed off by a named team, every page is dated when it changes, and every promise is matched by a policy you can actually read.
          </p>
          <p>
            The platform exists in a category that has historically been crowded with low-quality affiliate sites, recycled content and aggressive marketing. Our position is the opposite of that. We treat <strong>yaarwin login</strong>, <strong>yaarwin register</strong> and the related editorial pages as serious publishing work. That means the writing is original, the structure is consistent, and the tone is calm. There are no exaggerated claims, no fake countdowns, and no pressure tactics. If we can't say something honestly, we don't say it at all.
          </p>

          <h2>The editorial standards behind every page</h2>
          <p>
            Every long-form page on YaarWin passes through a defined editorial workflow before it goes live. A subject author drafts the piece against a structured brief. A senior editor checks it for accuracy, tone, and internal consistency. A separate reviewer reads the page as a first-time user would, paying attention to whether the navigation, headings and explanations are genuinely helpful. Only when the page survives all three reviews does it appear on the live site.
          </p>
          <p>
            We also commit to keeping content current. Static, never-updated pages quietly become misleading even when they were accurate at launch. Each guide on the site carries a review cadence, and material updates are noted with a fresh date. When something changes — a new login flow, an updated app version, a refined policy — we update the relevant page rather than burying a correction inside an unrelated post. That principle is non-negotiable, and it is what allows readers to trust the site over time rather than only on the day they first arrive.
          </p>

          <h2>Security, account access and how we think about user data</h2>
          <p>
            Account security is the area where users are most exposed and most poorly served by the wider web. We take a deliberately conservative position. YaarWin does not act as an authentication provider for third-party services, and we do not store credentials on a user's behalf. Every login or registration action happens on the official destination, reached through links that are reviewed and refreshed by our team. Our job is to make those links easy to find, document the steps clearly, and explain what to expect — not to insert ourselves into the credential flow.
          </p>
          <p>
            On our own surface area, we use industry-standard security practices: encrypted transport for every page, strict content policies, hardened headers, and ongoing monitoring of the public site. Where forms exist on YaarWin — for example the contact form on the support page — they collect only what is needed to respond, store it securely, and are subject to the retention rules described in our Privacy Policy. Users can request that we delete any data they have submitted at any time, and we treat those requests as a priority rather than an inconvenience.
          </p>
          <p>
            We strongly recommend that every reader enables two-factor authentication on any account they use, regardless of the platform. The single highest-impact thing a user can do to stay safe online is to protect their accounts with a unique password and a second factor. The login guide on this site walks through the practical steps in plain language, including how to recover access if a device is lost.
          </p>

          <h2>What you'll find across the YaarWin website</h2>
          <p>
            The site is organised into a small number of clearly defined sections so that returning users can find what they need without thinking about it. The <Link to="/games">games overview</Link> documents every product family available on the platform with a calm editorial summary, so readers can understand the structure without being sold to. The <Link to="/how-to-play">how it works</Link> guide is a complete beginner walkthrough — accounts, controls, settings, and the responsible use principles we ask every reader to honour.
          </p>
          <p>
            Account-related pages live under their own group: a step-by-step <Link to="/yaarwin-login">login guide</Link>, a structured <Link to="/yaarwin-register">registration walkthrough</Link>, and an <Link to="/yaarwin-download">official app download</Link> page that includes system requirements and integrity notes. Anything related to programmes such as <Link to="/yaarwin-giftcode">giftcodes</Link> and the longer <Link to="/giftcodes-guide">giftcodes guide</Link> is kept in its own resources group, because we believe optional features should never crowd out the core experience.
          </p>
          <p>
            Finally, the legal and policy section is genuinely complete. The <Link to="/privacy-policy">Privacy Policy</Link>, <Link to="/terms-conditions">Terms & Conditions</Link> and <Link to="/disclaimer">Disclaimer</Link> pages are written in plain language, kept current, and linked from the footer of every page on the site. They are not boilerplate. They describe how the platform actually works.
          </p>

          <h2>Design that gets out of the way</h2>
          <p>
            The visual language of YaarWin is intentionally restrained. We use a single typeface family for body text, a serif counterpart for headings, and a small, deliberate accent palette built around an emerald primary. We avoid loud animation, novelty cursors, and effects that exist purely to impress. Motion is used to guide attention — never to demand it. Colour is used to organise the page, not to overwhelm it.
          </p>
          <p>
            That restraint is a deliberate editorial choice. A design that constantly fights for attention makes serious content harder to read and harder to trust. By contrast, a calm interface communicates that the publisher takes the reader's time seriously. The goal is for users to remember what they read on the page, not how the page made them feel in the first three seconds.
          </p>

          <h2>Performance, accessibility and the technical foundation</h2>
          <p>
            On the technical side, YaarWin is engineered to load quickly on a typical mobile connection, render correctly on a wide range of devices, and remain usable for readers who depend on assistive technology. Every page uses semantic HTML, sensible heading order, descriptive alt text, and keyboard-navigable controls. Interactive elements have visible focus states. Forms have proper labels. We test the site against the accessibility checks we expect any serious publisher to meet, and we treat regressions as bugs rather than cosmetic issues.
          </p>
          <p>
            Search engine optimisation, in our view, is what naturally happens when a site is genuinely well built. We follow the technical fundamentals — clean URLs, accurate metadata, structured data, an honest sitemap, a crawlable robots configuration, fast response times — but we do not write for search engines. We write for readers. Pages that serve a real purpose and answer a real question rank for the right reasons, and they stay ranked because users stay on them.
          </p>

          <h2>Responsible use and the limits of what we publish</h2>
          <p>
            We are explicit about responsible use throughout the site. The platform is intended for adult users, in jurisdictions where access is permitted, and only for personal, recreational use. Nothing on YaarWin should be read as financial, legal, or professional advice. We do not promise outcomes, we do not predict results, and we do not present participation as a path to income. Any page that touches on these subjects carries the same disclaimer in plain language.
          </p>
          <p>
            If at any point engagement stops being enjoyable, the right action is to step away. The Disclaimer page lists the support resources we recommend and explains the limits we apply to our own content. We would rather a reader close the tab and take a break than continue reading a page that has stopped serving them.
          </p>

          <h2>Talking to the editorial team</h2>
          <p>
            One of the simplest tests of a trustworthy publisher is whether you can reach a real person when you need to. On YaarWin you can. The <Link to="/contact">contact page</Link> includes a form that routes to the editorial inbox, and we aim to respond to every legitimate enquiry within one working day. Complex questions are escalated to a senior team member with the relevant expertise, and we are happy to issue corrections or clarifications when readers spot something we got wrong.
          </p>
          <p>
            Reader feedback shapes the site in tangible ways. Many of the long-form guides on YaarWin exist because readers asked for clearer documentation on a specific topic. We treat that as a privilege, not as a burden. If something on this site is unclear, incomplete or out of date, we want to hear about it.
          </p>

          <h2>Where YaarWin is going next</h2>
          <p>
            The roadmap for the platform is intentionally modest. We are not chasing growth at any cost. We are continuing to invest in the content readers already rely on, expanding our coverage in a small number of related areas where we can do genuinely useful work, and refining the technical foundation so the site stays fast and accessible as it grows. New features ship when they are ready, not when a marketing calendar says they should.
          </p>
          <p>
            Thank you for reading this overview. If this page is your first introduction to YaarWin, we hope it gives you a clear sense of who we are, how we work, and why the site looks and reads the way it does. If you have been with us for a while, thank you for the trust — we will keep working to deserve it.
          </p>
        </article>
      </div>
    </section>

    {/* RESOURCES */}
    <section className="section pt-0">
      <div className="container-wide">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div className="max-w-xl">
            <span className="eyebrow mb-3">Editorial resources</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 text-foreground">Guides written for serious users</h2>
          </div>
          <Link to="/how-to-play" className="text-sm text-foreground hover:text-primary-glow inline-flex items-center gap-1">All guides <ArrowRight size={14} /></Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((r, i) => (
            <Link key={r.to} to={r.to} className="card-elev group block animate-rise" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-primary-glow font-semibold mb-3">Guide · {String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary-glow transition-colors">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
              <span className="text-sm text-primary-glow inline-flex items-center gap-1">Read guide <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* PILLARS */}
    <section className="section pt-0">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Sparkles, title: "Original writing", text: "Every page is written in-house by named editors — never spun, never machine-padded." },
            { icon: Award, title: "Reviewed for accuracy", text: "A second editor reads every page before it goes live, and again at every material update." },
            { icon: Globe, title: "Built for the long term", text: "The site is engineered to remain accurate, fast, and accessible as it continues to grow." },
            { icon: TrendingUp, title: "Reader-led roadmap", text: "What we publish next is shaped by what readers actually ask us, not by trend chasing." },
          ].map((p, i) => (
            <div key={p.title} className="card-elev animate-rise" style={{ animationDelay: `${i * 80}ms` }}>
              <p.icon className="text-primary-glow mb-4" size={22} />
              <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* EDITORIAL CTA */}
    <section className="section pt-0">
      <div className="container-wide">
        <div className="card-elev !p-10 md:!p-14 grid md:grid-cols-3 gap-8 items-center shadow-elevated">
          <div className="md:col-span-2">
            <span className="eyebrow mb-3">Get started</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 text-foreground">Open your verified YaarWin account</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-xl">Registration is straightforward, secure, and documented in detail. If you have questions before you start, our team is reachable through the contact page and aims to reply within one working day.</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a href={LINKS.register} className="btn-primary w-full md:w-auto justify-center">Create account</a>
            <Link to="/contact" className="btn-secondary w-full md:w-auto justify-center">Contact our team</Link>
          </div>
        </div>
      </div>
    </section>

    <FAQ items={faqs} />
  </>
);

export default Home;
