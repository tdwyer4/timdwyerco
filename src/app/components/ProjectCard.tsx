import React from 'react';
import { motion } from 'motion/react';
import styles from '../styles/ProjectCard.module.css';

type ProjectCardProps = {
  title: string;
  description: string;
  media?: { type: 'image' | 'video'; src: string; alt?: string };
  buttonText: string;
  buttonLink: string;
  delay?: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  media,
  buttonText,
  buttonLink,
  delay = 0,
}) => (
<motion.div className={styles.featureCardWrap}>
  <motion.div
    className={styles.featureCard}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    {media && media.type === 'image' && (
      <img className={styles.mediaBg} src={media.src} alt={media.alt || title} />
    )}
    {media && media.type === 'video' && (
      <video className={styles.mediaBg} src={media.src} autoPlay loop muted playsInline />
    )}
    <div className={styles.overlay}>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      <a className={styles.featureButton} href={buttonLink}>
        {buttonText}
      </a>
    </div>
  </motion.div>
  </motion.div>
);

export default ProjectCard;