import React, { FC, memo } from 'react';
import StarCircleSvg from '../svg/star-circle.svg';

export interface IStarCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarCircleIcon: FC<IStarCircleIconProps> = memo(props => {
  return <StarCircleSvg {...props} />;
});
