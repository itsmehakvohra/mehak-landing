const links = [
  { label: "GitHub", href: "https://github.com/itsmehakvohra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mehakvohra/" },
  { label: "X", href: "https://x.com/itsmehakvohra" },
  { label: "Instagram", href: "https://www.instagram.com/itsmehakvohra/" },
];

export default function SocialFooter() {
  return (
    <footer className="mt-16">
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
