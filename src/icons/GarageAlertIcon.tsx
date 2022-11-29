import React, { FC, memo } from 'react';
import GarageAlertSvg from '../svg/garage-alert.svg';

export interface IGarageAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GarageAlertIcon: FC<IGarageAlertIconProps> = memo(props => {
  return <GarageAlertSvg {...props} />;
});
