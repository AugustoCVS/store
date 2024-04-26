import React from "react";
import { TextProps } from "./card.types";
import { SubtitleText } from "./card.styles";
import { TESTS_IDS } from "./card.constans";

export const Subtitle: React.FC<TextProps> = ({ text }) => {
  return <SubtitleText data-testid={TESTS_IDS.SUBTITLE}>{text}</SubtitleText>;
};
