import styles from "./text-input.module.css";
import { useId } from "react";

type TextInputProps = {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ id, label, ...restProps }: TextInputProps) {
  const generatedId = useId();

  return (
    <>
      <label className={styles.label} htmlFor={id || generatedId}>
        {label}
      </label>
      <input className={styles.input} type="text" id={id} {...restProps} />
    </>
  );
}
