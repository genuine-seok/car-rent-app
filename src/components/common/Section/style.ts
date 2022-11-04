import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #0094ff;
  height: 48.01px;
  padding: 13px 20px 14.01px 20px;
`;

export const SectionName = styled.h3`
  ${({ theme }) => theme.typography.section()}

  color: white;
`;
