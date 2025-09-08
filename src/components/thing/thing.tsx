import classNames from "classnames";
import style from "./thing.module.css";
import { useState } from "react";

type ThingProps = {
  onClick?: () => void;
};

export function Thing({ onClick }: ThingProps) {
  const [exploded, setExploded] = useState(false);

  function handleThingClick() {
    setExploded(true);

    setTimeout(() => {
      if (onClick != null) {
        onClick();
      }
    }, 500);
  }

  return (
    <div
      className={classNames(style.thing, { [style.explode]: exploded })}
      role="button"
      onClick={handleThingClick}
    />
  );
}
