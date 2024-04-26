import React from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react";

import { Button } from "./card.button";
import { TESTS_IDS } from "./card.constans";

import { CardImage } from "./card.image";
import { Root } from "./card.root";
import { Subtitle } from "./card.subtitle";
import { Title } from "./card.title";
import { Content } from "./card.content-container";
import { Tag } from "./card.tag";
import { TitleContainer } from "./card.title-container";

const IMAGE_URL =
  "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp";

const MOCK_TEXT = "comprar";

const mockOnClick = jest.fn();

describe("Card", () => {
  it("should render the button correctly", () => {
    const { getByTestId } = render(
      <Button onClick={mockOnClick} text={MOCK_TEXT} />
    );

    const button = getByTestId(TESTS_IDS.BUTTON_WRAPPER);

    expect(button).toBeInTheDocument();
  });

  it("should render the button and call the onClick function", () => {
    const { getByTestId } = render(
      <Button onClick={mockOnClick} text={MOCK_TEXT} />
    );

    const button = getByTestId(TESTS_IDS.BUTTON_WRAPPER);

    act(() => {
      fireEvent.click(button);
    });

    waitFor(() => {
      expect(mockOnClick).toHaveBeenCalled();
    });
  });

  it("should render the content container correctly", () => {
    const { getByTestId } = render(
      <Content>
        <div></div>
      </Content>
    );

    const contentContainer = getByTestId(TESTS_IDS.CONTENT_CONTAINER);

    waitFor(() => {
      expect(contentContainer).toBeInTheDocument();
    });
  });

  it("should render the card image correctly", () => {
    const { getByTestId } = render(
      <CardImage url={IMAGE_URL} width={150} height={150} />
    );

    waitFor(() => {
      const image = getByTestId(TESTS_IDS.IMAGE);

      expect(image).toBeInTheDocument();
    });
  });

  it("should render the root component correctly", () => {
    const { getByTestId } = render(
      <Root>
        <div></div>
      </Root>
    );

    const root = getByTestId(TESTS_IDS.ROOT);

    expect(root).toBeInTheDocument();
  });

  it("should render the subtitle correctly", () => {
    const { getByTestId } = render(<Subtitle text={MOCK_TEXT} />);

    const subtitle = getByTestId(TESTS_IDS.SUBTITLE);

    expect(subtitle).toBeInTheDocument();
  });

  it("should render the price tag correctly", () => {
    const { getByTestId } = render(<Tag text={MOCK_TEXT} />);

    const tag = getByTestId(TESTS_IDS.TAG);

    expect(tag).toBeInTheDocument();
  });

  it("should render the title container correctly", () => {
    const { getByTestId } = render(
      <TitleContainer>
        <div></div>
      </TitleContainer>
    );

    const titleContainer = getByTestId(TESTS_IDS.TITLE_WRAPPER);

    expect(titleContainer).toBeInTheDocument();
  });

  it("should render the title correctly", () => {
    const { getByTestId } = render(<Title text={MOCK_TEXT} />);

    const title = getByTestId(TESTS_IDS.TITLE);

    expect(title).toBeInTheDocument();
  });
});
