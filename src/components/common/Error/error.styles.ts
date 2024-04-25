import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) =>css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58.6rem;
  height: 37.5rem;
  background-color: ${theme.border_color};
  border-radius: 0.5rem;
`
)