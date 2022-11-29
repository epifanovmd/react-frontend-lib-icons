import React, { FC, memo } from 'react';
import StarShootingOutlineSvg from '../svg/star-shooting-outline.svg';

export interface IStarShootingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarShootingOutlineIcon: FC<IStarShootingOutlineIconProps> = memo(props => {
  return <StarShootingOutlineSvg {...props} />;
});
