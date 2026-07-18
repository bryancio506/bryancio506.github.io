import { aboutBio, education, certifications, capabilities, profile } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="shell mt-28 scroll-mt-24 sm:mt-36">
      <div className="border-b border-line pb-5">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
      </div>

      <div className="grid grid-cols-1 gap-12 pt-10 md:grid-cols-12">
        {/* Bio + photo */}
        <div className="md:col-span-7">
          <div className="flex items-start gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.photo}
              alt={profile.name}
              className="hidden h-20 w-20 shrink-0 rounded-2xl border border-line object-cover sm:block"
            />
            <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
              {aboutBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="eyebrow">Education</p>
            <ul className="mt-4 space-y-5">
              {education.map((e) => (
                <li key={e.school} className="flex items-center gap-4">
                  <span className="flex h-11 min-w-[44px] shrink-0 items-center justify-center rounded-lg border border-line bg-white px-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={e.logo} alt={e.school} className="h-7 w-auto max-w-[104px] object-contain" />
                  </span>
                  <div>
                    <div className="text-ink">{e.school}</div>
                    <div className="text-sm text-ink-muted">{e.degree}</div>
                    <div className="font-mono text-xs text-ink-faint">{e.period}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Side rail: certs + capabilities */}
        <div className="space-y-10 md:col-span-5">
          <Block title="Certifications">
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-3">
                  <span className="text-ink-soft">{c.name}</span>
                  <span className="shrink-0 font-mono text-xs text-ink-faint">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Capabilities">
            <div className="space-y-5">
              {capabilities.map((cap) => (
                <div key={cap.group}>
                  <div className="eyebrow mb-2">{cap.group}</div>
                  <ul className="flex flex-wrap gap-1.5">
                    {cap.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-md border border-line bg-soft px-2 py-1 text-xs text-ink-soft"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Block>
        </div>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 border-b border-line pb-2 text-sm font-semibold tracking-tight text-ink">
        {title}
      </h3>
      {children}
    </div>
  );
}
