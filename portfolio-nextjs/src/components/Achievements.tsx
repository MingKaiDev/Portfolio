// AchievementsSection.tsx
import { SiAmazon } from "react-icons/si";

type Cert = {
  title: string;
  issuer: string;
  level: "Associate" | "Foundational";
  date?: string;
  blurb: string;
  badgeUrl?: string;   // link to your Credly/Badge image page
  verifyUrl?: string;  // verification URL (optional)
};

const certs: Cert[] = [
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    level: "Associate",
    date: "2025",
    blurb:
      "Designs cost-optimized, resilient, and secure architectures on AWS. Covers IAM, networking, storage, compute, and Well-Architected practices.",
    badgeUrl: "https://www.credly.com/badges/a3563ffa-c105-4cbd-ba73-8190d286e0b9/linked_in_profile",     // TODO: paste your badge link
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    level: "Foundational",
    date: "2024",
    blurb:
      "Validates cloud fluency: core AWS services, billing & pricing, shared responsibility model, and basic security best practices.",
    badgeUrl: "https://www.credly.com/badges/b8325090-3804-446f-a170-d0177e8aba8f/linked_in_profile",     // TODO: paste your badge link
  },
];

function AchievementCard({ c }: { c: Cert }) {
  return (
    <article className="rounded-2xl bg-slate-900/70 border border-white/10 p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-purple-500/30 transition">
      <div className="flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:text-left md:gap-6">
        {/* Icon always visible */}
        <div
          className="shrink-0 rounded-2xl p-4 md:p-5
                     bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,.35),rgba(59,130,246,.25)_40%,rgba(2,6,23,.9)_70%)]
                     ring-1 ring-white/10 shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]"
          aria-hidden
        >
          <SiAmazon className="text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem] text-amber-300" />
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          {/* Mobile title (small, visible only on <md) */}
          <h3 className="block md:hidden text-base font-semibold text-white">
            {c.title}
          </h3>

          {/* Desktop/full content */}
          <div className="hidden md:block min-w-0">
            <h3 className="text-[clamp(1.1rem,2.2vw,1.5rem)] font-semibold text-white">
              {c.title} <span className="text-white/70">({c.level})</span>
            </h3>
            <div className="mt-1 flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-1 rounded-full bg-white/10 text-gray-200">{c.issuer}</span>
              {c.date && (
                <span className="px-2 py-1 rounded-full bg-white/5 text-gray-300">{c.date}</span>
              )}
            </div>
            <p className="mt-3 text-[clamp(.95rem,1.2vw,1.05rem)] text-gray-300 leading-relaxed">
              {c.blurb}
            </p>
          </div>

          {/* Badge link (always visible) */}
          <div className="mt-2 md:mt-5 flex flex-wrap gap-3">
            <a
              href={c.badgeUrl ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition"
            >
              View Badge
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}



export default function Achievements() {
  return (
    <section id="achievements" className="min-h-screen snap-start flex flex-col justify-center">
      <h2 className="text-center text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-8">
        Achievements
      </h2>

      <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-4 md:p-8 grid md:grid-cols-2 gap-6 md:gap-8">
        {certs.map((c) => (
          <AchievementCard key={c.title} c={c} />
        ))}
      </div>

      {/* Optional: tiny footnote for more certs later */}
      {/* <p className="mt-6 text-center text-sm text-gray-400">More certifications coming soon.</p> */}
    </section>
  );
}
