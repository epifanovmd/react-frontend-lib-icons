import React, { FC, memo } from 'react';
import FaceWomanShimmerOutlineSvg from '../svg/face-woman-shimmer-outline.svg';

export interface IFaceWomanShimmerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceWomanShimmerOutlineIcon: FC<IFaceWomanShimmerOutlineIconProps> = memo(props => {
  return <FaceWomanShimmerOutlineSvg {...props} />;
});
