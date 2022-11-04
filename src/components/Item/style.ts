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
  ${({ theme }) => theme.typography.h4()}

  & + p {
    margin-top: 8px;
  }
`;
export const ItemCardDescription = styled.p`
  ${({ theme }) => theme.typography.caption()}
`;
export const ItemCardImage = styled.img`
  width: 152px;
  height: 80px;
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
  background: ${({ theme }) => theme.color.secondary};
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
  ${({ theme }) => theme.typography.subTitle()}
`;
export const ItemDetailTitle = styled.h3`
  width: 100%;
  margin-bottom: 34px;

  ${({ theme }) => theme.typography.title()}
`;
export const ItemDetailDescription = styled.p`
  ${({ theme }) => theme.typography.body()}
  text-align: right;
`;
