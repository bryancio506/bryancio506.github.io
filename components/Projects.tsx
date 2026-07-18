import { projects, profile } from '@/data/content';

export default function Projects() {
  return (
    <section id="projects" className="shell mt-28 scroll-mt-24 sm:mt-36">
      <div className="flex items-baseline justify-between border-b border-line pb-5">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Selected works</h2>
        <span className="eyebrow">{projects.length} projects</span>
      </div>

      <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-soft/60 transition-colors hover:border-ink/25"
          >
            {/* Visual */}
            <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
              {p.video ? (
                <video
                  src={p.video}
                  poster={p.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div
                  className="flex h-full w-full items-end p-5"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(10,10,14,0.15), rgba(10,10,14,0.85)), url(${profile.heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/80">
                    {p.context}
                  </span>
                </div>
              )}
              <span className="absolute left-4 top-4 font-mono text-xs text-white/90 mix-blend-difference">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{p.title}</h3>
                <span className="eyebrow shrink-0">{p.year}</span>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{p.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{p.description}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-line bg-base px-2 py-0.5 font-mono text-xs text-ink-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-6 inline-flex w-fit items-center gap-1.5 text-sm text-accent"
                >
                  {p.link.label}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
