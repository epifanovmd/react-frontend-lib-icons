import React, { FC, memo } from 'react';
import MonitorDashboardSvg from '../svg/monitor-dashboard.svg';

export interface IMonitorDashboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorDashboardIcon: FC<IMonitorDashboardIconProps> = memo(props => {
  return <MonitorDashboardSvg {...props} />;
});
