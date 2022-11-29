import React, { FC, memo } from 'react';
import TemperatureKelvinSvg from '../svg/temperature-kelvin.svg';

export interface ITemperatureKelvinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TemperatureKelvinIcon: FC<ITemperatureKelvinIconProps> = memo(props => {
  return <TemperatureKelvinSvg {...props} />;
});
