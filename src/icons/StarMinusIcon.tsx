import React, { FC, memo } from 'react';
import StarMinusSvg from '../svg/star-minus.svg';

export interface IStarMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarMinusIcon: FC<IStarMinusIconProps> = memo(props => {
  return <StarMinusSvg {...props} />;
});
