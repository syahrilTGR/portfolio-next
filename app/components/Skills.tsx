import styles from './Skills.module.css';

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div id="skills" className={`${styles.skillsContainer} glass`}>
      {skills.map((skill, i) => (
        <div key={i} className={styles.skillTag}>{skill}</div>
      ))}
    </div>
  );
}