import { render, waitFor } from "@testing-library/react";
import React from "react";
import { SkeletonComponent } from "./skeleton.component";
import { TESTS_IDS } from "./skeleton.constants";

const mockProps = {
  baseColor: "#000",
  borderRadius: 10,
  height: 200,
  highlightColor: "#fff",
  width: 200,
};

describe("Skeleton", () => {
  it("should render the skeleton correctly", () => {
    const { getByTestId } = render(<SkeletonComponent {...mockProps} />);

    waitFor(() => {
      const skeleton = getByTestId(TESTS_IDS.SKELETON);

      expect(skeleton).toBeInTheDocument();
    });
  });
});
