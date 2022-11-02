import styled from "styled-components";

export const ItemListContainer = styled.div``;

export const ItemCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 20px;
  position: relative;
  cursor: pointer;

  border-bottom: 1px solid black;
`;

export const ItemCardTextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ItemCardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  /* line-height: 1.7rem; */

  & + p {
    margin-top: 8px;
  }
`;
export const ItemCardDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  /* line-height: 1.5rem; */
`;
export const ItemCardImage = styled.img`
  width: 152px;
  height: 80px;
  background: gray;
`;
export const ItemCardNotification = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ItemDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ItemDetailImage = styled.img`
  height: 205px;
  background: #d9d9d9;
`;
export const ItemDetailMain = styled.div`
  width: 100%;
`;
export const ItemDetailTitleBlock = styled.div`
  width: 100%;
  padding: 20px;
`;
export const ItemDetailSubTitle = styled.h4`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  line-height: 24px;
`;
export const ItemDetailTitle = styled.h3`
  width: 100%;
  margin-bottom: 34px;

  font-size: 2.4rem;
  font-weight: 700;
  line-height: 29px;
`;
export const ItemDetailDescription = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  text-align: right;
`;
