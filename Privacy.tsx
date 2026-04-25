import { SEO, articleJsonLd } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { ContentBlock } from "@/components/ContentSection";
import { FAQ, faqJsonLd } from "@/components/FAQ";

const faqs = [
  { q: "Is the information on YaarWin a guarantee of outcomes?", a: "No. Information published on YaarWin is provided for reference and educational purposes. The platform makes no guarantee of specific outcomes, financial results or performance. Users are responsible for their own decisions and for ensuring their participation complies with applicable local law." },
  { q: "Is YaarWin affiliated with the platforms it discusses?", a: "Editorial content is produced independently. Where commercial relationships exist with any third party, this is disclosed clearly within the relevant material. Editorial standards are not influenced by any commercial relationship." },
  { q: "Who can use the YaarWin platform?", a: "YaarWin is intended for adults of legal age in jurisdictions where access is permitted by local law. By using the platform you confirm you meet those requirements and accept responsibility for your participation." },
  { q: "Does YaarWin offer financial or legal advice?", a: "No. Nothing on this website constitutes financial, legal, tax or professional advice. For decisions with material consequences, please consult an appropriately qualified professional in your jurisdiction." },
  { q: "How are external links handled?", a: "External links are provided where they add genuine value to the reader. YaarWin is not responsible for the content, accuracy or practices of any external website. Users should review the privacy and terms policies of any third-party site they choose to visit." },
  { q: "Where can I report concerns about platform content?", a: "Use the contact page to reach the editorial team. Concerns about specific content are reviewed by an editor responsible for that section, with the outcome communicated back to you in writing." },
];

const Disclaimer = () => (
  <>
    <SEO
      title="Disclaimer — YaarWin Editorial & Platform Notice"
      description="The official YaarWin disclaimer covering editorial intent, third-party links, responsibility of users and the limits of information published on this website."
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Disclaimer", url: "/disclaimer" }]}
      jsonLd={[
        articleJsonLd({ headline: "YaarWin Disclaimer", description: "Editorial and platform disclaimer for YaarWin.", url: "/disclaimer" }),
        faqJsonLd(faqs),
      ]}
    />
    <PageHero
      eyebrow="Legal"
      title="Disclaimer"
      description="A clear, plain-language statement of how the information on YaarWin is intended, the limits of that information and the responsibilities of every user."
      breadcrumb={[{ label: "Disclaimer" }]}
    />

    <ContentBlock>
      <h2>General notice</h2>
      <p>
        The information published on YaarWin is provided in good faith for general reference, educational and informational purposes only. While the editorial team takes reasonable care to ensure accuracy at the time of publication, no representation or warranty — express or implied — is made about the completeness, accuracy, reliability or suitability of any information for a specific purpose. Any reliance you place on such information is strictly at your own risk.
      </p>

      <h2>No guarantee of outcomes</h2>
      <p>
        Nothing on this website should be interpreted as a guarantee of any specific result, return, gain or financial outcome. Where outcomes, performance or trends are discussed, they are presented for context only. Past patterns, statistics or examples are not indicative of future results, and individual outcomes will vary based on circumstances entirely outside the control of YaarWin.
      </p>

      <h2>Eligibility and lawful use</h2>
      <p>
        Access to and use of YaarWin is intended for adults of legal age in jurisdictions where such access is permitted by local law. It is your responsibility to determine whether participation is lawful in your location. By using the website you confirm that you meet the applicable eligibility requirements and that you accept full responsibility for your decisions and conduct.
      </p>

      <h2>Not professional advice</h2>
      <p>
        Information on YaarWin does not constitute financial, legal, tax, medical or other professional advice. For decisions that carry material personal, financial or legal consequences, please consult an appropriately qualified professional in your jurisdiction. The editorial team writes for a general audience and cannot account for individual circumstances.
      </p>

      <h2>Editorial independence and disclosures</h2>
      <p>
        Editorial content on YaarWin is produced independently of any commercial relationship. Where a commercial relationship exists with any third party referenced in editorial material, that relationship is disclosed clearly within the relevant material. The editorial process is governed by published standards designed to keep commercial relationships from influencing the substance or tone of published work.
      </p>

      <h2>Third-party links and content</h2>
      <p>
        Pages on YaarWin may contain links to external websites and references to third-party platforms, tools or services. These links and references are provided as a convenience and do not constitute endorsement. YaarWin has no control over the content, privacy practices or terms of any third-party website and accepts no responsibility for them. Users are responsible for reviewing the policies of any external site they choose to visit.
      </p>

      <h2>Responsible use</h2>
      <p>
        We encourage every reader to engage with the platform responsibly. Set personal limits before participating in any activity that involves time or financial commitment. Take regular breaks. If your participation begins to feel compulsive or stops being enjoyable, step away and reach out to a qualified support service in your region. Responsible use is the foundation of a healthy long-term relationship with any digital platform.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by applicable law, YaarWin, its operators and its editorial team disclaim all liability for any direct, indirect, incidental, consequential or special loss or damage arising from the use of, or reliance on, information or services available through this website. Where liability cannot be excluded by law, it is limited to the maximum extent permitted under that law.
      </p>

      <h2>Changes to this disclaimer</h2>
      <p>
        This disclaimer may be updated from time to time to reflect changes in the website, our practices or applicable law. Material changes will be communicated through the site, and the most current version of this disclaimer is always the version published on this page. Continued use of the website after a change has been published constitutes acceptance of the revised disclaimer.
      </p>

      <h2>Contacting us</h2>
      <p>
        If you have any questions about this disclaimer or any specific item of content, please reach the YaarWin editorial team through the contact page. Concerns are reviewed by the editor responsible for the relevant section and answered in writing.
      </p>
    </ContentBlock>

    <FAQ items={faqs} />
  </>
);

export default Disclaimer;
