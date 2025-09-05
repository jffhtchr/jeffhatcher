import { useState } from "react";
import { DisplayText } from "../../components/display-text/display-text";
import { TextButton } from "../../components/text-button/text-button";
import { animationDurationMs } from "../../constants";
import { Fader } from "../../components/fader/fader";

type HelloProps = {
  onNextPage: () => void;
};

export function Hello({ onNextPage }: HelloProps) {
  const [shouldHide, setShouldHide] = useState(false);

  function handleClick() {
    setShouldHide(true);
    setTimeout(() => {
      onNextPage();
    }, animationDurationMs);
  }

  return (
    <Fader shouldFadeOut={shouldHide}>
      <DisplayText>
        <TextButton
          colorVariant="tomato"
          onClick={handleClick}
          text={"Hello"}
        />{" "}
        friend.
      </DisplayText>
    </Fader>
  );
}
