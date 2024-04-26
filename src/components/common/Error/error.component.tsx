import React from "react";
import { CircleX } from "lucide-react";
import { Container } from "./error.styles";

import { TESTS_IDS } from "./error.constants";

export const ErrorComponent: React.FC = () => {
  return (
    <Container data-testid={TESTS_IDS.CONTAINER}>
      <CircleX size={100} color="#373737" data-testid={TESTS_IDS.ICON} />
    </Container>
  );
};
