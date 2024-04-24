import styled, { css } from "styled-components";

export const CardRoot = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 13.625rem;
    max-height: 17.813rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    background-color: ${theme.white};
  `
);

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled.h3(
  ({ theme }) => css`
    flex: 1;
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.text_color};
    font-family: inherit;
    font-weight: 400;
  `
);

export const PriceTagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.313rem;
  padding: 0.5rem;
`;

export const PriceTag = styled.p(
  ({ theme }) => css`
    font-size: 0.938rem;
    color: ${theme.white};
    font-family: inherit;
    font-weight: 700;
  `
);

export const SubtitleText = styled.p(
  ({ theme }) => css`
    font-size: 0.625rem;
    color: ${theme.text_color};
    font-family: inherit;
    font-weight: 300;
    flex: 1;
  `
);

export const ButtonWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: ${theme.blue};
  `
);

export const ButtonText = styled.p(
  ({ theme }) => css`
    font-family: inherit;
    font-size: 0.875rem;
    text-transform: uppercase;
    color: ${theme.white};
  `
);
