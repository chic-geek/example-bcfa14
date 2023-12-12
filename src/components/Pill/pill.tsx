import styles from "./pill.module.css";

type PillProps = {
  children: React.ReactNode;
};

export default function Pill({ children }: PillProps) {
  return <span className={styles.container}>{children}</span>;
}
