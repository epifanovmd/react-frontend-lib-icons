import React, { FC, memo } from 'react';
import AlarmPlusSvg from '../svg/alarm-plus.svg';

export interface IAlarmPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmPlusIcon: FC<IAlarmPlusIconProps> = memo(props => {
  return <AlarmPlusSvg {...props} />;
});
