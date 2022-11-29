import React, { FC, memo } from 'react';
import AlarmPanelSvg from '../svg/alarm-panel.svg';

export interface IAlarmPanelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlarmPanelIcon: FC<IAlarmPanelIconProps> = memo(props => {
  return <AlarmPanelSvg {...props} />;
});
