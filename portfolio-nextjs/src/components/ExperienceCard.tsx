"use client";

import React from "react";

type ExperienceCardProps = {
  logo: string;
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  tags: string[];
  details: string;
};

export default function ExperienceCard({
  logo,
  company,
  role,
  dates,
  bullets,
  tags,
  details,
}: ExperienceCardProps) {
  return (
    <article className="rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900/90 border border-white/10 p-6 shadow-lg hover:shadow-xl hover:border-purple-500/40 transition">
      {/* Header: mobile column, desktop row */}
      <header className="flex flex-col items-center text-center gap-3 mb-5 md:flex-row md:items-center md:text-left md:gap-4">
        {/* 1) Icon */}
        <img
          src={logo}
          alt={`${company} Logo`}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-white/20"
        />

        {/* 2) Company + 3) Role/Date badges */}
        <div>
          <h3 className="text-xl font-bold">{company}</h3>
          <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2 text-sm">
            <span className="px-2 py-1 rounded-full bg-white/10 text-gray-200">
              {role}
            </span>
            <span className="px-2 py-1 rounded-full bg-white/5 text-gray-300">
              {dates}
            </span>
          </div>
        </div>
      </header>

      {/* 4) Tech badges (always visible) */}
      <div className="mb-4 -mt-1 flex flex-wrap gap-2 text-sm justify-center md:justify-start">
        {tags.map((t) => (
          <span
            key={t}
            className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bullets – visible on md+, hidden on mobile (moved under Read more) */}
      <ul className="hidden md:block space-y-2 leading-relaxed text-gray-200">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {/* 5) Read more – mobile shows bullets + details inside; desktop shows only details here */}
      <details className="mt-4 group">
        <summary className="cursor-pointer text-sm text-purple-300 hover:text-purple-200 list-none flex items-center gap-1">
          <span className="md:hidden">Read more</span>
          <span className="hidden md:inline">More details</span>
          <svg
            className="h-4 w-4 transition-transform group-open:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
          </svg>
        </summary>

        <div className="mt-3 text-sm text-gray-300/90">
          {/* Mobile-only bullets */}
          <ul className="space-y-2 leading-relaxed text-gray-200 md:hidden mb-3">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {details}
        </div>
      </details>
    </article>
  );
}
