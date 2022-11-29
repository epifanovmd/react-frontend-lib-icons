import React, { FC, memo } from 'react';
import SunClockSvg from '../svg/sun-clock.svg';

export interface ISunClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunClockIcon: FC<ISunClockIconProps> = memo(props => {
  return <SunClockSvg {...props} />;
});
