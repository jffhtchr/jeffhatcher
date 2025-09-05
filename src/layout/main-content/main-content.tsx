import { useState } from "react";
import styles from "./main-content.module.css";
import { Page } from "../../types";
import { pages } from "../../constants";
import { Hello } from "../../pages/hello/hello";
import { Jeff } from "../../pages/jeff/jeff";
import { Things } from "../../pages/things/things";
import { Together } from "../../pages/together/together";

export function MainContent() {
  const [page, setPage] = useState<Page>(pages.hello);

  return (
    <div className={styles.mainContent}>
      {page === pages.hello ? (
        <Hello onNextPage={() => setPage(pages.jeff)} />
      ) : null}
      {page === pages.jeff ? (
        <Jeff onNextPage={() => setPage(pages.things)} />
      ) : null}
      {page === pages.things ? (
        <Things onNextPage={() => setPage(pages.together)} />
      ) : null}
      {page === pages.together ? (
        <Together onNextPage={() => setPage(pages.hello)} />
      ) : null}
    </div>
  );
}
