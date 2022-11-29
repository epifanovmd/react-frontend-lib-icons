import React, { FC, memo } from 'react';
import TemperatureFahrenheitSvg from '../svg/temperature-fahrenheit.svg';

export interface ITemperatureFahrenheitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TemperatureFahrenheitIcon: FC<ITemperatureFahrenheitIconProps> = memo(props => {
  return <TemperatureFahrenheitSvg {...props} />;
});
