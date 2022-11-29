import React, { FC, memo } from 'react';
import BusAlertSvg from '../svg/bus-alert.svg';

export interface IBusAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusAlertIcon: FC<IBusAlertIconProps> = memo(props => {
  return <BusAlertSvg {...props} />;
});
