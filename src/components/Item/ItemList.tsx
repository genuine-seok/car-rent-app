import { CarDataType } from "../../types";
import { NoItem } from "../common";
import { ItemCard } from "./ItemCard";
import * as S from "./style";

interface ItemListProps {
  items: CarDataType[];
}

export const ItemList = ({ items }: ItemListProps) => {
  const isCarData = () => items.length;

  return (
    <S.ItemListContainer>
      {isCarData() ? (
        items.map((item) => <ItemCard key={item.id} carData={item} />)
      ) : (
        <NoItem />
      )}
    </S.ItemListContainer>
  );
};
