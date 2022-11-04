import styled from "styled-components";

import { ChipType } from "./Chip";

interface IChipBlock {
  isActive: boolean;
  type: ChipType;
}

export const ChipBlock = styled.div<IChipBlock>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 5px 18px;
  width: 62px;
  height: 27px;
  border-radius: 6.2rem;
  cursor: pointer;

  ${({ theme }) => theme.typography.h4()}

  background: ${(props) => {
    if (props.type === "notification") return props.theme.color.tertiary;
    return props.isActive
      ? props.theme.color.black
      : props.theme.color.secondary;
  }};
  color: ${(props) => {
    if (props.type === "notification") return props.theme.color.white;
    return props.isActive ? props.theme.color.white : props.theme.color.black;
  }};
`;
