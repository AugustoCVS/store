import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
`;

export const Title = styled.h1(
  ({ theme }) => css`
    font-size: 2rem;
    color: ${theme.white};
    font-weight: 600;
    text-transform: uppercase;
    font-family: inherit;
  `
);

export const Subtitle = styled.p(
  ({ theme }) => css`
    font-size: 1rem;
    color: ${theme.white};
    font-weight: 300;
    font-family: inherit;
    align-items: baseline;
  `
);
