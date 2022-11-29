import React, { FC, memo } from 'react';
import AlarmLightSvg from '../svg/alarm-light.svg';

export interface IAlarmLightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmLightIcon: FC<IAlarmLightIconProps> = memo(props => {
  return <AlarmLightSvg {...props} />;
});
