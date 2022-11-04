import styled from "styled-components";

export const EmptyBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 28rem;

  ${({ theme }) => theme.typography.h3()}
`;
