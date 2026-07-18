'use client';

import { useEffect, useRef, useState } from 'react';

const SCRIPT_ID = 'calendly-widget-script';

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void };
  }
}

function ensureScript(): Promise<void> {
  return new Promise((resolve) => {
    if (window.Calendly) return resolve();
    let s = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!s) {
      s = document.createElement('script');
      s.id = SCRIPT_ID;
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.body.appendChild(s);
    }
    s.addEventListener('load', () => resolve());
    if (window.Calendly) resolve();
  });
}

export default function Calendly({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [dark, setDark] = useState(false);

  // Track theme changes (the toggle stamps/removes `.dark` on <html>).
  useEffect(() => {
    const el = document.documentElement;
    const sync = () => setDark(el.classList.contains('dark'));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  // (Re)render the widget with theme-matched colors whenever the theme flips.
  useEffect(() => {
    let cancelled = false;
    const colors = dark
      ? 'background_color=141416&text_color=f4f4f5&primary_color=5b8cff'
      : 'background_color=ffffff&text_color=18181b&primary_color=2f6df0';
    const full = `${url}?hide_gdpr_banner=1&${colors}`;

    ensureScript().then(() => {
      if (cancelled || !ref.current || !window.Calendly) return;
      ref.current.innerHTML = '';
      window.Calendly.initInlineWidget({ url: full, parentElement: ref.current });
    });

    return () => {
      cancelled = true;
    };
  }, [dark, url]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-line bg-soft"
      style={{ minWidth: '280px', height: '640px' }}
    />
  );
}
