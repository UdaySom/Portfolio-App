import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSmoothScroll } from "../../context/SmoothScrollContext";
import { personal } from "../../data/content";
import Magnetic from "../Magnetic/Magnetic";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollTo } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (href) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(href, { offset: 0 });
  };

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <a
          href="#home"
          className={styles.mark}
          onClick={go("#home")}
          data-cursor="hover"
          data-cursor-label="Top"
        >
          {personal.initials}
          <span className={styles.dot} />
        </a>

        <nav className={styles.links}>
          {LINKS.map((l) => (
            <Magnetic
              as="a"
              key={l.href}
              href={l.href}
              className={styles.link}
              onClick={go(l.href)}
              strength={0.5}
              data-cursor="hover"
            >
              {l.label}
            </Magnetic>
          ))}
        </nav>

        <Magnetic
          as="a"
          href={`mailto:${personal.email}`}
          className={styles.cta}
          strength={0.3}
          data-cursor="hover"
          data-cursor-label="Say hi"
        >
          Let&rsquo;s talk
        </Magnetic>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className={styles.overlayLinks}>
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.2 + i * 0.07,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a href={l.href} onClick={go(l.href)}>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className={styles.overlayFooter}>
              <span>{personal.email}</span>
              <div className={styles.overlaySocials}>
                {personal.socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
