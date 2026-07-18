import { companies } from '@/data/content';

export default function Companies() {
  return (
    <section className="shell mt-20 sm:mt-28">
      <p className="eyebrow">Experience across</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6 sm:gap-x-16">
        {companies.map((c) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={c.name}
            src={c.logo}
            alt={c.name}
            title={c.name}
            className="logo-mono h-6 w-auto sm:h-7"
          />
        ))}
      </div>
    </section>
  );
}
