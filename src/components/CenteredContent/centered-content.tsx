import styles from "./centered-content.module.css";

type CenteredContentProps = {
  children: React.ReactNode;
};

export default function CenteredContent({ children }: CenteredContentProps) {
  return <div className={styles.container}>{children}</div>;
}
