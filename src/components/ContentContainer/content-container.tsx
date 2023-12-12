import styles from "./content-container.module.css";

type ContentContainerProps = {
  children: React.ReactNode;
};

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
