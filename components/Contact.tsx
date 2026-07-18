import { profile } from '@/data/content';
import Calendly from './Calendly';

export default function Contact() {
  return (
    <section id="contact" className="shell mt-28 scroll-mt-24 sm:mt-36">
      <div className="rounded-3xl border border-line bg-soft px-6 py-14 sm:px-12 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: pitch + links */}
          <div>
            <p className="eyebrow">{profile.available ? profile.availableLabel : 'Get in touch'}</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl">
              Let’s build your next project.
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink-soft">
              Backend, integrations, automation, or a full product from scratch — if it needs to
              run reliably, I’d like to hear about it. Grab a time on the right, or reach out.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full px-5 py-2.5 text-sm font-medium"
                style={{ background: 'var(--ink)', color: 'var(--bg)' }}
              >
                Email me
              </a>
              <Pill href={profile.linkedin}>LinkedIn</Pill>
              <Pill href={profile.github}>GitHub</Pill>
              <Pill href={profile.whatsapp}>WhatsApp</Pill>
              <Pill href={`/${profile.cv}`} external={false}>
                Résumé (PDF)
              </Pill>
            </div>
          </div>

          {/* Right: Calendly */}
          <div>
            <Calendly url={profile.calendly} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({
  href,
  children,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="rounded-full border border-line px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
    >
      {children}
    </a>
  );
}
