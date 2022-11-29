import React, { FC, memo } from 'react';
import AirplaneAlertSvg from '../svg/airplane-alert.svg';

export interface IAirplaneAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneAlertIcon: FC<IAirplaneAlertIconProps> = memo(props => {
  return <AirplaneAlertSvg {...props} />;
});
