"use client";

import { motion } from "motion/react";
import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import GradientBG from "../components/GradientBG";
import Header from "../components/Header";
import HeroText from "../components/HeroText";
import ProjectCardB from "../components/ProjectCardB";
import ProjectCardA from "../components/ProjectCardA";
import { projectCardsData } from "../data/ProjectData";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tim Dwyer</title>
        <meta
          name="description"
          content="The project sandbox and archive of Tim Dwyer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>

        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GradientBG variant="light"/>
          <div className={styles.heroContent}>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HeroText />
            </motion.h1>
            {/* <motion.p 
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A modern, responsive website built with Next.js, TypeScript, and CSS Modules
            </motion.p> */}
            {/* <motion.button 
              className={styles.ctaButton}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button> */}
          </div>
        </motion.section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            {/* <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Features
            </motion.h2> */}
            <div className={styles.featuresGrid}>
              {projectCardsData.map((project, index) => (
                <ProjectCardA key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <motion.div
                className={styles.contentText}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2>About This Layout</h2>
                <p>
                  This responsive layout demonstrates modern web development
                  practices using Next.js with TypeScript. The design adapts
                  seamlessly across desktop, tablet, and mobile devices using
                  CSS Grid and Flexbox.
                </p>
                <p>
                  CSS Modules provide scoped styling to prevent conflicts, while
                  motion.dev adds smooth animations that enhance the user
                  experience without overwhelming the content.
                </p>
              </motion.div>
              <motion.div
                className={styles.contentImage}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={styles.imagePlaceholder}>Image Placeholder</div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
