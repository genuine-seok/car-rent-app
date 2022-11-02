import * as S from "./style";

export type ChipType = "button" | "notification";

interface IChip {
  value: string;
  isActive?: boolean;
  type?: ChipType;
}

const Chip = ({ value, isActive = false, type = "button" }: IChip) => {
  return (
    <S.ChipBlock isActive={isActive} type={type}>
      {value}
    </S.ChipBlock>
  );
};

export default Chip;
