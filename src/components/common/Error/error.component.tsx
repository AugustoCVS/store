import React from "react";
import { CircleX } from "lucide-react";
import { Container } from "./error.styles";

export const ErrorComponent: React.FC = () => {
  return (
    <Container>
      <CircleX size={100} color="#373737" />
    </Container>
  );
};
