import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonProps } from "./skeleton.types";

export const SkeletonComponent: React.FC<SkeletonProps> = ({
  baseColor,
  borderRadius,
  height,
  highlightColor,
  testId,
  width,
}) => {
  return (
    <Skeleton
      height={height}
      width={width}
      borderRadius={borderRadius}
      data-testid={testId}
      enableAnimation
      containerClassName="flex-1"
    />
  );
};
