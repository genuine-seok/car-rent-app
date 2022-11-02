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

  font-size: 1.4rem;
  line-height: 1.7rem;

  font-weight: 700;

  // TODO: theme으로 동적 리팩토링
  /* background: ${(props) => (props.isActive ? "black" : "#D9D9D9")};
  color: ${(props) => (props.isActive ? "white" : "black")}; */

  background: ${(props) => {
    if (props.type === "notification") {
      return "#0094FF";
    }
    return props.isActive ? "black" : "#D9D9D9";
  }};
  color: ${(props) => {
    if (props.type === "notification") {
      return "white";
    }
    return props.isActive ? "white" : "black";
  }};
`;
