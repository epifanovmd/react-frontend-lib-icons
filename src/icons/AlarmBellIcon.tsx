import React, { FC, memo } from 'react';
import AlarmBellSvg from '../svg/alarm-bell.svg';

export interface IAlarmBellIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmBellIcon: FC<IAlarmBellIconProps> = memo(props => {
  return <AlarmBellSvg {...props} />;
});
