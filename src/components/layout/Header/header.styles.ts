import styled, { css } from "styled-components";

export const Container = styled.header(
  ({ theme }) => css`
    background-color: ${theme.blue};
    width: 100%;
    height: 100%;
    max-height: 6.313;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 4.5rem;
  `
);
