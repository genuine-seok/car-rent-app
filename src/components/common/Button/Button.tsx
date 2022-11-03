import { ReactNode } from "react";

import * as S from "./style";

interface ButtonProps {
  icon: ReactNode;
  value?: string;
  onClick: () => void;
}

export const Button = ({ icon, value, onClick }: ButtonProps) => {
  return (
    <S.ButtonBlock onClick={onClick}>
      {icon}
      {value}
    </S.ButtonBlock>
  );
};
