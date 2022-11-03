import { Link } from "react-router-dom";

import { fuelMap, segmentMap } from "../../constant";
import { CarDataType } from "../../types";
import { getFormattedPrice, isNewCar } from "../../utils";
import { Chip } from "../common";
import * as S from "./style";

interface ItemCardProps {
  carData: CarDataType;
}

export const ItemCard = ({ carData }: ItemCardProps) => {
  const { id, amount, attribute, createdAt } = carData;

  const { brand, name, segment, fuelType, imageUrl } = attribute;

  return (
    <Link to={`/${id}`} state={{ carData }}>
      <S.ItemCardContainer>
        <S.ItemCardTextBlock>
          <S.ItemCardTitle>{brand}</S.ItemCardTitle>
          <S.ItemCardTitle>{name}</S.ItemCardTitle>
          <S.ItemCardDescription>{`${segmentMap[segment]} / ${fuelMap[fuelType]}`}</S.ItemCardDescription>
          <S.ItemCardDescription>
            월 ${getFormattedPrice(amount)}원 부터
          </S.ItemCardDescription>
        </S.ItemCardTextBlock>
        <S.ItemCardNotification>
          {isNewCar(createdAt) && <Chip type="notification">신규</Chip>}
        </S.ItemCardNotification>
        <S.ItemCardImage src={imageUrl} />
      </S.ItemCardContainer>
    </Link>
  );
};
