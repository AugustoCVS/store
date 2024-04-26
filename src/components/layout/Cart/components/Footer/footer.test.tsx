import React from "react";
import { Footer } from "./footer.component";
import { render } from "@testing-library/react";
import { TESTS_IDS } from "./footer.constants";

const mockProps = {
  text: 10,
};

describe("Footer tests", () => {
  it("should render the Footer component", () => {
    const { getByTestId } = render(<Footer {...mockProps} />);

    const container = getByTestId(TESTS_IDS.CONTAINER);
    const text = getByTestId(TESTS_IDS.TEXT);
    const total = getByTestId(TESTS_IDS.TOTAL);

    expect(container).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(total).toHaveTextContent(`R$${mockProps.text}`);
  });
});
