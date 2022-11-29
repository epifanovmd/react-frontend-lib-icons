import React, { FC, memo } from 'react';
import WaterPercentAlertSvg from '../svg/water-percent-alert.svg';

export interface IWaterPercentAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterPercentAlertIcon: FC<IWaterPercentAlertIconProps> = memo(props => {
  return <WaterPercentAlertSvg {...props} />;
});
