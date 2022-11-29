import React, { FC, memo } from 'react';
import OilTemperatureSvg from '../svg/oil-temperature.svg';

export interface IOilTemperatureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OilTemperatureIcon: FC<IOilTemperatureIconProps> = memo(props => {
  return <OilTemperatureSvg {...props} />;
});
