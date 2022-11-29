import React, { FC, memo } from 'react';
import AlarmPanelOutlineSvg from '../svg/alarm-panel-outline.svg';

export interface IAlarmPanelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmPanelOutlineIcon: FC<IAlarmPanelOutlineIconProps> = memo(props => {
  return <AlarmPanelOutlineSvg {...props} />;
});
