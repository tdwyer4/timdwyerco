export type ProjectCardData = {
  title: string;
  description: string;
  tag: string;
  media?: { type: "image" | "video"; src: string; alt?: string };
  buttonText: string;
  buttonLink: string;
};

export const projectCardsData: ProjectCardData[] = [
  {
    title: "Photo Collage",
    description: "A concept for a real estate photo collage",
    tag: "Concept",
    media: {
      type: "image",
      src: "/images/processing.gif",
      alt: "Photo Collage",
    },
    buttonText: "View Project",
    buttonLink: "/features/responsive",
  },
  {
    title: "TypeScript",
    description: "Type-safe development",
    tag: "Concept",
    media: { type: "image", src: "/images/BG1.jpg", alt: "TypeScript" },
    buttonText: "View Project",
    buttonLink: "/features/typescript",
  },
  {
    title: "CSS Modules",
    description: "Scoped styling",
    tag: "Concept",
    media: { type: "video", src: "/video/1Opt_1.mp4" },
    buttonText: "View Project",
    buttonLink: "/features/css-modules",
  },
  {
    title: "Motion",
    description: "Smooth animations",
    tag: "Concept",
    media: { type: "image", src: "/images/motion.png", alt: "Motion" },
    buttonText: "View Project",
    buttonLink: "/features/motion",
  },
];
