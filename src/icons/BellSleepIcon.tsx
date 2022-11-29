import React, { FC, memo } from 'react';
import BellSleepSvg from '../svg/bell-sleep.svg';

export interface IBellSleepIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellSleepIcon: FC<IBellSleepIconProps> = memo(props => {
  return <BellSleepSvg {...props} />;
});
