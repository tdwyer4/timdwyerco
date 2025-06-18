export type ProjectCardData = {
  title: string;
  description: string;
  media?: { type: 'image' | 'video'; src: string; alt?: string };
  buttonText: string;
  buttonLink: string;
};

export const projectCardsData: ProjectCardData[] = [
  {
    title: 'Responsive Design',
    description: 'Looks great on all devices',
    media: { type: 'image', src: '/images/processing.gif', alt: 'Responsive Design' },
    buttonText: 'Learn More',
    buttonLink: '/features/responsive',
  },
  {
    title: 'TypeScript',
    description: 'Type-safe development',
    media: { type: 'image', src: '/images/BG1.jpg', alt: 'TypeScript' },
    buttonText: 'Learn More',
    buttonLink: '/features/typescript',
  },
  {
    title: 'CSS Modules',
    description: 'Scoped styling',
    media: { type: 'video', src: '/video/1Opt_1.mp4' },
    buttonText: 'Learn More',
    buttonLink: '/features/css-modules',
  },
  {
    title: 'Motion',
    description: 'Smooth animations',
    media: { type: 'image', src: '/images/motion.png', alt: 'Motion' },
    buttonText: 'Learn More',
    buttonLink: '/features/motion',
  },
];