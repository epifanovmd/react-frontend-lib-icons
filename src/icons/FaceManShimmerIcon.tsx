import React, { FC, memo } from 'react';
import FaceManShimmerSvg from '../svg/face-man-shimmer.svg';

export interface IFaceManShimmerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceManShimmerIcon: FC<IFaceManShimmerIconProps> = memo(props => {
  return <FaceManShimmerSvg {...props} />;
});
