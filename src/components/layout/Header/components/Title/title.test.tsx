import { render } from "@testing-library/react";
import React from "react";
import { Title } from "./title.component";
import { TESTS_IDS } from "./title.constants";

describe("Title Component", () => {
  it("should render the Title component", () => {
    const { getByTestId } = render(<Title />);

    const container = getByTestId(TESTS_IDS.CONTAINER);
    const title = getByTestId(TESTS_IDS.TITLE);
    const subtitle = getByTestId(TESTS_IDS.SUBTITLE);

    expect(container).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
