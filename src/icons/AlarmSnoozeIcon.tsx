import React, { FC, memo } from 'react';
import AlarmSnoozeSvg from '../svg/alarm-snooze.svg';

export interface IAlarmSnoozeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmSnoozeIcon: FC<IAlarmSnoozeIconProps> = memo(props => {
  return <AlarmSnoozeSvg {...props} />;
});
