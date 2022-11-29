import React, { FC, memo } from 'react';
import StarOffSvg from '../svg/star-off.svg';

export interface IStarOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarOffIcon: FC<IStarOffIconProps> = memo(props => {
  return <StarOffSvg {...props} />;
});
