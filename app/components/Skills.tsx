import styles from './Skills.module.css';

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className={`${styles.skillsContainer} card`}>
      <div className={styles.skillsGrid}>
        {skills.map((skill, i) => (
          <div key={i} className={styles.skillTag}>
            <span className="mono badge badge-green">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}