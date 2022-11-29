import React, { FC, memo } from 'react';
import ClockTimeNineSvg from '../svg/clock-time-nine.svg';

export interface IClockTimeNineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeNineIcon: FC<IClockTimeNineIconProps> = memo(props => {
  return <ClockTimeNineSvg {...props} />;
});
