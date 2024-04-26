import React from "react";
import { TESTS_IDS } from "./error.constants";
import { ErrorComponent } from "./error.component";
import { render } from "@testing-library/react";

describe("Error Component", () => {
  it("should render the error component correctly", () => {
    const { getByTestId } = render(<ErrorComponent />);

    const container = getByTestId(TESTS_IDS.CONTAINER);
    const icon = getByTestId(TESTS_IDS.ICON);

    expect(container).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
