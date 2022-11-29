import React, { FC, memo } from 'react';
import AlarmLightOutlineSvg from '../svg/alarm-light-outline.svg';

export interface IAlarmLightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmLightOutlineIcon: FC<IAlarmLightOutlineIconProps> = memo(props => {
  return <AlarmLightOutlineSvg {...props} />;
});
