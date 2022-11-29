import React, { FC, memo } from 'react';
import ClockTimeEightSvg from '../svg/clock-time-eight.svg';

export interface IClockTimeEightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeEightIcon: FC<IClockTimeEightIconProps> = memo(props => {
  return <ClockTimeEightSvg {...props} />;
});
