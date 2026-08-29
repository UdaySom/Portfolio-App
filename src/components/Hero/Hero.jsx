import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "../../lib/gsap";
import { useSmoothScroll } from "../../context/SmoothScrollContext";
import { personal } from "../../data/content";
import RevealText from "../RevealText/RevealText";
import Magnetic from "../Magnetic/Magnetic";
import styles from "./Hero.module.css";

export default function Hero() {
  const { scrollTo } = useSmoothScroll();
  const glowRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !glowRef.current) return;

    gsap.to(glowRef.current, {
      x: "12%",
      y: "8%",
      duration: 9,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} ref={glowRef} aria-hidden="true" />

      <div className={styles.top}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {personal.role}
        </motion.p>
        <motion.p
          className={styles.location}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {personal.location}
        </motion.p>
      </div>

      <h1 className={styles.headline}>
        <RevealText text="I build" delay={0.35} />
        <RevealText text="interfaces" delay={0.45} className={styles.outline} />
        <RevealText text="that move." delay={0.55} />
      </h1>

      <div className={styles.bottom}>
        <motion.p
          className={styles.bio}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {personal.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Magnetic
            as="button"
            className={styles.scrollCue}
            onClick={() => scrollTo("#about")}
            data-cursor="hover"
            data-cursor-label="Scroll"
          >
            <span>View work</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 5L7 10L12 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
