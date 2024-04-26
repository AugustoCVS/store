import { act, fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { Header } from "./header.component";
import { TESTS_IDS } from "./header.constants";

const mockProps = {
  handleCloseTheCart: jest.fn(),
};

describe("Header tests", () => {
  it("should render the Header component", () => {
    const { getByTestId } = render(<Header {...mockProps} />);

    const container = getByTestId(TESTS_IDS.CONTAINER);
    const title = getByTestId(TESTS_IDS.TITLE);
    const button = getByTestId(TESTS_IDS.BUTTON);

    expect(container).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should call handleCloseTheCart when button is clicked", () => {
    const { getByTestId } = render(<Header {...mockProps} />);

    const button = getByTestId(TESTS_IDS.BUTTON);

    act(() => {
      fireEvent.click(button);
    });

    waitFor(() => {
      expect(mockProps.handleCloseTheCart).toHaveBeenCalled();
    });
  });
});
