import { Link } from "react-router-dom";

import { CarDataType } from "../../types";
import {
  getCategoryBySegment,
  getStringByFuelType,
  isNewCar,
  priceByMonth,
} from "../../utils";
import { Chip } from "../common";
import * as S from "./style";

interface ItemCardProps {
  carData: CarDataType;
}

export const ItemCard = ({ carData }: ItemCardProps) => {
  const { id, amount, attribute, createdAt } = carData;
  const { brand, name, segment, fuelType, imageUrl } = attribute;

  const SEGMENT = getCategoryBySegment(segment);
  const FUEL_TYPE = getStringByFuelType(fuelType);

  return (
    <Link to={`/${id}`} state={{ carData }}>
      <S.ItemCardContainer>
        <S.ItemCardTextBlock>
          <S.ItemCardTitle>{brand}</S.ItemCardTitle>
          <S.ItemCardTitle>{name}</S.ItemCardTitle>
          <S.ItemCardDescription>{`${SEGMENT} / ${FUEL_TYPE}`}</S.ItemCardDescription>
          <S.ItemCardDescription>{priceByMonth(amount)}</S.ItemCardDescription>
        </S.ItemCardTextBlock>
        <S.ItemCardNotification>
          {isNewCar(createdAt) && <Chip type="notification">신규</Chip>}
        </S.ItemCardNotification>
        <S.ItemCardImage src={imageUrl} />
      </S.ItemCardContainer>
    </Link>
  );
};
