import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonProps } from "./skeleton.types";

import { TESTS_IDS } from "./skeleton.constants";

export const SkeletonComponent: React.FC<SkeletonProps> = ({
  baseColor,
  borderRadius,
  height,
  highlightColor,
  width,
}) => {
  return (
    <Skeleton
      height={height}
      baseColor={baseColor}
      highlightColor={highlightColor}
      width={width}
      borderRadius={borderRadius}
      data-testid={TESTS_IDS.SKELETON}
      enableAnimation
      containerClassName="flex-1"
    />
  );
};
