"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Layout from "@/app/components/Layout";
import { motion } from "motion/react";
import styles from "../../styles/PhotoCollage.module.css";
import {
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
} from "../../data/PhotoCollage";

const PhotoCollage = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId: number | null = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e: { movementX: any; movementY: any }) => {
    const { movementX, movementY } = e;

    xForce += movementX * speed;

    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);

    yForce = lerp(yForce, 0, easing);

    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });

    gsap.set(plane2.current, {
      x: `+=${xForce * 1}`,
      y: `+=${yForce * 1}`,
    });

    gsap.set(plane3.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;

    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      if (requestAnimationFrameId !== null) {
        cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
      }
    }
  };

  return (
    <Layout variant="dark">
      <motion.section className={styles.photoCollageSection}>
        <motion.div
          className={styles.photoCollageHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Photo Collage</h1>
          <p>
            This is a collection of photos that I have taken over the years.
            They are not in any particular order, but I hope you enjoy them!
          </p>
        </motion.div>
      </motion.section>
      <motion.section
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className={styles.photoCollageSection}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.centerImage}>
            <Image src={Photo1} alt="image" width={800} />
          </div>
          <div ref={plane1} className={styles.plane}>
            <Image src={Photo2} alt="image" width={300} />

            <Image src={Photo7} alt="image" width={225} />
          </div>

          <div ref={plane2} className={styles.plane}>
            <Image src={Photo4} alt="image" width={250} />

            <Image src={Photo6} alt="image" width={200} />

            <Image src={Photo8} alt="image" width={225} />
          </div>

          <div ref={plane3} className={styles.plane}>
            <Image src={Photo3} alt="image" width={150} />

            <Image src={Photo5} alt="image" width={200} />
          </div>
        </motion.div>
      </motion.section>
      <motion.section className={styles.photoCollageSection}></motion.section>
    </Layout>
  );
};

export default PhotoCollage;
