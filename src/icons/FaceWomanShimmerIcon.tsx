import React, { FC, memo } from 'react';
import FaceWomanShimmerSvg from '../svg/face-woman-shimmer.svg';

export interface IFaceWomanShimmerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceWomanShimmerIcon: FC<IFaceWomanShimmerIconProps> = memo(props => {
  return <FaceWomanShimmerSvg {...props} />;
});
