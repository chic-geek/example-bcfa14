import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  ...restProps
}: ButtonProps) {
  const btnClasses = `${className} ${styles.button}`;

  return (
    <button {...restProps} className={btnClasses}>
      {children}
    </button>
  );
}
