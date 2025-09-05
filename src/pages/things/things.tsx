import { useState } from "react";
import { DisplayText } from "../../components/display-text/display-text";
import { Fader } from "../../components/fader/fader";
import { TextButton } from "../../components/text-button/text-button";
import style from "./things.module.css";
import { Thing } from "../../components/thing/thing";
import classNames from "classnames";

type ThingsProps = {
  onNextPage: () => void;
};

export function Things({ onNextPage }: ThingsProps) {
  const [areThingsVisible, setAreThingsVisible] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  function handleThingsClick() {
    setAreThingsVisible(true);
  }

  function handleThingClick() {
    setShouldFadeOut(true);
    setTimeout(() => {
      onNextPage();
    }, 800);
  }

  return (
    <Fader shouldFadeOut={shouldFadeOut}>
      <div className={style.pageWrapper}>
        <DisplayText>
          I like to build{" "}
          <TextButton
            colorVariant={areThingsVisible ? undefined : "green"}
            onClick={handleThingsClick}
            text="things"
          />
          .
        </DisplayText>
        {areThingsVisible ? (
          <>
            <div className={style.thingsWrapper}>
              <div className={classNames(style.orbitPath, style.orbitPath1)}>
                <Thing onClick={handleThingClick} />
              </div>
            </div>
            <div className={style.thingsWrapper}>
              <div className={classNames(style.orbitPath, style.orbitPath2)}>
                <Thing onClick={handleThingClick} />
              </div>
            </div>
            <div className={style.thingsWrapper}>
              <div className={classNames(style.orbitPath, style.orbitPath3)}>
                <Thing onClick={handleThingClick} />
              </div>
            </div>
            <div className={style.thingsWrapper}>
              <div className={classNames(style.orbitPath, style.orbitPath4)}>
                <Thing onClick={handleThingClick} />
              </div>
            </div>
            <div className={style.thingsWrapper}>
              <div className={classNames(style.orbitPath, style.orbitPath5)}>
                <Thing onClick={handleThingClick} />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </Fader>
  );
}
