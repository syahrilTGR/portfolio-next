import styles from './ProjectCard.module.css';

interface AwardCardProps {
  title: string;
  date: string;
  desc: string;
}

export default function AwardCard({ title, date, desc }: AwardCardProps) {
  return (
    <div className={`${styles.projectCard} glass`}>
      <div className={styles.projectHeader}>
        <h3>{title}</h3>
        <span className={styles.projectDate}>{date}</span>
      </div>
      <p className={styles.projectDesc}>{desc}</p>
    </div>
  );
}