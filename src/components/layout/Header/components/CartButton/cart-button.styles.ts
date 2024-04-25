import styled, { css } from "styled-components";

export const Wrapper = styled.div(
  ({theme}) => css`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  gap: 1rem;
  background-color: ${theme.white};
  border-radius: 0.5rem;
  cursor: pointer;
  `
)

export const CartText = styled.span(
  ({theme}) => css`
  color: ${theme.black};
  font-size: 1.125rem;
  margin-right: 1rem;
  font-weight: 700;
  `
)
