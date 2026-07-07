import styles from './AwardCard.module.css';

interface AwardCardProps {
  title: string;
  date: string;
  desc: string;
}

export default function AwardCard({ title, date, desc }: AwardCardProps) {
  return (
    <div className={`${styles.awardCard} card`}>
      <div className={styles.awardHeader}>
        <h3>{title}</h3>
        <span className={styles.awardDate}>{date}</span>
      </div>
      <p className={styles.awardDesc}>{desc}</p>
    </div>
  );
}