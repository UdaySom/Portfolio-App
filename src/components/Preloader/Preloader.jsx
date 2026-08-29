import { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { personal } from "../../data/content";
import styles from "./Preloader.module.css";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const panelRefs = useRef([]);
  const rootRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      onComplete();
      return;
    }

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          autoAlpha: 0,
          duration: 0.4,
          delay: 0.15,
          onComplete,
        });
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.7,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(counter.value)),
    });

    tl.to(
      panelRefs.current,
      {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
        stagger: 0.06,
      },
      "-=0.15"
    );

    return () => tl.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.preloader} ref={rootRef}>
      <div className={styles.panels}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={styles.panel}
            ref={(el) => (panelRefs.current[i] = el)}
          />
        ))}
      </div>
      <div className={styles.content}>
        <span className={styles.mark}>{personal.initials}</span>
        <span className={styles.count}>{String(count).padStart(3, "0")}</span>
      </div>
    </div>
  );
}
