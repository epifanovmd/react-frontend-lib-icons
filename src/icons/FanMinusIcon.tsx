import React, { FC, memo } from 'react';
import FanMinusSvg from '../svg/fan-minus.svg';

export interface IFanMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanMinusIcon: FC<IFanMinusIconProps> = memo(props => {
  return <FanMinusSvg {...props} />;
});
