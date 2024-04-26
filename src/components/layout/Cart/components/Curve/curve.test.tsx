import { render, waitFor } from "@testing-library/react";
import React from "react";
import { Curve } from "./curve.component";
import { TESTS_IDS } from "./curve.constants";

describe("Curve tests", () => {
  it("should render the Curve component", () => {
    const { getByTestId } = render(<Curve />);

    waitFor(() => {
      const curve = getByTestId(TESTS_IDS.CURVE);

      expect(curve).toBeInTheDocument();
    });
  });
});
