import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

// Wraps any element and pulls it toward the cursor within its bounds.
export default function Magnetic({ children, strength = 0.4, as: Tag = "div", className, ...rest }) {
  const ref = useRef(null);
  const canHover = useMediaQuery("(pointer: fine)");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 16, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 16, mass: 0.5 });

  const handleMove = (e) => {
    if (!canHover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion[Tag] ?? motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ translateX: springX, translateY: springY }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
