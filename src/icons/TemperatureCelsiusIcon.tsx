import React, { FC, memo } from 'react';
import TemperatureCelsiusSvg from '../svg/temperature-celsius.svg';

export interface ITemperatureCelsiusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TemperatureCelsiusIcon: FC<ITemperatureCelsiusIconProps> = memo(props => {
  return <TemperatureCelsiusSvg {...props} />;
});
