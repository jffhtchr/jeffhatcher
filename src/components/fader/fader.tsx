import style from "./fader.module.css";

type FaderProps = {
  children: React.ReactNode;
  shouldFadeOut?: boolean;
};

export function Fader({ children, shouldFadeOut = false }: FaderProps) {
  return (
    <div className={shouldFadeOut ? style.fadeOut : style.fadeIn}>
      {children}
    </div>
  );
}
