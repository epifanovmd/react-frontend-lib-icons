import React, { FC, memo } from 'react';
import StarThreePointsOutlineSvg from '../svg/star-three-points-outline.svg';

export interface IStarThreePointsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarThreePointsOutlineIcon: FC<IStarThreePointsOutlineIconProps> = memo(props => {
  return <StarThreePointsOutlineSvg {...props} />;
});
