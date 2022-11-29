import React, { FC, memo } from 'react';
import ThermometerWaterSvg from '../svg/thermometer-water.svg';

export interface IThermometerWaterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerWaterIcon: FC<IThermometerWaterIconProps> = memo(props => {
  return <ThermometerWaterSvg {...props} />;
});
