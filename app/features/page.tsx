import { features } from "./features";

export const metadata = {
  title: "Features — Mehak Vohra",
};

export default function Features() {
  return (
    <article className="flex flex-col gap-8 text-[15px] leading-7 text-foreground">
      <header>
        <h1 className="font-serif text-4xl leading-none tracking-tight">
          Features
        </h1>
        <p className="mt-2 text-sm text-muted">
          Press, podcasts, and interviews.
        </p>
      </header>

      {features.length === 0 ? (
        <p className="text-muted">Nothing here yet — check back soon.</p>
      ) : (
        <ul className="flex flex-col gap-5">
          {features.map((f) => (
            <li key={f.href}>
              <a
                href={f.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5"
              >
                <span className="font-mono text-xs text-muted sm:w-14 sm:flex-none">
                  {f.date}
                </span>
                <span className="flex flex-col">
                  <span className="w-fit font-medium bg-[#d2ff1f] box-decoration-clone px-1 text-foreground transition-opacity group-hover:opacity-80">
                    {f.title}
                  </span>
                  <span className="text-sm text-muted">{f.outlet}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
