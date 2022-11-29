import React, { FC, memo } from 'react';
import ClockTimeSevenSvg from '../svg/clock-time-seven.svg';

export interface IClockTimeSevenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeSevenIcon: FC<IClockTimeSevenIconProps> = memo(props => {
  return <ClockTimeSevenSvg {...props} />;
});
