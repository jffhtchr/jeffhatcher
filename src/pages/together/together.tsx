import { useState } from "react";
import { DisplayText } from "../../components/display-text/display-text";
import { Fader } from "../../components/fader/fader";
import { TextButton } from "../../components/text-button/text-button";
import { TextLink } from "../../components/text-link/text-link";
import style from "./together.module.css";
import { animationDurationMs, togetherUrl } from "../../constants";

type TogetherProps = {
  onNextPage: () => void;
};

export function Together({ onNextPage }: TogetherProps) {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  function handleStartOverClick() {
    setShouldFadeOut(true);
    setTimeout(() => {
      onNextPage();
    }, animationDurationMs);
  }

  return (
    <Fader shouldFadeOut={shouldFadeOut}>
      <div className={style.wrapper}>
        <DisplayText>
          Let's build something <TextLink href={togetherUrl} text="together" />.
        </DisplayText>
        <div className={style.startOver}>
          <h1>
            <TextButton
              colorVariant="tomato"
              onClick={handleStartOverClick}
              text="start over"
            />
          </h1>
        </div>
      </div>
    </Fader>
  );
}
