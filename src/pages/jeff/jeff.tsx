import { useState } from "react";
import { DisplayText } from "../../components/display-text/display-text";
import { TextButton } from "../../components/text-button/text-button";
import style from "./jeff.module.css";
import classNames from "classnames";
import { animationDurationMs } from "../../constants";
import { Fader } from "../../components/fader/fader";

type JeffProps = {
  onNextPage: () => void;
};

export function Jeff({ onNextPage }: JeffProps) {
  const [shouldShowJeff, setShouldShowJeff] = useState(false);
  const [hasClickedJeff, setHasClickedJeff] = useState(false);
  const [shouldHideAll, setShouldHideAll] = useState(false);

  function handleTextClick() {
    if (shouldShowJeff) return; // Prevent multiple clicks while animation is running
    setShouldShowJeff(true);
    setTimeout(() => {
      setShouldShowJeff(false);
      setHasClickedJeff(true);
    }, 2000);
  }

  function handleNextPageClick() {
    setShouldHideAll(true);
    setTimeout(() => {
      onNextPage();
    }, animationDurationMs);
  }

  return (
    <Fader shouldFadeOut={shouldHideAll}>
      <div className={style.pageWrapper}>
        <DisplayText>
          My name is{" "}
          <TextButton
            colorVariant="blue"
            onClick={handleTextClick}
            text="Jeff"
          />
          .
        </DisplayText>
        <div className={style.buttonWrapper}>
          {hasClickedJeff ? (
            <TextButton
              colorVariant="tomato"
              onClick={handleNextPageClick}
              text="Nice to meet you."
            />
          ) : null}
        </div>

        <div
          className={classNames(style.jeffWrapper, {
            [style.animateJeff]: shouldShowJeff,
          })}
        />
      </div>
    </Fader>
  );
}
