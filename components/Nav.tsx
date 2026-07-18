import ThemeToggle from './ThemeToggle';
import { profile } from '@/data/content';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/80 backdrop-blur-md">
      <nav className="shell flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-ink">
          BR<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="mr-1 hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`/${profile.cv}`}
            className="hidden rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink sm:inline-block"
          >
            Résumé
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
