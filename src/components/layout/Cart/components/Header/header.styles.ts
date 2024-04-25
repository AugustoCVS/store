import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2(
  ({ theme }) => css`
    font-family: inherit;
    font-size: 1.6rem;
    color: ${theme.white};
    font-weight: 700;
  `
);

export const Button = styled.button(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.black};
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  `
);
