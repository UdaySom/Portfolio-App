import Magnetic from "../Magnetic/Magnetic";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div
        className={styles.visual}
        style={{ "--accent": project.color }}
        data-cursor="view"
        data-cursor-label="View"
      >
        <span className={styles.visualIndex}>{project.id}</span>
        <div className={styles.visualGlow} />
        <svg className={styles.visualMark} viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="46" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <path
            d="M40 66L60 40L80 66"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.tags}>
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className={styles.links}>
          <Magnetic
            as="a"
            href={project.link}
            className={styles.linkPrimary}
            data-cursor="hover"
          >
            Live Site
          </Magnetic>
          <Magnetic
            as="a"
            href={project.repo}
            className={styles.linkSecondary}
            data-cursor="hover"
          >
            Source
          </Magnetic>
        </div>
      </div>
    </article>
  );
}
