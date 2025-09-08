import { useState } from "react";
import styles from "./main-content.module.css";
import { Page } from "../../types";
import { animationDurationMs, pages } from "../../constants";
import { Hello } from "../../pages/hello/hello";
import { Jeff } from "../../pages/jeff/jeff";
import { Things } from "../../pages/things/things";
import { Together } from "../../pages/together/together";
import { Fader } from "../../components/fader/fader";

export function MainContent() {
  const [page, setPage] = useState<Page>(pages.hello);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  function handlePageChange(nextPage: Page) {
    setShouldFadeOut(true);
    setTimeout(() => {
      setPage(nextPage);
      setShouldFadeOut(false);
    }, animationDurationMs);
  }

  return (
    <div className={styles.mainContent}>
      <Fader shouldFadeOut={shouldFadeOut}>
        {page === pages.hello ? (
          <Hello onNextPage={() => handlePageChange(pages.jeff)} />
        ) : null}
        {page === pages.jeff ? (
          <Jeff onNextPage={() => handlePageChange(pages.things)} />
        ) : null}
        {page === pages.things ? (
          <Things onNextPage={() => handlePageChange(pages.together)} />
        ) : null}
        {page === pages.together ? (
          <Together onNextPage={() => handlePageChange(pages.hello)} />
        ) : null}
      </Fader>
    </div>
  );
}
