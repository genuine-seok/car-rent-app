import { Dispatch, ReactNode, SetStateAction } from "react";

import { category } from "../../constant";
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
        {category.map((item, idx) => (
          <CategoryItem value={item} key={item} id={idx} />
        ))}
      </S.CategoryBlock>
    </CategoryGroup>
  );
};
