import React, { FC, memo } from 'react';
import StarThreePointsSvg from '../svg/star-three-points.svg';

export interface IStarThreePointsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarThreePointsIcon: FC<IStarThreePointsIconProps> = memo(props => {
  return <StarThreePointsSvg {...props} />;
});
