export const metadata = {
  title: "Projects — Mehak Vohra",
};

export default function Projects() {
  return (
    <article className="flex flex-col gap-5 text-[15px] leading-7 text-foreground">
      <header className="mb-2">
        <h1 className="font-serif text-4xl leading-none tracking-tight">
          Projects
        </h1>
        <p className="mt-2 text-sm text-muted">Things I&rsquo;m building.</p>
      </header>

      <ul className="flex flex-col gap-4">
        <li>
          <a
            href="https://clickbaitlabs.ai"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col gap-1"
          >
            <span className="font-semibold text-foreground transition-opacity group-hover:opacity-60">
              Clickbait Labs
            </span>
            <span className="text-sm text-muted">
              Distribution infrastructure for high volume posting.
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.vibecheckme.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col gap-1"
          >
            <span className="font-semibold text-foreground transition-opacity group-hover:opacity-60">
              Vibe Check
            </span>
            <span className="text-sm text-muted">
              A personality quiz app for figuring out your vibe.
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.startplink.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col gap-1"
          >
            <span className="font-semibold text-foreground transition-opacity group-hover:opacity-60">
              Plink
            </span>
            <span className="text-sm text-muted">
              See who actually engages with the links you share.
            </span>
          </a>
        </li>
      </ul>
    </article>
  );
}
