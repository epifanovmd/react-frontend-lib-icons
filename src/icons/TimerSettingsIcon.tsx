import React, { FC, memo } from 'react';
import TimerSettingsSvg from '../svg/timer-settings.svg';

export interface ITimerSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerSettingsIcon: FC<ITimerSettingsIconProps> = memo(props => {
  return <TimerSettingsSvg {...props} />;
});
