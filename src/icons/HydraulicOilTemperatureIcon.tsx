import React, { FC, memo } from 'react';
import HydraulicOilTemperatureSvg from '../svg/hydraulic-oil-temperature.svg';

export interface IHydraulicOilTemperatureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HydraulicOilTemperatureIcon: FC<IHydraulicOilTemperatureIconProps> = memo(props => {
  return <HydraulicOilTemperatureSvg {...props} />;
});
