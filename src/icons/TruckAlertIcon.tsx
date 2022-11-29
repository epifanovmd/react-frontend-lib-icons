import React, { FC, memo } from 'react';
import TruckAlertSvg from '../svg/truck-alert.svg';

export interface ITruckAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckAlertIcon: FC<ITruckAlertIconProps> = memo(props => {
  return <TruckAlertSvg {...props} />;
});
