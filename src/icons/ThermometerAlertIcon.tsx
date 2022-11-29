import React, { FC, memo } from 'react';
import ThermometerAlertSvg from '../svg/thermometer-alert.svg';

export interface IThermometerAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerAlertIcon: FC<IThermometerAlertIconProps> = memo(props => {
  return <ThermometerAlertSvg {...props} />;
});
