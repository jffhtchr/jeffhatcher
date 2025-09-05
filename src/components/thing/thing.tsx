import classNames from "classnames";
import style from "./thing.module.css";
import { useState, useMemo } from "react";

type ThingProps = {
  onClick?: () => void;
};

export function Thing({ onClick }: ThingProps) {
  const [exploded, setExploded] = useState(false);

  // Generate a random gradient once per instance
  const gradient = useMemo(() => {
    function randomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    return `radial-gradient(circle at 70% 30%, ${randomColor()} 10%, ${randomColor()} 50%, ${randomColor()} 100%)`;
  }, []);

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
      style={{ background: gradient }}
    />
  );
}
