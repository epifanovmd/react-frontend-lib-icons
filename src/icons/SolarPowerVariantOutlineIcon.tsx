import React, { FC, memo } from 'react';
import SolarPowerVariantOutlineSvg from '../svg/solar-power-variant-outline.svg';

export interface ISolarPowerVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SolarPowerVariantOutlineIcon: FC<ISolarPowerVariantOutlineIconProps> = memo(props => {
  return <SolarPowerVariantOutlineSvg {...props} />;
});
