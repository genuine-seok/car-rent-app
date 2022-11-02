import { ReactNode } from "react";

import { ItemCard } from "./ItemCard";
import * as S from "./style";

interface ItemListProps {
  children?: ReactNode;
}

export const ItemList = ({ children }: ItemListProps) => {
  return (
    <S.ItemListContainer>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </S.ItemListContainer>
  );
};
