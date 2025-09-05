import { ReactNode } from "react";
import styles from "./app-layout.module.css";

export function AppLayout({ children }: { children: ReactNode }) {
  return <div className={styles.appLayout}>{children}</div>;
}
