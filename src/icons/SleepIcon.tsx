import React, { FC, memo } from 'react';
import SleepSvg from '../svg/sleep.svg';

export interface ISleepIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SleepIcon: FC<ISleepIconProps> = memo(props => {
  return <SleepSvg {...props} />;
});
