import React, { FC, memo } from 'react';
import ClockStartSvg from '../svg/clock-start.svg';

export interface IClockStartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockStartIcon: FC<IClockStartIconProps> = memo(props => {
  return <ClockStartSvg {...props} />;
});
