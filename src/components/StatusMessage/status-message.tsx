import styles from "./status-message.module.css";
import CenteredContent from "../CenteredContent";

type StatusMessageProps = {
  children: React.ReactNode;
};

export default function StatusMessage({ children }: StatusMessageProps) {
  return (
    <CenteredContent>
      <div className={styles.container}>
        <div className="flex flex-gap-1 flex-align-center">{children}</div>
      </div>
    </CenteredContent>
  );
}
