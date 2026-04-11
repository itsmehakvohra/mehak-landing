export type Post = {
  title: string;
  date: string; // MM/YYYY
  excerpt: string;
  href: string;
};

// Sorted newest first.
export const posts: Post[] = [
  {
    title: "Soft Skill Sunday: Making Assumptions",
    date: "10/2019",
    excerpt:
      "On the danger of inventing intent for other people without any actual proof.",
    href: "https://medium.com/mehak-vohra/soft-skill-sunday-making-assumptions-4d1348b4d7ea",
  },
  {
    title: "Why I Started OnDelta (SkillBank)",
    date: "08/2019",
    excerpt:
      "Going from CS student to running a school for growth management.",
    href: "https://medium.com/@themehakvohra/why-i-started-ondelta-c246ce934c8b",
  },
  {
    title: "Using GraphQL to Query Your Firebase Realtime Database",
    date: "07/2019",
    excerpt:
      "A walkthrough for wiring up a GraphQL server on top of Firebase Realtime Database.",
    href: "https://medium.com/mehak-vohra/using-graphql-to-query-your-firebase-realtime-database-a6e6cbd6aa3a",
  },
  {
    title: "The Story of My Best Friend — Mickey",
    date: "05/2015",
    excerpt:
      "A tribute to the family dog who taught me what loyalty actually looks like.",
    href: "https://medium.com/@themehakvohra/the-story-of-my-best-friend-mickey-9bcafd92eb0e",
  },
];
