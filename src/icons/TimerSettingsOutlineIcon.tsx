import React, { FC, memo } from 'react';
import TimerSettingsOutlineSvg from '../svg/timer-settings-outline.svg';

export interface ITimerSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerSettingsOutlineIcon: FC<ITimerSettingsOutlineIconProps> = memo(props => {
  return <TimerSettingsOutlineSvg {...props} />;
});
