import React, { FC, memo } from 'react';
import FaceManShimmerOutlineSvg from '../svg/face-man-shimmer-outline.svg';

export interface IFaceManShimmerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceManShimmerOutlineIcon: FC<IFaceManShimmerOutlineIconProps> = memo(props => {
  return <FaceManShimmerOutlineSvg {...props} />;
});
