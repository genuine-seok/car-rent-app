import styled from "styled-components";

export const HeaderBlock = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 60px;

  ${({ theme }) => theme.typography.header()}
  border-bottom: 1px solid black;
`;
