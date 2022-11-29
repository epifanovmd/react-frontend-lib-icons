import React, { FC, memo } from 'react';
import WaterAlertSvg from '../svg/water-alert.svg';

export interface IWaterAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterAlertIcon: FC<IWaterAlertIconProps> = memo(props => {
  return <WaterAlertSvg {...props} />;
});
