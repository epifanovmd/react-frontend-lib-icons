import React, { FC, memo } from 'react';
import HeartCircleSvg from '../svg/heart-circle.svg';

export interface IHeartCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartCircleIcon: FC<IHeartCircleIconProps> = memo(props => {
  return <HeartCircleSvg {...props} />;
});
