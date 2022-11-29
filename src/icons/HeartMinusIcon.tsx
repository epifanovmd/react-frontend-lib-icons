import React, { FC, memo } from 'react';
import HeartMinusSvg from '../svg/heart-minus.svg';

export interface IHeartMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartMinusIcon: FC<IHeartMinusIconProps> = memo(props => {
  return <HeartMinusSvg {...props} />;
});
