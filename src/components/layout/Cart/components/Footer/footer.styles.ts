import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const Text = styled.p(
  ({ theme }) => css`
    font-family: inherit;
    font-size: 1.75rem;
    color: ${theme.white};
    font-weight: 700;
  `
);