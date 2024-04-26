import { render } from "@testing-library/react";
import React from "react";
import { Footer } from "./footer.component";
import { TESTS_IDS } from "./footer.constants";

describe("Footer", () => {
  it("should render the Footer component", () => {
    const { getByTestId } = render(<Footer />);

    const container = getByTestId(TESTS_IDS.CONTAINER);
    const text = getByTestId(TESTS_IDS.TEXT);

    expect(container).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
