import React, { FC, memo } from 'react';
import TimerPlusOutlineSvg from '../svg/timer-plus-outline.svg';

export interface ITimerPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerPlusOutlineIcon: FC<ITimerPlusOutlineIconProps> = memo(props => {
  return <TimerPlusOutlineSvg {...props} />;
});
