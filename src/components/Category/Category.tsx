import { CATEGORY_LIST } from "../../constant";
import { CategoryItem } from "./CategoryItem";
import * as S from "./style";

export const Category = () => {
  return (
    <S.CategoryBlock>
      {CATEGORY_LIST.map((item) => (
        <CategoryItem value={item} key={item} />
      ))}
    </S.CategoryBlock>
  );
};
