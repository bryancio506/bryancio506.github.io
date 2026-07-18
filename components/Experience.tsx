'use client';

import { useState } from 'react';
import { experience } from '@/data/content';

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="shell mt-28 scroll-mt-24 sm:mt-36">
      <div className="flex items-baseline justify-between border-b border-line pb-5">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h2>
        <span className="eyebrow">{experience.length} roles</span>
      </div>

      <div className="divide-y divide-line">
        {experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <div key={job.company + job.period}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-center gap-4 py-6 text-left"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white">
                  {job.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={job.logo} alt={job.company} className="max-h-6 w-auto max-w-[30px] object-contain" />
                  ) : (
                    <span className="font-mono text-xs font-semibold text-[#18181b]">
                      {job.abbr ?? job.company.slice(0, 2)}
                    </span>
                  )}
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    {job.company}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-muted">{job.role}</span>
                </span>
                <span className="hidden font-mono text-xs text-ink-faint sm:block">{job.period}</span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ink-muted transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              <div
                className="grid overflow-hidden transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="min-h-0">
                  <div className="pb-8 sm:pl-[3.75rem]">
                    <p className="font-mono text-xs text-ink-faint sm:hidden">{job.period}</p>
                    {job.location && (
                      <p className="mb-3 mt-1 text-sm text-ink-muted">{job.location}</p>
                    )}
                    <p className="max-w-2xl text-ink-soft">{job.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-ink-soft">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span className="max-w-2xl">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-line bg-soft px-2.5 py-1 font-mono text-xs text-ink-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
