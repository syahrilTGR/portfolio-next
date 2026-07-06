import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  date: string;
  desc: string;
  highlights?: string[];
  tags?: string[];
}

export default function ProjectCard({ title, date, desc, highlights, tags }: ProjectCardProps) {
  return (
    <div className={`${styles.projectCard} glass`}>
      <div className={styles.projectHeader}>
        <h3>{title}</h3>
        <span className={styles.projectDate}>{date}</span>
      </div>
      <p className={styles.projectDesc}>{desc}</p>
      {highlights && (
        <ul className={styles.projectHighlights}>
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
      {tags && (
        <div className={styles.projectTags}>
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}