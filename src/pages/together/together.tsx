import { DisplayText } from "../../components/display-text/display-text";
import { TextButton } from "../../components/text-button/text-button";
import { TextLink } from "../../components/text-link/text-link";
import style from "./together.module.css";
import { togetherUrl } from "../../constants";

type TogetherProps = {
  onNextPage: () => void;
};

export function Together({ onNextPage }: TogetherProps) {
  return (
    <div className={style.wrapper}>
      <DisplayText>
        Let's build something <TextLink href={togetherUrl} text="together" />.
      </DisplayText>
      <div className={style.startOver}>
        <h2>
          <TextButton
            colorVariant="tomato"
            onClick={onNextPage}
            text="start over"
          />
        </h2>
      </div>
    </div>
  );
}
