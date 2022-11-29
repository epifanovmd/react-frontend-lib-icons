import React, { FC, memo } from 'react';
import PowerSleepSvg from '../svg/power-sleep.svg';

export interface IPowerSleepIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSleepIcon: FC<IPowerSleepIconProps> = memo(props => {
  return <PowerSleepSvg {...props} />;
});
