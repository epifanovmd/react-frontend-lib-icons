import React, { FC, memo } from 'react';
import SpeedometerSlowSvg from '../svg/speedometer-slow.svg';

export interface ISpeedometerSlowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeedometerSlowIcon: FC<ISpeedometerSlowIconProps> = memo(props => {
  return <SpeedometerSlowSvg {...props} />;
});
