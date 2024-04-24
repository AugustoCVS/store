import React from "react";
import { TextProps } from "./card.types";
import { SubtitleText, TitleText } from "./card.styles";

export const Subtitle: React.FC<TextProps> = ({ text }) => {
  return <SubtitleText>{text}</SubtitleText>;
};
