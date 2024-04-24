import styled, { css } from "styled-components";

export const CardRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 13.625rem;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: ${theme.white};
  `
);

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  padding: 1rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
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

export const PriceTagWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.313rem;
    padding: 0.2rem;
    background-color: ${theme.gray};
  `
);

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
    background-color: ${theme.blue};
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 0rem;
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
