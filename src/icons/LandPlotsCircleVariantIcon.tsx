import React, { FC, memo } from 'react';
import LandPlotsCircleVariantSvg from '../svg/land-plots-circle-variant.svg';

export interface ILandPlotsCircleVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LandPlotsCircleVariantIcon: FC<ILandPlotsCircleVariantIconProps> = memo(props => {
  return <LandPlotsCircleVariantSvg {...props} />;
});
