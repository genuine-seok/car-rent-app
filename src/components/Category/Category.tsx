import { ReactNode } from "react";

import Chip from "../common/Chip/Chip";
import * as S from "./style";

type CategoryProps = {
  children?: ReactNode;
};

export const Category = ({ children }: CategoryProps) => {
  return (
    <S.CategoryBlock>
      {children}
      <Chip value="전체" isActive />
      <Chip value="대형" isActive={false} />
      <Chip value="중형" isActive={false} />
      <Chip value="소형" isActive={false} />
    </S.CategoryBlock>
  );
};
