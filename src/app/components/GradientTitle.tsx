import styles from "../styles/GradientTitle.module.css";
import { motion } from "motion/react";
import GradientBG from "./GradientBG";

type GradientTitleProps = {
    title: string;
    tag?: string;

};

const GradientTitle = ({ title, tag}: GradientTitleProps) => {
  return (
    <div className={styles.gradientTitleWrap}>
        <h1 className={styles.gradientTitle}>{title}</h1>
        <p className={styles.gradientTag}>{tag}</p>
    </div>
  )
}
export default GradientTitle