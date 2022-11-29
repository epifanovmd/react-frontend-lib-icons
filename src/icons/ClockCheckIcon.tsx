import React, { FC, memo } from 'react';
import ClockCheckSvg from '../svg/clock-check.svg';

export interface IClockCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockCheckIcon: FC<IClockCheckIconProps> = memo(props => {
  return <ClockCheckSvg {...props} />;
});
