import { Chip } from "../common";
import * as S from "./style";

const isNew = (num: number) => {
  return !!num;
};

export const ItemCard = () => {
  return (
    <S.ItemCardContainer>
      <S.ItemCardTextBlock>
        <S.ItemCardTitle>brand</S.ItemCardTitle>
        <S.ItemCardTitle>name</S.ItemCardTitle>
        <S.ItemCardDescription>classType/fuelType</S.ItemCardDescription>
        <S.ItemCardDescription>월 amount원 부터</S.ItemCardDescription>
      </S.ItemCardTextBlock>
      <S.ItemCardNotification>
        {isNew(1) && <Chip type="notification">신규</Chip>}
      </S.ItemCardNotification>
      <S.ItemCardImage />
    </S.ItemCardContainer>
  );
};
