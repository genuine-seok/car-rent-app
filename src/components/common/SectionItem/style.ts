import styled from "styled-components";

export const SectionItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 13px 21px 14px 19px;
`;
export const SectionItemLabel = styled.h3`
  ${({ theme }) => theme.typography.label()}
`;
export const SectionItemValue = styled.p`
  ${({ theme }) => theme.typography.body()}
`;
