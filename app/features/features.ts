export type Feature = {
  title: string;
  outlet: string;
  date: string; // MM/YYYY
  href: string;
};

// Sorted newest first.
export const features: Feature[] = [
  {
    title:
      "A college dropout raises $1.5M to empower service workers to become marketers",
    outlet: "Forbes",
    date: "07/2022",
    href: "https://www.forbes.com/sites/frederickdaso/2022/07/25/a-college-dropout-raises-15m-to-empower-service-workers-to-become-marketers/",
  },
  {
    title: "Is College Necessary? Pro vs Anti-College",
    outlet: "Jubilee · Middle Ground",
    date: "06/2022",
    href: "https://www.youtube.com/watch?v=VfNsSUZjUNc",
  },
  {
    title: "Tech layoffs are here + Mehak Vohra of Skillbank (E1475)",
    outlet: "This Week in Startups",
    date: "06/2022",
    href: "https://youtu.be/4JZ19eYfRvM?t=3818",
  },
  {
    title: "6 Ivy League Students vs 1 Secret Dropout",
    outlet: "Jubilee · Odd One Out",
    date: "12/2021",
    href: "https://www.youtube.com/watch?v=5l_SKvzpepA",
  },
  {
    title: "SkillBank interview with Jason Calacanis",
    outlet: "This Week in Startups",
    date: "01/2020",
    href: "https://www.youtube.com/watch?v=CUaec9jDm7k",
  },
];
