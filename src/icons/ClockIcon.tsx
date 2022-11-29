import React, { FC, memo } from 'react';
import ClockSvg from '../svg/clock.svg';

export interface IClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockIcon: FC<IClockIconProps> = memo(props => {
  return <ClockSvg {...props} />;
});
