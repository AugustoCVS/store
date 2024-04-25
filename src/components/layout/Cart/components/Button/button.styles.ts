import styled, { css } from "styled-components";

export const ButtonContainer = styled.button(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 6rem;
    background-color: ${theme.black};
    border: none;
    cursor: pointer; 
  `
);

export const Text = styled.p(
  ({ theme }) => css`
    font-family: inherit;
    font-size: 1.75rem;
    font-weight: 700;
    color: ${theme.white};
  `
);
