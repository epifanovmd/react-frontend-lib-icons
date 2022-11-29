import React, { FC, memo } from 'react';
import MonitorEditSvg from '../svg/monitor-edit.svg';

export interface IMonitorEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorEditIcon: FC<IMonitorEditIconProps> = memo(props => {
  return <MonitorEditSvg {...props} />;
});
