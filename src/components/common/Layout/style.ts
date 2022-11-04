import styled from "styled-components";

export const LayoutContatiner = styled.div`
  height: 100%;
  width: 100%;
`;

export const LayoutSizeWarning = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  margin: auto;

  ${({ theme }) => theme.typography.subTitle()}

  @media screen and (min-width: 360px) and (max-width: 450px) {
    display: none;
  }
`;
