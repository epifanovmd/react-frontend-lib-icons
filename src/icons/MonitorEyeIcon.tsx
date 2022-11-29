import React, { FC, memo } from 'react';
import MonitorEyeSvg from '../svg/monitor-eye.svg';

export interface IMonitorEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorEyeIcon: FC<IMonitorEyeIconProps> = memo(props => {
  return <MonitorEyeSvg {...props} />;
});
