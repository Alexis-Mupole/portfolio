declare module '*.json' {
  const value: {
    projects: Array<{
      id: string;
      title: { en: string; fr: string; sw: string };
      description: { en: string; fr: string; sw: string };
      image: string;
      tags: string[];
      link: string;
      liveLink: string | null;
      featured: boolean;
    }>;
  };
  export default value;
}
