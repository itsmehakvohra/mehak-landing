import { posts } from "./posts";

export const metadata = {
  title: "Thoughts — Mehak Vohra",
};

export default function Thoughts() {
  return (
    <article className="flex flex-col gap-8 text-[15px] leading-7 text-foreground">
      <header>
        <h1 className="font-serif text-4xl leading-none tracking-tight">
          Thoughts
        </h1>
        <p className="mt-2 text-sm text-muted">
          Older essays and notes, mostly from my Medium archive.
        </p>
      </header>

      <ul className="flex flex-col gap-5">
        {posts.map((post) => (
          <li key={post.href}>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5"
            >
              <span className="font-mono text-xs text-muted sm:w-14 sm:flex-none">
                {post.date}
              </span>
              <span className="flex flex-col">
                <span className="w-fit font-medium bg-[#d2ff1f] box-decoration-clone px-1 text-foreground transition-opacity group-hover:opacity-80">
                  {post.title}
                </span>
                <span className="text-sm text-muted">{post.excerpt}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
