import styles from "./SurveySection.module.css";

interface SurveyTabProps {
  id: number;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const SurveyTab = ({ id, title, isActive, onClick }: SurveyTabProps) => {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <span className={styles.icon}>{id}</span>
      <span>{title}</span>
    </button>
  );
};

export default SurveyTab;
