import React, { FC, memo } from 'react';
import MonitorMultipleSvg from '../svg/monitor-multiple.svg';

export interface IMonitorMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorMultipleIcon: FC<IMonitorMultipleIconProps> = memo(props => {
  return <MonitorMultipleSvg {...props} />;
});
