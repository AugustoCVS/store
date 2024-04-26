import React from "react";
import { TextProps } from "./card.types";
import { TitleText } from "./card.styles";
import { TESTS_IDS } from "./card.constans";

export const Title: React.FC<TextProps> = ({ text }) => {
  return <TitleText data-testid={TESTS_IDS.TITLE}>{text}</TitleText>;
};
