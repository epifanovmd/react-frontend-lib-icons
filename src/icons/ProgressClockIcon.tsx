import React, { FC, memo } from 'react';
import ProgressClockSvg from '../svg/progress-clock.svg';

export interface IProgressClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProgressClockIcon: FC<IProgressClockIconProps> = memo(props => {
  return <ProgressClockSvg {...props} />;
});
