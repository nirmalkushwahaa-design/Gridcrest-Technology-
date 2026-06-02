import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

const SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    heading: "1. Introduction",
    body: (
      <>
        <p>
          GridCrest ("we", "us", "our") respects your privacy. This Privacy Policy explains what
          information we collect when you visit our website or interact with our services, how we
          use it, and the choices you have. It applies to gridcrest.com and any subdomains
          operated by GridCrest.
        </p>
        <p>
          By using our website, you agree to the practices described here. If you do not agree,
          please discontinue use.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "2. Information we collect",
    body: (
      <>
        <p>We collect information in the following categories:</p>
        <ul>
          <li>
            <strong>Information you provide directly:</strong> name, work email, company,
            country, role and any message content when you submit a contact, demo or partnership
            form.
          </li>
          <li>
            <strong>Usage information:</strong> pages viewed, links clicked, referring URL,
            device type, browser, language, approximate location derived from IP address.
          </li>
          <li>
            <strong>Cookies and similar technologies:</strong> small data files used to operate
            the site, remember preferences and measure engagement.
          </li>
        </ul>
        <p>
          We do not knowingly collect special-category personal data (health, biometric,
          financial account, government ID) through this website.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "3. How we use your information",
    body: (
      <>
        <p>We use collected information to:</p>
        <ul>
          <li>Respond to inquiries, demo requests and partnership questions.</li>
          <li>Operate, secure and improve the website and our services.</li>
          <li>
            Send transactional communications (e.g. acknowledging a form submission) and, where
            you have opted in, occasional newsletters about products and insights.
          </li>
          <li>Comply with legal obligations and enforce our terms.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    heading: "4. Sharing &amp; disclosure",
    body: (
      <>
        <p>We do not sell your personal information. We share it only with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us operate the site (hosting, analytics,
            email delivery, CRM), under contractual confidentiality and data-protection
            obligations.
          </li>
          <li>
            <strong>Group companies and affiliates</strong> within the Kaynes Technology Group
            where necessary to respond to your inquiry.
          </li>
          <li>
            <strong>Authorities</strong> when required by applicable law, court order or to
            protect rights and safety.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "5. Cookies",
    body: (
      <>
        <p>
          We use strictly necessary cookies to operate the site, and optional analytics cookies
          to understand usage. You can control cookies through your browser settings and, where
          available, through our on-site preferences banner.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    heading: "6. Data retention",
    body: (
      <p>
        We retain personal information only as long as needed for the purposes described above,
        or as required by law. Inquiry data is typically retained for up to 36 months after our
        last interaction, unless a longer retention period is justified.
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "7. Your rights",
    body: (
      <>
        <p>
          Depending on where you live, you may have rights to access, correct, delete, export or
          restrict the processing of your personal information, and to object to certain
          processing. Residents of India have rights under the Digital Personal Data Protection
          Act, 2023. Residents of the EEA/UK have rights under the GDPR.
        </p>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:privacy@gridcrest.com">privacy@gridcrest.com</a>. We will respond within
          the timeframes required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "security",
    heading: "8. Security",
    body: (
      <p>
        We apply administrative, technical and physical safeguards designed to protect personal
        information against loss, misuse and unauthorized access. No system is perfectly secure;
        we encourage you to use strong, unique passwords and keep your devices up to date.
      </p>
    ),
  },
  {
    id: "children",
    heading: "9. Children's privacy",
    body: (
      <p>
        Our website is directed at business users and is not intended for children under 18. We
        do not knowingly collect personal information from children.
      </p>
    ),
  },
  {
    id: "transfers",
    heading: "10. International transfers",
    body: (
      <p>
        We are headquartered in India and may process personal information in countries other
        than your own. Where required, we use appropriate safeguards (such as standard
        contractual clauses) to protect your information when it crosses borders.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "11. Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Material changes will be notified by
        updating the "Last updated" date above and, where appropriate, through a notice on the
        site.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "12. Contact us",
    body: (
      <p>
        Questions or requests? Email{" "}
        <a href="mailto:privacy@gridcrest.com">privacy@gridcrest.com</a> or write to GridCrest,
        Data Protection Office, Bengaluru, India.
      </p>
    ),
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — GridCrest" },
      {
        name: "description",
        content:
          "How GridCrest collects, uses and protects personal information through its website and services.",
      },
      { property: "og:title", content: "Privacy Policy — GridCrest" },
      {
        property: "og:description",
        content: "How GridCrest collects, uses and protects personal information.",
      },
      { property: "og:url", content: "https://gridcrest-canvas-craft.lovable.app/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://gridcrest-canvas-craft.lovable.app/privacy" },
    ],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="May 25, 2026"
      intro="This Privacy Policy explains what information GridCrest collects, how we use it, and the choices you have when interacting with our website and services."
      sections={SECTIONS}
    />
  ),
});
