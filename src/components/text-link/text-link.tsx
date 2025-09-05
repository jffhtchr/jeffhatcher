import styles from "./text-link.module.css";

export type TextLinkProps = {
  href: string;
  text: string;
  rel?: string;
};

export function TextLink({ href, text }: TextLinkProps) {
  return (
    <a
      className={styles.textLink}
      href={href}
      target="_blank"
      rel={"noopener noreferrer"}
    >
      {text}
    </a>
  );
}
