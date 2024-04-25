import styled, { css } from "styled-components";

export const FooterContainer = styled.footer(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
    background-color: ${theme.lightGray};
  `
);

export const FooterText = styled.p(
  ({ theme }) => css`
    font-size: 0.75rem;
    font-family: inherit;
    color: ${theme.black};
  `
);
