import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { ContentBlock, KeyPoints } from "@/components/ContentSection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { Download as DownloadIcon, Smartphone, Cpu, ShieldCheck, Zap, RefreshCw } from "lucide-react";
import { LINKS } from "@/config/links";

const faqs = [
  { q: "Is the YaarWin app safe to install?", a: "Yes. The official YaarWin download is digitally signed, scanned for malware on every release, and distributed only through the official link on this page. Avoid any third-party mirror — they are the most common source of tampered builds, and installing them puts your account and device at risk." },
  { q: "What devices does YaarWin support?", a: "YaarWin runs on Android 6.0 and above, with iOS support via the optimised mobile web experience. The Android APK is around 30 MB, lightweight enough to install on entry-level devices, and runs smoothly on phones with as little as 2 GB of RAM." },
  { q: "Why download the YaarWin app instead of using the website?", a: "The app is faster, supports push notifications for round results and giftcode drops, and unlocks app-only giftcodes that are not posted on the website. If you play more than once a week, the YaarWin download will pay for itself in convenience and exclusive bonuses within days." },
  { q: "How do I update the YaarWin app?", a: "The app checks for updates automatically each time you launch it. If a new version is available, a small banner appears at the top of the dashboard inviting you to update. Tap it, the new version downloads in the background, and you continue playing without interruption." },
  { q: "Will my account work the same on app and web?", a: "Yes. Your YaarWin account, wallet, history, giftcodes and tournament entries are completely synced across the app and the website. Log in on either, and everything is exactly where you left it. Some players keep the website open on a laptop and the app on their phone simultaneously." },
  { q: "What if the YaarWin download fails?", a: "Check that you have at least 100 MB of free storage, a stable internet connection, and that installation from unknown sources is enabled in Android settings. If the download still fails, switch networks and retry. Official support can also help if you describe the error message you see." },
];

const Download = () => (
  <>
    <SEO
      title="YaarWin Download — Official Mobile App for Android"
      description="Install the official YaarWin mobile app. System requirements, security notes and a documented setup process from the YaarWin Editorial Team."
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Download", url: "/yaarwin-download" }]}
      jsonLd={faqJsonLd(faqs)}
    />
    <PageHero
      eyebrow="Mobile App"
      title="YaarWin Download"
      description="Get the official YaarWin Android app. Lightweight install, encrypted, and packed with app-only giftcodes you will not find anywhere else."
      breadcrumb={[{ label: "YaarWin Download" }]}
    />

    <section className="section pt-4">
      <div className="container-tight max-w-3xl">
        <div className="card-elev text-center py-12 animate-rise relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
          <div className="relative">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elevated animate-float-slow">
              <DownloadIcon className="text-primary-foreground" size={36} />
            </div>
            <h2 className="text-2xl md:text-3xl gradient-text mb-3">YaarWin app · v latest</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-2">~30 MB · Android 6.0+ · Digitally signed</p>
            <p className="text-xs text-muted-foreground mb-6">Updated regularly with security patches and new giftcodes.</p>
            <a href={LINKS.download} className="btn-primary">Download YaarWin APK</a>
          </div>
        </div>
      </div>
    </section>

    <ContentBlock>
      <h2>Why YaarWin built a dedicated mobile app</h2>
      <p>
        Colour prediction is a tap-driven, time-sensitive game. Even half a second of delay between deciding and confirming a prediction can cost you the round. The official <strong>YaarWin download</strong> exists because the web experience, while excellent, simply cannot match the responsiveness and instant access of a native Android app. With the app installed, your <strong>YaarWin</strong> account is one tap away from the home screen, your prediction history loads instantly, and push notifications make sure you never miss a round close or a fresh giftcode drop. For anyone playing more than a couple of times a week, downloading the app is the single biggest experience upgrade available.
      </p>

      <h2>What's inside the YaarWin app</h2>
      <p>
        The <strong>YaarWin</strong> app ships with the full game library — Win Go, 5D Lottery, K3 Lotre and Trx Hash — plus several conveniences that the website cannot offer. There is offline result history caching so you can review past rounds without a connection. There is biometric login support so you can unlock the app with your fingerprint instead of typing your password every time. There is in-app push delivery for giftcodes, tournament announcements and personal wallet alerts. And there is a small library of app-exclusive giftcodes that simply do not appear anywhere on the website.
      </p>

      <h2>Installing the YaarWin APK on Android</h2>
      <p>
        Installation is straightforward but requires one extra step compared to a Play Store install. Tap the download button above to grab the APK file. Once it finishes downloading, tap the file to open the installer. Android may ask you to allow installation from unknown sources — this is a standard prompt for any sideloaded app and is required because <strong>YaarWin</strong> is distributed directly rather than through Google Play. Approve the prompt, the installer runs in a few seconds, and the <strong>YaarWin</strong> icon appears on your home screen ready to launch.
      </p>

      <h2>Security of the YaarWin download</h2>
      <p>
        Every release of the <strong>YaarWin</strong> APK is signed with a unique developer certificate that Android automatically verifies during install. The build is scanned for malware before publishing, and the certificate fingerprint is locked across releases so future updates can only be installed if they originate from the same authentic source. The result is that a tampered or counterfeit build cannot silently replace the genuine app on your device. Always download from the official link on this page — third-party mirrors are the only realistic vector for malicious copies, and they are easy to avoid.
      </p>

      <h2>System requirements and performance</h2>
      <p>
        The <strong>YaarWin</strong> app is engineered to run smoothly on entry-level Android devices. The minimum requirement is Android 6.0 with 2 GB of RAM, but the app shines on anything from Android 8 with 3 GB upward. Install size is around 30 MB, and the runtime memory footprint is intentionally small so you can keep the app open in the background without affecting battery life. Frame rates stay smooth even during peak round closes when the result animation kicks in.
      </p>

      <h2>iOS users — the optimised web experience</h2>
      <p>
        While the dedicated app is currently Android-only, iOS users get a fully optimised web experience that mirrors most of the native app's responsiveness. Open <strong>YaarWin</strong> in Safari, tap share, and add to home screen — the bookmarked icon launches like an app and runs in fullscreen mode without browser chrome. Login persistence, push notifications via web push, and offline caching all work out of the box. For iOS-based players this is the closest thing to a native app and it is genuinely excellent.
      </p>

      <h2>Updating the YaarWin app</h2>
      <p>
        The app checks for updates automatically each time you launch it. When a new version is available, a banner appears at the top of the dashboard offering to update in the background. Updates typically deliver security patches, new giftcode integrations and small performance improvements. Always update promptly — the update window is also when fresh exclusive in-app giftcodes ship, so postponing updates means missing free credit. Updates preserve your login and wallet completely.
      </p>

      <h2>Troubleshooting the YaarWin download</h2>
      <p>
        If the <strong>YaarWin download</strong> fails, the issue is almost always one of three things. First, check storage — you need at least 100 MB free. Second, confirm your network is stable; switching between Wi-Fi and cellular data often resolves stuck downloads. Third, ensure the unknown-sources permission is granted to your browser. If all three are fine and the download still fails, clear your browser cache and retry, or try a different browser entirely. Official support can also assist if you describe the exact error you see.
      </p>

      <h2>Backing up your YaarWin account</h2>
      <p>
        Your <strong>YaarWin</strong> account is tied to your mobile number, not to the device you installed the app on. This means you can uninstall, switch phones or factory reset without losing anything — your wallet, history and giftcodes are all server-side. Just install the app fresh on the new device, log in with your existing credentials, and everything is back exactly as it was. The same applies if you switch between app and web; it is one account, perfectly synchronised.
      </p>

      <h2>App-exclusive perks worth knowing about</h2>
      <p>
        Several perks on the <strong>YaarWin</strong> platform live exclusively inside the app: app-only giftcodes that never appear on the website, faster live tournament alerts, biometric quick-login, and richer result history visualisations. None of these are deal-breakers on their own, but together they make the app feel meaningfully more rewarding for any player who logs in regularly. If you are still on the fence, install once and run a week of comparison sessions — most players never go back to web-only after that.
      </p>
    </ContentBlock>

    <KeyPoints
      items={[
        { icon: <Smartphone size={18} />, title: "Lightweight install", text: "30 MB APK, runs on Android 6.0+ with as little as 2 GB RAM. The YaarWin app is built for every device." },
        { icon: <ShieldCheck size={18} />, title: "Signed & scanned", text: "Every YaarWin download is digitally signed and malware-scanned before release." },
        { icon: <Zap size={18} />, title: "Faster than web", text: "Native taps, instant history, push round alerts. The app shaves real milliseconds off every round." },
        { icon: <Cpu size={18} />, title: "Battery friendly", text: "Small runtime footprint means YaarWin runs in background without draining your phone." },
        { icon: <RefreshCw size={18} />, title: "Auto updates", text: "Update banners appear inside the app the moment a new YaarWin version drops." },
        { icon: <DownloadIcon size={18} />, title: "App-only giftcodes", text: "Several exclusive YaarWin free giftcodes are only ever posted inside the mobile app." },
      ]}
    />

    <FAQ items={faqs} />
  </>
);

export default Download;
