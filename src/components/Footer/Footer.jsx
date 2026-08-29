import { useSmoothScroll } from "../../context/SmoothScrollContext";
import { personal } from "../../data/content";
import Magnetic from "../Magnetic/Magnetic";
import styles from "./Footer.module.css";

export default function Footer() {
  const { scrollTo } = useSmoothScroll();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span>
        &copy; {year} {personal.name}. All rights reserved.
      </span>

      <Magnetic
        as="button"
        className={styles.top}
        onClick={() => scrollTo(0)}
        data-cursor="hover"
        data-cursor-label="Top"
      >
        Back to top
      </Magnetic>
    </footer>
  );
}
