import React, { FC, memo } from 'react';
import ClockPlusSvg from '../svg/clock-plus.svg';

export interface IClockPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClockPlusIcon: FC<IClockPlusIconProps> = memo(props => {
  return <ClockPlusSvg {...props} />;
});
