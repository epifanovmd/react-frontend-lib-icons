import React, { FC, memo } from 'react';
import ClockTimeOneSvg from '../svg/clock-time-one.svg';

export interface IClockTimeOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockTimeOneIcon: FC<IClockTimeOneIconProps> = memo(props => {
  return <ClockTimeOneSvg {...props} />;
});
