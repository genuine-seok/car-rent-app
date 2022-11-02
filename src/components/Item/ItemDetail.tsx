import { Section } from "../common";
import { SectionItem } from "../common/SectionItem/SectionItem";
import * as S from "./style";

const ItemDetail = () => {
  return (
    <S.ItemDetailContainer>
      <S.ItemDetailImage />
      <S.ItemDetailMain>
        <S.ItemDetailTitleBlock>
          <S.ItemDetailSubTitle>현대</S.ItemDetailSubTitle>
          <S.ItemDetailTitle>아반떼 CN7</S.ItemDetailTitle>
          <S.ItemDetailDescription>월 600,000원</S.ItemDetailDescription>
        </S.ItemDetailTitleBlock>
      </S.ItemDetailMain>
      <Section name="차량정보" />
      <SectionItem />
      <SectionItem />
      <SectionItem />
      <Section name="보험" />
      <SectionItem />
      <SectionItem />
      <Section name="추가상품" />
      <SectionItem />
    </S.ItemDetailContainer>
  );
};

export default ItemDetail;
