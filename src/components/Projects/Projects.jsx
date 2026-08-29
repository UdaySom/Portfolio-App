import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { projects } from "../../data/content";
import RevealText from "../RevealText/RevealText";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { isDesktop } = context.conditions;
        if (!isDesktop) return;

        const distance = () => track.scrollWidth - window.innerWidth;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => tween.scrollTrigger?.kill();
      }
    );

    ScrollTrigger.refresh();

    return () => mm.revert();
  }, []);

  return (
    <section id="work" className={styles.work} ref={sectionRef}>
      <div className={styles.header}>
        <span className="eyebrow">Selected Work</span>
        <h2 className={styles.heading}>
          <RevealText text="A few things I've shipped recently." />
        </h2>
        <span className={styles.count}>
          {String(projects.length).padStart(2, "0")} Projects
        </span>
      </div>

      <div className={styles.track} ref={trackRef}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}

        <div className={styles.trackEnd}>
          <p>Want to see more, or talk about a project?</p>
          <a href="#contact" className={styles.trackEndLink} data-cursor="hover">
            Get in touch &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
