import React, { FC, memo } from 'react';
import ClockEndSvg from '../svg/clock-end.svg';

export interface IClockEndIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockEndIcon: FC<IClockEndIconProps> = memo(props => {
  return <ClockEndSvg {...props} />;
});
