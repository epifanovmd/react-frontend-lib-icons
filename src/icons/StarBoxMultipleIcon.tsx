import React, { FC, memo } from 'react';
import StarBoxMultipleSvg from '../svg/star-box-multiple.svg';

export interface IStarBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarBoxMultipleIcon: FC<IStarBoxMultipleIconProps> = memo(props => {
  return <StarBoxMultipleSvg {...props} />;
});
