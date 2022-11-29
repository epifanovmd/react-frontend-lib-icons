import React, { FC, memo } from 'react';
import AvTimerSvg from '../svg/av-timer.svg';

export interface IAvTimerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AvTimerIcon: FC<IAvTimerIconProps> = memo(props => {
  return <AvTimerSvg {...props} />;
});
