'use client';

import { useEffect, useRef } from "react";
import styles from "../styles/GradientBG.module.css";

function GradientBG() {
    const appRef = useRef<HTMLDivElement | null>(null);
    const toRef = useRef(null); // Assuming you'll use this later

    useEffect(() => {
    let mouseX = 50;
    let mouseY = 50;
    let targetX = 75;
    let targetY = 75;

    const lerp = (start: number, end: number, amt: number) => (1 - amt) * start + amt * end;

    const moveGradient = (event: MouseEvent) => {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        targetX = Math.round((event.pageX / winWidth) * 100);
        targetY = Math.round((event.pageY / winHeight) * 100);
    };

    const update = () => {
        mouseX = lerp(mouseX, targetX, 0.1); // Lower = smoother
        mouseY = lerp(mouseY, targetY, 0.1);

        if (appRef.current) {
            appRef.current.style.setProperty("--mouse-x", `${mouseX}%`);
            appRef.current.style.setProperty("--mouse-y", `${mouseY}%`);
        }

        requestAnimationFrame(update);
    };

    document.addEventListener("mousemove", moveGradient);
    requestAnimationFrame(update);

    return () => {
        document.removeEventListener("mousemove", moveGradient);
    };
}, []);

    return (
        <div className={styles.container} id="container" ref={appRef} data-scroll-container>
           <div className={styles.noiseOverlay} />
            {/* <div>This is the GradientBG</div> */}
        </div>
    );
}

export default GradientBG;
