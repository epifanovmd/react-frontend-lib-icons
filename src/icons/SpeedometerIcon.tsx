import React, { FC, memo } from 'react';
import SpeedometerSvg from '../svg/speedometer.svg';

export interface ISpeedometerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeedometerIcon: FC<ISpeedometerIconProps> = memo(props => {
  return <SpeedometerSvg {...props} />;
});
