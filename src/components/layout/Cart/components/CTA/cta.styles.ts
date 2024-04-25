import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 23.688rem;
    max-height: 5.9rem;
    border-radius: 0.5rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    background-color: ${theme.white};
    padding: 0.5rem;
  `
);

export const Text = styled.p<{ isPriceText?: boolean }>(
  ({ theme, isPriceText }) => css`
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: ${isPriceText ? 700 : 400};
    color: ${theme.text_color};
    flex: 1;
  `
);

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
`;

export const QuantityText = styled.p<{ isQuantity?: boolean }>(
  ({ theme, isQuantity }) => css`
    font-family: inherit;
    color: ${theme.text_color};
    font-weight: 400;
    font-size: ${isQuantity ? "0.8rem" : "0.313rem"};
  `
);

export const QuantityBox = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 3.125rem;
    height: 1.1rem;
    border: 0.3px solid ${theme.border_color};
    border-radius: 0.25rem;
    padding: 0.1rem 0.3rem;
  `
);

export const Divider = styled.div(
  ({ theme }) => css`
    width: 1px;
    height: 0.719rem;
    background-color: ${theme.border_color};
  `
);

export const ButtonContainer = styled.div(
  ({ theme }) => css`
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
    background-color: ${theme.black};
    width: 1.125rem;
    height: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
  `
);
