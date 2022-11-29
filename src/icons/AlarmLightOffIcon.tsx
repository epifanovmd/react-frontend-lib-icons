import React, { FC, memo } from 'react';
import AlarmLightOffSvg from '../svg/alarm-light-off.svg';

export interface IAlarmLightOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmLightOffIcon: FC<IAlarmLightOffIconProps> = memo(props => {
  return <AlarmLightOffSvg {...props} />;
});
