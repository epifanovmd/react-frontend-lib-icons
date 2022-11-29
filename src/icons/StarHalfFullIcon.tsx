import React, { FC, memo } from 'react';
import StarHalfFullSvg from '../svg/star-half-full.svg';

export interface IStarHalfFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarHalfFullIcon: FC<IStarHalfFullIconProps> = memo(props => {
  return <StarHalfFullSvg {...props} />;
});
