import React, { FC, memo } from 'react';
import SatelliteVariantSvg from '../svg/satellite-variant.svg';

export interface ISatelliteVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SatelliteVariantIcon: FC<ISatelliteVariantIconProps> = memo(props => {
  return <SatelliteVariantSvg {...props} />;
});
