import React, { FC, memo } from 'react';
import DesktopTowerMonitorSvg from '../svg/desktop-tower-monitor.svg';

export interface IDesktopTowerMonitorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DesktopTowerMonitorIcon: FC<IDesktopTowerMonitorIconProps> = memo(props => {
  return <DesktopTowerMonitorSvg {...props} />;
});
