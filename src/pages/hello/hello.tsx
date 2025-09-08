import { DisplayText } from "../../components/display-text/display-text";
import { TextButton } from "../../components/text-button/text-button";

type HelloProps = {
  onNextPage: () => void;
};

export function Hello({ onNextPage }: HelloProps) {
  return (
    <DisplayText>
      <TextButton colorVariant="tomato" onClick={onNextPage} text={"Hello"} />{" "}
      friend.
    </DisplayText>
  );
}
