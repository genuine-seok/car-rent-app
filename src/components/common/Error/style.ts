import styled from "styled-components";

export const ErrorBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 28rem;
  color: red;

  ${({ theme }) => theme.typography.h3()}
`;
