import React from "react";
import { TextProps } from "./card.types";
import { TitleText } from "./card.styles";

export const Title: React.FC<TextProps> = ({ text }) => {
  return <TitleText>{text}</TitleText>;
};
