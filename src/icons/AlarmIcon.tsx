import React, { FC, memo } from 'react';
import AlarmSvg from '../svg/alarm.svg';

export interface IAlarmIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmIcon: FC<IAlarmIconProps> = memo(props => {
  return <AlarmSvg {...props} />;
});
