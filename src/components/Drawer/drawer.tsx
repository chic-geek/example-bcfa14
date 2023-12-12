import { useEffect } from "react";
import FocusLock from "react-focus-lock";

import Button from "../Button";
import styles from "./drawer.module.css";

type ModalProps = {
  children: React.ReactNode;
  handleDismiss: () => void;
};

export default function Modal({ children, handleDismiss }: ModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === "Escape") {
        handleDismiss();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleDismiss]);

  return (
    <FocusLock>
      <div className={styles.wrapper}>
        <div className={styles.backdrop}></div>
        <div className={styles.drawer}>
          <div className={styles.content}>{children}</div>
          <Button type="button" onClick={handleDismiss}>
            Close
          </Button>
        </div>
      </div>
    </FocusLock>
  );
}
