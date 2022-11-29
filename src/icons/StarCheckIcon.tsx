import React, { FC, memo } from 'react';
import StarCheckSvg from '../svg/star-check.svg';

export interface IStarCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarCheckIcon: FC<IStarCheckIconProps> = memo(props => {
  return <StarCheckSvg {...props} />;
});
