import React, { FC, memo } from 'react';
import AlarmLightOffOutlineSvg from '../svg/alarm-light-off-outline.svg';

export interface IAlarmLightOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmLightOffOutlineIcon: FC<IAlarmLightOffOutlineIconProps> = memo(props => {
  return <AlarmLightOffOutlineSvg {...props} />;
});
