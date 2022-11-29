import React, { FC, memo } from 'react';
import ClockTimeElevenSvg from '../svg/clock-time-eleven.svg';

export interface IClockTimeElevenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeElevenIcon: FC<IClockTimeElevenIconProps> = memo(props => {
  return <ClockTimeElevenSvg {...props} />;
});
