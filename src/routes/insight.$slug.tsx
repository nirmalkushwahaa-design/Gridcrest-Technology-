import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";

type Tag = "News" | "Blog" | "Highlights";

type InsightDetail = {
  slug: string;
  date: string;
  author: string;
  tag: Tag;
  title: string;
  description: string;
  image: string;
  readTime: string;
  body: { type: "p" | "h2" | "h3" | "ul" | "quote"; content: string | string[] }[];
};

const TAG_COLORS: Record<Tag, string> = {
  News: "bg-blue-50 text-blue-700 border border-blue-200",
  Blog: "bg-violet-50 text-violet-700 border border-violet-200",
  Highlights: "bg-amber-50 text-amber-700 border border-amber-200",
};

const ARTICLES: InsightDetail[] = [
  {
    slug: "gridcrest-expands-hes-platform",
    date: "20 May 2026",
    author: "GridCrest Team",
    tag: "News",
    title: "GridCrest expands HES platform to support 25 million endpoints",
    description:
      "New horizontally scalable architecture brings sub-second telemetry to one of the largest smart metering deployments in South Asia.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop",
    readTime: "4 min read",
    body: [
      {
        type: "p",
        content:
          "GridCrest today announced a major expansion of its Head-End System (HES) platform, enabling it to manage 25 million metering endpoints simultaneously — a fourfold increase over the previous generation and among the largest such deployments in South Asia.",
      },
      {
        type: "h2",
        content: "A new distributed architecture",
      },
      {
        type: "p",
        content:
          "The redesigned platform is built on a horizontally scalable, microservices-based architecture that distributes workloads across dynamic node clusters. Each node handles independent meter communication sessions, with a central coordinator managing orchestration and fault tolerance. This eliminates the single-point bottlenecks that constrained earlier AMI head-end designs.",
      },
      {
        type: "p",
        content:
          "Real-time telemetry latency has been reduced to under 800 milliseconds for demand-response events, allowing utility operators to react to grid conditions in near real-time. During internal load tests simulating the full 25 million endpoint deployment, the system sustained 98.7% uptime with no degradation in push-notification delivery.",
      },
      {
        type: "h2",
        content: "What this means for utilities",
      },
      {
        type: "ul",
        content: [
          "Single-platform management of entire state-level AMI rollouts without regional partitioning",
          "Dynamic auto-scaling during peak load windows — billing cycles, tariff changeovers — with no manual intervention",
          "DLMS/COSEM and IS 15959 protocol support for both single-phase and three-phase meters",
          "Integrated firmware-over-the-air (FOTA) for mass update campaigns across millions of endpoints",
          "Open API gateway compatible with MDMS platforms from multiple vendors",
        ],
      },
      {
        type: "quote",
        content:
          "Reaching 25 million endpoints on a single platform isn't just a capacity milestone — it changes how utilities plan and operate. State-level operators can now think in terms of one integrated system rather than a patchwork of regional deployments.",
      },
      {
        type: "h2",
        content: "Rollout timeline",
      },
      {
        type: "p",
        content:
          "The expanded platform will be available to existing GridCrest HES customers from Q3 2026 as a zero-downtime migration. New deployments commencing after June 2026 will be provisioned directly on the new architecture. GridCrest engineering teams will provide dedicated migration support for DISCOMs with active rollouts.",
      },
      {
        type: "p",
        content:
          "This announcement follows the successful completion of a six-month pilot conducted with two large utility partners, during which the system managed 3.2 million live endpoints under real operating conditions including monsoon-season communication degradation and rolling tariff revision campaigns.",
      },
    ],
  },
  {
    slug: "kaynes-manufacturing-partnership",
    date: "08 May 2026",
    author: "GridCrest Team",
    tag: "News",
    title: "Deepened partnership with Kaynes adds two new manufacturing lines",
    description:
      "Additional capacity dedicated to smart meter and communication-module assembly comes online in Q3 2026, enabling GridCrest to scale to 5 lakh units per month.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop",
    readTime: "3 min read",
    body: [
      {
        type: "p",
        content:
          "GridCrest and Kaynes Technology have deepened their manufacturing partnership with the commissioning of two new dedicated production lines at Kaynes' Mysuru facility. The expanded capacity will bring GridCrest's smart meter output to 5 lakh units per month from Q3 2026, addressing the surge in RDSS-driven demand across India.",
      },
      {
        type: "h2",
        content: "What's coming online",
      },
      {
        type: "ul",
        content: [
          "Line 7: Dedicated to three-phase whole-current smart meters with integrated RF communication modules",
          "Line 8: Focused on communication module sub-assembly, supporting both RF and PLC variants",
          "Shared automated optical inspection (AOI) cell covering both new lines",
          "On-site GridCrest quality team embedded in the production process",
        ],
      },
      {
        type: "p",
        content:
          "Both lines have been designed to support rapid product changeovers, allowing Kaynes and GridCrest to shift between meter variants within a single shift window — a critical capability given the diversity of specifications across state utility tenders.",
      },
      {
        type: "h2",
        content: "Strengthening supply chain resilience",
      },
      {
        type: "p",
        content:
          "In addition to raw throughput, the partnership expansion includes strategic buffer inventory arrangements for key components — including metering ICs and RF chipsets — covering a 12-week forward window. This directly addresses the supply volatility that constrained AMI rollouts across India during 2024–2025.",
      },
      {
        type: "quote",
        content:
          "This isn't just a capacity expansion — it's a step-change in how GridCrest approaches supply security. The embedded quality team and component buffering means we can make firm commitments to utility customers on delivery timelines for the first time.",
      },
    ],
  },
  {
    slug: "smart-program-go-live",
    date: "22 Apr 2026",
    author: "GridCrest Team",
    tag: "Highlights",
    title: "Statewide smart-metering program goes live ahead of schedule",
    description:
      "Joint utility-government initiative reaches 1.2 million live endpoints, with MDM integration validated end-to-end. The rollout completes 3 weeks ahead of the contractual deadline.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop",
    readTime: "4 min read",
    body: [
      {
        type: "p",
        content:
          "A joint smart-metering initiative between a state DISCOM and the state government has reached its 1.2 million endpoint target, going live three weeks ahead of the contractual deadline. The GridCrest HES and MDM stack served as the core platform, integrating with the utility's existing billing system and the state government's demand-response programme.",
      },
      {
        type: "h2",
        content: "Scale and scope",
      },
      {
        type: "ul",
        content: [
          "1.2 million smart meters installed across residential, commercial and agricultural consumers",
          "End-to-end MDM integration with the utility's legacy billing platform completed in under 90 days",
          "Real-time tamper alerts active across 100% of live endpoints from day one",
          "AT&C loss dashboard live in the control room on go-live day",
          "Field workforce of 3,200 engineers and supervisors trained on the platform",
        ],
      },
      {
        type: "h2",
        content: "Three weeks early: what made the difference",
      },
      {
        type: "p",
        content:
          "The programme's ahead-of-schedule completion was driven by three factors: pre-staging of meter configuration before installation (allowing same-day commissioning from site), a unified command-and-control dashboard used by both GridCrest and utility teams to track daily installation targets, and the use of GridCrest's bulk provisioning API to onboard batches of meters during transit.",
      },
      {
        type: "quote",
        content:
          "Delivering a programme of this scale three weeks early, with zero billing disruption, required genuine trust between our team and the utility. The shared dashboard and daily cadence removed the usual information gaps that cause delays on large programmes.",
      },
      {
        type: "h2",
        content: "Early outcomes",
      },
      {
        type: "p",
        content:
          "Within the first 30 days of go-live, the utility reported a 4.2% reduction in AT&C losses in pilot circles — ahead of the 3% first-year target. Tamper detection flagged anomalies in 18,400 meters in the first week alone, initiating fieldwork that identified both meter faults and energy theft cases.",
      },
    ],
  },
  {
    slug: "ai-grid-orchestration",
    date: "12 Apr 2026",
    author: "Anantya Intelligence Team",
    tag: "Blog",
    title: "From Smart Meters to AI-Orchestrated Grids: The Next Decade",
    description:
      "How machine learning, digital twins and real-time telemetry are quietly reshaping the way utilities run distribution networks — and what operators need to do now to stay ahead of the curve.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop",
    readTime: "9 min read",
    body: [
      {
        type: "p",
        content:
          "When India's RDSS programme mandated smart metering at scale, most of the discussion was about the meters themselves — the hardware, the communication protocols, the installation logistics. Five years on, the meters are almost incidental. What matters now is what you do with the 15-minute interval data flowing in from 300 million endpoints. The answer, increasingly, is machine learning.",
      },
      {
        type: "h2",
        content: "The data revolution hiding in plain sight",
      },
      {
        type: "p",
        content:
          "A single smart meter generates roughly 35,000 data points per year. Multiply that by 100 million deployed meters and you have a dataset that dwarfs most enterprise analytics environments. For most utilities today, 95% of that data is never analysed. It sits in MDM storage, accessed only when a billing dispute requires manual investigation.",
      },
      {
        type: "p",
        content:
          "The utilities that will lead distribution modernisation over the next decade are those building the analytical muscle now — starting with the low-hanging fruit of AT&C loss detection and working toward the genuinely hard problems of distributed resource orchestration.",
      },
      {
        type: "h2",
        content: "Three AI use cases with proven ROI today",
      },
      {
        type: "ul",
        content: [
          "Anomaly detection for tamper and meter health: pattern-based models trained on interval data outperform rule-based tamper alerts by 3–5× in recall, with dramatically lower false-positive rates",
          "Outage prediction from voltage sag patterns: models trained on historical outage data and real-time voltage profiles can flag feeder segments likely to fail 2–4 hours in advance",
          "Non-technical loss attribution: clustering algorithms segment consumers by load profile and flag statistical outliers that correlate with theft — far more actionable than aggregate AT&C figures",
        ],
      },
      {
        type: "h2",
        content: "Digital twins: the long game",
      },
      {
        type: "p",
        content:
          "Digital twins of distribution networks are moving from pilot novelty to operational necessity. A properly constructed twin — fed with live meter telemetry, GIS network data and weather inputs — lets operators simulate the impact of switching operations, load transfers and DER integration before committing to action in the field.",
      },
      {
        type: "quote",
        content:
          "The digital twin doesn't replace the operator's judgement. It compresses the time it takes to build confidence in a decision from hours to seconds. That's what changes grid operations.",
      },
      {
        type: "h2",
        content: "What utilities should do now",
      },
      {
        type: "ul",
        content: [
          "Audit your MDM data quality — AI models are only as good as the data they train on; start with data integrity",
          "Build or partner for analytical capability before the data volume overwhelms your team",
          "Start with explainable models — tamper detection and outage prediction are well-suited to interpretable approaches that field teams can trust",
          "Invest in the API layer connecting your MDM to analytics workloads — this is the unsexy but critical piece",
          "Think about model governance from the start — who owns the model, who audits it, how do you handle false positives that lead to field action",
        ],
      },
      {
        type: "p",
        content:
          "The next decade in Indian electricity distribution will be defined by data intelligence, not just infrastructure. The utilities building that capability today — however modestly — will operate networks that are materially safer, more efficient, and better understood than those relying solely on traditional operational practice.",
      },
    ],
  },
  {
    slug: "iso-27001-recertification",
    date: "03 Apr 2026",
    author: "GridCrest Team",
    tag: "News",
    title: "GridCrest cloud platform receives ISO 27001:2022 recertification",
    description:
      "Renewed certification covers HES, MDM and analytics workloads operated for utility customers, reinforcing GridCrest's commitment to data security and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&auto=format&fit=crop",
    readTime: "3 min read",
    body: [
      {
        type: "p",
        content:
          "GridCrest has successfully completed its ISO 27001:2022 recertification audit, with the renewed certification covering the full scope of cloud-hosted services operated for utility customers — including the HES platform, MDM workloads, and the Anantya analytics layer.",
      },
      {
        type: "h2",
        content: "Scope of certification",
      },
      {
        type: "ul",
        content: [
          "Head-End System (HES) platform and all meter communication infrastructure",
          "Meter Data Management (MDM) system including data ingestion, storage and API services",
          "Anantya analytics workloads and dashboards",
          "Identity and access management systems",
          "Incident response and business continuity processes",
        ],
      },
      {
        type: "p",
        content:
          "The 2022 revision of ISO 27001 introduced 11 new controls covering areas including threat intelligence, cloud security configuration, and information deletion — all of which were assessed during the recertification audit conducted by an accredited third-party certification body.",
      },
      {
        type: "h2",
        content: "What changed in this cycle",
      },
      {
        type: "p",
        content:
          "This certification cycle included an expanded scope covering the Anantya analytics platform, which was not included in the previous certificate. The audit also assessed GridCrest's supply chain security practices — a new focus area driven by both the updated ISO standard and increased regulatory attention on critical infrastructure dependencies.",
      },
      {
        type: "quote",
        content:
          "Utility customers are increasingly asking for evidence of security posture rather than assurances. ISO 27001:2022 certification gives procurement and security teams a standardised, independently verified reference point.",
      },
    ],
  },
  {
    slug: "interoperability-matters",
    date: "02 Apr 2026",
    author: "Engineering Team",
    tag: "Blog",
    title: "Why Interoperability Is the Real Smart-Meter Battle",
    description:
      "Single-vendor lock-in is the silent tax on every utility modernization program. A deep look at how open standards change the economics of large-scale AMI deployments across India.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        content:
          "Every utility that has completed a significant AMI rollout knows the feeling: three years in, you're locked to a single vendor's MDM because migrating the meter data would cost more than the meters themselves. The contract renewal conversation is no longer about value — it's about the cost of exit.",
      },
      {
        type: "h2",
        content: "The lock-in arithmetic",
      },
      {
        type: "p",
        content:
          "Vendor lock-in in AMI infrastructure has two components. The first is data lock-in: proprietary data formats and APIs that make migration of historical interval data prohibitively expensive. The second is protocol lock-in: meters that speak proprietary communication protocols, tying head-end replacement to meter replacement.",
      },
      {
        type: "p",
        content:
          "A utility with 2 million meters that paid ₹4,000 per meter now has ₹800 crore of sunk hardware cost that becomes stranded if the communication protocol isn't supported by an alternative HES vendor. That's the silent tax.",
      },
      {
        type: "h2",
        content: "What open standards actually deliver",
      },
      {
        type: "ul",
        content: [
          "DLMS/COSEM (IEC 62056): universal meter communication protocol supported by all major meter manufacturers, enabling HES swaps without meter replacement",
          "IS 15959 Part 2: India-specific smart meter standard mandating DLMS/COSEM compliance for RDSS-phase deployments",
          "OpenADR 2.0: demand-response signalling that works across utility platforms and aggregators",
          "CIM (IEC 61968/61970): common information model for MDM-to-network-management-system integration",
          "Open APIs with published schemas: enabling utilities to build their own analytics without vendor permission",
        ],
      },
      {
        type: "h2",
        content: "The procurement lever utilities are not using",
      },
      {
        type: "p",
        content:
          "The most effective interoperability protection available to utilities today is procuring against the standard, not the product. Tenders that mandate DLMS/COSEM compliance with IS 15959 Part 2 certification, require data export in CIM-compliant formats, and specify open API documentation as a contract deliverable create markets where interoperability is commercially necessary rather than optional.",
      },
      {
        type: "quote",
        content:
          "Interoperability isn't a technical nice-to-have — it's an economic protection. Utilities that enforce it at procurement time save themselves from the renewal negotiations they dread five years later.",
      },
    ],
  },
  {
    slug: "leadership-hire",
    date: "18 Mar 2026",
    author: "GridCrest Team",
    tag: "Highlights",
    title: "Veteran utilities executive joins GridCrest as Chief Commercial Officer",
    description:
      "Three decades of experience across DISCOM modernization and AMI rollouts in India and Southeast Asia. The hire signals GridCrest's intent to accelerate its commercial expansion in 2026.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop",
    readTime: "3 min read",
    body: [
      {
        type: "p",
        content:
          "GridCrest has appointed a seasoned utilities sector executive as its Chief Commercial Officer, effective immediately. The hire marks a significant step in GridCrest's growth trajectory, bringing deep commercial and operational expertise to a company that has historically been engineering-led.",
      },
      {
        type: "h2",
        content: "A career built in utilities",
      },
      {
        type: "p",
        content:
          "The incoming CCO brings 30 years of experience spanning DISCOM operations, AMI programme delivery, and utility technology commercialisation. Prior roles include leading the commercial workstream on one of India's largest AMI deployments — a 4 million meter programme — and serving as the Southeast Asia director for a major metering hardware manufacturer.",
      },
      {
        type: "h2",
        content: "Strategic mandate",
      },
      {
        type: "ul",
        content: [
          "Scale GridCrest's commercial footprint from 5 to 15 state utility partnerships by end of 2027",
          "Build and lead a pan-India sales and solutions engineering team",
          "Develop GridCrest's international expansion strategy, beginning with Southeast Asia",
          "Strengthen RDSS tender positioning across states not yet in the GridCrest portfolio",
        ],
      },
      {
        type: "quote",
        content:
          "GridCrest has genuinely differentiated technology. What the company needs now is the commercial machinery to match. That's what drew me here — a platform worth taking to scale.",
      },
      {
        type: "p",
        content:
          "The appointment follows a period of sustained growth for GridCrest, which expanded from 3 to 12 active utility partnerships in the 18 months to March 2026. The CCO role is one of several senior commercial hires planned for H1 2026.",
      },
    ],
  },
  {
    slug: "digital-twin-distribution",
    date: "24 Mar 2026",
    author: "Engineering Team",
    tag: "Blog",
    title: "Digital Twins for Distribution: Beyond the Buzzword",
    description:
      "A practical framework for utilities evaluating digital twin platforms — what to measure, what to ignore, and what to pilot first to ensure a return on investment within 18 months.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&auto=format&fit=crop",
    readTime: "7 min read",
    body: [
      {
        type: "p",
        content:
          "Digital twin has become one of those terms that means everything and nothing simultaneously. Walk into any utility technology conference and you'll find vendors selling digital twins that range from enhanced GIS visualisation to full physics-based network simulation. Evaluating them requires knowing what question you're actually trying to answer.",
      },
      {
        type: "h2",
        content: "What a useful distribution digital twin actually does",
      },
      {
        type: "p",
        content:
          "A distribution digital twin that earns its keep does three things: it reflects the actual state of the network in near real-time (not just the nameplate design), it lets operators simulate the effect of interventions before executing them, and it learns from the divergence between its predictions and what actually happened.",
      },
      {
        type: "h2",
        content: "The data prerequisites",
      },
      {
        type: "ul",
        content: [
          "GIS network model with connected topology — not just asset inventory, but connectivity",
          "Live SCADA feeds from HV/MV substations",
          "15-minute interval meter data from at least 40% of endpoints for meaningful load flow accuracy",
          "Transformer loading data (often the biggest gap in Indian utility datasets)",
          "Historical fault and outage records with location attribution",
        ],
      },
      {
        type: "h2",
        content: "Where to pilot first",
      },
      {
        type: "p",
        content:
          "The highest-ROI first pilot for distribution digital twins is switching operation simulation. Operators currently plan complex switching sequences — isolating faults, restoring power from alternative feeders — through a combination of single-line diagrams, experience, and phone calls to field teams. A digital twin that can simulate a proposed switching sequence, flag potential overloads, and estimate restoration time reduces both decision time and error risk.",
      },
      {
        type: "quote",
        content:
          "The switching simulation use case doesn't require a complete network model or perfect data. It requires good enough data for the feeders you're operating on. That makes it achievable in a 90-day pilot.",
      },
      {
        type: "h2",
        content: "What to ignore in vendor evaluations",
      },
      {
        type: "ul",
        content: [
          "3D visualisation — useful for stakeholder demos, irrelevant for operational value",
          "Sub-second update rates — 15-minute synchronisation is sufficient for distribution planning use cases",
          "AI features bolted onto a static asset model — the model must be live before AI adds value",
          "Feature counts — evaluate on accuracy of load flow results against real network measurements",
        ],
      },
    ],
  },
  {
    slug: "wbsedcl-milestone",
    date: "10 Mar 2026",
    author: "GridCrest Team",
    tag: "Highlights",
    title: "WBSEDCL deployment crosses 500,000 active smart meters",
    description:
      "GridCrest's flagship deployment with West Bengal State Electricity Distribution Company reaches a major milestone, delivering real-time energy data to over half a million households and businesses.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&auto=format&fit=crop",
    readTime: "3 min read",
    body: [
      {
        type: "p",
        content:
          "GridCrest's deployment with the West Bengal State Electricity Distribution Company (WBSEDCL) has crossed 500,000 active smart meters, marking a major milestone in what is now one of the largest single-utility AMI deployments in eastern India.",
      },
      {
        type: "h2",
        content: "Programme snapshot",
      },
      {
        type: "ul",
        content: [
          "500,000+ active endpoints as of March 2026, across residential, commercial and small industrial consumers",
          "Coverage spans 8 distribution circles, including Kolkata metro zones and peri-urban districts",
          "GridCrest HES managing all meter communication and command delivery",
          "MDM integrated with WBSEDCL's consumer service system for billing and dispute resolution",
          "Real-time tamper and bypass alerts operational since month one",
        ],
      },
      {
        type: "h2",
        content: "Outcomes to date",
      },
      {
        type: "p",
        content:
          "In the 12 months since the first meters went live, WBSEDCL has reported a 5.8% reduction in AT&C losses in metered circles, attributed in part to tamper detection and more accurate billing. The utility's monthly billing cycle has been compressed by 4 days, with remote meter reading eliminating the logistical challenge of accessing approximately 40% of meters that were previously difficult to reach for manual reading.",
      },
      {
        type: "quote",
        content:
          "The 500,000 milestone matters, but the more important number is 5.8% AT&C loss reduction. That translates directly to revenue recovery and operational efficiency that justifies the programme economics.",
      },
      {
        type: "h2",
        content: "Next phase",
      },
      {
        type: "p",
        content:
          "The programme's second phase, targeting 750,000 additional meters across rural and semi-urban circles, is planned to commence in Q3 2026. Phase 2 will also introduce time-of-use (ToU) tariff capability, using the GridCrest platform's real-time programming features to implement differential pricing during peak demand periods.",
      },
    ],
  },
];

const RELATED_COUNT = 3;

function getRelated(current: InsightDetail): InsightDetail[] {
  return ARTICLES.filter((a) => a.slug !== current.slug && a.tag === current.tag)
    .slice(0, RELATED_COUNT)
    .concat(
      ARTICLES.filter((a) => a.slug !== current.slug && a.tag !== current.tag).slice(
        0,
        RELATED_COUNT
      )
    )
    .slice(0, RELATED_COUNT);
}

export const Route = createFileRoute("/insight/$slug")({
  head: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) return { meta: [{ title: "Not Found — GridCrest" }] };
    return {
      meta: [
        { title: `${article.title} — GridCrest` },
        { name: "description", content: article.description },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.description },
        { property: "og:image", content: article.image },
        { property: "og:type", content: "article" },
      ],
    };
  },
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  component: InsightDetailPage,
});

function InsightDetailPage() {
  const { article } = Route.useLoaderData();
  const related = getRelated(article);

  return (
    <main className="bg-background">
      {/* ── Back nav ── */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Link
            to="/insight/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insight
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="mx-auto max-w-4xl px-6 pt-14 pb-10">
        {/* Tag + meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${TAG_COLORS[article.tag]}`}
          >
            {article.tag}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {article.date}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
          {article.title}
        </h1>

        {/* Description */}
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {article.description}
        </p>

        {/* Author */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--brand-navy)] to-accent flex items-center justify-center text-white text-xs font-bold">
            {article.author.charAt(0)}
          </div>
          <span className="text-sm font-medium text-foreground">{article.author}</span>
        </div>
      </section>

      {/* ── Cover image ── */}
      <div className="mx-auto max-w-5xl px-6 mb-12">
        <div className="aspect-[21/9] overflow-hidden rounded-2xl bg-secondary shadow-lg">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>

      {/* ── Body ── */}
      <div className="mx-auto max-w-3xl px-6 pb-20">
        <article className="prose-content space-y-5">
          {article.body.map((block, i) => {
            if (block.type === "p") {
              return (
                <p
                  key={i}
                  className="text-base text-foreground/90 leading-[1.85] tracking-[0.01em]"
                >
                  {block.content as string}
                </p>
              );
            }
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="mt-10 mb-3 text-2xl font-bold tracking-tight text-foreground border-l-4 border-accent pl-4"
                >
                  {block.content as string}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3
                  key={i}
                  className="mt-6 mb-2 text-xl font-semibold text-foreground"
                >
                  {block.content as string}
                </h3>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="space-y-2.5 pl-0">
                  {(block.content as string[]).map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="my-8 border-l-4 border-accent bg-gradient-to-r from-surface-cyan/50 to-transparent pl-6 py-4 pr-4 rounded-r-xl"
                >
                  <p className="text-base font-medium italic text-foreground/80 leading-relaxed">
                    "{block.content as string}"
                  </p>
                </blockquote>
              );
            }
            return null;
          })}
        </article>

        {/* ── Tags / Share ── */}
        <div className="mt-14 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Tagged:</span>
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${TAG_COLORS[article.tag]}`}
            >
              {article.tag}
            </span>
          </div>
          <Link
            to="/insight/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            ← All articles
          </Link>
        </div>
      </div>

      {/* ── Related articles ── */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/30 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-8">
              Related reading
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to="/insight/$slug"
                  params={{ slug: item.slug }}
                  className="group block"
                >
                  <article className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
                    <div className="aspect-[16/10] overflow-hidden bg-secondary">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${TAG_COLORS[item.tag]}`}
                        >
                          {item.tag}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="text-base font-semibold leading-snug text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-foreground group-hover:text-accent transition-colors">
                        Read more
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        eyebrow="GET IN TOUCH"
        title="Want to Learn More About GridCrest?"
        description="Connect with our team to discuss smart metering deployments, partnerships and utility programmes across India."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Explore Solutions", to: "/solutions" }}
      />
    </main>
  );
}
