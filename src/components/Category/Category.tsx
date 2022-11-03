import { Dispatch, ReactNode, SetStateAction } from "react";

import { ItemGroup as CategoryGroup } from "../../contexts/ItemGroupContext";
import { CategoryItem } from "./CategoryItem";
import * as S from "./style";

type CategoryProps = {
  activeId: number;
  children?: ReactNode;
  setActiveId: Dispatch<SetStateAction<number>>;
};

export const Category = ({
  activeId,
  children,
  setActiveId,
}: CategoryProps) => {
  return (
    <CategoryGroup activeId={activeId} onSelect={setActiveId}>
      <S.CategoryBlock>
        {children}
        {/* TODO: Chip & id를 동적으로 생성 */}
        <CategoryItem value="전체" id={0} />
        <CategoryItem value="대형" id={1} />
        <CategoryItem value="중형" id={2} />
        <CategoryItem value="소형" id={3} />
      </S.CategoryBlock>
    </CategoryGroup>
  );
};
