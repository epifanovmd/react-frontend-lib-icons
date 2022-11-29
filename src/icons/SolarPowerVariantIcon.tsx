import React, { FC, memo } from 'react';
import SolarPowerVariantSvg from '../svg/solar-power-variant.svg';

export interface ISolarPowerVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SolarPowerVariantIcon: FC<ISolarPowerVariantIconProps> = memo(props => {
  return <SolarPowerVariantSvg {...props} />;
});
