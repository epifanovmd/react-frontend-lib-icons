import React, { FC, memo } from 'react';
import StarSvg from '../svg/star.svg';

export interface IStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarIcon: FC<IStarIconProps> = memo(props => {
  return <StarSvg {...props} />;
});
