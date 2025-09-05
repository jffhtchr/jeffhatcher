import styles from "./text-button.module.css";
import classNames from "classnames";

type TextButtonProps = {
  colorVariant?: "tomato" | "blue" | "green" | "none";
  onClick: () => void;
  text: string;
};

export function TextButton({ colorVariant, onClick, text }: TextButtonProps) {
  return (
    <button
      className={classNames(styles.button, {
        [styles.tomato]: colorVariant === "tomato",
        [styles.blue]: colorVariant === "blue",
        [styles.green]: colorVariant === "green",
        [styles.none]: colorVariant === "none",
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
