import React, { FC, memo } from 'react';
import StarFourPointsSvg from '../svg/star-four-points.svg';

export interface IStarFourPointsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarFourPointsIcon: FC<IStarFourPointsIconProps> = memo(props => {
  return <StarFourPointsSvg {...props} />;
});
