import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./Cursor.module.css";

// Custom ring cursor. Grows + labels itself when hovering anything
// tagged with data-cursor="view" / "drag" / "close" etc.
export default function Cursor() {
  const canHover = useMediaQuery("(pointer: fine)");
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");
  const ringRef = useRef(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    if (!canHover) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setVariant(target.getAttribute("data-cursor") || "hover");
        setLabel(target.getAttribute("data-cursor-label") || "");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [canHover, x, y]);

  if (!canHover) return null;

  return (
    <motion.div
      ref={ringRef}
      className={`${styles.cursor} ${styles[variant]}`}
      style={{ translateX: springX, translateY: springY }}
    >
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
}
