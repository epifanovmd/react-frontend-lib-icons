import React, { FC, memo } from 'react';
import MonitorArrowDownVariantSvg from '../svg/monitor-arrow-down-variant.svg';

export interface IMonitorArrowDownVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorArrowDownVariantIcon: FC<IMonitorArrowDownVariantIconProps> = memo(props => {
  return <MonitorArrowDownVariantSvg {...props} />;
});
