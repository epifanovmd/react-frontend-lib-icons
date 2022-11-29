import React, { FC, memo } from 'react';
import StarShootingSvg from '../svg/star-shooting.svg';

export interface IStarShootingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarShootingIcon: FC<IStarShootingIconProps> = memo(props => {
  return <StarShootingSvg {...props} />;
});
