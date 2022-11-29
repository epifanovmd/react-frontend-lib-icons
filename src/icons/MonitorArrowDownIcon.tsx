import React, { FC, memo } from 'react';
import MonitorArrowDownSvg from '../svg/monitor-arrow-down.svg';

export interface IMonitorArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorArrowDownIcon: FC<IMonitorArrowDownIconProps> = memo(props => {
  return <MonitorArrowDownSvg {...props} />;
});
