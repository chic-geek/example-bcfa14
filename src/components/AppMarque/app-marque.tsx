import styles from "./app-marque.module.css";

type AppMarqueProps = {
  children: React.ReactNode;
};

export default function AppMarque({ children }: AppMarqueProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}
