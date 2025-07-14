'use client';

import Rive from "@rive-app/react-canvas";
import styles from "../styles/RiveStyles.module.css";
import { motion } from "motion/react";
import GradientTitle from "./GradientTitle";

type RiveProperties = { filename: string; stateMachineName: string };

export function RiveLoader({ filename, stateMachineName }: RiveProperties) {
  return (
    <div className={`${styles.riveContainerWrap}`}>
        
    <motion.div
    className={`${styles.riveTitle}`}
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false }}>
        <GradientTitle title="Color Changer" tag="Please wait while we load the animation." />
    </motion.div>    
    <motion.div 
    className={`${styles.riveContainer}`}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false }}>
    <Rive
      src={filename}
      stateMachines={stateMachineName}
      className={`${styles.riveStyleBase}`}
      style={{ verticalAlign: "center",}}
    />
    </motion.div>
    </div>
  );
}