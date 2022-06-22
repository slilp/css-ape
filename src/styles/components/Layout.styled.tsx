import styled from "styled-components";

export const Container = styled.div`
  max-width: 1366px;
  margin: auto;
`;

type FlexProps = {
  alignItems?: "stretch" | "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "center"
    | "flex-start"
    | "flex-end";
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "inherit"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "inherit")};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type ColProps = {
  col?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  sm?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  lg?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xl?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xxl?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

const calWidth = (i?: number) => {
  if (!i) return;
  return `flex: 0 0 calc(${i} * 8.333333%);
  max-width: calc(${i} * 8.333333%);`;
};

export const Col = styled.div<ColProps>`
  position: relative;
  flex-basis: 0;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex-grow: 1;

  @media (min-width: 0px) {
    ${(props) => props.col && calWidth(props.col)}
  }

  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    ${(props) => props.sm && calWidth(props.sm)}
  }

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    ${(props) => props.sm && calWidth(props.md)}
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    ${(props) => props.sm && calWidth(props.lg)}
  }

  @media (min-width: ${(props) => props.theme.breakpoint.xl}) {
    ${(props) => props.sm && calWidth(props.xl)}
  }

  @media (min-width: ${(props) => props.theme.breakpoint.xxl}) {
    ${(props) => props.sm && calWidth(props.xxl)}
  }
`;
