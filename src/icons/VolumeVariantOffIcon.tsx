import React, { FC, memo } from 'react';
import VolumeVariantOffSvg from '../svg/volume-variant-off.svg';

export interface IVolumeVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolumeVariantOffIcon: FC<IVolumeVariantOffIconProps> = memo(props => {
  return <VolumeVariantOffSvg {...props} />;
});
