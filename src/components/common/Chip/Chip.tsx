import { ReactNode } from "react";

import * as S from "./style";

export type ChipType = "button" | "notification";

interface IChip {
  children: ReactNode;
  isActive?: boolean;
  type?: ChipType;
}

export const Chip = ({ children, isActive = true, type = "button" }: IChip) => {
  return (
    <S.ChipBlock isActive={isActive} type={type}>
      {children}
    </S.ChipBlock>
  );
};
