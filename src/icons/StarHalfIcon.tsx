import React, { FC, memo } from 'react';
import StarHalfSvg from '../svg/star-half.svg';

export interface IStarHalfIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarHalfIcon: FC<IStarHalfIconProps> = memo(props => {
  return <StarHalfSvg {...props} />;
});
