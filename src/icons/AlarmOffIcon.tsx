import React, { FC, memo } from 'react';
import AlarmOffSvg from '../svg/alarm-off.svg';

export interface IAlarmOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmOffIcon: FC<IAlarmOffIconProps> = memo(props => {
  return <AlarmOffSvg {...props} />;
});
