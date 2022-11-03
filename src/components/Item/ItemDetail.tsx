import { fuelMap, segmentMap } from "../../constant";
import { CarDataType } from "../../types";
import { getFormattedPrice, getStartDate } from "../../utils";
import { Section } from "../common";
import { SectionItem } from "../common/SectionItem/SectionItem";
import * as S from "./style";

interface ItemDetailProps {
  carData: CarDataType;
}

const ItemDetail = ({ carData }: ItemDetailProps) => {
  const { amount, attribute, startDate, insurance, additionalProducts } =
    carData;
  const { brand, name, segment, fuelType, imageUrl } = attribute;

  return (
    <S.ItemDetailContainer>
      <S.ItemDetailImage src={imageUrl} />
      <S.ItemDetailMain>
        <S.ItemDetailTitleBlock>
          <S.ItemDetailSubTitle>{brand}</S.ItemDetailSubTitle>
          <S.ItemDetailTitle>{name}</S.ItemDetailTitle>
          <S.ItemDetailDescription>
            월 ${getFormattedPrice(amount)}원
          </S.ItemDetailDescription>
        </S.ItemDetailTitleBlock>
      </S.ItemDetailMain>
      <Section name="차량정보" />
      <SectionItem label="차종" value={segmentMap[segment]} />
      <SectionItem label="연료" value={fuelMap[fuelType]} />
      <SectionItem label="이용 가능일" value={getStartDate(startDate)} />
      {insurance && (
        <>
          <Section name="보험" />
          {insurance.map((data) => (
            <SectionItem
              key={data.name}
              label={data.name}
              value={data.description}
            />
          ))}
        </>
      )}
      {additionalProducts && (
        <>
          <Section name="보험" />
          {additionalProducts.map((data) => (
            <SectionItem
              key={data.name}
              label={data.name}
              value={data.amount}
            />
          ))}
        </>
      )}
    </S.ItemDetailContainer>
  );
};

export default ItemDetail;
