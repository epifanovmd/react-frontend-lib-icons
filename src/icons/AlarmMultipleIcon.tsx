import React, { FC, memo } from 'react';
import AlarmMultipleSvg from '../svg/alarm-multiple.svg';

export interface IAlarmMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmMultipleIcon: FC<IAlarmMultipleIconProps> = memo(props => {
  return <AlarmMultipleSvg {...props} />;
});
