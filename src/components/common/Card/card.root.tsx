import React from "react";
import { RootProps } from "./card.types";
import { CardRoot } from "./card.styles";

import { TESTS_IDS } from "./card.constans";

export const Root: React.FC<RootProps> = ({ children, id }) => {
  return (
    <CardRoot id={id} data-testid={TESTS_IDS.ROOT}>
      {children}
    </CardRoot>
  );
};
