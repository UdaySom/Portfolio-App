import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personal } from "../../data/content";
import RevealText from "../RevealText/RevealText";
import Magnetic from "../Magnetic/Magnetic";
import styles from "./Contact.module.css";

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Contact() {
  const time = useClock();

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <span className="eyebrow">Contact</span>

        <h2 className={styles.heading}>
          <RevealText text="Let's build" />
          <RevealText text="something great." delay={0.1} />
        </h2>

        <Magnetic
          as="a"
          href={`mailto:${personal.email}`}
          className={styles.emailLink}
          strength={0.25}
          data-cursor="hover"
          data-cursor-label="Email"
        >
          {personal.email}
        </Magnetic>

        <motion.div
          className={styles.footerRow}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.socials}>
            {personal.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" data-cursor="hover">
                {s.label}
              </a>
            ))}
          </div>

          <div className={styles.clock}>
            <span className={styles.clockDot} />
            Local time &mdash; {time}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
