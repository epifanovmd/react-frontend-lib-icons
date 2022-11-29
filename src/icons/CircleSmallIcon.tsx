import React, { FC, memo } from 'react';
import CircleSmallSvg from '../svg/circle-small.svg';

export interface ICircleSmallIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleSmallIcon: FC<ICircleSmallIconProps> = memo(props => {
  return <CircleSmallSvg {...props} />;
});
