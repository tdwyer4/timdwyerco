import React from "react";
import { motion } from "motion/react";
import styles from "../styles/ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  tag: string;
  media?: { type: "image" | "video"; src: string; alt?: string };
  buttonText: string;
  buttonLink: string;
  delay?: number;
};

const ProjectCardA: React.FC<ProjectCardProps> = ({
  title,
  description,
  tag,
  media,
  buttonText,
  buttonLink,
  delay = 0,
}) => (
  <motion.div
    className={styles.featureCardAWrap}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: false }}
    whileHover={{ scale: 1 }}
  >
    <motion.div className={styles.featureCardA}>
      {media && media.type === "image" && (
        <img
          className={styles.mediaBgA}
          src={media.src}
          alt={media.alt || title}
        />
      )}
      {media && media.type === "video" && (
        <video
          className={styles.mediaBgA}
          src={media.src}
          autoPlay
          loop
          muted
          playsInline
        />
      )}
    </motion.div>
    <span className={styles.featureTag}>{tag}</span>
    <h3 className={styles.featureTitle}>{title}</h3>
    {/* <p className={styles.featureDescription}>{description}</p> */}
    <a className={styles.featureButtonA} href={buttonLink}>
      <span className={styles.featureButtonAText}>{buttonText}</span>
    </a>
  </motion.div>
);

export default ProjectCardA;
