import styled from "styled-components";

export const LayoutContatiner = styled.div`
  height: 100%;
  width: 100%;
`;

export const LayoutSizeWarning = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 2.4rem;
  margin: auto;
  @media screen and (min-width: 360px) and (max-width: 450px) {
    display: none;
  }
`;
