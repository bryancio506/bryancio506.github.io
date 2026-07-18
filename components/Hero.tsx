import { profile, heroIntro } from '@/data/content';

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-bg relative overflow-hidden"
      style={{ ['--hero-img' as string]: `url(${profile.heroBg})` }}
    >
      <div className="shell relative pt-16 sm:pt-24">
        {profile.available && (
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-soft/70 px-3 py-1.5 text-xs text-ink-soft backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availableLabel}
          </div>
        )}

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tightest sm:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-2xl text-xl text-ink-soft sm:text-2xl">
          {profile.role} — <span className="text-ink">{profile.tagline}</span>
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {heroIntro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-8">
          <Metric value={profile.yearsExp} label="years building" />
          <Divider />
          <Metric value="San José" label={profile.location.split(', ')[1]} />
          <Divider />
          <Metric value={profile.english.replace('English ', '')} label="English" />
          <div className="ml-auto flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-full px-5 py-2.5 text-sm font-medium"
              style={{ background: 'var(--ink)', color: 'var(--bg)' }}
            >
              Get in touch
            </a>
            <a href="#experience" className="link-underline text-sm text-ink-soft">
              See my work ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{value}</div>
      <div className="eyebrow mt-1">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="hidden h-8 w-px bg-line sm:block" />;
}
