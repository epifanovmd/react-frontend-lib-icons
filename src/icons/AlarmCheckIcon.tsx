import React, { FC, memo } from 'react';
import AlarmCheckSvg from '../svg/alarm-check.svg';

export interface IAlarmCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmCheckIcon: FC<IAlarmCheckIconProps> = memo(props => {
  return <AlarmCheckSvg {...props} />;
});
