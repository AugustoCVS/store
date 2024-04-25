import styled, { css } from "styled-components";

export const SvgCurveContainer = styled.svg(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: -99px;
    width: 100px;
    height: 100%;
    fill: ${theme.blue};
    stroke: none;
  `
);
