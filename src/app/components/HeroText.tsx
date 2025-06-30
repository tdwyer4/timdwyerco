import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/all";
import styles from "../styles/Home.module.css";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrambleTextPlugin);

const HeroText: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = SplitText.create(textRef.current, {
      type: "chars",
      charsClass: `${styles.char}`,
    });

    split.chars.forEach((char) => {
      gsap.set(char, {
        attr: { "data-content": char.innerHTML },
      });
    });

    const handlePointerMove = (e: PointerEvent) => {
      split.chars.forEach((char) => {
        const rect = char.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          gsap.to(char, {
            overwrite: true,
            duration: 2 - dist / 200,
            scrambleText: {
              text: (char as HTMLElement).dataset.content ?? "",
              chars: "*",
              speed: 0.1,
            },
            ease: "none",
          });
        }
      });
    };

    const el = textRef.current;
    el.addEventListener("pointermove", handlePointerMove);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <p ref={textRef} className={styles.textBlock}>
      TRYING TO MAKE STUFF THAT DOESN'T SUCK
    </p>
  );
};

export default HeroText;
