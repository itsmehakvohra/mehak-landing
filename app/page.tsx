export default function Home() {
  return (
    <article className="flex flex-col gap-5 text-[15px] leading-7 text-foreground">
      <header className="mb-1">
        <h1 className="font-serif text-4xl leading-none tracking-tight">
          Mehak Vohra
        </h1>
        <p className="mt-1 text-sm text-muted">@itsmehakvohra</p>
      </header>

      <p>
        I&rsquo;m the CEO of{" "}
        <a
          href="https://clickbaitlabs.ai"
          className="bg-[#d2ff1f] box-decoration-clone px-1 text-foreground transition-opacity hover:opacity-80"
        >
          Clickbait Labs
        </a>
        , where we&rsquo;re building distribution infrastructure for high
        volume posting&mdash;letting apps and brands test organic content at
        the scale of an ad campaign.
      </p>

      <p>
        I&rsquo;ve been a content creator for 15+ years and have built an
        audience across TikTok and LinkedIn, with a focus on understanding
        what actually drives attention and distribution.
      </p>

      <p>
        Previously, I founded{" "}
        <a
          href="https://www.forbes.com/sites/frederickdaso/2022/07/25/a-college-dropout-raises-15m-to-empower-service-workers-to-become-marketers/"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-[#d2ff1f] box-decoration-clone px-1 text-foreground transition-opacity hover:opacity-80"
        >
          Skillbank
        </a>
        , where I raised $2M to help people upskill into paid media roles at
        marketing agencies. After that, I joined{" "}
        <a
          href="https://www.favorited.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-[#d2ff1f] box-decoration-clone px-1 text-foreground transition-opacity hover:opacity-80"
        >
          Favorited
        </a>{" "}
        as Chief of Staff for a year.
      </p>

      <p>
        I&rsquo;ve worked with some of your favorite consumer apps&mdash;including{" "}
        <a
          href="https://ngl.link/"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-[#d2ff1f] box-decoration-clone px-1 text-foreground transition-opacity hover:opacity-80"
        >
          NGL
        </a>
        ,{" "}
        <a
          href="https://www.hellothea.ai/"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-[#d2ff1f] box-decoration-clone px-1 text-foreground transition-opacity hover:opacity-80"
        >
          Thea
        </a>
        ,{" "}
        <a
          href="https://www.favorited.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-[#d2ff1f] box-decoration-clone px-1 text-foreground transition-opacity hover:opacity-80"
        >
          Favorited
        </a>
        ,{" "}
        <a
          href="https://giant.org/"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-[#d2ff1f] box-decoration-clone px-1 text-foreground transition-opacity hover:opacity-80"
        >
          Giant
        </a>
        , and more&mdash;helping them scale through content.
      </p>

      <p>
        I rock climb,{" "}
        <a
          href="https://soundcloud.com/mehvk"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-[#d2ff1f] box-decoration-clone px-1 text-foreground transition-opacity hover:opacity-80"
        >
          DJ
        </a>
        , play too much poker, and am a labradoodle mom&mdash;easily my most
        chaotic role.
      </p>

      <p className="mt-2 font-serif text-2xl italic text-foreground">
        <span className="bg-[#d2ff1f] px-1">~M</span>
      </p>
    </article>
  );
}
