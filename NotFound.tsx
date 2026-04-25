import { SEO, articleJsonLd } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { ContentBlock } from "@/components/ContentSection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { Mail, MessageSquare, Clock, ShieldCheck, MapPin } from "lucide-react";

const faqs = [
  { q: "How quickly does YaarWin respond to support requests?", a: "Routine enquiries are typically answered within one working day. More complex requests, particularly those requiring verification or escalation to a senior team member, may take two to three working days. We always confirm receipt of your message so you know it has reached the team." },
  { q: "What is the best channel to reach the YaarWin team?", a: "For account-related matters, the in-product support tab is the fastest path because it carries the context the team needs to help you. For general questions, partnership enquiries or editorial corrections, the email address published on this page is the best route." },
  { q: "Can I report inaccurate content on the website?", a: "Yes, and we welcome it. Send a note to our editorial team with the page URL and the specific issue. The editorial team reviews every correction request and updates published material when warranted, with the change date clearly recorded." },
  { q: "Does YaarWin offer phone support?", a: "We focus on written support so we can document every request and provide considered, accurate responses. Written channels also create a clear record for both parties, which is in everyone's interest." },
  { q: "How is sensitive information handled?", a: "Support requests are processed by trained team members under our published privacy policy. We never ask for your account password under any circumstance. If a message ever asks for your password, treat it as suspicious and report it to our team." },
  { q: "Are partnership and press enquiries welcomed?", a: "Yes. Use the email address listed on this page and include the nature of your enquiry in the subject line so it can be routed to the right team. We respond to legitimate partnership and press requests within a few working days." },
];

const Contact = () => (
  <>
    <SEO
      title="Contact YaarWin — Support, Editorial & Partnership Enquiries"
      description="Reach the YaarWin team for account support, editorial corrections, partnership enquiries or general questions. Written channels with documented response times."
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]}
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact YaarWin",
          url: "https://yaarwin.com/contact",
        },
        articleJsonLd({ headline: "Contact YaarWin", description: "Official contact channels for the YaarWin platform.", url: "/contact" }),
        faqJsonLd(faqs),
      ]}
    />
    <PageHero
      eyebrow="Contact"
      title={<>We respond — <em className="not-italic gradient-text">thoughtfully</em>.</>}
      description="Whether you have an account question, an editorial correction or a partnership idea, the right person on our team will answer you in writing, with context."
      breadcrumb={[{ label: "Contact" }]}
    />

    <section className="section pt-12">
      <div className="container-tight max-w-5xl">
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden mb-12">
          {[
            { icon: Mail, title: "Email support", lines: ["support@yaarwin.com", "Replies within one working day"] },
            { icon: MessageSquare, title: "Editorial corrections", lines: ["editorial@yaarwin.com", "We update dated material on review"] },
            { icon: Clock, title: "Support hours", lines: ["Monday to Saturday", "10:00 – 19:00 IST"] },
          ].map((c) => (
            <div key={c.title} className="bg-card p-6">
              <c.icon className="text-primary-glow mb-3" size={20} />
              <h2 className="font-semibold text-foreground mb-2 text-base">{c.title}</h2>
              {c.lines.map((l, i) => (
                <p key={i} className={`text-sm ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}>{l}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="card-elev shadow-elevated">
          <h2 className="font-serif text-2xl text-foreground mb-2">Send us a message</h2>
          <p className="text-sm text-muted-foreground mb-6">We read every legitimate enquiry. Please include enough context for us to help you on the first reply.</p>
          <form className="grid md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you. Your message has been recorded — our team will respond by email."); }}>
            <input required placeholder="Your name" className="bg-secondary/60 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
            <input required type="email" placeholder="Email address" className="bg-secondary/60 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
            <input placeholder="Subject" className="bg-secondary/60 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors md:col-span-2" />
            <textarea required rows={5} placeholder="How can we help?" className="bg-secondary/60 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors md:col-span-2 resize-none" />
            <div className="md:col-span-2 flex items-center justify-between flex-wrap gap-3">
              <p className="text-[11px] text-muted-foreground inline-flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> Your details are processed under our privacy policy.</p>
              <button type="submit" className="btn-primary">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <ContentBlock>
      <h2>How our support team works</h2>
      <p>
        Support at YaarWin is deliberately built around written channels because writing creates a clear, considered record for both you and our team. When you send us a message, the request is logged, routed to the team member best placed to help, and answered with the context required to resolve it on the first reply where possible. Most account questions are resolved within one working day, and longer investigations are escalated to a senior reviewer who will keep you informed throughout.
      </p>

      <h2>What to include in your message</h2>
      <p>
        The more context you can share, the faster we can help. For account-related questions, include the registered identifier on your account (never your password — we will never ask for it). For editorial corrections, include the page URL and a short note describing the issue. For partnership enquiries, include the nature of the proposal and the best email address to reach you. Clear messages get clear answers, and that is the relationship we want with every reader.
      </p>

      <h2>How we handle your information</h2>
      <p>
        Every message you send through this contact page is processed under our published privacy policy. We do not share your details with third parties, do not sell your contact information and do not use your message for marketing purposes. Information is retained only as long as required to handle your request and to meet routine record-keeping obligations.
      </p>

      <h2>Reporting security concerns</h2>
      <p>
        If you believe you have identified a security issue affecting the YaarWin platform, please write to our team through the email address published above and use the subject line "security disclosure" so it routes immediately to the right team. Responsible disclosures are taken seriously and acknowledged within one working day.
      </p>

      <h2>Editorial corrections and feedback</h2>
      <p>
        Our editorial team welcomes correction requests on any published material. When you flag an inaccuracy, the responsible editor will review the page, validate the correction, and either update the content with a dated change note or respond explaining why the existing copy stands. Either way, you will receive a written response. This process is one of the ways we keep the published material on YaarWin trustworthy over time.
      </p>
    </ContentBlock>

    <FAQ items={faqs} />
  </>
);

export default Contact;
