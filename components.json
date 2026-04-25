import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { ContentBlock, KeyPoints } from "@/components/ContentSection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { LogIn, Smartphone, KeyRound, ShieldCheck, RefreshCw, AlertTriangle } from "lucide-react";
import { LINKS } from "@/config/links";

const faqs = [
  { q: "What do I need to log into YaarWin?", a: "Your registered mobile number and password. If two-factor authentication is enabled on your YaarWin account, you will also need the one-time code from SMS or your authenticator app. Keep these credentials private and never share them with anyone, including people claiming to be YaarWin support." },
  { q: "I forgot my YaarWin password — what now?", a: "Tap 'Forgot password' on the YaarWin login screen, enter your registered mobile number, and you will receive an OTP within seconds. Use it to set a new password and you are back inside your account immediately. Your wallet balance and history remain completely untouched by the reset." },
  { q: "Can I log into YaarWin from multiple devices?", a: "Yes, but only one active session is allowed at a time for security reasons. Logging in from a new device will automatically end the session on the previous device. If you ever see an unexpected logout on your phone, change your password immediately because someone else may have accessed your YaarWin account." },
  { q: "Why is my YaarWin login failing?", a: "The most common reasons are a wrong password, an outdated app version, a weak internet connection or a regional access restriction. Try resetting the password, updating the YaarWin app from the official download page, switching to a different network, and attempting again. If the issue persists, contact support from inside the app." },
  { q: "Is the YaarWin login secure?", a: "Yes. Logins are protected by HTTPS encryption, optional two-factor authentication, device fingerprinting and an automated fraud-detection system that flags unusual access attempts. The combination makes unauthorised entry into a YaarWin account extremely difficult even if a password is somehow exposed." },
  { q: "Should I save my YaarWin password in the browser?", a: "Saving the password in a reputable password manager is fine and recommended. Saving it in a basic browser autofill on a shared device is risky. The safest approach is a dedicated password manager with its own master password, which keeps your YaarWin credentials isolated from the rest of your digital life." },
];

const Login = () => (
  <>
    <SEO
      title="YaarWin Login — Secure Access to Your Account"
      description="Access your YaarWin account securely. Step-by-step login guidance, two-factor authentication and a complete troubleshooting reference."
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Login", url: "/yaarwin-login" }]}
      jsonLd={faqJsonLd(faqs)}
    />
    <PageHero
      eyebrow="Account Access"
      title="YaarWin Login"
      description="Sign into your YaarWin account in seconds. This page walks you through the official login flow, explains the security layers protecting your wallet, and gives you a complete troubleshooting playbook."
      breadcrumb={[{ label: "YaarWin Login" }]}
    />

    <section className="section pt-4">
      <div className="container-tight max-w-3xl">
        <div className="card-elev text-center py-12 animate-rise">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elevated ">
            <LogIn className="text-primary-foreground" size={36} />
          </div>
          <h2 className="text-2xl md:text-3xl gradient-text mb-3">Ready to log in?</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">Click below to open the official YaarWin login page on your device.</p>
          <a href={LINKS.login} className="btn-primary">Open YaarWin Login</a>
        </div>
      </div>
    </section>

    <ContentBlock>
      <h2>Everything you need to know about YaarWin login</h2>
      <p>
        The <strong>YaarWin login</strong> page is the gateway to your wallet, your prediction history, your tournament entries and your giftcode redemptions — so it is worth understanding exactly how it works and how to keep it secure. This page explains the entire login experience in plain language, walks through the security layers that protect every <strong>YaarWin</strong> session, and arms you with a troubleshooting checklist for the rare occasion that something goes wrong. By the end you will know how to log in faster, stay safer, and recover access without panic if you ever forget a password.
      </p>

      <h2>Step-by-step YaarWin login</h2>
      <p>
        Open the official <strong>YaarWin</strong> login screen from this page or from inside the app. Enter the mobile number you registered with and the password you set during signup. Tap login. If you have two-factor authentication enabled, a one-time code will be sent to your phone — enter it and you are inside. The whole flow takes around five seconds on a normal connection. Save the page to your home screen for one-tap access on future visits, especially if you play multiple sessions a day.
      </p>

      <h2>Why YaarWin asks for an OTP sometimes</h2>
      <p>
        You may notice that <strong>YaarWin</strong> occasionally asks for a one-time password even when you log in from your usual device. This is the platform's adaptive security responding to a slight change in your access fingerprint — a new IP address, a different network, an unusual time of day. It is not a sign that anything is wrong; it is a sign that the security system is doing its job. Enter the OTP and you continue as normal. If you ever receive an OTP that you did not request, change your password immediately and contact <strong>YaarWin</strong> support from inside the app.
      </p>

      <h2>Two-factor authentication on YaarWin</h2>
      <p>
        Enabling two-factor authentication is the single best thing you can do to protect your <strong>YaarWin</strong> account. With 2FA on, even someone who steals your password cannot log in without also having the one-time code from your phone. Activation takes thirty seconds: open profile, tap security, switch on 2FA, scan the QR with any authenticator app or opt for SMS delivery, confirm with the test code. Done. Future logins now require both your password and a fresh six-digit code, which makes brute-force and credential-stuffing attacks effectively useless.
      </p>

      <h2>Password best practices</h2>
      <p>
        Your <strong>YaarWin</strong> password should be unique, long and not derived from anything publicly knowable about you. A passphrase like four random words separated by symbols beats a clever short password every single time. Never reuse the password across other apps. Store it in a reputable password manager so you do not have to memorise it. Change it immediately if you ever suspect a breach on any other service where you used a similar password.
      </p>

      <h2>Recovering a forgotten YaarWin password</h2>
      <p>
        Forgetting a password happens to everyone. On the <strong>YaarWin login</strong> screen, tap the forgot password link. Enter the mobile number tied to your account. You will receive an OTP within a few seconds — enter it, set a new password, and your account is unlocked. Your wallet balance, prediction history and giftcode credit are completely untouched by the reset. If you no longer have access to the registered mobile number, contact support through the app and provide the verification details that were captured during signup.
      </p>

      <h2>Common YaarWin login problems and fixes</h2>
      <p>
        If your <strong>YaarWin login</strong> is failing, work through this checklist in order. First, double-check that you are using the correct registered mobile number — many users have multiple SIMs and forget which one was used at signup. Second, try the password reset flow; the most common cause of login failure is a slightly mistyped password. Third, update the <strong>YaarWin</strong> app to the latest version from the official download page; outdated builds occasionally fail to authenticate after backend updates. Fourth, switch networks — moving from cellular data to Wi-Fi or vice versa often resolves transient connectivity hiccups. Fifth, if nothing else works, reach out to support from inside the app or through the official help channel.
      </p>

      <h2>Logging in safely on a borrowed device</h2>
      <p>
        Sometimes you may need to log into <strong>YaarWin</strong> on a friend's phone or a public computer. If you do, follow three rules. Never tick the remember me box. Never let the browser save your password. And always log out manually before you walk away, then change your password from your own device when you get home. These three habits eliminate almost every realistic risk of session hijacking on borrowed hardware.
      </p>

      <h2>What to do if your YaarWin account is compromised</h2>
      <p>
        If you suspect someone else has accessed your <strong>YaarWin</strong> account, act immediately. Change your password from a trusted device. Enable 2FA if it was not already on. Review your wallet history for any unauthorised activity. Withdraw the remaining balance to your verified bank account. Then file a support ticket through the app describing the incident in detail. The faster you respond, the higher the chance of preserving your funds and access.
      </p>

      <h2>Login speed tips for daily players</h2>
      <p>
        Daily players can shave seconds off every <strong>YaarWin login</strong> by saving the login URL to their home screen, enabling biometric unlock in the app settings, and using a password manager that auto-fills credentials. These small optimisations add up across hundreds of sessions and keep the friction near zero so you never miss a tournament window.
      </p>
    </ContentBlock>

    <KeyPoints
      items={[
        { icon: <Smartphone size={18} />, title: "Mobile-first login", text: "Designed for one-handed sign-in. Your YaarWin credentials get you in within five seconds on a normal connection." },
        { icon: <KeyRound size={18} />, title: "Strong password rule", text: "Use a long unique passphrase stored in a password manager. Never reuse a password across YaarWin and other apps." },
        { icon: <ShieldCheck size={18} />, title: "Two-factor authentication", text: "Activate 2FA from your YaarWin profile in thirty seconds. It blocks credential-stuffing attacks completely." },
        { icon: <RefreshCw size={18} />, title: "Easy password reset", text: "Forgot your password? OTP-based reset gets you back into your YaarWin account in under a minute." },
        { icon: <AlertTriangle size={18} />, title: "Spot suspicious access", text: "Unexpected OTPs or auto-logouts are red flags. Change your password and contact YaarWin support immediately." },
        { icon: <LogIn size={18} />, title: "Single-session security", text: "Only one active YaarWin session is allowed at a time, automatically protecting against silent shadow logins." },
      ]}
    />

    <FAQ items={faqs} />
  </>
);

export default Login;
