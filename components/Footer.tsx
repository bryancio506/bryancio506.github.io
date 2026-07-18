import { profile } from '@/data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="shell mt-28 border-t border-line py-10 sm:mt-36">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-ink-muted">
          © {year} {profile.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-5 text-sm text-ink-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
            {profile.githubLabel}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
            {profile.linkedinLabel}
          </a>
          <a href="#top" className="transition-colors hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
