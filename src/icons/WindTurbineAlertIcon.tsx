import React, { FC, memo } from 'react';
import WindTurbineAlertSvg from '../svg/wind-turbine-alert.svg';

export interface IWindTurbineAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindTurbineAlertIcon: FC<IWindTurbineAlertIconProps> = memo(props => {
  return <WindTurbineAlertSvg {...props} />;
});
