import styles from "./ServiceItem.module.css";

interface ServiceItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServiceItem = ({ icon, title, description }: ServiceItemProps) => {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.serviceIcon}>{icon}</div>
      <h4 className={styles.serviceTitle}>{title}</h4>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  );
};

export default ServiceItem;
