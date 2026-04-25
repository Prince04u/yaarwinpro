import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { ContentBlock } from "@/components/ContentSection";
import { FAQ, faqJsonLd } from "@/components/FAQ";

const faqs = [
  { q: "Who can use YaarWin?", a: "YaarWin is intended exclusively for adults who have reached the legal age in the jurisdiction where they reside and where local law permits participation in skill-and-prediction games of this nature. By creating an account you confirm that you meet these requirements." },
  { q: "Am I responsible for the actions on my YaarWin account?", a: "Yes. You are fully responsible for all activity that takes place on your YaarWin account, including predictions placed, giftcodes redeemed and withdrawals requested. Keep your password secret, enable two-factor authentication, and never share your account credentials with anyone." },
  { q: "Can YaarWin suspend an account?", a: "Yes. YaarWin reserves the right to suspend, restrict or close any account that violates these terms, that engages in fraudulent or abusive behaviour, that breaches the one-account-per-player rule, or that fails verification when required. Affected balances may be frozen pending review." },
  { q: "What happens to my balance if my account is closed?", a: "If you close your YaarWin account voluntarily, any verified withdrawable balance can be paid out to your verified UPI handle. If your account is closed for breach of these terms, balances may be partially or fully forfeited depending on the nature of the breach, in line with the published policy." },
  { q: "Are giftcodes covered by these terms?", a: "Yes. YaarWin giftcodes are a discretionary platform reward and are subject to the bonus terms shown at redemption. Codes may be expired, throttled or revoked at the platform's discretion if abuse is detected. Honest players never have any issue with giftcode terms." },
  { q: "How are disputes handled?", a: "Disputes should be raised through the support tab inside your YaarWin account. The vast majority of disputes are resolved within a few business days. For matters that cannot be resolved internally, the parties agree to seek resolution under the laws of the jurisdiction governing this agreement." },
];

const Terms = () => (
  <>
    <SEO
      title="Terms & Conditions — YaarWin Platform Agreement"
      description="The terms and conditions governing your use of the YaarWin platform. Eligibility, account responsibilities, gameplay rules and dispute resolution."
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Terms & Conditions", url: "/terms-conditions" }]}
      jsonLd={faqJsonLd(faqs)}
    />
    <PageHero
      eyebrow="Legal"
      title="Terms & Conditions"
      description="The rules that govern the use of YaarWin — written in clear language so every player knows where they stand. By using the platform you agree to these terms."
      breadcrumb={[{ label: "Terms & Conditions" }]}
    />

    <ContentBlock>
      <h2>Acceptance of these terms</h2>
      <p>
        By creating an account on <strong>YaarWin</strong>, accessing the platform, or using any of its features, you agree to be bound by these terms and conditions in full. If you do not agree with any part of these terms, please do not use the platform. We have written these terms in plain language because we believe rules that are easy to understand are rules that get respected, and because every player deserves to know exactly what they are agreeing to before they place their first prediction.
      </p>

      <h2>Eligibility</h2>
      <p>
        <strong>YaarWin</strong> is intended exclusively for adults who have reached the legal age of majority in the jurisdiction where they reside and where local law permits participation in skill-and-prediction games of the nature offered on the platform. By creating an account you confirm that you meet these requirements, that the information you provided during signup is accurate, and that you accept full responsibility for ensuring your use of the platform complies with all applicable local laws. We may at any time request verification documents to confirm eligibility, and access may be restricted in jurisdictions where the platform is not lawfully available.
      </p>

      <h2>Account responsibilities</h2>
      <p>
        You are responsible for all activity that takes place on your <strong>YaarWin</strong> account. Keep your password secret. Enable two-factor authentication. Never share your account credentials with any other person, including individuals claiming to be from <strong>YaarWin</strong> support. The platform will never ask for your password under any circumstance. If you suspect that your account has been accessed by anyone else, change your password immediately, review recent wallet activity, and contact support through the in-app support tab. The platform is not liable for losses arising from credential sharing or from your failure to maintain reasonable account security.
      </p>

      <h2>One account per player</h2>
      <p>
        Each player is permitted exactly one <strong>YaarWin</strong> account. The platform uses mobile number, device fingerprint, KYC information and behavioural signals to detect duplicate accounts. Where duplicates are identified, all linked accounts may be suspended and balances frozen pending review. The one-account rule exists to keep the platform fair for everyone, particularly in tournaments and giftcode programmes where multi-accounting would distort the value distribution.
      </p>

      <h2>Gameplay rules</h2>
      <p>
        All gameplay on <strong>YaarWin</strong> is conducted through the official platform interface. Use of automated tools, scripts, bots or any third-party software intended to interact with the games, place predictions or redeem giftcodes on your behalf is strictly prohibited. Every prediction must be placed manually by a human user. Round outcomes are final once posted, subject only to the dispute resolution process described later in these terms. Attempts to exploit bugs, race conditions or any unintended behaviour in the platform will be treated as breaches of these terms.
      </p>

      <h2>Deposits, wallet and withdrawals</h2>
      <p>
        Funds added to your <strong>YaarWin</strong> wallet are held in segregated systems and used exclusively to fund your gameplay. Withdrawals are processed to your verified UPI or IMPS destination within the timelines published on the platform. The platform may apply standard verification checks, including KYC documentation, before approving larger withdrawals. The platform does not charge hidden fees on deposits or withdrawals; any fees that do apply are disclosed clearly before the transaction is confirmed.
      </p>

      <h2>Giftcode terms</h2>
      <p>
        <strong>YaarWin giftcode</strong> credit is a discretionary platform reward intended to extend the playing experience for genuine players. Each giftcode may carry its own bonus terms which are displayed at the time of redemption — these typically include a small playthrough requirement before the bonus credit becomes withdrawable. Giftcodes are single-use per account, may have expiry windows and claim caps, and may be revoked or adjusted at the platform's discretion if fraudulent activity is detected. Honest, regular players will never encounter friction with giftcode terms.
      </p>

      <h2>Prohibited conduct</h2>
      <p>
        The following behaviours are prohibited on <strong>YaarWin</strong> and may result in account suspension or closure: creating multiple accounts; sharing accounts; using automation; attempting to manipulate game outcomes; engaging in collusion in tournaments; using stolen payment methods; impersonating other players or platform staff; harassing or threatening other players or staff; uploading malicious content; and any activity that violates applicable laws. The platform reserves the right to investigate and act on any suspected breach.
      </p>

      <h2>Suspension, restriction and closure</h2>
      <p>
        <strong>YaarWin</strong> reserves the right to suspend, restrict or close any account that breaches these terms, that fails verification, or that exhibits patterns consistent with fraud, money laundering or abuse. Where an account is closed for a breach of these terms, withdrawable balances may be partially or fully forfeited depending on the nature and severity of the breach, in line with the platform's published enforcement policy. Closure decisions can be appealed through the support tab.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on the <strong>YaarWin</strong> platform — including the design, code, logos, game mechanics, written content, graphics and audio — is owned by or licensed to YaarWin and is protected by applicable intellectual property laws. You may not copy, reproduce, distribute, modify or create derivative works of any platform content without prior written permission, except as expressly permitted by these terms or by applicable law for personal, non-commercial use.
      </p>

      <h2>Disclaimers and limitation of liability</h2>
      <p>
        The <strong>YaarWin</strong> platform is provided on an as-is and as-available basis. While we work hard to keep the platform secure, accurate and continuously available, we do not guarantee uninterrupted operation. To the maximum extent permitted by law, the platform is not liable for indirect, incidental, special or consequential losses arising from your use of the platform. Our aggregate liability for any claim arising from your use of <strong>YaarWin</strong> is limited to the amount currently held as withdrawable balance on your account at the time the claim arises.
      </p>

      <h2>Responsible play</h2>
      <p>
        Real money games carry real responsibility. Set yourself a session budget before you log in. Never play with money you cannot afford to lose. Take regular breaks. If you feel your play is becoming compulsive, request an account cool-down through the support tab — we will action it without question. <strong>YaarWin</strong> is designed to be enjoyable; if it ever stops being enjoyable for you, please step away.
      </p>

      <h2>Dispute resolution</h2>
      <p>
        Most disputes can be resolved quickly through the support tab inside your <strong>YaarWin</strong> account. For matters that cannot be resolved through internal support, the parties agree to seek resolution under the laws of the jurisdiction governing this agreement, with exclusive venue in the relevant courts of that jurisdiction. Both parties agree to attempt good-faith negotiation before escalating any dispute.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time to reflect changes in the platform, in our practices, or in applicable law. Material changes will be communicated through an in-app notification ahead of the effective date. Continued use of <strong>YaarWin</strong> after the effective date constitutes acceptance of the revised terms. The most current version of these terms is always the one published on this page.
      </p>
    </ContentBlock>

    <FAQ items={faqs} />
  </>
);

export default Terms;
