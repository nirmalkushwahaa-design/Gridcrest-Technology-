import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    heading: "1. Acceptance of terms",
    body: (
      <p>
        By accessing or using the GridCrest website ("Site"), you agree to be bound by these
        Terms of Use ("Terms"). If you do not agree, please do not use the Site. These Terms form
        a binding agreement between you and GridCrest.
      </p>
    ),
  },
  {
    id: "use",
    heading: "2. Use of the site",
    body: (
      <>
        <p>You may use the Site only for lawful purposes and in accordance with these Terms.</p>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site in any way that violates applicable law or regulation.</li>
          <li>
            Attempt to gain unauthorized access to any portion of the Site, related systems or
            networks.
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of the Site or the data it
            contains.
          </li>
          <li>
            Use any automated means (bots, scrapers) to access the Site without our prior written
            consent.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    heading: "3. Intellectual property",
    body: (
      <p>
        All content on the Site — including text, graphics, logos, icons, images, software and
        the GridCrest name and marks — is owned by GridCrest or its licensors and is protected
        by intellectual property laws. You may not reproduce, distribute, modify or create
        derivative works without our prior written permission, except as expressly permitted by
        these Terms.
      </p>
    ),
  },
  {
    id: "user-content",
    heading: "4. User submissions",
    body: (
      <p>
        Any information you submit through forms or correspondence ("User Submissions") is
        treated in accordance with our{" "}
        <a href="/privacy">Privacy Policy</a>. By submitting, you represent that the information
        is accurate and that you have the right to share it. You grant GridCrest a non-exclusive
        license to use User Submissions for the purposes of responding to you and operating our
        services.
      </p>
    ),
  },
  {
    id: "prohibited",
    heading: "5. Prohibited use",
    body: (
      <p>
        You may not use the Site to transmit any material that is unlawful, defamatory,
        infringing, malicious, or that contains viruses or other harmful code. You may not
        misrepresent your identity or affiliation with any person or organization.
      </p>
    ),
  },
  {
    id: "disclaimer",
    heading: "6. Disclaimers",
    body: (
      <p>
        THE SITE AND ITS CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT
        WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. GRIDCREST DOES NOT WARRANT THAT
        THE SITE WILL BE UNINTERRUPTED, ERROR-FREE OR SECURE.
      </p>
    ),
  },
  {
    id: "liability",
    heading: "7. Limitation of liability",
    body: (
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, GRIDCREST AND ITS AFFILIATES SHALL NOT BE LIABLE
        FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF
        PROFITS, REVENUES, DATA OR GOODWILL, ARISING FROM YOUR USE OF, OR INABILITY TO USE, THE
        SITE.
      </p>
    ),
  },
  {
    id: "indemnification",
    heading: "8. Indemnification",
    body: (
      <p>
        You agree to indemnify and hold harmless GridCrest, its affiliates, officers, employees
        and agents from any claims, liabilities, damages, losses and expenses (including
        reasonable legal fees) arising from your use of the Site or breach of these Terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    heading: "9. Governing law",
    body: (
      <p>
        These Terms are governed by the laws of India, without regard to its conflict-of-law
        principles. Any dispute arising out of or relating to these Terms or the Site shall be
        subject to the exclusive jurisdiction of the courts located in Bengaluru, India.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "10. Changes to these terms",
    body: (
      <p>
        We may modify these Terms at any time. Updates take effect when posted to this page. We
        will update the "Last updated" date above. Your continued use of the Site after changes
        are posted constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "11. Contact",
    body: (
      <p>
        Questions about these Terms? Email{" "}
        <a href="mailto:legal@gridcrest.com">legal@gridcrest.com</a>.
      </p>
    ),
  },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — GridCrest" },
      {
        name: "description",
        content:
          "The terms that govern your use of the GridCrest website and services.",
      },
      { property: "og:title", content: "Terms of Use — GridCrest" },
      {
        property: "og:description",
        content: "The terms that govern your use of the GridCrest website.",
      },
      { property: "og:url", content: "https://gridcrest-canvas-craft.lovable.app/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://gridcrest-canvas-craft.lovable.app/terms" },
    ],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      lastUpdated="May 25, 2026"
      intro="These Terms govern your access to and use of the GridCrest website. Please read them carefully."
      sections={SECTIONS}
    />
  ),
});
