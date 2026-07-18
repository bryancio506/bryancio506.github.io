import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { profile } from '@/data/content';
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.role} based in ${profile.location}. ${profile.tagline}`,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: 'website',
  },
};

// Set the theme before paint to avoid a flash of the wrong theme.
const themeScript = `
(function(){try{
  var t = localStorage.getItem('theme');
  var d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (d) document.documentElement.classList.add('dark');
}catch(e){}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
