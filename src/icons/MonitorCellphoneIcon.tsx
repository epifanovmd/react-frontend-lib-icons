import React, { FC, memo } from 'react';
import MonitorCellphoneSvg from '../svg/monitor-cellphone.svg';

export interface IMonitorCellphoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorCellphoneIcon: FC<IMonitorCellphoneIconProps> = memo(props => {
  return <MonitorCellphoneSvg {...props} />;
});
