import React, { FC, memo } from 'react';
import SpeedometerMediumSvg from '../svg/speedometer-medium.svg';

export interface ISpeedometerMediumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeedometerMediumIcon: FC<ISpeedometerMediumIconProps> = memo(props => {
  return <SpeedometerMediumSvg {...props} />;
});
