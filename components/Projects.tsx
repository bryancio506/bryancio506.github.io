import { projects, profile, clientSites, clientSitesIntro, type Project } from '@/data/content';
import CoverThenVideo from './CoverThenVideo';

export default function Projects() {
  return (
    <section id="projects" className="shell mt-14 scroll-mt-24 sm:mt-20">
      <div className="flex items-baseline justify-between border-b border-line pb-5">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Selected works</h2>
        <span className="eyebrow">{projects.length + clientSites.length} projects</span>
      </div>

      <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>

      {/* Client websites — compact gallery */}
      <div className="mt-20 flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Websites for local businesses</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{clientSitesIntro}</p>
        </div>
        <span className="eyebrow shrink-0">{clientSites.length} live sites</span>
      </div>

      <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {clientSites.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-soft/60 transition-colors hover:border-ink/25"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={`${s.name} website`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h4 className="font-semibold tracking-tight text-ink">{s.name}</h4>
              <p className="mt-0.5 text-xs text-ink-muted">{s.business}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent">
                Visit site
                <Arrow />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-soft/60 transition-colors hover:border-ink/25 ${
        p.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Visual */}
      <div
        className={`relative overflow-hidden border-b border-line ${
          p.featured ? 'aspect-video' : 'aspect-[16/10]'
        }`}
      >
        {p.video && p.image ? (
          <CoverThenVideo image={p.image} video={p.video} poster={p.poster} alt={p.title} />
        ) : p.video ? (
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
            loading={index < 2 ? 'eager' : 'lazy'}
            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
              p.featured ? 'object-center' : 'object-top'
            }`}
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
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/80">{p.context}</span>
          </div>
        )}
        <span className="absolute left-4 top-4 font-mono text-xs text-white/90 mix-blend-difference">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Body */}
      <div className={`flex flex-1 flex-col p-6 ${p.featured ? 'sm:p-8' : ''}`}>
        {p.featured && <p className="eyebrow mb-3 text-accent">Featured · {p.context}</p>}
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-ink">{p.title}</h3>
          <span className="eyebrow shrink-0">{p.year}</span>
        </div>
        <p className="mt-1 text-sm text-ink-muted">{p.role}</p>
        <div className={p.featured ? 'md:grid md:grid-cols-2 md:gap-10' : ''}>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{p.description}</p>

          {p.featured && (
            <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <li key={s} className="rounded-md border border-line bg-base px-2 py-0.5 font-mono text-xs text-ink-muted">
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
            <Arrow />
          </a>
        )}
      </div>
    </article>
  );
}

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
