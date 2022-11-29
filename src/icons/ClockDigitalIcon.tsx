import React, { FC, memo } from 'react';
import ClockDigitalSvg from '../svg/clock-digital.svg';

export interface IClockDigitalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockDigitalIcon: FC<IClockDigitalIconProps> = memo(props => {
  return <ClockDigitalSvg {...props} />;
});
